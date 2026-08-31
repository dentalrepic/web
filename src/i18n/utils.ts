import { defaultLocale, locales, type Locale } from "./config";
import { translations, type Translation } from "./translations";

/**
 * Extract the locale from a URL pathname.
 *
 * @param pathname - Pathname such as `/de/about` or `/about`.
 * @returns The locale encoded in the path, or the default locale when absent.
 */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(segment as Locale) ? (segment as Locale) : defaultLocale;
}

/**
 * Get the translation dictionary for a locale.
 *
 * @param locale - Target locale.
 * @returns The full translation object for that locale.
 */
export function useTranslations(locale: Locale): Translation {
  return translations[locale];
}

/**
 * Build a locale-aware href.
 *
 * The default locale lives at the site root, so it receives no prefix. All other
 * locales are prefixed with their locale code.
 *
 * @param path - Root-relative path such as `/about` or `/services#care`.
 * @param locale - Target locale.
 * @returns The path rewritten for the given locale.
 */
export function localizePath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (locale === defaultLocale) {
    return normalized;
  }

  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

/**
 * Strip the locale prefix from a pathname, yielding the shared route.
 *
 * @param pathname - Pathname such as `/de/about`.
 * @returns The route without a locale prefix, e.g. `/about`.
 */
export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (locales.includes(segments[0] as Locale)) {
    segments.shift();
  }

  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

/**
 * Build the equivalent URL of the current page in every locale.
 *
 * Used by the language switcher and for `hreflang` alternate links.
 *
 * @param pathname - Current pathname.
 * @returns One entry per locale with its localized path.
 */
export function getAlternateLinks(pathname: string): Array<{ locale: Locale; path: string }> {
  const route = stripLocaleFromPath(pathname);
  return locales.map((locale) => ({ locale, path: localizePath(route, locale) }));
}
