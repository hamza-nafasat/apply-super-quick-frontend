// Maps a DB-shape section (from ctx.currentState.detailedForm.sections) to the
// shape expected by FormPreview.jsx (sectionTitle, sectionName, fields, etc.)
export const toPreviewSection = (s, overrides = {}) => ({
  sectionTitle: s.key || (s.isSignature ? "agreement_blk" : ""),
  sectionName: s.name || s.title || "",
  isHidden: s.isHidden || false,
  isBlock: s.isBlock || false,
  isSignature: s.isSignature || false,
  displayText: s.displayText || "",
  signDisplayText: s.signDisplayText || "",
  fields: (s.fields || []).map((f) => ({
    label: f.label || "",
    type: f.type || "text",
    required: f.required || false,
    placeholder: f.placeholder || "",
    options: f.options || [],
    displayText: f.displayText || "",
    isDisplayText: f.isDisplayText || false,
  })),
  ...overrides,
});

// ── Real-stepper preview ──────────────────────────────────────────────────────
// The chat preview must match what an applicant actually sees, so it includes the
// screens that live outside the section list (SingleApplication.jsx) and the fields
// the step components hard-code on top of a section's own fields.

const f = (label, type = "text", required = true, extra = {}) => ({ label, type, required, ...extra });

// Screens the applicant completes before the stepper, in order.
const PRE_STEPPER_SECTIONS = [
  { sectionTitle: "otp_blk", sectionName: "Email Verification", fields: [] },
  { sectionTitle: "company_scraping_blk", sectionName: "Company Lookup", fields: [] },
  { sectionTitle: "id_mission_blk", sectionName: "Identity Verification", fields: [] },
  {
    sectionTitle: "id_mission_details_blk",
    sectionName: "Identity Verification — Personal Details",
    // Mirrors the ID Mission details screen in SingleApplication.jsx.
    fields: [
      f("Name"), f("Email Address", "text"), f("Date of Birth", "date"), f("ID Type"),
      f("ID Issuer"), f("ID Expiry Date", "date"), f("Issue Date", "date"), f("ID Number"),
      f("Street Address"), f("Address 2 (Apt, Suite, Unit)", "text", false), f("City"),
      f("Zip or Postal Code"), f("State/Province"), f("Country"), f("Company Title"), f("Phone Number"),
    ],
  },
];

// CompanyOwners.jsx adds these above the section's own fields.
const BENEFICIAL_STATIC_FIELDS = [
  f("What is your Social Security, Tax, or National ID Number?"),
  f("Are you a company owner holding 25% or more of the company?", "radio", true, {
    options: [{ label: "Yes" }, { label: "No" }],
  }),
  f("What is you percentage of ownership?", "range"),
];

// Each row of the additional-owners block.
const ADDITIONAL_OWNER_FIELDS = [
  f("Owner or primary operator name"), f("Email Address"), f("Phone Number", "text", false),
  f("Role", "radio", true, {
    options: [{ label: "Primary Operator" }, { label: "Beneficial Owner" }, { label: "Both" }],
  }),
  f("Do you have full information for this person?", "radio", true, {
    options: [{ label: "No" }, { label: "Yes" }],
  }),
  f("Job Title", "text", false), f("Social Security, Tax, or National ID Number", "text", false),
  f("Address", "text", false), f("Ownership Percentage", "number", false),
  f("Date of Birth", "date", false), f("ID Issuer", "text", false), f("ID Number", "text", false),
];

// The applicant's system steps, in the order they are completed.
const SYSTEM_STEP_ORDER = ["otp_blk", "company_scraping_blk", "id_mission_blk", "id_mission_details_blk"];

// The hidden companion section the CSV parser creates; it holds the real fields of one
// additional-owner row, so the repeating block shows the form's own list, not a guess.
const ADDITIONAL_OWNERS_SECTION_KEY = "additional_owners_information";

const withStepperStatics = (section, ownerRowFields) => {
  if (section.sectionTitle !== "beneficial_blk") return section;
  const fields = [...BENEFICIAL_STATIC_FIELDS, ...(section.fields || [])].map((field) =>
    field.type === "block" ? { ...field, blockFields: ownerRowFields } : field,
  );
  return { ...section, fields };
};

/**
 * Builds the full applicant-eye preview from a real form (ctx.currentState.detailedForm):
 * the system steps in completion order, then every remaining section, hidden ones included.
 */
export const buildFullPreviewSections = (detailedForm) => {
  const raw = detailedForm?.sections || [];
  const sections = raw.map((s) => toPreviewSection(s));

  const ownerRowSection = raw.find((s) => s.key === ADDITIONAL_OWNERS_SECTION_KEY);
  const ownerRowFields = ownerRowSection?.fields?.length
    ? toPreviewSection(ownerRowSection).fields
    : ADDITIONAL_OWNER_FIELDS;

  // A form may define its own otp/lookup/ID sections. Use those when present, but always in
  // system-step order — otherwise a form-defined step lands after the details screen.
  const byTitle = new Map(sections.map((s) => [s.sectionTitle, s]));
  const systemSteps = SYSTEM_STEP_ORDER.map(
    (title) => byTitle.get(title) || PRE_STEPPER_SECTIONS.find((s) => s.sectionTitle === title),
  ).filter(Boolean);

  const rest = sections
    .filter((s) => !SYSTEM_STEP_ORDER.includes(s.sectionTitle))
    .map((s) => withStepperStatics(s, ownerRowFields));

  return [...systemSteps, ...rest];
};
