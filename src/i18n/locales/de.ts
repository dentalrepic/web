import type { Translation } from "../types";

/**
 * German translations.
 *
 * Translated from the clinic's Croatian and English copy on dentalrepic.com.hr.
 */
export const de: Translation = {
  brand: {
    name: "Dental Centar Repić",
    tagline: "Wir sorgen für Ihr perfektes Lächeln",
    logoAlt: "Dental Centar Repić",
  },

  nav: {
    links: [
      { label: "Startseite", href: "/" },
      { label: "Über uns", href: "/about" },
      { label: "Leistungen", href: "/services" },
      { label: "Kontakt", href: "/contact" },
    ],
    cta: { label: "Termin buchen", href: "/contact#form" },
    languageLabel: "Sprache",
    menuLabel: "Menü öffnen",
  },

  footer: {
    description:
      "Die Erhaltung der Mundgesundheit, der Funktion und der Ästhetik ist die Grundlage unserer Arbeit mit Patienten. Jeden Patienten behandeln wir individuell, wir verfolgen den technologischen Fortschritt und bemühen uns jederzeit, unseren Patienten die bestmögliche Versorgung zu bieten. Wir investieren fortlaufend in neue Geräte sowie in die fachliche Weiterbildung unseres Teams.",
    hoursHeading: "Öffnungszeiten",
    closed: "Geschlossen",
    contactHeading: "Kontakt",
    designCredit: "Design",
  },

  common: {
    learnMore: "Mehr erfahren",
    readMore: "Mehr lesen",
    readLess: "Weniger anzeigen",
    callUsToday: "Rufen Sie uns noch heute an!",
    bookAppointment: "Termin buchen",
    booking: {
      eyebrow: "Kontaktieren Sie uns",
      heading: "Buchen Sie Ihren Termin. Die erste Untersuchung ist kostenlos.",
      text: "Füllen Sie das Formular aus oder rufen Sie uns an — wir melden uns innerhalb unserer Öffnungszeiten.",
    },
  },

  home: {
    meta: {
      title: "Dental Centar Repić | Zahnklinik in Trogir, Kroatien",
      description:
        "Dental Centar Repić in Trogir: Implantologie, Kieferorthopädie, Endodontie, Prothetik und ästhetische Zahnmedizin. Erste Untersuchung kostenlos. Tel. +385 21 796 241.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "Moderner Ansatz. Gesundes Lächeln.",
      lead: "Umfassende zahnmedizinische Versorgung mit einem erfahrenen Team, moderner Technologie und einem individuellen Ansatz für jeden Patienten.",
      ctaPrimary: "Termin buchen",
      ctaSecondary: "Unsere Leistungen",
    },
    services: {
      eyebrow: "Fachwissen und Professionalität",
      heading: "Komplette zahnmedizinische Versorgung",
      paragraph:
        "Wir verbinden das Wissen unserer Fachärzte, moderne Technologie und hochwertige Materialien zu einer umfassenden, auf Ihre Bedürfnisse abgestimmten Versorgung.",
      // Paired in order with the pictograms in HomePage.astro.
      items: [
        { title: "Allgemeine Zahnmedizin", summary: "Vorsorge und Zahnpflege" },
        { title: "Implantologie", summary: "Ersatz verlorener Zähne" },
        { title: "Ästhetische Zahnmedizin", summary: "Ein natürlich schönes Lächeln" },
        { title: "Kieferorthopädie", summary: "Richtig ausgerichtete Zähne" },
      ],
      cta: "Alle unsere Leistungen ansehen",
    },
    team: {
      eyebrow: "Unser Team",
      heading: "Die Menschen hinter Ihrer Behandlung",
      paragraphs: [
        "Wissen, Erfahrung und Zusammenarbeit im Dienste Ihrer Gesundheit.",
        "Unser Team vereint Fachleute aus verschiedenen Bereichen der Zahnmedizin, die einfache wie komplexe zahnmedizinische Probleme mit Wissen und Erfahrung angehen.",
      ],
      cta: "Lernen Sie unser Team kennen",
      imageAlt: "Dr. Slavica Pejda Repić und Dr. Dario Repić",
    },
    visit: {
      eyebrow: "Ihr Besuch",
      heading: "Ihr Wohlbefinden ist uns wichtig",
      paragraph:
        "Vom ersten Besuch bis zum Abschluss der Behandlung möchten wir, dass Sie sich entspannt, gut informiert und sicher fühlen.",
    },
    space: {
      eyebrow: "Unsere Praxis",
      heading: "Modern ausgestattete Praxis",
      paragraph:
        "Wir investieren in Ausstattung, Technologie und hochwertige Materialien, um die Voraussetzungen für fachkundige Arbeit und eine hochwertige zahnmedizinische Versorgung zu schaffen. Dabei ist uns wichtig, dass Sie sich während Ihres Besuchs wohl und sicher fühlen.",
      galleryLabel: "Fotos der Praxis",
      previousLabel: "Vorheriges Foto",
      nextLabel: "Nächstes Foto",
      // Paired in order with the gallery photos in HomePage.astro.
      photoAlts: [
        "Empfang und Wartebereich",
        "Sitzecke im Wartezimmer",
        "Kinderecke im Wartezimmer",
        "Behandlungsraum mit Meerblick",
        "Behandlungsstuhl in einem Behandlungsraum",
        "Behandlungsraum mit runden Spiegeln",
        "Die Behandlungsräume von außen",
      ],
      videoTitle: "Video: Dental Centar Repić",
      playLabel: "Video über Dental Centar Repić abspielen",
    },
  },

  about: {
    meta: {
      title: "Über uns - Unser Team | Dental Centar Repić",
      description:
        "Lernen Sie das Team von Dental Centar Repić in Trogir kennen: Fachärzte für Kieferorthopädie, Endodontie und restaurative Zahnmedizin mit Doktortiteln.",
    },
    hero: {
      eyebrow: "Fachwissen, das uns verbindet",
      title: "Menschen, denen Sie vertrauen können.",
    },
    intro: {
      eyebrow: "Kompetenz und Professionalität",
      heading: "Über uns",
      paragraph:
        "Hoch qualifiziertes Personal, ein interdisziplinärer Ansatz und eine angenehme Atmosphäre machen Dental Centar Repić zur richtigen Wahl für Sie. Wir garantieren einen fachkundigen Ansatz, eine hochwertige Versorgung und den Einsatz modernster Materialien.",
    },
    // Paired in order with the portraits in AboutPage.astro.
    team: [
      { name: "Dr. Slavica Pejda Repić", role: "Zahnärztin, Fachärztin für Kieferorthopädie" },
      { name: "Dr. Dario Repić", role: "Zahnarzt, Facharzt für Endodontie und restaurative Zahnmedizin" },
      { name: "Danijela Maleta", role: "Zahnärztin" },
      { name: "Magdalena Županović", role: "Zahnärztin" },
      { name: "Katja Bažoka", role: "Zahnmedizinische Fachangestellte" },
      { name: "Manuela Škrobica", role: "Zahnmedizinische Fachangestellte" },
      { name: "Ana Papić", role: "Zahnmedizinische Fachangestellte" },
    ],
  },

  services: {
    meta: {
      title: "Leistungen - Komplette zahnmedizinische Versorgung | Dental Centar Repić",
      description:
        "Implantologie, Kieferorthopädie, Endodontie, Zahnprothetik, ästhetische Zahnmedizin, Oralchirurgie, Parodontologie, Röntgendiagnostik und Kinderzahnheilkunde.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "Von der Vorsorge bis zu komplexen Eingriffen.",
    },
    intro: {
      eyebrow: "Ein ganzheitlicher Ansatz",
      heading: "Ein Zentrum. Viele Möglichkeiten.",
      paragraph:
        "Von der Implantologie und Kieferorthopädie bis zur ästhetischen Zahnmedizin — wir bieten eine Lösung für alle Ihre zahnmedizinischen Anliegen an einem Ort, mit fachkundigem Ansatz und modernsten Materialien.",
    },
    // Paired in order with the images and detail pages in ServicesPage.astro.
    cards: [
      {
        title: "Zahnimplantate",
        summary:
          "Zahnimplantate sind ein bewährter Eingriff, der verlorene Zähne ersetzt, ohne die Nachbarzähne zu behandeln.",
      },
      {
        title: "Kieferorthopädie",
        summary:
          "Eine kieferorthopädische Behandlung (Zahnspange) ist bei Fehlstellungen und ungleichmäßiger Anordnung der Zähne angezeigt.",
      },
      {
        title: "Endodontie",
        summary:
          "Ein Fachgebiet der Zahnmedizin, eng verbunden mit der restaurativen Zahnmedizin und der Kariologie.",
      },
      {
        title: "Zahnprothetik",
        summary:
          "Besonderes Augenmerk legen wir auf den Erhalt der Funktion der Zähne und des gesamten Kausystems.",
      },
      {
        title: "Ästhetische Zahnmedizin",
        summary:
          "Ein schönes Lächeln hebt die Stimmung, stärkt das Selbstvertrauen und hinterlässt einen positiven ersten Eindruck.",
      },
      {
        title: "Oralchirurgie",
        summary:
          "Chirurgische Zahnentfernungen und weitere oralchirurgische Eingriffe, fachkundig und behutsam durchgeführt.",
      },
      {
        title: "Parodontologie",
        summary:
          "Reagieren Sie rechtzeitig und beugen Sie Zahnfleischerkrankungen und Zahnverlust vor.",
      },
      {
        title: "Röntgendiagnostik",
        summary:
          "Moderne Röntgendiagnostik zur Früherkennung von Erkrankungen und für eine präzise Behandlungsplanung.",
      },
      {
        title: "Kinderzahnmedizin",
        summary:
          "Ein einfühlsamer Umgang mit unseren jüngsten Patienten und Vorsorgeuntersuchungen für gesunde Zähne von Anfang an.",
      },
    ],
    // Treatment catalogue by area, listed in the footer.
    groups: [
      {
        title: "Implantologie und Prothetik",
        items: [
          "Zahnimplantate",
          "Zahnprothetik",
          "Kronen und Brücken",
          "Vollständige orale und prothetische Rehabilitation",
        ],
      },
      {
        title: "Kieferorthopädie",
        items: [
          "Zahnspangen",
          "Festsitzende Apparaturen",
          "Herausnehmbare Apparaturen",
          "Behandlung schiefer und weit stehender Zähne",
        ],
      },
      {
        title: "Endodontie und restaurative Zahnmedizin",
        items: [
          "Wurzelkanalbehandlung",
          "Behandlung von Zahnentzündungen",
          "Kariesbehandlung",
          "Restauration gebrochener und abgesplitterter Zähne",
        ],
      },
      {
        title: "Ästhetische Zahnmedizin",
        items: [
          "Zahnbleaching",
          "Keramikveneers",
          "Smile Design",
          "Zahnschmuck",
          "Zahnreinigung mit Pulverstrahl",
        ],
      },
      {
        title: "Oralchirurgie und Parodontologie",
        items: [
          "Oralchirurgie",
          "Parodontologie",
          "Chirurgische Zahnentfernung",
          "Behandlung von Parodontitis",
        ],
      },
      {
        title: "Diagnostik und Kinderzahnheilkunde",
        items: [
          "Röntgendiagnostik",
          "Kinderzahnheilkunde",
          "Kostenlose erste Untersuchung",
          "Vorsorgeuntersuchungen",
        ],
      },
    ],
  },

  tourism: {
    meta: {
      title: "Dentaltourismus in Trogir, Kroatien | Dental Centar Repić",
      description:
        "Verbinden Sie Urlaub in Dalmatien mit erstklassiger Zahnbehandlung. Preise bis zu fünfmal niedriger als europäische Standardpreise. Dental Centar Repić, Trogir.",
    },
    hero: {
      title: "DENTALTOURISMUS",
      description:
        "Verbinden Sie einen Urlaub in Dalmatien mit erstklassiger Zahnbehandlung. <br /> Attraktive Lage in unmittelbarer Nähe der Altstadt von Trogir, UNESCO-Weltkulturerbe.",
    },
    intro: {
      heading: "Das Angenehme mit dem Nützlichen verbinden",
      paragraphs: [
        "Die attraktive Lage von Dental Centar Repić in unmittelbarer Nähe der Altstadt der UNESCO-Welterbestadt Trogir ist die ideale Wahl für Patienten aus dem Ausland, die das Angenehme mit dem Nützlichen verbinden möchten: einen angenehmen Urlaub mit hochwertiger und preisgünstiger Zahnbehandlung.",
        "Neben einem angenehmen Aufenthalt im Herzen Dalmatiens bemühen wir uns, unseren Gästen eine hochwertige und gut organisierte zahnmedizinische Versorgung zu bieten. Wir sind bereit, Ihnen eine vollständige orale und prothetische Rehabilitation passend zu Ihrem geplanten Aufenthalt in unserer Stadt zu ermöglichen.",
        "Die Preise unserer Leistungen sind bis zu fünfmal niedriger als europäische Standardpreise, und unser Team hilft Ihnen gerne bei der Organisation Ihrer Anreise und Ihres Aufenthalts in Trogir.",
      ],
    },
    benefits: {
      heading: "Warum Trogir",
      items: [
        {
          title: "Bis zu fünfmal niedrigere Preise",
          description:
            "Unsere Preise liegen bis zu fünfmal unter europäischen Standardpreisen",
        },
        {
          title: "UNESCO-Stadt Trogir",
          description:
            "Die Praxis liegt in unmittelbarer Nähe der Altstadt von Trogir",
        },
        {
          title: "Hilfe bei der Organisation",
          description:
            "Unser Team hilft gerne bei der Organisation von Anreise und Aufenthalt",
        },
        {
          title: "Behandlung passend zur Reise",
          description:
            "Wir planen die vollständige Rehabilitation passend zur Dauer Ihres Aufenthalts",
        },
      ],
    },
    howItWorks: {
      heading: "So funktioniert es",
      steps: [
        {
          title: "1. Kontakt aufnehmen",
          description:
            "Senden Sie uns eine Anfrage mit Ihrer Situation und den geplanten Daten",
        },
        {
          title: "2. Behandlungsplan",
          description:
            "Wir schlagen einen Behandlungsplan und Terminablauf passend zu Ihrem Aufenthalt vor",
        },
        {
          title: "3. Anreise und Behandlung",
          description:
            "Wir behandeln zu den vereinbarten Terminen und lassen Zeit für Erholung",
        },
        {
          title: "4. Nachsorge",
          description:
            "Nach der Behandlung stehen wir für Kontrollen und Beratung zur Verfügung",
        },
      ],
    },
    cta: {
      heading: "Planen Sie eine Reise nach Dalmatien?",
      subheading:
        "Senden Sie uns eine Anfrage mit Ihren geplanten Daten und wir erstellen einen Behandlungsplan passend zu Ihrem Aufenthalt.",
      primaryButton: "Anfrage senden",
      secondaryButton: "Leistungen ansehen",
    },
  },

  contact: {
    meta: {
      title: "Kontakt - Termin buchen | Dental Centar Repić",
      description:
        "Dental Centar Repić, Rimski put 3J, 21220 Trogir, Kroatien. Telefon +385 21 796 241, E-Mail info@dentalrepic.com. Werktags 8:00 - 20:00.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "Wenden Sie sich vertrauensvoll an uns.",
    },
    intro: {
      eyebrow: "Kontakt",
      heading: "Termin buchen",
      paragraph:
        "Füllen Sie das Formular unten aus und wir melden uns so schnell wie möglich innerhalb unserer Öffnungszeiten. Die erste Untersuchung ist kostenlos.",
    },
    addressHeading: "Adresse",
    contactHeading: "Kontakt",
    emergencyHeading: "Notfälle",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    form: {
      heading: "Termin buchen",
      description: [
        "Wir beantworten gerne alle Ihre Fragen und vereinbaren Ihren nächsten Termin.",
        "Schreiben Sie uns, rufen Sie an oder kommen Sie vorbei — Ihr neues Lächeln beginnt hier.",
      ],
      nameLabel: "Vor- und Nachname",
      emailLabel: "E-Mail",
      messageLabel: "Nachricht",
      messagePlaceholder: "Ihre Nachricht...",
      submit: "Senden",
      submitting: "Wird gesendet...",
      successMessage:
        "Vielen Dank! Wir haben Ihre Anfrage erhalten und melden uns innerhalb unserer Öffnungszeiten.",
      errorMessage:
        "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie uns unter +385 21 796 241 an.",
      captchaMessage: "Bitte bestätigen Sie, dass Sie kein Roboter sind.",
    },
    mapTitle: "Karte mit dem Standort von Dental Centar Repić in Trogir",
  },

  info: {
    meta: {
      title: "FAQ - Häufig gestellte Fragen | Dental Centar Repić",
      description:
        "Antworten auf häufige Fragen zur kostenlosen ersten Untersuchung, zu Implantaten, Zahnspangen, Zahnarztangst und Dentaltourismus in Trogir.",
    },
    hero: {
      title: "HÄUFIG GESTELLTE FRAGEN",
      description:
        "Klare Antworten zu unseren Leistungen, Terminen und Behandlungen — damit Sie sichere Entscheidungen für sich oder Ihre Angehörigen treffen können.",
    },
    heading: "Häufig gestellte Fragen",
    cta: {
      heading: "Noch Fragen offen?",
      subheading:
        "Unser Team beantwortet gerne alle weiteren Fragen. Rufen Sie uns an oder senden Sie eine Anfrage.",
      primaryButton: "Kontakt aufnehmen",
    },
  },

  notFound: {
    meta: {
      title: "Seite nicht gefunden - Dental Centar Repić",
      description: "Die gesuchte Seite konnte nicht gefunden werden.",
    },
    heading: "Seite nicht gefunden",
    description:
      "Leider konnten wir die gesuchte Seite nicht finden. Sie wurde möglicherweise verschoben oder existiert nicht.",
    backHome: "Zurück zur Startseite",
    contactUs: "Kontakt aufnehmen",
    lookingForLabel: "Vielleicht suchen Sie:",
  },

  // No service detail pages yet: the copy is the clinic's own clinical prose and
  // exists only in Croatian and English. Rather than machine-translate several
  // thousand words of dental terminology, these pages are absent in German and
  // the services index links to the languages that have them. Add entries here
  // once a native speaker supplies the translations; the routes, the language
  // switcher and the sitemap follow automatically.
  serviceDetails: {},

  serviceDetailChrome: {
    backToServices: "Weitere Leistungen",
    faqHeading: "Häufige Fragen",
    relatedHeading: "Weitere Leistungen",
    availableInLabel: "Auf Kroatisch und Englisch verfügbar",
  },

  faqs: [
    {
      id: "prvi-pregled",
      question: "Ist die erste Untersuchung kostenlos?",
      answer:
        "<p>Ja. Der erste Besuch und die erste Untersuchung bei Dental Centar Repić sind kostenlos.</p><p>Bei der Untersuchung beurteilen wir den Zustand Ihrer Zähne und Ihres Zahnfleischs, erstellen bei Bedarf Röntgenbilder und schlagen einen Behandlungsplan mit einer Schätzung von Dauer und Kosten vor, damit Sie unverbindlich entscheiden können.</p>",
    },
    {
      id: "termin",
      question: "Wie buche ich einen Termin?",
      answer:
        "<p>Sie können auf zwei Wegen einen Termin buchen:</p><ul><li><strong>Telefonisch:</strong> +385 21 796 241, werktags von 8:00 bis 20:00</li><li><strong>Per Formular:</strong> Füllen Sie das Formular auf der Kontaktseite aus und wir melden uns innerhalb der Öffnungszeiten</li></ul><p>Wenn Sie eine Notbehandlung benötigen, rufen Sie uns bitte telefonisch an.</p>",
    },
    {
      id: "usluge",
      question: "Welche Leistungen bieten Sie an?",
      answer:
        "<p>Wir bieten eine komplette zahnmedizinische Versorgung an einem Ort:</p><ul><li>Implantologie und Zahnprothetik (Kronen, Brücken)</li><li>Kieferorthopädie — festsitzende und herausnehmbare Zahnspangen</li><li>Endodontie — Wurzelkanalbehandlung und Behandlung von Zahnentzündungen</li><li>Ästhetische Zahnmedizin — Bleaching, Keramikveneers, Smile Design</li><li>Oralchirurgie und Parodontologie</li><li>Röntgendiagnostik und Kinderzahnheilkunde</li></ul>",
    },
    {
      id: "strah-od-zubara",
      question: "Ich habe Angst vor dem Zahnarzt. Wie können Sie helfen?",
      answer:
        "<p>Zahnarztangst ist häufig und völlig verständlich, und wir bauen sie erfolgreich ab.</p><p>Wir arbeiten ohne Druck, erklären jeden Schritt im Voraus und passen das Tempo an Sie an. Besonderen Wert legen wir auf die Arbeit mit Kindern, damit sie sich vom ersten Besuch an wohlfühlen.</p>",
    },
    {
      id: "djeca",
      question: "Behandeln Sie auch Kinder?",
      answer:
        "<p>Ja, Kinderzahnheilkunde ist eine unserer Leistungen.</p><p>Die Praxis ist familienfreundlich, und unsere Ärzte und unser Personal widmen sich besonders unseren jüngsten Patienten — das Ziel ist, dass ein Kind vom ersten Besuch an Vertrauen aufbaut und eine positive Erfahrung macht.</p>",
    },
    {
      id: "dentalni-turizam",
      question: "Ich komme aus dem Ausland. Können Sie die Behandlung organisieren?",
      answer:
        "<p>Ja. Unsere Lage in unmittelbarer Nähe der Altstadt der UNESCO-Welterbestadt Trogir ist ideal für Patienten, die Urlaub und Zahnbehandlung verbinden möchten.</p><ul><li>Die Preise sind bis zu fünfmal niedriger als europäische Standardpreise</li><li>Wir passen den Behandlungsplan an die Dauer Ihres Aufenthalts an</li><li>Unser Team hilft bei der Organisation von Anreise und Aufenthalt in Trogir</li></ul><p>Senden Sie uns eine Anfrage mit Ihren geplanten Daten und wir erstellen einen Behandlungsvorschlag.</p>",
    },
    {
      id: "radno-vrijeme",
      question: "Wann sind Sie geöffnet?",
      answer:
        "<p>Wir sind von Montag bis Freitag von 8:00 bis 20:00 geöffnet.</p><p>Samstags und sonntags sind wir geschlossen. Für Termine und Anfragen rufen Sie +385 21 796 241 an oder senden Sie uns eine Nachricht über das Formular.</p>",
    },
    {
      id: "lokacija",
      question: "Wo befinden Sie sich?",
      answer:
        "<p>Sie finden uns in Rimski put 3J, 21220 Trogir, in unmittelbarer Nähe der Altstadt.</p><p>Die Lage ist gut erreichbar und die Praxis ist barrierefrei zugänglich.</p>",
    },
  ],
};
