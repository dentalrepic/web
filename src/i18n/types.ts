/**
 * Shape of a complete translation dictionary.
 *
 * Every locale file must satisfy this interface, so a missing string becomes a
 * compile-time error rather than a silent fallback at runtime.
 */

export interface NavLink {
  label: string;
  href: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  /** Answer body as trusted HTML authored in this repository. */
  answer: string;
}

export interface ServiceSummary {
  title: string;
  summary: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ServiceGroup {
  title: string;
  items: string[];
}

/**
 * Slugs of the individual service detail pages, in the order they appear on the
 * services index.
 */
export const serviceDetailSlugs = [
  "implantologija",
  "ortodoncija",
  "protetika",
  "estetska-dentalna-medicina",
  "endodoncija",
  "parodontologija",
] as const;

export type ServiceDetailSlug = (typeof serviceDetailSlugs)[number];

/** A heading followed by its body paragraphs, the unit these pages are built from. */
export interface ServiceSection {
  heading?: string;
  /** Paragraphs of plain text. Rendered one <p> each. */
  paragraphs?: string[];
  /** Optional bulleted list rendered after the paragraphs. */
  bullets?: string[];
}

/**
 * One service detail page.
 *
 * The copy comes from the clinic's own pages on the old WordPress site, so it
 * only exists in the languages the clinic actually wrote. `serviceDetails` is
 * therefore a partial record: a locale that has no translation simply omits the
 * slug, and the route for that locale is not generated. See
 * `getServiceDetail()` and `getServiceDetailLocales()` in i18n/services.ts.
 */
export interface ServiceDetail {
  /** Path segment under /services/. Shared across locales so URLs stay stable. */
  slug: ServiceDetailSlug;
  meta: { title: string; description: string };
  /** Small label above the page title, e.g. "ŠTO SU ZUBNI IMPLANTATI". */
  eyebrow: string;
  title: string;
  /** One-sentence summary, used as the hero lead and on the services index. */
  lead: string;
  sections: ServiceSection[];
  faqs?: FaqItem[];
}

export interface TeamMember {
  name: string;
  /** Professional title and specialisation. */
  role: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Translation {
  brand: {
    name: string;
    tagline: string;
    logoAlt: string;
  };

  nav: {
    links: NavLink[];
    cta: { label: string; href: string };
    languageLabel: string;
    menuLabel: string;
  };

  footer: {
    description: string;
    servicesHeading: string;
    rightsReserved: string;
  };

  common: {
    learnMore: string;
    readMore: string;
    readLess: string;
    callUsToday: string;
    bookAppointment: string;
  };

  home: {
    meta: { title: string; description: string };
    hero: {
      title: string;
      subtitleLine1: string;
      subtitleLine2: string;
      ctaPrimary: string;
      ctaSecondary: string;
      imageAlt: string;
    };
    welcome: {
      eyebrow: string;
      heading: string;
      intro: string;
      highlights: FeatureItem[];
      link: string;
      imageAlt: string;
    };
    servicesIntro: {
      eyebrow: string;
      heading: string;
      description: string;
      services: ServiceSummary[];
    };
    whyUs: {
      heading: string;
      subheading: string;
      /** Short reasons to choose the clinic, rendered as a badge grid. */
      reasons: string[];
      imageAlt: string;
    };
    problems: {
      heading: string;
      items: FeatureItem[];
    };
    faq: {
      eyebrow: string;
      heading: string;
      viewAll: string;
    };
    cta: {
      heading: string;
      text: string;
      button: string;
    };
  };

  about: {
    meta: { title: string; description: string };
    hero: { title: string; description: string };
    team: { heading: string; subheading: string; members: TeamMember[] };
    approach: { heading: string; paragraphs: string[]; imageAlt: string };
    testimonials: { heading: string; items: Testimonial[] };
    cta: {
      heading: string;
      subheading: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };

  services: {
    meta: { title: string; description: string };
    hero: { title: string; description: string };
    intro: { heading: string; paragraph: string };
    /** Full treatment catalogue, grouped by area. */
    groups: ServiceGroup[];
    /** Heading above the list of individual treatment pages. */
    detailsHeading: string;
    equipment: {
      heading: string;
      paragraph: string;
      features: FeatureItem[];
      imageAlt: string;
    };
    cta: {
      heading: string;
      subheading: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };

  tourism: {
    meta: { title: string; description: string };
    hero: { title: string; description: string };
    intro: { heading: string; paragraphs: string[] };
    benefits: { heading: string; items: FeatureItem[] };
    howItWorks: { heading: string; steps: FeatureItem[] };
    cta: {
      heading: string;
      subheading: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };

  contact: {
    meta: { title: string; description: string };
    hero: { title: string; description: string };
    intro: string;
    addressHeading: string;
    contactHeading: string;
    phoneLabel: string;
    emailLabel: string;
    /** Notice pointing urgent cases to the phone rather than the form. */
    urgentNotice: string;
    form: {
      heading: string;
      description: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      reasonLabel: string;
      reasonOptions: string[];
      preferredTimeLabel: string;
      preferredTimeOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      /** Shown on the button while the request is in flight. */
      submitting: string;
      /** Confirmation once the enquiry has been delivered. */
      successMessage: string;
      /** Shown when the request fails, pointing the patient at the phone. */
      errorMessage: string;
      /** Shown when the patient submits without completing the human check. */
      captchaMessage: string;
    };
    mapTitle: string;
  };

  info: {
    meta: { title: string; description: string };
    hero: { title: string; description: string };
    heading: string;
    cta: { heading: string; subheading: string; primaryButton: string };
  };

  notFound: {
    meta: { title: string; description: string };
    heading: string;
    description: string;
    backHome: string;
    contactUs: string;
    lookingForLabel: string;
  };

  faqs: FaqItem[];

  /**
   * Individual service pages, keyed by slug.
   *
   * Deliberately partial: see the note on `ServiceDetail`. Croatian and English
   * are complete because the clinic wrote both; German and Italian are absent
   * until a native speaker supplies them, rather than being machine-translated.
   */
  serviceDetails: Partial<Record<ServiceDetailSlug, ServiceDetail>>;

  /** Chrome shared by every service detail page. */
  serviceDetailChrome: {
    /** Label of the link back to the services index. */
    backToServices: string;
    /** Heading above the FAQ accordion on pages that have one. */
    faqHeading: string;
    /** Heading of the "other treatments" list at the foot of the page. */
    relatedHeading: string;
    cta: { heading: string; subheading: string; primaryButton: string };
    /** Shown on the services index for pages not yet available in this language. */
    availableInLabel: string;
  };
}
