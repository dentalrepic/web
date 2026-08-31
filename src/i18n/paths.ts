import { locales, defaultLocale, type Locale } from "./config";

/**
 * Static paths for the locale-prefixed routes.
 *
 * The default locale is excluded because it is served from the site root by the
 * unprefixed route files.
 *
 * @returns One path entry per non-default locale.
 */
export function getLocalePaths(): Array<{ params: { locale: Locale } }> {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ params: { locale } }));
}
