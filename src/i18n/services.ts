/**
 * Helpers for the individual service pages under /services/.
 *
 * These pages differ from the rest of the site in one important way: they do not
 * exist in every language. Their copy is the clinic's own clinical prose from
 * the old WordPress site, which was written in Croatian and English only. Rather
 * than machine-translate several thousand words of dental terminology into
 * German and Italian, the missing locales are simply absent, and this module is
 * what keeps that absence coherent:
 *
 *   - `getServiceDetailPaths()` generates routes only for locales that have the
 *     page, so no empty pages are built.
 *   - `getServiceDetailLocales()` tells the language switcher which languages to
 *     offer, so it cannot link to a page that was never generated.
 *
 * When a translation is added to a locale file, both follow automatically.
 */
import { locales, defaultLocale, type Locale } from "./config";
import { translations } from "./translations";
import { serviceDetailSlugs, type ServiceDetail, type ServiceDetailSlug } from "./types";

/**
 * Look up one service page in one locale.
 *
 * @param slug - Page slug, e.g. `implantologija`.
 * @param locale - Target locale.
 * @returns The page, or `undefined` when that locale has no translation of it.
 */
export function getServiceDetail(
  slug: ServiceDetailSlug,
  locale: Locale,
): ServiceDetail | undefined {
  return translations[locale].serviceDetails[slug];
}

/**
 * Every service page available in a locale, in the canonical slug order.
 *
 * @param locale - Target locale.
 * @returns The pages that locale actually has, which may be none.
 */
export function getServiceDetails(locale: Locale): ServiceDetail[] {
  return serviceDetailSlugs
    .map((slug) => getServiceDetail(slug, locale))
    .filter((detail): detail is ServiceDetail => detail !== undefined);
}

/**
 * Locales that have a given service page.
 *
 * Used by the language switcher: on a service page it must offer only the
 * languages in which that page exists, otherwise it would link to a 404.
 *
 * @param slug - Page slug.
 * @returns Locales with a translation, in the site's locale order.
 */
export function getServiceDetailLocales(slug: ServiceDetailSlug): Locale[] {
  return locales.filter((locale) => getServiceDetail(slug, locale) !== undefined);
}

/**
 * Static paths for the localized service pages.
 *
 * Emits one entry per (locale, slug) pair that actually has copy. The default
 * locale is excluded because it is served unprefixed by its own route file.
 *
 * @returns Path entries for the `[locale]/services/[service]` route.
 */
export function getPrefixedServiceDetailPaths(): Array<{
  params: { locale: Locale; service: ServiceDetailSlug };
}> {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .flatMap((locale) =>
      getServiceDetails(locale).map((detail) => ({
        params: { locale, service: detail.slug },
      })),
    );
}

/**
 * Static paths for the default-locale service pages, served from the site root.
 *
 * @returns Path entries for the `services/[service]` route.
 */
export function getRootServiceDetailPaths(): Array<{
  params: { service: ServiceDetailSlug };
}> {
  return getServiceDetails(defaultLocale).map((detail) => ({
    params: { service: detail.slug },
  }));
}

/**
 * Check whether a string is one of the known service slugs.
 *
 * @param value - Candidate slug from a route parameter.
 * @returns True when the value is a valid slug.
 */
export function isServiceDetailSlug(value: string): value is ServiceDetailSlug {
  return (serviceDetailSlugs as readonly string[]).includes(value);
}
