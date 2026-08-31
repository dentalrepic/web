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

export interface TeamMember {
  name: string;
  /** Professional title and specialisation. */
  role: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface OpeningHoursRow {
  day: string;
  hours: string;
}

export interface GalleryImage {
  /** Filename in src/assets/clinic, without the directory. */
  file: string;
  /** Alt text describing what the photo shows. */
  alt: string;
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
    hoursHeading: string;
    rightsReserved: string;
  };

  common: {
    learnMore: string;
    readMore: string;
    readLess: string;
    callUsToday: string;
    bookAppointment: string;
    openingHours: string;
    /** One row per day, including any closed days. */
    openingHoursRows: OpeningHoursRow[];
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
    gallery: {
      heading: string;
      subheading: string;
      images: GalleryImage[];
    };
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
      demoNote: string;
      statusMessage: string;
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
}
