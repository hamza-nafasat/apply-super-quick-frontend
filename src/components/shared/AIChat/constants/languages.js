/**
 * The languages offered in the chat's language selector.
 *
 * The user's choice is the single source of truth for the assistant's reply language:
 * it is stored per browser and sent to the backend with every request.
 */

export const DEFAULT_LANGUAGE = { code: "en", name: "English" };

const L = (code, name, native, flag, prompt) => ({ code, name, native, flag, prompt });

export const LANGUAGES = [
  L("en", "English", "English", "🇺🇸", "Choose your preferred language?"),
  L("es", "Spanish", "Español", "🇪🇸", "¿Elige tu idioma preferido?"),
  L("fr", "French", "Français", "🇫🇷", "Choisissez votre langue préférée ?"),
  L("pt", "Portuguese", "Português", "🇧🇷", "Escolha o seu idioma preferido?"),
  L("de", "German", "Deutsch", "🇩🇪", "Wählen Sie Ihre bevorzugte Sprache?"),
  L("it", "Italian", "Italiano", "🇮🇹", "Scegli la tua lingua preferita?"),
  L("nl", "Dutch", "Nederlands", "🇳🇱", "Kies uw voorkeurstaal?"),
  L("pl", "Polish", "Polski", "🇵🇱", "Wybierz preferowany język?"),
  L("ru", "Russian", "Русский", "🇷🇺", "Выберите предпочитаемый язык?"),
  L("uk", "Ukrainian", "Українська", "🇺🇦", "Оберіть бажану мову?"),
  L("tr", "Turkish", "Türkçe", "🇹🇷", "Tercih ettiğiniz dili seçin?"),
  L("ar", "Arabic", "العربية", "🇸🇦", "اختر لغتك المفضلة؟"),
  L("he", "Hebrew", "עברית", "🇮🇱", "בחר את השפה המועדפת עליך?"),
  L("hi", "Hindi", "हिन्दी", "🇮🇳", "अपनी पसंदीदा भाषा चुनें?"),
  L("bn", "Bengali", "বাংলা", "🇧🇩", "আপনার পছন্দের ভাষা বেছে নিন?"),
  L("ur", "Urdu", "اردو", "🇵🇰", "اپنی پسندیدہ زبان منتخب کریں؟"),
  L("zh", "Chinese (Simplified)", "简体中文", "🇨🇳", "选择您的首选语言？"),
  L("zh-TW", "Chinese (Traditional)", "繁體中文", "🇹🇼", "選擇您的偏好語言？"),
  L("ja", "Japanese", "日本語", "🇯🇵", "ご希望の言語を選んでください？"),
  L("ko", "Korean", "한국어", "🇰🇷", "선호하는 언어를 선택하세요?"),
  L("vi", "Vietnamese", "Tiếng Việt", "🇻🇳", "Chọn ngôn ngữ bạn muốn?"),
  L("th", "Thai", "ไทย", "🇹🇭", "เลือกภาษาที่คุณต้องการ?"),
  L("id", "Indonesian", "Bahasa Indonesia", "🇮🇩", "Pilih bahasa pilihan Anda?"),
  L("ms", "Malay", "Bahasa Melayu", "🇲🇾"),
  L("tl", "Filipino", "Filipino", "🇵🇭", "Piliin ang iyong gustong wika?"),
  L("ht", "Haitian Creole", "Kreyòl Ayisyen", "🇭🇹", "Chwazi lang ou pito a?"),
  L("sw", "Swahili", "Kiswahili", "🇰🇪", "Chagua lugha unayopendelea?"),
  L("am", "Amharic", "አማርኛ", "🇪🇹"),
  L("ha", "Hausa", "Hausa", "🇳🇬"),
  L("yo", "Yoruba", "Yorùbá", "🇳🇬"),
  L("ig", "Igbo", "Igbo", "🇳🇬"),
  L("zu", "Zulu", "isiZulu", "🇿🇦"),
  L("af", "Afrikaans", "Afrikaans", "🇿🇦"),
  L("el", "Greek", "Ελληνικά", "🇬🇷", "Επιλέξτε τη γλώσσα που προτιμάτε;"),
  L("ro", "Romanian", "Română", "🇷🇴"),
  L("hu", "Hungarian", "Magyar", "🇭🇺"),
  L("cs", "Czech", "Čeština", "🇨🇿"),
  L("sk", "Slovak", "Slovenčina", "🇸🇰"),
  L("bg", "Bulgarian", "Български", "🇧🇬"),
  L("sr", "Serbian", "Српски", "🇷🇸"),
  L("hr", "Croatian", "Hrvatski", "🇭🇷"),
  L("sl", "Slovenian", "Slovenščina", "🇸🇮"),
  L("sv", "Swedish", "Svenska", "🇸🇪", "Välj ditt föredragna språk?"),
  L("no", "Norwegian", "Norsk", "🇳🇴"),
  L("da", "Danish", "Dansk", "🇩🇰"),
  L("fi", "Finnish", "Suomi", "🇫🇮"),
  L("is", "Icelandic", "Íslenska", "🇮🇸"),
  L("et", "Estonian", "Eesti", "🇪🇪"),
  L("lv", "Latvian", "Latviešu", "🇱🇻"),
  L("lt", "Lithuanian", "Lietuvių", "🇱🇹"),
  L("fa", "Persian", "فارسی", "🇮🇷"),
  L("ps", "Pashto", "پښتو", "🇦🇫"),
  L("ta", "Tamil", "தமிழ்", "🇱🇰"),
  L("te", "Telugu", "తెలుగు", "🇮🇳"),
  L("mr", "Marathi", "मराठी", "🇮🇳"),
  L("gu", "Gujarati", "ગુજરાતી", "🇮🇳"),
  L("pa", "Punjabi", "ਪੰਜਾਬੀ", "🇮🇳"),
  L("kn", "Kannada", "ಕನ್ನಡ", "🇮🇳"),
  L("ml", "Malayalam", "മലയാളം", "🇮🇳"),
  L("si", "Sinhala", "සිංහල", "🇱🇰"),
  L("ne", "Nepali", "नेपाली", "🇳🇵"),
  L("km", "Khmer", "ខ្មែរ", "🇰🇭"),
  L("lo", "Lao", "ລາວ", "🇱🇦"),
  L("my", "Burmese", "မြန်မာ", "🇲🇲"),
  L("mn", "Mongolian", "Монгол", "🇲🇳"),
  L("kk", "Kazakh", "Қазақша", "🇰🇿"),
  L("uz", "Uzbek", "Oʻzbekcha", "🇺🇿"),
  L("az", "Azerbaijani", "Azərbaycan", "🇦🇿"),
  L("ka", "Georgian", "ქართული", "🇬🇪"),
  L("hy", "Armenian", "Հայերեն", "🇦🇲"),
  L("sq", "Albanian", "Shqip", "🇦🇱"),
  L("mk", "Macedonian", "Македонски", "🇲🇰"),
  L("ca", "Catalan", "Català", "🇪🇸"),
  L("eu", "Basque", "Euskara", "🇪🇸"),
  L("gl", "Galician", "Galego", "🇪🇸"),
  L("cy", "Welsh", "Cymraeg", "🏴󠁧󠁢󠁷󠁬󠁳󠁿"),
  L("ga", "Irish", "Gaeilge", "🇮🇪"),
];

/** Languages whose prompt label is translated — used by the rotating selector label. */
export const PROMPT_LANGUAGES = LANGUAGES.filter((l) => l.prompt);

export const findLanguage = (code) => LANGUAGES.find((l) => l.code === code) || null;

const STORAGE_KEY = "aiChatLanguage";

/** The language the user last chose in this browser, or English. */
export const readStoredLanguage = () => {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    const known = stored?.code ? findLanguage(stored.code) : null;
    return known ? { code: known.code, name: known.name } : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE; // private mode / blocked storage
  }
};

export const storeLanguage = (language) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ code: language.code, name: language.name }));
  } catch {
    /* storage unavailable — the choice still applies for this page */
  }
};
