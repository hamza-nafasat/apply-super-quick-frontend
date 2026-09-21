import { SERVER_URL } from "../constants/aiChatConstants.js";

/**
 * Translates the widget's own text (greetings, errors, acknowledgements) into the
 * language chosen in the selector.
 *
 * The chat replies are translated by the model itself; these strings are written by the
 * widget, so they need translating here or they stay English while everything else follows
 * the selector. Results are cached per language in localStorage: a language is paid for
 * once per browser, not once per message.
 */

const CACHE_PREFIX = "aiChatUiStrings:";
const MAX_BATCH = 30;

const readCache = (code) => {
  try {
    return JSON.parse(window.localStorage.getItem(CACHE_PREFIX + code) || "{}");
  } catch {
    return {};
  }
};

const writeCache = (code, map) => {
  try {
    window.localStorage.setItem(CACHE_PREFIX + code, JSON.stringify(map));
  } catch {
    /* storage unavailable — translations still apply for this page */
  }
};

/**
 * Translates `texts` into `language`, returning a { source → translation } map.
 * Anything already cached is reused; only the rest is requested. English is a no-op.
 */
export const translateUiTexts = async (texts, language) => {
  const code = language?.code;
  if (!code || code === "en") return {};

  const wanted = [...new Set(texts.filter((t) => typeof t === "string" && t.trim()))];
  const cached = readCache(code);
  const missing = wanted.filter((t) => !cached[t]).slice(0, MAX_BATCH);
  if (!missing.length) return cached;

  try {
    const res = await fetch(`${SERVER_URL}/api/ai/translate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts: missing, targetLang: code, targetLangName: language.name }),
    });
    const data = await res.json();
    if (!data.success || !Array.isArray(data.translations)) return cached;
    const merged = { ...cached };
    missing.forEach((src, i) => {
      const out = data.translations[i];
      if (typeof out === "string" && out.trim()) merged[src] = out;
    });
    writeCache(code, merged);
    return merged;
  } catch {
    return cached; // offline or endpoint down — the English text still shows
  }
};

/** Convenience for a single string; returns the original when translation is unavailable. */
export const translateUiText = async (text, language) => {
  const map = await translateUiTexts([text], language);
  return map[text] || text;
};
