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
      { label: "Startseite", href: "/", icon: "home" },
      { label: "Über uns", href: "/about", icon: "info" },
      { label: "Leistungen", href: "/services", icon: "clipboard" },
      { label: "Dentaltourismus", href: "/dental-tourism", icon: "star" },
      { label: "Infos", href: "/info", icon: "book" },
    ],
    cta: { label: "Termin buchen", href: "/contact" },
    languageLabel: "Sprache",
    menuLabel: "Menü öffnen",
  },

  footer: {
    description:
      "Die Erhaltung der Mundgesundheit, der Funktion und der Ästhetik ist die Grundlage unserer Arbeit mit Patienten. Jeden Patienten behandeln wir individuell, wir verfolgen den technologischen Fortschritt und bemühen uns jederzeit, unseren Patienten die bestmögliche Versorgung zu bieten. Wir investieren fortlaufend in neue Geräte sowie in die fachliche Weiterbildung unseres Teams.",
    servicesHeading: "Leistungen",
    hoursHeading: "Öffnungszeiten",
    rightsReserved: "Alle Rechte vorbehalten",
  },

  common: {
    learnMore: "Mehr erfahren",
    readMore: "Mehr lesen",
    readLess: "Weniger anzeigen",
    callUsToday: "Rufen Sie uns noch heute an!",
    bookAppointment: "Termin buchen",
    openingHours: "Öffnungszeiten",
    openingHoursRows: [
      { day: "Montag", hours: "8:00 - 20:00" },
      { day: "Dienstag", hours: "8:00 - 20:00" },
      { day: "Mittwoch", hours: "8:00 - 20:00" },
      { day: "Donnerstag", hours: "8:00 - 20:00" },
      { day: "Freitag", hours: "8:00 - 20:00" },
      { day: "Samstag", hours: "Geschlossen" },
      { day: "Sonntag", hours: "Geschlossen" },
    ],
  },

  home: {
    meta: {
      title: "Dental Centar Repić | Zahnklinik in Trogir, Kroatien",
      description:
        "Dental Centar Repić in Trogir: Implantologie, Kieferorthopädie, Endodontie, Prothetik und ästhetische Zahnmedizin. Erste Untersuchung kostenlos. Tel. +385 21 796 241.",
    },
    hero: {
      title: "Erstklassige zahnmedizinische Lösungen",
      subtitleLine1: "Eine Lösung für alle Ihre zahnmedizinischen Anliegen",
      subtitleLine2: "an einem Ort.",
      ctaPrimary: "Termin buchen",
      ctaSecondary: "Unsere Leistungen",
      imageAlt: "Praxis Dental Centar Repić",
    },
    welcome: {
      eyebrow: "Willkommen auf unserer Website",
      heading: "Wir sorgen für Ihr perfektes Lächeln",
      intro:
        "Hoch qualifiziertes Personal (Fachärzte der zahnmedizinischen Fachgebiete mit Doktortiteln), ein interdisziplinärer Ansatz und eine angenehme Atmosphäre machen Dental Centar Repić zur richtigen Wahl für Sie. Wir garantieren einen fachkundigen Ansatz, eine hochwertige Versorgung und den Einsatz modernster Materialien. Wir möchten, dass Sie sich in unserem Zentrum wohlfühlen, und werden Ihr Vertrauen mit Wissen, Kompetenz und Erfahrung rechtfertigen.",
      highlights: [
        {
          title: "Geräte höchster Qualität",
          description:
            "Wir verwenden ausschließlich hochwertige Materialien renommierter Hersteller",
        },
        {
          title: "Großzügige, gut ausgestattete Praxis",
          description:
            "Neben einer erstklassigen Behandlung achten wir darauf, dass Sie sich bei uns wohlfühlen",
        },
        {
          title: "Freundliches und fachkundiges Personal",
          description:
            "Unsere Ärzte und das medizinische Personal stehen Ihnen jederzeit zur Verfügung",
        },
      ],
      link: "Mehr über uns erfahren",
      imageAlt: "Das Team von Dental Centar Repić",
    },
    servicesIntro: {
      eyebrow: "Kompetenz und Professionalität",
      heading: "Komplette zahnmedizinische Versorgung",
      description:
        "Alle unsere Leistungen und Behandlungen erbringen wir in modern ausgestatteten Räumen und nach den fachlichen Regeln, damit sich unsere Patienten wohlfühlen und mit der Versorgung zufrieden sind.",
      services: [
        {
          title: "Zahnimplantate",
          summary:
            "Lösen Sie fehlende Zähne dauerhaft und stellen Sie die Funktion wieder her.",
        },
        {
          title: "Kieferorthopädie (Zahnspangen)",
          summary:
            "Verwirklichen Sie Ihren Traum vom schönen Lächeln mit unseren Fachärzten.",
        },
        {
          title: "Ästhetische Zahnmedizin",
          summary:
            "Sichern Sie sich das Lächeln, das Sie sich immer gewünscht haben.",
        },
      ],
    },
    whyUs: {
      heading: "Warum Dental Centar Repić",
      subheading:
        "Von der kostenlosen ersten Untersuchung bis zu erstklassigen Geräten — alles an einem Ort, im Herzen Dalmatiens.",
      reasons: [
        "Erste Untersuchung kostenlos",
        "Freundliches Personal",
        "Großzügige Praxis",
        "Erfahrene Ärzte",
        "Familienfreundlich",
        "Gut erreichbare Lage",
        "Keine Wartezeiten",
        "Qualitätsgarantie",
        "Barrierefrei",
        "Moderne Geräte",
        "Hochwertige Materialien",
        "Röntgendiagnostik",
      ],
      imageAlt: "Moderne Geräte in der Praxis",
    },
    problems: {
      heading: "Wir haben Lösungen für Ihre zahnmedizinischen Probleme",
      items: [
        {
          title: "Fehlende Zähne",
          description:
            "Lächeln Sie wieder mit Stolz: Mit unseren prothetischen und implantologischen Lösungen geben wir Ihnen Ihr Lächeln und die richtige Zahnfunktion zurück.",
        },
        {
          title: "Zahnschmerzen",
          description:
            "Zahnschmerzen können viele Ursachen haben. Nach einer ausführlichen Untersuchung schlagen wir die passende Therapie und Behandlung vor.",
        },
        {
          title: "Angst vor dem Zahnarzt",
          description:
            "Wir bauen Zahnarztangst erfolgreich ab. Besonderen Wert legen wir auf die Arbeit mit Kindern, damit sie sich vom ersten Besuch an wohlfühlen.",
        },
        {
          title: "Gebrochene / abgesplitterte Zähne",
          description:
            "Wir behandeln gebrochene und abgesplitterte Zähne mit Kronen oder anderen Verfahren.",
        },
        {
          title: "Parodontitis",
          description:
            "Wir bieten eine vollständige parodontologische Versorgung, individuell auf jeden Patienten abgestimmt.",
        },
        {
          title: "Schiefe / weit stehende Zähne",
          description:
            "Wir sind auf ein breites Spektrum kieferorthopädischer Leistungen spezialisiert, die Ihnen das perfekte Lächeln bringen.",
        },
        {
          title: "Karies und Zahnverfall",
          description:
            "Wir nutzen moderne Technik, um Erkrankungen im frühesten Stadium zu erkennen, rechtzeitig zu behandeln und Ihre Zähne zu erhalten.",
        },
        {
          title: "Flecken / Verfärbungen",
          description:
            "Unser Bleaching sorgt für die weißen Zähne, die Sie sich immer gewünscht haben.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Häufige Fragen",
      viewAll: "Alle Fragen ansehen",
    },
    cta: {
      heading:
        "Buchen Sie Ihren Termin oder vereinbaren Sie eine kostenlose Untersuchung",
      text: "Füllen Sie das Formular aus oder rufen Sie uns an — wir melden uns innerhalb unserer Öffnungszeiten.",
      button: "Jetzt buchen",
    },
  },

  about: {
    meta: {
      title: "Über uns - Unser Team | Dental Centar Repić",
      description:
        "Lernen Sie das Team von Dental Centar Repić in Trogir kennen: Fachärzte für Kieferorthopädie, Endodontie und restaurative Zahnmedizin mit Doktortiteln.",
    },
    hero: {
      title: "ÜBER UNS",
      description:
        "Hoch qualifiziertes Personal, ein interdisziplinärer Ansatz und eine angenehme Atmosphäre machen Dental Centar Repić zur richtigen Wahl für Sie. <br /> Wir garantieren einen fachkundigen Ansatz, eine hochwertige Versorgung und den Einsatz modernster Materialien.",
    },
    team: {
      heading: "Unser Team",
      subheading:
        "Erfahrene, ausgezeichnete Ärzte sowie professionelles und freundliches medizinisches Personal",
      members: [
        {
          name: "Dr. Slavica Pejda Repić",
          role: "Zahnärztin, Fachärztin für Kieferorthopädie",
        },
        {
          name: "Dr. Dario Repić",
          role: "Zahnarzt, Facharzt für Endodontie und restaurative Zahnmedizin",
        },
      ],
    },
    approach: {
      heading: "Unser Umgang mit Patienten",
      paragraphs: [
        "Die Erhaltung der Mundgesundheit, der Funktion und der Ästhetik ist die Grundlage unserer Arbeit mit Patienten. Jeden Patienten behandeln wir individuell, wir verfolgen den technologischen Fortschritt und bemühen uns jederzeit, die bestmögliche Versorgung zu bieten.",
        "Wir investieren fortlaufend in neue Geräte sowie in die fachliche Weiterbildung unseres Teams. Alle Leistungen erbringen wir in modern ausgestatteten Räumen und nach den fachlichen Regeln, damit sich unsere Patienten wohlfühlen und zufrieden sind.",
      ],
      imageAlt: "Die Praxis Dental Centar Repić",
    },
    testimonials: {
      heading: "Was unsere Patienten sagen",
      items: [
        {
          quote:
            "Dental Centar Repić ist eine der wenigen Zahnarztpraxen, in denen die Versorgung immer auf höchstem Niveau ist. Das Personal ist professionell und aufmerksam, dabei aber auch fröhlich und freundlich. Ich habe vor drei Jahren einige Zähne behandeln und ein Implantat setzen lassen und bin bis heute zufrieden.",
          author: "Toni Vešović",
        },
        {
          quote:
            "Sie behandeln nicht nur Zahnprobleme, sondern nehmen einem auch erfolgreich die Angst vor dem Zahnarzt.",
          author: "Zorana Barada",
        },
        {
          quote:
            "Ausgezeichnete Ärzte, fachkundig und professionell. Auch im Umgang mit Kindern sehr zu loben.",
          author: "Joško Herceg",
        },
        {
          quote: "Sehr professionell und faire Preise.",
          author: "Gunther Braus",
        },
      ],
    },
    cta: {
      heading: "Wenden Sie sich vertrauensvoll an uns",
      subheading:
        "Die erste Untersuchung ist kostenlos. Buchen Sie einen Termin und wir sprechen darüber, wie wir helfen können.",
      primaryButton: "Termin buchen",
      secondaryButton: "Leistungen ansehen",
    },
  },

  services: {
    meta: {
      title: "Leistungen - Komplette zahnmedizinische Versorgung | Dental Centar Repić",
      description:
        "Implantologie, Kieferorthopädie, Endodontie, Zahnprothetik, ästhetische Zahnmedizin, Oralchirurgie, Parodontologie, Röntgendiagnostik und Kinderzahnheilkunde.",
    },
    hero: {
      title: "UNSERE LEISTUNGEN",
      description:
        "Alle unsere Leistungen und Behandlungen erbringen wir in modern ausgestatteten Räumen und nach den fachlichen Regeln, damit sich unsere Patienten wohlfühlen und mit der Versorgung zufrieden sind.",
    },
    intro: {
      heading: "Komplette zahnmedizinische Versorgung",
      paragraph:
        "Von der Implantologie und Kieferorthopädie bis zur ästhetischen Zahnmedizin — wir bieten eine Lösung für alle Ihre zahnmedizinischen Anliegen an einem Ort, mit fachkundigem Ansatz und modernsten Materialien.",
    },
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
    equipment: {
      heading: "Geräte und Materialien",
      paragraph:
        "Wir verwenden hochwertige Materialien renommierter Hersteller und investieren fortlaufend in neue Geräte, um Erkrankungen im frühesten Stadium zu erkennen und rechtzeitig zu behandeln.",
      features: [
        {
          title: "Hochwertige Materialien",
          description:
            "Materialien renommierter Hersteller bei jeder Behandlung",
        },
        {
          title: "Röntgendiagnostik",
          description:
            "Moderne Technik für Früherkennung und präzise Therapieplanung",
        },
        {
          title: "Laufende Weiterbildung",
          description:
            "Fortlaufende Investition in die Weiterbildung unseres gesamten Teams",
        },
      ],
      imageAlt: "Moderne zahnmedizinische Geräte",
    },
    cta: {
      heading: "Ihre gesuchte Leistung ist nicht dabei?",
      subheading:
        "Rufen Sie uns an oder buchen Sie einen Termin — wir vereinbaren eine Untersuchung und schlagen die beste Behandlung für Sie vor.",
      primaryButton: "Termin buchen",
      secondaryButton: "Dentaltourismus",
    },
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
        "Dental Centar Repić, Put Dragulina 62 F, 21220 Trogir, Kroatien. Telefon +385 21 796 241, E-Mail dentalcenterrepic@gmail.com. Werktags 8:00 - 20:00.",
    },
    hero: {
      title: "KONTAKT",
      description:
        "Wenden Sie sich vertrauensvoll an uns. Füllen Sie das Formular aus oder rufen Sie an, um einen Termin zu vereinbaren — die erste Untersuchung ist kostenlos.",
    },
    intro:
      "Füllen Sie das Formular unten aus und wir melden uns so schnell wie möglich innerhalb unserer Öffnungszeiten. Die erste Untersuchung ist kostenlos.",
    addressHeading: "Unsere Adresse",
    contactHeading: "Kontakt",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    urgentNotice:
      "Wenn Sie eine Notbehandlung benötigen, rufen Sie bitte +385 21 796 241 an.",
    form: {
      heading: "Termin buchen",
      description:
        "Füllen Sie das Formular unten aus und wir melden uns innerhalb unserer Öffnungszeiten.",
      nameLabel: "Vor- und Nachname",
      namePlaceholder: "Ihr Vor- und Nachname",
      emailLabel: "E-Mail",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      phoneLabel: "Telefonnummer",
      phonePlaceholder: "Ihre Telefonnummer",
      reasonLabel: "Grund des Besuchs",
      reasonOptions: [
        "Erster Besuch - kostenlose Untersuchung",
        "Implantate",
        "Zahnspangen",
        "Kronen und Brücken",
        "Ästhetische Zahnmedizin",
        "Zahnentzündung",
        "Sonstiges",
      ],
      preferredTimeLabel: "Gewünschte Uhrzeit",
      preferredTimeOptions: [
        "Beliebige Uhrzeit",
        "08:00 - 11:00",
        "11:00 - 14:00",
        "14:00 - 16:00",
      ],
      messageLabel: "Anmerkung",
      messagePlaceholder: "Beschreiben Sie kurz den Grund Ihres Besuchs...",
      submit: "Senden",
      demoNote:
        "Demo-Formular: Verbinden Sie dieses Formular vor dem Start mit Ihrem bevorzugten Formularanbieter.",
      statusMessage:
        "Dieses Demo-Formular funktioniert lokal. Verbinden Sie einen Formularanbieter, um Nachrichten zu erhalten.",
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
        "<p>Sie finden uns in Put Dragulina 62 F, 21220 Trogir, in unmittelbarer Nähe der Altstadt.</p><p>Die Lage ist gut erreichbar und die Praxis ist barrierefrei zugänglich.</p>",
    },
  ],
};
