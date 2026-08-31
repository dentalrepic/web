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

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export interface LeadershipPerson {
  name: string;
  role: string;
  /** Biography split into paragraphs. */
  paragraphs: string[];
}

export interface Translation {
  brand: {
    name: string;
    tagline: string;
  };

  nav: {
    links: NavLink[];
    cta: { label: string; href: string };
    languageLabel: string;
    menuLabel: string;
  };

  footer: {
    description: string;
  };

  common: {
    learnMore: string;
    readMore: string;
    readLess: string;
    workingHours: {
      heading: string;
      weekdays: string;
      saturday: string;
      sunday: string;
    };
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
    about: {
      eyebrow: string;
      heading: string;
      intro: string;
      bullets: string[];
      link: string;
      imageAlt: string;
    };
    servicesIntro: {
      eyebrow: string;
      heading: string;
      services: ServiceSummary[];
    };
    stats: {
      heading: string;
      subheading: string;
      monthlyVisitsLabel: string;
      professionalsLabel: string;
      paragraph1Lead: string;
      paragraph1: string;
      paragraph2: string;
      link: string;
      imageAlt: string;
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
    leadership: { heading: string; subheading: string };
    people: LeadershipPerson[];
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
    mission: { heading: string; paragraph1: string; paragraph2: string };
    specialized: { heading: string; description: string; cards: string[] };
    approach: {
      heading: string;
      paragraph: string;
      listHeading: string;
      items: string[];
      imageAlt: string;
    };
    staff: {
      heading: string;
      paragraph1: string;
      features: FeatureItem[];
      paragraph2: string;
      imageAlt: string;
    };
    capabilities: {
      heading: string;
      description: string;
      groups: CapabilityGroup[];
    };
    research: { heading: string; text: string };
    cta: {
      heading: string;
      subheading: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };

  careers: {
    meta: { title: string; description: string };
    hero: { title: string; description: string };
    education: {
      heading: string;
      paragraph1: string;
      paragraph2: string;
      imageAlt: string;
    };
    requirements: { heading: string; items: string[] };
    whyWorkWithUs: { heading: string; items: string[] };
    application: {
      heading: string;
      paragraph: string;
      links: string[];
    };
    training: {
      heading: string;
      paragraph1: string;
      paragraph2: string;
      resources: {
        heading: string;
        paragraphBefore: string;
        requestLink: string;
        paragraphAfter: string;
        items: string[];
      };
      harassment: {
        heading: string;
        paragraph: string;
        links: string[];
        submitFormsLabel: string;
        submitFormsLink: string;
        questionsLabel: string;
        questionsLink: string;
      };
    };
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
    form: {
      heading: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
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
