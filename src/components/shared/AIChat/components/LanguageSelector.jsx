import { useEffect, useMemo, useRef, useState } from "react";
import Select from "react-select";
import { LANGUAGES, PROMPT_LANGUAGES } from "../constants/languages.js";

const ROTATE_MS = 3000;
const FADE_MS = 320;

/**
 * The chat's language bar: a rotating "choose your language" label on the left and a
 * searchable, flag-labelled language picker on the right. The chosen language is the
 * single source of truth for the assistant's reply language.
 */
export default function LanguageSelector({ language, onLanguageChange, backgroundColor, textColor }) {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const fadeTimerRef = useRef(null);

  // Cycle the prompt through the translated labels so applicants see their own language.
  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      fadeTimerRef.current = setTimeout(() => {
        setIdx((i) => (i + 1) % PROMPT_LANGUAGES.length);
        setFading(false);
      }, FADE_MS);
    }, ROTATE_MS);
    return () => {
      clearInterval(id);
      clearTimeout(fadeTimerRef.current);
    };
  }, []);

  const options = useMemo(
    () => LANGUAGES.map((l) => ({ value: l.code, label: `${l.native} — ${l.name}`, flag: l.flag, name: l.name })),
    [],
  );
  const selected = options.find((o) => o.value === language?.code) || options[0];

  const styles = useMemo(
    () => ({
      control: (base, state) => ({
        ...base,
        minHeight: 30,
        backgroundColor: "#fff",
        borderColor: state.isFocused ? "#6366f1" : "#d1d5db",
        boxShadow: "none",
        fontSize: 12,
        ":hover": { borderColor: "#6366f1" },
      }),
      valueContainer: (base) => ({ ...base, padding: "0 6px" }),
      dropdownIndicator: (base) => ({ ...base, padding: 4 }),
      indicatorSeparator: () => ({ display: "none" }),
      menu: (base) => ({ ...base, fontSize: 12, zIndex: 400 }),
      // The chat panel clips its children, so the menu is portalled to the body.
      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
      option: (base, state) => ({
        ...base,
        padding: "6px 8px",
        backgroundColor: state.isSelected ? "#e0e7ff" : state.isFocused ? "#f1f5f9" : "#fff",
        color: "#111827",
      }),
    }),
    [],
  );

  return (
    <div
      className="flex shrink-0 flex-wrap items-center gap-2 border-b px-3 py-2"
      style={{ backgroundColor, borderColor: "rgba(0,0,0,0.1)" }}
    >
      <span
        className="min-w-0 flex-1 truncate text-sm font-semibold"
        style={{ color: textColor, opacity: fading ? 0 : 1, transition: `opacity ${FADE_MS}ms ease` }}
        title={PROMPT_LANGUAGES[idx].prompt}
      >
        {PROMPT_LANGUAGES[idx].prompt}
      </span>
      <div className="w-44 shrink-0" data-testid="ai-language-select">
        <Select
          inputId="ai-language-select-input"
          aria-label="Preferred language"
          options={options}
          value={selected}
          onChange={(opt) => opt && onLanguageChange({ code: opt.value, name: opt.name })}
          isSearchable
          placeholder="Search language…"
          menuPortalTarget={typeof document !== "undefined" ? document.body : null}
          menuPlacement="auto"
          styles={styles}
          formatOptionLabel={(opt) => (
            <span className="flex items-center gap-2">
              <span aria-hidden="true">{opt.flag}</span>
              <span className="truncate">{opt.label}</span>
            </span>
          )}
        />
      </div>
    </div>
  );
}
