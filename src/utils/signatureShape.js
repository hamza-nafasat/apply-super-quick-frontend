/**
 * Normalize signature data to the canonical nested shape used across stepper steps:
 *   { name: "signature", value: { publicId, secureUrl, resourceType } }
 * Accepts flat { publicId, secureUrl, resourceType } or already-nested forms.
 */
export function normalizeSignature(raw) {
  if (!raw || typeof raw !== "object") {
    return { name: "signature", value: { publicId: "", secureUrl: "", resourceType: "" } };
  }
  const value = raw.value && typeof raw.value === "object" && (raw.value.publicId || raw.value.secureUrl)
    ? raw.value
    : raw;
  return {
    name: "signature",
    value: {
      publicId: value?.publicId || "",
      secureUrl: value?.secureUrl || "",
      resourceType: value?.resourceType || "",
    },
  };
}

/** True when a signature has both publicId and secureUrl. */
export function isSignatureComplete(raw) {
  const { value } = normalizeSignature(raw);
  return !!(value.publicId && value.secureUrl);
}

/** Cloudinary URL for display / PDF. */
export function getSignatureUrl(raw) {
  return normalizeSignature(raw).value.secureUrl || "";
}

/**
 * Normalize a draft field to { name, value }.
 * Handles flat Cloudinary objects left by older saves.
 */
export function normalizeFieldEntry(raw, fieldName = "") {
  if (raw == null || raw === "") return { name: fieldName, value: "" };
  if (typeof raw === "object" && "value" in raw) {
    return { name: raw.name || fieldName, value: raw.value ?? "" };
  }
  if (typeof raw === "object" && (raw.secureUrl || raw.publicId)) {
    return { name: fieldName, value: raw };
  }
  return { name: fieldName, value: raw };
}

/**
 * Who signed a section, from data every section save already stores (`updatedBy`,
 * `updatedAt`) — saving a signature is a section save, so no extra fields are needed.
 * Returns { name, email, at } or null when the section has no signer recorded.
 */
export function getSignedBy(sectionData) {
  const by = sectionData?.updatedBy;
  const name = String(by?.name || "").replace(/\bundefined\b/g, "").trim();
  const email = String(by?.email || "").trim();
  if (!name && !email) return null;
  return { name, email, at: sectionData?.updatedAt || null };
}

/** "Signed by Jane Doe (jane@x.com) on 22 Sept 2026, 14:05" — one line for every presentation. */
export function formatSignedBy(signedBy) {
  if (!signedBy) return "";
  const who = [signedBy.name, signedBy.email ? `(${signedBy.email})` : ""].filter(Boolean).join(" ");
  const when = signedBy.at
    ? new Date(signedBy.at).toLocaleString(undefined, {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
      })
    : "";
  return `Signed by ${who}${when ? ` on ${when}` : ""}`;
}

/**
 * ID Mission signer. The page is signed by the person whose identity was verified, so when
 * a section has no saved signer — applications saved before the signer was stored — fall
 * back to that verified name/email, with the section's own saved date if it has one.
 */
export function getIdMissionSignedBy(idMission) {
  const saved = getSignedBy(idMission);
  if (saved) return saved;
  const name = String(idMission?.name?.value || "").trim();
  const email = String(idMission?.email?.value || "").trim();
  if (!name && !email) return null;
  return { name, email, at: idMission?.updatedAt || idMission?.createdAt || null };
}
