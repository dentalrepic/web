import type { Locale } from "./config";
import type { Translation } from "./types";
import { hr } from "./locales/hr";
import { en } from "./locales/en";
import { de } from "./locales/de";
import { it } from "./locales/it";

/** Translation dictionaries keyed by locale. */
export const translations: Record<Locale, Translation> = { hr, en, de, it };

export type { Translation } from "./types";
export type {
  NavLink,
  FaqItem,
  ServiceSummary,
  FeatureItem,
  ServiceGroup,
  TeamMember,
  Testimonial,
  OpeningHoursRow,
} from "./types";
