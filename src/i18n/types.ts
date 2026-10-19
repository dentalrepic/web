/**
 * Shape of a complete translation dictionary.
 *
 * Every locale file must satisfy this interface, so a missing string becomes a
 * compile-time error rather than a silent fallback at runtime.
 */

export interface NavLink {
  label: string;
  href: string;
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
  "oralna-kirurgija",
  "rtg-dijagnostika",
  "djecja-dentalna-medicina",
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

/** Copy for a full-width photo hero: a small label above a large title. */
export interface PhotoHeroCopy {
  eyebrow: string;
  title: string;
}

/** A centred introduction: small label, heading and one paragraph. */
export interface IntroCopy {
  eyebrow: string;
  heading: string;
  paragraph: string;
}

export interface ServiceCardCopy {
  title: string;
  /** One or two sentences; the card shows the first two lines. */
  summary: string;
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
    hoursHeading: string;
    /** Shown against a day the clinic is closed. */
    closed: string;
    contactHeading: string;
  };

  common: {
    learnMore: string;
    readMore: string;
    readLess: string;
    callUsToday: string;
    bookAppointment: string;
    /** The brown booking band above the footer on the home and services pages. */
    booking: { eyebrow: string; heading: string; text: string };
  };

  home: {
    meta: { title: string; description: string };
    hero: PhotoHeroCopy & {
      lead: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    services: IntroCopy & {
      /** Four headline treatments, in the order of their pictograms. */
      items: ServiceSummary[];
      cta: string;
    };
    /** The two specialists are listed from about.team, so they are not repeated here. */
    team: {
      eyebrow: string;
      heading: string;
      paragraphs: string[];
      cta: string;
      imageAlt: string;
    };
    visit: IntroCopy;
    space: {
      eyebrow: string;
      heading: string;
      paragraph: string;
      /** Accessible name of the photo carousel. */
      galleryLabel: string;
      /** Accessible names of the carousel's arrow buttons. */
      previousLabel: string;
      nextLabel: string;
      /** One per gallery photo, in order. */
      photoAlts: string[];
      /** Title of the Vimeo player, for screen readers. */
      videoTitle: string;
      /** Accessible name of the poster's play button. */
      playLabel: string;
    };
  };

  about: {
    meta: { title: string; description: string };
    hero: PhotoHeroCopy;
    intro: IntroCopy;
    /** Staff, in the same order as the portraits on the page. */
    team: TeamMember[];
  };

  services: {
    meta: { title: string; description: string };
    hero: PhotoHeroCopy;
    intro: IntroCopy;
    /** Service cards, in the same order as their images on the page. */
    cards: ServiceCardCopy[];
    /** Full treatment catalogue, grouped by area. */
    groups: ServiceGroup[];
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
    hero: PhotoHeroCopy;
    intro: IntroCopy;
    addressHeading: string;
    contactHeading: string;
    /** Heading over the phone number for urgent cases. */
    emergencyHeading: string;
    phoneLabel: string;
    emailLabel: string;
    form: {
      heading: string;
      /** Lines of the paragraph under the heading. */
      description: string[];
      nameLabel: string;
      emailLabel: string;
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
    /** Shown on the services index for pages not yet available in this language. */
    availableInLabel: string;
  };
}
