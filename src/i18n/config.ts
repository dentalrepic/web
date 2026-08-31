/**
 * Locale configuration for the multilingual site.
 *
 * The default locale is served from the site root (`/`), every other locale is
 * served from a prefixed path (`/en/`, `/de/`, `/it/`).
 */

export const locales = ["hr", "en", "de", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "hr";

/** Native language name, used in the language switcher. */
export const localeNames: Record<Locale, string> = {
  hr: "Hrvatski",
  en: "English",
  de: "Deutsch",
  it: "Italiano",
};

/** Short label for compact UI (e.g. the switcher trigger). */
export const localeShortNames: Record<Locale, string> = {
  hr: "HR",
  en: "EN",
  de: "DE",
  it: "IT",
};

/** Value for the `lang` attribute and `hreflang` annotations. */
export const localeHtmlLang: Record<Locale, string> = {
  hr: "hr-HR",
  en: "en-US",
  de: "de-DE",
  it: "it-IT",
};
