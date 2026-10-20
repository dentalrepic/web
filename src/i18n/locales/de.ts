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
    // Patient reviews, translated from the Croatian originals; quoted with permission.
    reviews: {
      heading: "Erfahrungen unserer Patienten",
      intro: [
        "Vertrauen, das wir mit jedem Besuch aufbauen.",
        "Die Erfahrungen unserer Patienten spiegeln wider, was uns wichtig ist: Fachwissen, Professionalität, ein einfühlsamer Umgang und hohe Qualität.",
      ],
      items: [
        {
          name: "Toni Vešović",
          text:
            "Das Dental Centar Repić ist eine der wenigen Zahnarztpraxen, in denen die Leistung immer stimmt. Das Personal ist professionell und aufmerksam, aber auch fröhlich und freundlich. Ich habe mir vor drei Jahren ein paar Zähne behandeln und ein Implantat setzen lassen und bin bis heute zufrieden.",
        },
        {
          name: "Zorana Barada",
          text:
            "Neben der Behandlung von Karies nehmen sie einem erfolgreich die Angst vor dem Zahnarzt.",
        },
        {
          name: "Joško Herceg",
          text:
            "Hervorragende Ärzte, kompetent und professionell. Großes Lob auch für die Arbeit mit Kindern.",
        },
      ],
    },
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
      title: "Wenden Sie sich\nvertrauensvoll\nan uns.",
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
  serviceDetails: {
    implantologija: {
      slug: "implantologija",
      meta: {
        title: "Implantologie - Zahnimplantate | Dental Centar Repić",
        description:
          "Zahnimplantate als dauerhafte Lösung bei Zahnverlust. Knochenaufbau, Sinuslift und All-on-4-Methode im Dental Centar Repić in Trogir.",
      },
      title: "Implantologie",
      lead:
        "Zahnimplantate sind ein bewährter Eingriff, der verlorene Zähne ersetzt, ohne die Nachbarzähne zu behandeln.",
      sections: [
        {
          heading: "Was sind Zahnimplantate",
          paragraphs: [
            "Mit Zahnimplantaten ersetzen wir einen oder mehrere verlorene Zähne im Ober- oder Unterkiefer. Die Implantate ersetzen die Zahnwurzel und verwachsen innerhalb von 3 bis 6 Monaten mit dem Knochen (Osseointegration). In dieser Zeit ist der Patient nicht zahnlos, sondern trägt einen provisorischen Zahnersatz, der Ästhetik und Funktion bis zur Fertigstellung des endgültigen Zahnersatzes sichert. Der endgültige Zahnersatz kann eine Einzelkrone auf einem Implantat, eine Brücke auf Implantaten oder eine Prothese auf Implantaten sein. Das Implantat im Knochen hilft außerdem, die Knochenmenge, also den Kieferkamm, zu erhalten: Es belastet den Knochen ähnlich wie ein natürlicher Zahn, sodass es nicht zum Knochenabbau kommt, der sonst auf den Verlust eines Zahns folgt.",
          ],
          bullets: [
            "Dauerhafte Lösung",
            "Vollständige Wiederherstellung der Zahnfunktion",
            "Natürliches und schönes Aussehen der Zähne",
            "Verbessertes Aussehen des ganzen Gesichts",
            "Vorbeugung gegen Knochenabbau",
            "Normale Pflege",
          ],
        },
        {
          heading: "Wann wir Implantate empfehlen",
          paragraphs: [
            "Fehlt ein einzelner Zahn und sind die Nachbarzähne gesund, empfehlen wir ein Implantat, damit die gesunden Nachbarzähne nicht beschliffen werden müssen. Auf das Implantat wird dann eine Krone gesetzt.",
            "Träger von Vollprothesen haben oft Probleme mit dem schlechten Halt ihrer Prothese, die sich mit einer Prothese auf Implantaten lösen lassen. Im völlig zahnlosen Oberkiefer reichen für den Halt einer Deckprothese meist vier Implantate, im völlig zahnlosen Unterkiefer meist zwei. Implantatgetragene Prothesen machen Patienten zufriedener als herkömmliche Prothesen: Sie sehen besser aus, sitzen stabiler, erleichtern das Kauen, schränken die Funktion weniger ein und sind leichter zu reinigen, und das Sprechen fällt leichter.",
            "Implantate können sofort (direkt nach dem Einsetzen) oder konventionell (nach der Einheilzeit) belastet werden. Studien zeigen, dass konventionell belastete Implantate eine etwas höhere Überlebensrate im Mund haben. Die Implantate, die wir täglich verwenden, bestehen aus hochwertigem, widerstandsfähigem und biokompatiblem Titan, und dank örtlicher Betäubung ist das Einsetzen völlig schmerzfrei. Voraussetzung für ein Implantat sind ausreichend Knochenmenge und -qualität, die wir vor der Planung mit einer Panorama-Röntgenaufnahme und einem CT prüfen. Ist zu wenig Knochen vorhanden, stehen ein Knochenaufbau und die Anhebung des Kieferhöhlenbodens (Sinuslift) zur Verfügung.",
          ],
        },
        {
          heading: "Was ist ein Knochenaufbau?",
          paragraphs: [
            "Nach dem Verlust eines Zahns bildet sich der Knochen zurück, weil er nicht mehr über die Zahnwurzel durch das Kauen belastet wird. Das Knochenvolumen nimmt ab, und es bleibt nicht genug Platz für ein Implantat. Der Abbau verläuft schneller, wenn die gezogenen Zähne Entzündungen an der Wurzel hatten, weil die Infektion den Knochen zusätzlich zerstört hat. Jedes Implantat braucht ausreichend Knochen um sich herum, der es stützt und stabilisiert, verhindert, dass sich das Zahnfleisch um das Implantat zurückzieht, und späteren ästhetischen Problemen vorbeugt, etwa dass das Implantat durch die Schleimhaut durchscheint.",
            "Der Knochenaufbau (Augmentation) ist ein chirurgischer Eingriff, mit dem verlorener Knochen ersetzt wird. Dafür kann künstlich hergestellter Knochen synthetischen oder tierischen Ursprungs verwendet werden oder körpereigener (autologer) Knochen, der im Mund (Unterkiefer) oder außerhalb des Mundes (z. B. an der Hüfte) entnommen, zerkleinert und an der fehlenden Stelle eingesetzt wird. Körpereigener Knochen gilt als Goldstandard beim Knochenaufbau, weil er am besten einheilt und das Volumen am besten vergrößert. Dafür muss ausreichend Knochen chirurgisch entnommen werden. Kleine und mittelgroße Defekte werden meist mit künstlich hergestelltem Knochen synthetischen oder tierischen Ursprungs ausgeglichen. Über die Methode entscheidet der Facharzt für Oralchirurgie.",
            "Die Heilung von Knochen und Weichgewebe nach dem Aufbau lässt sich mit körpereigenen Wachstumsfaktoren nach der PRF-Methode (plättchenreiches Fibrin) oder mit einer Biomembran verbessern, die Blutgerinnsel und Knochenersatz stabilisiert. Bei der PRF-Methode wird plättchenreiches Fibrin aus dem Blut des Patienten gewonnen und in das Operationsgebiet eingebracht. Die Blutplättchen setzen dort Wachstumsfaktoren frei, die die Bildung neuer Blutgefäße und neuen Knochens anregen. Die Methode ist unbedenklich, da nur das gefilterte Blut des Patienten verwendet wird, um die Heilung zu fördern. Die eingesetzten Materialien werden nach und nach abgebaut, der Knochen baut sich um, und es entsteht neue, feste Knochenmasse. Der Knochenaufbau erfolgt unter örtlicher Betäubung und ist völlig schmerzfrei. Danach muss der Knochen etwa acht Monate einheilen, bevor das Implantat eingesetzt werden kann.",
          ],
        },
        {
          heading: "Was ist ein Sinuslift?",
          paragraphs: [
            "Fehlt Knochen in den seitlichen Bereichen des Oberkiefers, ist eine Anhebung des Kieferhöhlenbodens (Sinuslift) angezeigt. Bei diesem oralchirurgischen Eingriff wird der Boden der Kieferhöhle angehoben und gleichzeitig Knochen aufgebaut, damit genug Lager für die Implantate entsteht. Der Sinuslift erfolgt unter örtlicher Betäubung und ist völlig schmerzfrei.",
            "Je nach Umfang unterscheidet man einen kleinen und einen großen Sinuslift. Fehlen für das Implantat nur etwa 2 mm Knochen, wird ein kleiner Sinuslift durchgeführt, bei dem die Implantate gleichzeitig mit der Anhebung des Kieferhöhlenbodens und dem Knochenaufbau eingesetzt werden. Der Eingriff erfolgt mit der Osteotom-Technik, benannt nach dem Instrument, mit dem die Kieferhöhlenschleimhaut angehoben wird. Nach dem kleinen Sinuslift muss das Implantat etwa sechs Monate mit dem Knochen verwachsen, bevor es mit Zahnersatz (Krone, Brücke) belastet werden kann.",
            "Ein großer Sinuslift wird durchgeführt, wenn mehr Knochenvolumen fehlt, und erfolgt über einen sogenannten seitlichen Zugang. Manchmal kann das Implantat auch hier gleichzeitig eingesetzt werden; fehlt jedoch viel Knochen, empfiehlt sich ein Sinuslift mit späterer Implantation. Zwischen Sinuslift und Implantation müssen dann 6 bis 8 Monate vergehen, sonst drohen Komplikationen und ein Misserfolg des Eingriffs. Der Facharzt für Oralchirurgie entscheidet anhand seiner Erfahrung und Ihrer Befunde, welcher Eingriff für Sie nötig ist.",
          ],
        },
        {
          heading: "Welche Komplikationen sind beim Sinuslift möglich?",
          paragraphs: [
            "Der Sinuslift hat eine hohe Erfolgsrate, und Komplikationen sind selten, aber möglich. Sie können während des Eingriffs oder danach auftreten. Beim Anheben des Kieferhöhlenbodens kann die Kieferhöhlenschleimhaut einreißen, denn ihre Dicke ist von Patient zu Patient verschieden. Reißt sie ein, verschließt der Oralchirurg den Defekt mit verschiedenen Techniken und beugt späteren Komplikationen vor, etwa einer Entzündung der Kieferhöhle, wenn Knochenersatzmaterial in die Kieferhöhle gelangt.",
            "Nach dem Sinuslift ist eine leichte Schwellung möglich, die nach einigen Tagen abklingt. Auch eine Entzündung der Kieferhöhle ist aus verschiedenen Gründen möglich, etwa wenn eine Infektion aus der Mundhöhle eindringt, das Implantat oder Knochenmaterial durch die Schleimhaut dringt oder der Eingriff an einer erkrankten Kieferhöhle erfolgt. Voraussetzung für einen Sinuslift sind gesunde Nebenhöhlen. Hat der Patient bereits eine Erkrankung der Nebenhöhlen, ist vor dem Eingriff eine Beratung bei einem HNO-Arzt nötig.",
          ],
        },
        {
          heading: "All-on-4",
          paragraphs: [
            "„All-on-4“, also „alles auf vier (Implantaten)“, bezeichnet eine Form der implantatprothetischen Versorgung eines völlig zahnlosen Unter- oder Oberkiefers. Die Methode ist nicht neu, sondern seit Jahren bekannt und in der Praxis erfolgreich. Nach dem Ziehen der Zähne verliert der Kiefer mit der Zeit an Knochen. Ist noch genug Knochen vorhanden, empfiehlt sich eine größere Zahl von Implantaten, weil der Zahnersatz dann mehr Pfeiler hat; bei manchen Patienten lassen sich wegen zu wenig oder schlechteren Knochens jedoch nur wenige Implantate setzen, die den Zahnersatz tragen. Ist der Patient für All-on-4 geeignet, werden in den zahnlosen Kiefer nur vier Implantate gesetzt (zwei gerade und zwei schräg gesetzte, worauf der Oralchirurg beim Einsetzen achtet), und sie tragen einen festsitzenden Zahnersatz.",
            "Nach dem Einsetzen der Implantate erhält der Patient noch am selben Tag oder spätestens nach wenigen Tagen zunächst einen provisorischen festsitzenden Zahnersatz und nach drei Monaten den endgültigen. So bleibt die zahnlose Zeit so kurz wie möglich, was die Zufriedenheit der Patienten erhöht. Möglich macht das die Sofortbelastung: Die Implantate werden direkt beim Einsetzen in den Knochen belastet, ohne die Einheilzeit abzuwarten. All-on-4 hat viele Vorteile: Sinuslift und Knochenaufbau im Oberkiefer werden vermieden, was die Erholung verkürzt und die Kosten senkt; auch Patienten, die lange zahnlos waren und wenig Knochen haben, können festsitzenden Zahnersatz bekommen; und es werden nur vier Implantate gesetzt, die den Zahnersatz so stabil halten, dass er sich wie eigene Zähne anfühlt, ohne Angst, dass er wackelt oder herausfällt wie etwa eine Vollprothese. Außerdem ist der Zahnersatz verschraubt, sodass der Zahnarzt ihn bei Bedarf leicht abnehmen, kontrollieren und reparieren kann. Die Pflege ist sehr einfach: mit Zahnbürste und Zahnpasta sowie einer Munddusche oder Zahnseide um die Implantate. Bei guter Hygiene können die Implantate ein Leben lang halten, und nur der Zahnersatz wird erneuert, wenn er abgenutzt ist.",
            "All-on-4 ist günstiger als das Einsetzen einer größeren Zahl von Implantaten samt zusätzlicher oralchirurgischer Eingriffe. So wird festsitzender Zahnersatz auf Implantaten für mehr Patienten erschwinglich.",
          ],
        },
        {
          heading: "Hinweise nach dem Einsetzen von Implantaten",
          paragraphs: [
            "Wundpflege: Kauen Sie in den ersten 24 Stunden nicht auf der operierten Seite und spülen Sie den Mund nicht aus. Putzen Sie ab dem Tag nach der Operation die Zähne mit einer weichen Zahnbürste, und wurde Ihnen ein Antiseptikum (Curasept) verschrieben, spülen Sie den Mund ab dem Tag nach der Operation 2- bis 3-mal täglich damit. Verzichten Sie aufs Rauchen, damit Durchblutung und Wundheilung ungestört verlaufen.",
            "Schmerzen: Nehmen Sie die erste Schmerztablette 30 Minuten nach dem Eingriff, danach nach Bedarf. Vermeiden Sie Aspirin, Andol und andere Medikamente mit Acetylsalicylsäure, da sie Blutungen verlängern können. Lassen die Schmerzen nicht nach, rufen Sie uns an.",
            "Blutung: Leichte Blutungen sind normal. Der nach dem Eingriff eingelegte Tupfer sollte mindestens 20 bis 30 Minuten auf die Wunde gedrückt bleiben. Spülen Sie den Mund nicht aus.",
            "Schwellung: Einige Stunden nach dem Eingriff kann eine Schwellung auftreten. Kühlen Sie die Wange mit kalten Umschlägen im Wechsel, 20 Minuten kühlen und 10 Minuten Pause, und schlafen Sie mit erhöhtem Kopf.",
            "Essen und Aktivität: Essen Sie möglichst weiche Kost und meiden Sie heiße Speisen. Vermeiden Sie 48 bis 72 Stunden nach dem Eingriff körperliche Anstrengung und starke Sonne.",
          ],
        },
      ],
      faqs: [
        {
          id: "implantologija-1",
          question: "Was ist ein Zahnimplantat?",
          answer:
            "<p>Ein Zahnimplantat ist eine Schraube aus Titan, die in ihrer Form einer Zahnwurzel ähnelt. Es wird nach einem zuvor erstellten Behandlungsplan chirurgisch in den Knochen des Ober- oder Unterkiefers eingesetzt. Zwei bis sechs Monate nach dem Einsetzen wird darauf ein prothetischer Aufbau befestigt, der Kronen, Brücken oder Prothesen trägt.</p>",
        },
        {
          id: "implantologija-2",
          question: "Wie läuft das Einsetzen von Implantaten ab?",
          answer:
            "<ul><li>Die erste Untersuchung umfasst eine gründliche Begutachtung und Analyse des Zustands Ihrer Zähne sowie eine genaue Auswertung einer Panorama-Röntgenaufnahme der Kiefer (Orthopantomogramm). Bei der Planung berücksichtigen wir den klinischen Befund, Ihre Wünsche und Erwartungen sowie Ihre finanziellen Möglichkeiten und schlagen Ihnen auf dieser Grundlage Behandlungswege vor. Damit Sie die Möglichkeiten ganz verstehen, erklären wir Ihnen die Situation anhand intraoraler Fotos Ihrer Zähne und anhand von Demonstrationsmodellen. Nach der ersten Untersuchung und der Wahl der Behandlung stellen wir Ihnen den genauen Behandlungsablauf vor. Er umfasst das Ziehen nicht erhaltungswürdiger Zähne, die Entfernung von Zahnstein und das Polieren sowie die Sanierung der vorhandenen Zähne. Bei Bedarf wird noch am selben Tag ein provisorischer Zahnersatz angefertigt, damit Sie während der Behandlung normal kauen und gut aussehen. Erfordert der Befund eine genauere Diagnostik, empfehlen wir eine präzise dreidimensionale Aufnahme (CT) des Kieferabschnitts, in den die Implantate kommen. Das CT ist nötig, um Knochenmenge und -qualität genau zu bestimmen und die beste Position für das Implantat festzulegen. Klinischer Befund, Orthopantomogramm und CT ermöglichen einen genauen Behandlungsplan, einschließlich Anzahl und Verteilung der Implantate und eines eventuell nötigen Knochenaufbaus.</li><li>Die nächste Phase ist das Einsetzen der Implantate. Zur Vorbereitung spülen Sie den Mund mit einem Antiseptikum, danach wird örtlich betäubt. Es folgt das chirurgische Einsetzen des Implantats (Schnitt, Aufklappen des Zahnfleischs, Freilegen des Kieferkamms, Vorbereiten des Implantatbetts, Eindrehen des Implantats, Naht, Kontrollröntgen). Wir betonen: Das Einsetzen von Zahnimplantaten ist nicht schmerzhaft. Danach erhalten Sie ausführliche mündliche und schriftliche Hinweise für eine gute Wundheilung und eine erfolgreiche Osseointegration (Verwachsen des Implantats mit dem Knochen). Die Fäden werden nach sieben Tagen gezogen.</li><li>Je nach Befund folgt der nächste Termin zwei bis sechs Monate nach dem Einsetzen. Dabei werden die Implantate freigelegt und Gingivaformer eingesetzt, die dem Zahnfleisch beim Heilen helfen und es formen.</li><li>Danach werden Abdrücke genommen und an das Dentallabor geschickt, das Ihren Zahnersatz anfertigt.</li><li>Die nächste Phase ist die Anprobe des Zahnersatzes, den wir mit Ihnen und dem Zahntechniker prüfen, um eventuelle Mängel zu beheben.</li><li>Die letzte Phase ist die Übergabe des fertigen Zahnersatzes!</li></ul>",
        },
        {
          id: "implantologija-3",
          question: "Welche Vorteile haben Zahnimplantate gegenüber anderem Zahnersatz?",
          answer:
            "<p>Fehlen Ihnen ein oder mehrere Zähne und haben Sie Schwierigkeiten beim Kauen oder Sprechen, sind Zahnimplantate die Lösung für Sie. Auch wenn Ihre Prothese schlecht hält oder unbequem ist, sind Implantate eine geeignete Behandlungsmöglichkeit.</p>",
        },
        {
          id: "implantologija-4",
          question: "Sind Zahnimplantate sicher?",
          answer:
            "<p>Zahnimplantate und Zahnersatz darauf sind seit über 40 Jahren eine bewährte Behandlung und fester Bestandteil der Praxis gut ausgestatteter Fachkliniken. Mit hochentwickelten, renommierten Implantatsystemen bietet Ihnen das Dental Centar Repić verlässliche und langfristige Ergebnisse, funktionell wie ästhetisch.</p>",
        },
        {
          id: "implantologija-5",
          question: "Wie erfolgreich ist das Einsetzen von Implantaten?",
          answer:
            "<p>Ob Implantate angezeigt sind, entscheiden wir individuell nach dem klinischen Zustand und der Motivation jedes Patienten. Bei richtiger Indikation und guter Mundhygiene liegt die Erfolgsrate der Implantatbehandlung bei 95 % bis 100 %.</p>",
        },
      ],
    },
    ortodoncija: {
      slug: "ortodoncija",
      meta: {
        title: "Kieferorthopädie - Zahnspangen | Dental Centar Repić",
        description:
          "Festsitzende und herausnehmbare Zahnspangen. Kieferorthopädische Untersuchung, Behandlungsplan und Korrektur von Zahnfehlstellungen im Dental Centar Repić in Trogir.",
      },
      title: "Kieferorthopädie",
      lead:
        "Eine kieferorthopädische Behandlung (Zahnspange) ist bei Fehlstellungen und ungleichmäßiger Anordnung der Zähne angezeigt.",
      sections: [
        {
          heading: "Herausnehmbare und festsitzende Zahnspangen",
          paragraphs: [
            "Der richtige Kontakt zwischen den Zähnen verteilt die Kaukräfte gleichmäßig, sodass sie richtig auf Zahnhalteapparat und Knochen übertragen werden. Gut ausgerichtete Zähne lassen sich außerdem leichter pflegen. An fehlstehenden Zähnen sammeln sich oft Beläge, die die Gesundheit von Zähnen und Zahnfleisch gefährden. Zahnspangen sind die Geräte, mit denen wir die kieferorthopädische Behandlung durchführen.",
          ],
        },
        {
          heading: "So führen wir die kieferorthopädische Behandlung durch",
          paragraphs: [
            "Wir behandeln jeden Patienten individuell. Nach einer gründlichen klinischen Untersuchung, der Auswertung der Röntgenbilder und einer genauen Analyse intraoraler Fotos schlagen wir jedem Patienten einen Behandlungsplan vor. Dank der fachübergreifenden Zusammenarbeit mit Dr. Dario Repić, Facharzt für Endodontie und restaurative Zahnmedizin, können wir jedem Patienten während und nach der kieferorthopädischen Behandlung eine vollständige zahnärztliche Versorgung bieten.",
            "Jeder Patient erhält neben genauen Informationen über seine Mundgesundheit alle nötigen schriftlichen Hinweise zur Funktion und Pflege seiner Zahnspange sowie ein passendes Set für die Mundhygiene.",
          ],
        },
        {
          heading: "Ablauf der kieferorthopädischen Untersuchung und Behandlungsplan",
          paragraphs: [
            "Die erste kieferorthopädische Untersuchung besteht aus der klinischen Untersuchung von Mundhöhle, Zähnen, Biss und Weichgewebe sowie der Auswertung einer Panorama-Röntgenaufnahme (Orthopantomogramm). Haben Sie keine, können Sie sie bei uns in der Praxis anfertigen lassen; dafür steht ein digitales Röntgengerät neuester Technik mit minimaler Strahlendosis bereit. Für die Diagnose machen wir außerdem intraorale Fotos mit einer speziell angepassten Dentalkamera.",
            "Nach der ersten Diagnostik schlagen wir Ihnen einen Behandlungsplan vor, den wir mit dem Patienten bzw. mit den Eltern und dem Kind abstimmen.",
            "Danach werden Abdrücke für Studienmodelle genommen, damit der Ausgangszustand des Bisses vor der Behandlung, also vor dem Einsetzen der Zahnspange, dokumentiert ist. Der ganze Ablauf ist völlig transparent, und wir sorgen dafür, dass Sie jederzeit wissen, was Anfertigung und Pflege der Zahnspange kosten.",
          ],
        },
      ],
      faqs: [
        {
          id: "ortodoncija-1",
          question: "Was macht ein Kieferorthopäde?",
          answer:
            "<p>Ein Kieferorthopäde ist ein Facharzt, der Fehlstellungen der Zähne oder Kiefer diagnostiziert und behandelt. Er arbeitet auch daran, solchen Fehlstellungen vorzubeugen. Dafür verwendet er verschiedene kieferorthopädische Brackets und Geräte.</p>",
        },
        {
          id: "ortodoncija-2",
          question: "Warum brauche ich eine kieferorthopädische Behandlung?",
          answer:
            "<p>Es gibt zwei Hauptgründe für eine kieferorthopädische Behandlung: Funktion und Ästhetik. Funktionell verbessert sie das Zusammenspiel von Zähnen und Kiefer und erleichtert die Mundhygiene. Ästhetisch macht ein schönes, attraktives Lächeln das Gesicht ausdrucksstärker, stärkt Ihr Selbstvertrauen deutlich und hilft, einen besseren ersten Eindruck zu hinterlassen.</p>",
        },
        {
          id: "ortodoncija-3",
          question: "Wann ist der richtige Zeitpunkt für eine kieferorthopädische Behandlung?",
          answer:
            "<p>Für eine kieferorthopädische Behandlung gibt es keine Altersgrenze. Je früher eine Fehlstellung erkannt und behandelt wird, desto einfacher ist natürlich die Behandlung. Die American Association of Orthodontists empfiehlt die erste kieferorthopädische Untersuchung im Alter von 7 Jahren.</p>",
        },
        {
          id: "ortodoncija-4",
          question: "Wie erkenne ich eine Zahnfehlstellung?",
          answer:
            "<p>Bemerken Sie Engstand oder Lücken zwischen den Zähnen, einen falschen Biss, einen vorstehenden Ober- oder Unterkiefer oder treffen die Zähne beim Schließen des Mundes nicht richtig aufeinander, empfehlen wir eine Untersuchung beim Kieferorthopäden. Bei Kindern können auch Gewohnheiten wie Daumenlutschen zu Fehlstellungen führen.</p>",
        },
        {
          id: "ortodoncija-5",
          question: "Tut das Einsetzen einer Zahnspange weh?",
          answer:
            "<p>Das Einsetzen einer Zahnspange ist schmerzfrei. Bei manchen Patienten können in den ersten Tagen nach dem Einsetzen einer festsitzenden Zahnspange leichte Schmerzen oder ein Druckgefühl auftreten, ebenso nach den Kontrollterminen. Zur Linderung empfehlen wir ein Schmerzmittel.</p>",
        },
        {
          id: "ortodoncija-6",
          question: "Wie lange dauert die kieferorthopädische Behandlung?",
          answer:
            "<p>Die Dauer ist bei jedem Patienten anders. Die aktive Phase (Tragen der Zahnspange) dauert in der Regel 6 bis 30 Monate. Danach muss je nach Ausgangsbefund einige Monate bis ein Jahr lang ein Retainer getragen werden.</p>",
        },
        {
          id: "ortodoncija-7",
          question: "Wie oft muss ich zur Kontrolle?",
          answer:
            "<p>Je nach Art der Behandlung finden die Kontrollen alle 4 bis 10 Wochen statt.</p>",
        },
        {
          id: "ortodoncija-8",
          question: "Müssen mir Zähne gezogen werden?",
          answer:
            "<p>Bei starkem Engstand oder wenn ein Zahn verlagert ist (nicht durchgebrochen und im Knochen verborgen), kann das Ziehen eines Zahns Teil der Behandlung sein.</p>",
        },
        {
          id: "ortodoncija-9",
          question: "Kann ich ein Musikinstrument spielen oder Sport treiben?",
          answer:
            "<p>Ja. Eine kieferorthopädische Behandlung schließt diese Aktivitäten nicht aus. Wenn Sie Sport treiben, empfehlen wir einen Mundschutz, um Verletzungen im Mund und Schäden an der Zahnspange zu vermeiden.</p>",
        },
        {
          id: "ortodoncija-10",
          question: "Muss ich weiterhin zu meinem Zahnarzt gehen?",
          answer:
            "<p>Natürlich. Die Kontrollen bei Ihrem Zahnarzt sind äußerst wichtig. Mit einer Zahnspange lassen sich die Zähne schwerer reinigen, sodass sich leichter Beläge und damit Karies bilden. Ihr Zahnarzt beugt Karies mit regelmäßiger Reinigung und Kontrolle vor.</p>",
        },
        {
          id: "ortodoncija-11",
          question: "Muss ich nach dem Abnehmen der Zahnspange einen Retainer tragen?",
          answer:
            "<p>Fast immer lautet die Antwort JA. Nach Abschluss der Behandlung muss je nach Ausgangsbefund einige Monate bis ein Jahr lang ein Retainer getragen werden. Sonst können die Zähne relativ schnell in ihre alte Stellung zurückkehren, und Ihre Mühe und die Ihres Kieferorthopäden wären umsonst. Wie lange der Retainer getragen wird, hängt vom Ausgangsbefund ab.</p>",
        },
        {
          id: "ortodoncija-12",
          question: "Was kostet das alles?",
          answer:
            "<p>Bei der ersten Untersuchung erhalten Sie einen Kostenvoranschlag für die Behandlung. Der Preis umfasst die erste Zahnsteinentfernung und Politur, die aktiven Behandlungsphasen von Anfang bis Ende, das Einsetzen der festsitzenden Zahnspange, die Kontrollen, das Entfernen der Zahnspange und das erste Retainer-Set. Für die erste Untersuchung ist eine Aufnahme des ganzen Kiefers (Orthopantomogramm) nötig; wir fertigen sie in unserer Praxis an, und sie ist im Preis der Behandlung enthalten.</p><p>Wir verwenden je nach Wunsch des Patienten Metall- oder ästhetische Brackets. Ästhetische Brackets lassen die festsitzende Zahnspange unauffälliger wirken. Wir verwenden Produkte des renommierten Herstellers American Orthodontics und zeigen Ihnen Aussehen und Eigenschaften der einzelnen Brackets bei der Untersuchung.</p>",
        },
      ],
    },
    protetika: {
      slug: "protetika",
      meta: {
        title: "Zahnprothetik - Kronen und Brücken | Dental Centar Repić",
        description:
          "Zahnkronen und Brücken: Metallkeramik, metallfreie Keramik, Zirkonoxid und Glaskeramik. Dental Centar Repić, Trogir.",
      },
      title: "Zahnprothetik",
      lead:
        "Im Dental Centar Repić legen wir besonderen Wert darauf, die Funktion der Zähne und des gesamten Kausystems zu erhalten.",
      sections: [
        {
          paragraphs: [
            "Nach einer gründlichen klinischen Untersuchung und der Auswertung der Röntgenbilder von Zähnen und Kiefern schlagen wir jedem Patienten einen individuellen prothetischen Behandlungsplan vor, um einen oder mehrere verlorene Zähne zu ersetzen. Je nach Befund und finanziellen Möglichkeiten können verlorene Zähne mit herausnehmbarem oder festsitzendem Zahnersatz ersetzt werden.",
            "Herausnehmbarer Zahnersatz (Prothesen) ist bei Patienten mit vollständiger oder teilweiser Zahnlosigkeit angezeigt. Für einen festen Halt der Prothese gibt es mehrere Möglichkeiten, etwa kombiniert festsitzend-herausnehmbaren Zahnersatz, Teleskopkronen oder implantatgetragene Prothesen.",
            "Zum festsitzenden Zahnersatz gehören Veneers, Zahnkronen, Brücken und Brücken auf Implantaten. Wir verwenden moderne restaurative Materialien, mit denen wir hohe ästhetische und funktionelle Ansprüche erfüllen.",
          ],
        },
        {
          heading: "Metallkeramische Kronen und Brücken",
          paragraphs: [
            "Metallkeramische Kronen und Brücken werden in der Zahnprothetik seit Langem verwendet und gelten als eine Art Standard des festsitzenden Zahnersatzes. Sie sind bis heute die häufigste Wahl der Patienten, weil sie erschwinglich und langlebig sind. Das Metallgerüst der Krone oder Brücke schützt die Pfeilerzähne, während die Keramik die verlorenen Zähne ästhetisch nachbildet. Das Metallgerüst besteht meist aus einer Kobalt-Chrom-Nickel-Legierung, Dentalgold oder Titan. Die Keramik wird schichtweise auf das Gerüst aufgebrannt und verbindet sich chemisch mit dem Metall.",
            "Ist die Entscheidung für eine Krone oder Brücke mit dem Patienten gefallen, beschleift der Zahnarzt zuerst die Pfeilerzähne, um genug Platz für den Zahnersatz zu schaffen. Danach wird ein Abdruck genommen, nach dem das Labor den Zahnersatz anfertigt. Dabei wird auch der Keramikfarbton gewählt, der die natürlichen Zähne am besten nachbildet. Nach der Anfertigung im Labor und der Anprobe in der Praxis wird die Krone oder Brücke zunächst provisorisch und dann endgültig zementiert.",
            "Metallkeramischer Zahnersatz eignet sich zum Ersatz eines oder mehrerer verlorener Zähne im Front- oder Seitenzahnbereich. Bei richtiger Indikation hat er gute mechanische und ästhetische Eigenschaften.",
            "Die Hauptvorteile metallkeramischer Kronen und Brücken sind Preis, mechanische Belastbarkeit und Haltbarkeit. Laut Fachliteratur halten sogar 90–95 % der metallkeramischen Arbeiten zehn Jahre im Mund. Sie sind etwas günstiger als vollkeramischer (metallfreier) Zahnersatz.",
            "Ein Nachteil sind die im Vergleich zu vollkeramischen (metallfreien) Systemen begrenzten ästhetischen Möglichkeiten. Das liegt am dunkelgrauen Metallgerüst: Weil das Metall unter der Keramik das Licht nicht durchlässt, kann die Zahnfarbe weniger natürlich wirken. Patienten klagen manchmal auch über einen dunklen Zahnfleischrand am Kronenrand, denn mit der Zeit geben die Metalle des Gerüsts Ionen ab, die ins Zahnfleisch gelangen. Eine sorgfältige Präparation (Beschleifen) des Pfeilerzahns kann diese Nebenwirkung seltener machen.",
          ],
        },
        {
          heading: "Vollkeramische Kronen und Brücken (metallfreie Keramik)",
          paragraphs: [
            "Kronen und Brücken ganz aus Keramik sind die Alternative zum metallkeramischen Zahnersatz und werden auch „Porzellanzähne“ genannt. Die ästhetischen Ansprüche der Patienten steigen heute ständig und sind oft entscheidend für die Wahl der Versorgung verlorener Zähne. Vollkeramische Kronen und Brücken bilden das natürliche Aussehen der Zähne perfekt nach und sind darin der Metallkeramik überlegen. Anders als bei Metallkeramik, wo das Metallgerüst Durchgang und Streuung des Lichts behindert und so die Zahnfarbe beeinflusst, haben metallfreie Kronen und Brücken eine hervorragende Ästhetik, die natürliche Zähne nachbildet. Für den Patienten verläuft die Anfertigung ähnlich wie bei einer metallkeramischen Krone: Der Zahn wird beschliffen (um Platz für den Ersatz zu schaffen), und ein Abdruck wird genommen und ans Labor geschickt. Gleichzeitig wird der Farbton gewählt, der den Wünschen des Patienten und seinen eigenen Zähnen am besten entspricht. Die fertige Arbeit wird auf die beschliffenen Zähne zementiert („geklebt“). Für diesen Zahnersatz wird weniger beschliffen, sodass mehr gesunde Zahnsubstanz erhalten bleibt. Dank computergestützter Fertigung sitzen diese Kronen und Brücken genau am beschliffenen Zahnrand, was die Reinigung erleichtert und Speisereste sowie Zahnfleischentzündungen verringert.",
            "Neue Materialien haben metallfreier (Voll-)Keramik hervorragende mechanische Eigenschaften gegeben, ohne die Ästhetik zu beeinträchtigen. In Festigkeit und Haltbarkeit sind vollkeramische Kronen und Brücken mit metallkeramischen Systemen vergleichbar. Laut Fachliteratur halten 91–97 % der metallfreien Keramikarbeiten fünf Jahre oder länger im Mund.",
            "Metallfreie Keramikarbeiten können einen oder mehrere verlorene Zähne ersetzen. Neuere Materialien für vollkeramischen festsitzenden Zahnersatz sind leuzitverstärkte Lithiumdisilikat-Keramik, leuzit- oder lithiumdisilikatverstärkte Glaskeramik sowie Oxidkeramiken wie Aluminiumoxid- und Zirkonoxidkeramik. Metallfreie Kronen und Brücken sind etwas teurer als metallkeramische, weil ihre Herstellung in Praxis und Labor aufwendiger ist.",
          ],
        },
        {
          heading: "Kronen und Brücken aus Zirkonoxid",
          paragraphs: [
            "Zirkonoxidkeramik ist eine metallfreie Keramik, die dank ihrer hervorragenden ästhetischen und funktionellen Eigenschaften in der Zahnprothetik immer breiter eingesetzt wird, für festsitzenden Zahnersatz (Kronen und Brücken) im Front- oder Seitenzahnbereich. Sie gehört zu den Oxidkeramiken, die sehr bruchzäh, verschleiß- und hitzebeständig sowie korrosionsfest sind. Zirkonoxid wird seit über 50 Jahren in Medizin und Zahnmedizin verwendet. In der Orthopädie werden daraus Köpfe von Hüftprothesen gefertigt, in der Zahnmedizin neben Zahnersatz auch konfektionierte Wurzelstifte, kieferorthopädische Brackets und Implantataufbauten.",
            "Die Basis der Krone oder Brücke ist Zirkoniumdioxid, auf das Keramik aufgebrannt wird. Sie ist weiß und scheint am Rand des Zahnersatzes nicht durch. Zirkoniumdioxid ist biokompatibel und löst keine Allergien aus. Es leitet Strom und Wärme schlecht und trägt so zu weniger empfindlichen Zähnen bei. Zirkonoxidkeramik hat viele Vorzüge: erstklassige Ästhetik; außergewöhnliche Festigkeit; Biokompatibilität; und weniger Beschleifen des natürlichen Zahns dank der hohen Festigkeit des Materials (schon 0,4 mm Stärke reichen aus). Wegen ihrer großen Festigkeit und Härte lässt sich Zirkonoxidkeramik maschinell aus industriell gefertigten Blöcken herstellen. Dank computergestützter Fertigung sitzen Kronen und Brücken aus Zirkonoxid präzise am beschliffenen Zahnrand, was die Mundhygiene erleichtert und das Risiko einer Zahnfleischentzündung senkt.",
            "Ästhetisch ist dieses Material eine ausgezeichnete Wahl, denn es bildet die natürliche Transparenz und Farbe der Zähne hervorragend nach, und mit seiner hohen Festigkeit hält es mit den stärksten Metallen mit. Mechanisch ist Zirkonoxidkeramik mit Metallkeramik vergleichbar, wirkt aber natürlicher. Die endgültige Farbe hängt von der Keramikstärke, von Stärke und Farbe des Zements und von der Farbe des Zahnstumpfs ab. Dank der hohen Festigkeit sind auch sehr dünne Arbeiten möglich (mit einem Gerüst von nur 0,3 mm im Front- und 0,6 mm im Seitenzahnbereich), die Lichtdurchlässigkeit und Ästhetik des Materials bewahren. Es eignet sich für den Front- wie den Seitenzahnbereich und auch für große Versorgungen, die viele verlorene Zähne ersetzen.",
            "Kronen und Brücken aus Zirkonoxid sind etwas teurer als metallkeramische, weil ihre Herstellung in Praxis und Labor aufwendiger ist: Beschleifen, Abdrucknahme und Zementieren müssen sehr präzise sein, damit der Zahnersatz (Krone oder Brücke) genau auf den beschliffenen Zahn passt.",
          ],
        },
        {
          heading: "Glaskeramik: E.max und Empress",
          paragraphs: [
            "Glaskeramik entsteht durch kontrollierte Kristallisation von Glas. Es gibt mehrere Arten mit unterschiedlichen Eigenschaften: IPS Empress (leuzitverstärkte Glaskeramik), IPS Empress 2 (mit Lithiumdisilikat-Kern, fester und zäher als die erste) und IPS E.max, die ähnlich aufgebaut ist wie IPS Empress 2 (Lithiumdisilikat-Kern), aber deutlich fester als die beiden anderen.",
            "E.max-Press- oder Empress-Kronen und -Brücken sind vollkeramische Arbeiten aus Lithiumdisilikat-Keramik. Ihre hohe Lichtdurchlässigkeit ermöglicht eine hervorragende Ästhetik, weshalb sie besonders für Versorgungen in der ästhetischen Zone (dem beim vollen Lächeln sichtbaren Bereich) angezeigt ist. Sie ist fester als andere Glaskeramiken und angezeigt für Versorgungen im Frontzahnbereich: Einzelkronen oder dreigliedrige Brücken bis einschließlich zum zweiten Prämolaren, Einzelkronen im Front- oder Seitenzahnbereich, Veneers und indirekt gefertigte Füllungen (Inlays, Onlays). E.max-Keramik gibt es in vielen Farbtönen, sodass sie das natürliche Aussehen der Zähne sehr gut nachbildet.",
            "Drei Faktoren bestimmen die Farbe des endgültigen Zahnersatzes: die Farbe des beschliffenen Zahnstumpfs, die Farbe des Zements und die Farbe der Krone. Manchmal ist Lithiumdisilikat-Keramik nicht einfach einzusetzen, weil unterschiedlich gefärbte Zahnstümpfe durch die Krone durchscheinen könnten; mit Kenntnis des Materials und der Präparationstechnik lassen sich solche Probleme jedoch zur Zufriedenheit von Patient und Zahnarzt lösen.",
            "Durch die Kombination von Zementen unterschiedlicher Farbe und Transparenz lässt sich eine einheitliche Kronenfarbe erreichen, selbst wenn die beschliffenen Zähne ungleich gefärbt sind. Nach dem endgültigen Zementieren werden die Übergänge zwischen Krone und Zahn poliert, um die Pflege zu erleichtern.",
            "Für ein funktionell und ästhetisch gutes Ergebnis muss die Indikation für solche Arbeiten richtig gestellt werden. E.max-Kronen sind mechanisch etwas weniger belastbar als Zirkonoxidkeramik und daher nicht für große Versorgungen im Seitenzahnbereich zu empfehlen, sondern für Einzelkronen oder dreigliedrige Brücken im Frontzahnbereich bis einschließlich zum zweiten Prämolaren, Einzelkronen im Front- oder Seitenzahnbereich, Veneers und indirekt gefertigte Füllungen (Inlays, Onlays).",
          ],
        },
      ],
      faqs: [
        {
          id: "protetika-1",
          question: "Wie lange halten Kronen im Mund?",
          answer:
            "<p>Das ist schwer zu beantworten. Weltweit wie bei uns halten 85–95 % der Kronen aus allen Materialien über einen Zeitraum von 10 Jahren, was als erfolgreiche prothetische Behandlung gilt. Dennoch beeinflussen viele Faktoren die Haltbarkeit, etwa regelmäßige Kontrollen und Mundhygiene, der Zustand der Pfeilerzähne und des Zahnhalteapparats, die richtige Wahl des Zahnersatzes für den jeweiligen Fall und seine sorgfältige Anfertigung. Deshalb kann die Haltbarkeit von Patient zu Patient verschieden sein.</p>",
        },
        {
          id: "protetika-2",
          question: "Wie pflege ich Kronen und Brücken?",
          answer:
            "<ul><li>Patienten glauben manchmal fälschlich, ihre Zähne seien durch die „Überzüge“, also Kronen oder Brücken, geschützt und die Mundhygiene müsse nicht gründlich sein. Das ist ein großer Irrtum. Mit sorgfältiger Mundhygiene und regelmäßigen Kontrollen beim Zahnarzt kann der Patient wesentlich dazu beitragen, dass sein Zahnersatz länger hält und die übrigen Zähne gesund bleiben.</li><li>Kronen und Brücken sollten genauso geputzt werden wie natürliche Zähne: vom rechten oberen über den linken oberen zum linken unteren und rechten unteren Quadranten. Alle Flächen der Zähne und des Zahnersatzes sollten insgesamt drei Minuten lang geputzt werden. Empfohlen werden kreisende Bewegungen, und zum Schluss sollte „von Rot nach Weiß“ geputzt werden, also vom Zahnfleisch zum Zahn, um den Zahnfleischrückgang nach festsitzendem Zahnersatz zu verlangsamen. Viele Hilfsmittel erleichtern die Pflege, etwa Zahnseide mit Einfädlern, elektrische Zahnbürsten, Mundduschen und Interdentalbürsten. Plaque-Färbetabletten, frei im Handel erhältlich, zeigen, wie gründlich Sie putzen. Gern zeigen wir Ihnen die richtige Pflege, damit Ihr Zahnersatz gemeinsam länger hält, zu Ihrer und unserer Zufriedenheit.</li></ul>",
        },
      ],
    },
    "estetska-dentalna-medicina": {
      slug: "estetska-dentalna-medicina",
      meta: {
        title: "Ästhetische Zahnmedizin | Dental Centar Repić",
        description:
          "Zahnaufhellung, Keramik-Veneers, Smile Design, Zahnschmuck und Pulverstrahlreinigung. Ästhetische Zahnmedizin im Dental Centar Repić in Trogir.",
      },
      title: "Ästhetische Zahnmedizin",
      lead:
        "Ein schönes Lächeln hebt die Stimmung, stärkt das Selbstvertrauen und hilft Ihnen, einen positiven ersten Eindruck zu hinterlassen.",
      sections: [
        {
          heading: "Für Ihr gesundes und schönes Lächeln",
          paragraphs: [
            "Unser Anspruch ist, jedem Patienten ein schönes und gesundes Lächeln zu ermöglichen. Die ästhetische Zahnmedizin umfasst eine Reihe von Behandlungen, die ein schönes Lächeln formen, und folgt dabei bestimmten Richtlinien, um eine vollständige Harmonie zwischen den weichen und harten Strukturen der Zähne zu erreichen.",
            "Eine ästhetische zahnmedizinische Behandlung verbindet Verfahren aus verschiedenen Fachgebieten der Zahnmedizin (Kieferorthopädie, Parodontologie, Prothetik, Implantologie, restaurative Zahnmedizin), um Abweichungen von ästhetischen Maßstäben zu korrigieren und Funktion und Aussehen gesunder Zähne zu erreichen. Studien zeigen, dass ästhetische Behandlungen eine starke psychologische Wirkung haben, das Selbstvertrauen steigern und die Lebensqualität verbessern.",
          ],
        },
        {
          heading: "Unsere Behandlungen",
          bullets: [
            "Zahnaufhellung",
            "Keramik-Veneers",
            "Smile Design",
            "Zahnschmuck",
            "Pulverstrahlreinigung",
          ],
        },
      ],
    },
    endodoncija: {
      slug: "endodoncija",
      meta: {
        title: "Endodontie - Wurzelkanalbehandlung | Dental Centar Repić",
        description:
          "Behandlung von Zahnentzündungen und Wurzelkanälen mit maschineller Kanalaufbereitung und Röntgenkontrolle im Dental Centar Repić in Trogir.",
      },
      title: "Endodontie",
      lead:
        "Die Endodontie ist ein Fachgebiet der Zahnmedizin, eng verbunden mit der restaurativen Zahnmedizin und der Kariologie.",
      sections: [
        {
          heading: "Wurzelkanalbehandlung",
          paragraphs: [
            "Die restaurative Zahnmedizin und die Kariologie behandeln Erkrankungen der harten Zahnsubstanz, also des Dentins. Kommt es jedoch zu einer irreversiblen Entzündung des Zahnmarks (Pulpa), muss das Weichgewebe im Zahn behandelt werden, und zwar durch die Behandlung der Wurzelkanäle. Das geschieht mit der endodontischen Behandlung, die oft kurz Endodontie genannt wird.",
          ],
        },
        {
          heading: "Warum tut ein Zahn weh?",
          paragraphs: [
            "Zahnschmerzen sind ein unangenehmes Symptom, das die meisten Menschen mindestens einmal im Leben erleben. Ein Zahn kann aus verschiedenen Gründen schmerzen: Manchmal ist freiliegendes Dentin die Ursache; eine Entzündung des Zahnhalteapparats oder des Gewebes an der Wurzelspitze; eine Entzündung benachbarter Gewebe wie etwa der Nebenhöhlen, deren Schmerz in die Zähne ausstrahlt; oder eine Entzündung des Zahns selbst, also des Zahnmarks. Manchmal ist die Ursache nicht leicht zu finden, und der Zahnarzt nimmt eine gründliche Untersuchung, bestimmte klinische Tests und ein Röntgenbild vor. Ist die Ursache gefunden, wird über die Behandlung entschieden.",
          ],
        },
        {
          heading: "Wie entsteht eine Zahnentzündung?",
          paragraphs: [
            "Eine Entzündung des Zahnmarks (Pulpitis, „Zahnentzündung“) kann verschiedene Ursachen haben, etwa tiefe Karies, Zähneknirschen oder einen falschen Biss, der den Zahn überlastet. Bei einer Entzündung weiten sich die Blutgefäße im Zahnmark, die Kapillaren werden durchlässiger und Flüssigkeit tritt ins umliegende Gewebe aus, wodurch der Druck steigt. Das Zahnmark wird auch „Zahnnerv“ genannt, enthält aber neben Nervenfasern auch Blut- und Lymphgefäße und liegt in der Pulpakammer. Da die Pulpakammer starr ist und sich nicht ausdehnen kann, drückt der steigende Druck auf die Nerven im Zahnmark, und es entstehen Schmerzen. Sie können unterschiedlich sein und in benachbarte Bereiche ausstrahlen: Schmerzen an unteren Zähnen strahlen oft zum Ohr aus, Schmerzen an oberen Zähnen meist zum Auge.",
            "Bei einer reversiblen Entzündung des Zahnmarks treten die Schmerzen zeitweise auf, werden durch Reize ausgelöst (warm, kalt, Beißen) und verschwinden, wenn die Ursache beseitigt ist; bei einer irreversiblen Entzündung sind sie spontan und fast ständig da. Weitere Anzeichen können geschwollene Lymphknoten in der Nähe des betroffenen Zahns, Eiter aus einer Fistel am Zahnfleisch, ein lockerer Zahn, eine Schwellung um den Zahn, Fieber und ein schlechtes Allgemeinbefinden sein. Bleibt die Entzündung unbehandelt, breitet sich die Infektion über den Wurzelkanal in den umliegenden Knochen aus, und es bildet sich ein Granulom. Das Granulom zerstört den Knochen, und die Infektion kann sich über das Blut im ganzen Körper ausbreiten.",
          ],
        },
        {
          heading: "Wie wird eine Zahnentzündung behandelt?",
          paragraphs: [
            "Die Behandlung richtet sich nach der Ursache. Bei einer reversiblen Entzündung des Zahnmarks genügt es, die Ursache zu beseitigen (Karies, Frühkontakt, freiliegende Zahnhälse) und den Zahn mit einer Füllung zu versorgen; danach klingen die Beschwerden ab. Bei einer irreversiblen Entzündung des Zahnmarks reicht eine Füllung nicht aus, und eine endodontische Behandlung ist nötig.",
          ],
        },
        {
          heading: "Was ist eine endodontische Behandlung?",
          paragraphs: [
            "Ein endodontischer Eingriff („Endodontie“) ist die Behandlung der Wurzelkanäle eines Zahns, um ihn im Mund zu erhalten. Dabei wird das Zahnmark entfernt (umgangssprachlich: der Nerv gezogen), und die Wurzelkanäle werden mit speziellen Hand- oder maschinellen Feilen und einer Spüllösung gereinigt und gespült, die verbliebene Bakterien und Entzündungsprodukte entfernt und die Kanäle desinfiziert. Danach werden die Wurzelkanäle mit dafür bestimmten Materialien gefüllt. Die Behandlung erfordert ein trockenes und steriles Arbeitsfeld, damit keine Bakterien aus der Mundhöhle in den Knochen gelangen. Jede weitere Behandlung baut auf gut behandelten Wurzelkanälen auf. Wurzelbehandelte Zähne können Zahnersatz tragen und eine Prothese oder Implantate lange hinauszögern. Es lohnt sich immer, den eigenen Zahn zu retten, denn er ist der beste Ersatz.",
            "Wir sehen es als unsere Pflicht, die endodontische Behandlung schmerzfrei zu machen, was wir mit örtlicher Betäubung erreichen. Je nach Schwierigkeit des Falls können mehrere Termine nötig sein, um den Zahn richtig zu behandeln. Nur wenn jeder Schritt korrekt ausgeführt wird, ist die Behandlung erfolgreich. Nach Abschluss der Behandlung kann der Zahn eine Zeit lang druckempfindlich sein. Das ist eine übliche Nebenwirkung, wichtig ist, dass Schmerz und Empfindlichkeit allmählich nachlassen. Bei Bedarf können Sie eine Schmerztablette nehmen. Die Beschwerden sollten innerhalb weniger Tage verschwinden.",
            "Wir verfügen über moderne Geräte, mit denen wir die Kanallänge genau messen und die Wurzelkanäle maschinell aufbereiten. Die endgültige Wurzelfüllung kontrollieren wir mit einem Röntgenbild. So behandeln wir Ihren Zahn in möglichst kurzer Zeit und ersparen Ihnen unnötige Termine.",
          ],
        },
      ],
    },
    parodontologija: {
      slug: "parodontologija",
      meta: {
        title: "Parodontologie - Behandlung der Parodontitis | Dental Centar Repić",
        description:
          "Zahnsteinentfernung, parodontale Initialtherapie und parodontalchirurgische Eingriffe im Dental Centar Repić in Trogir.",
      },
      title: "Parodontologie",
      lead:
        "Reagieren Sie rechtzeitig und beugen Sie Erkrankungen und Zahnverlust vor.",
      sections: [
        {
          paragraphs: [
            "Im Dental Centar Repić entfernen wir Beläge professionell mit Schall- und Ultraschallinstrumenten, Pulverstrahl und Politur, und wir führen eine parodontale Initialtherapie und parodontalchirurgische Eingriffe durch, damit Ihre Zähne möglichst lange voll funktionsfähig bleiben.",
            "Die Hauptfaktoren für die Entstehung einer Parodontitis sind eine zunehmende Zahl von Bakterien im Mund und eine unzureichende Immunantwort des Körpers. Mehr Bakterien entstehen durch mangelnde Mundhygiene oder eine verringerte Speichelproduktion, denn Speichel hat eine natürliche Schutzfunktion. Die Immunantwort wird durch verschiedene Allgemeinerkrankungen, Stress und Rauchen geschwächt. Die Folge ist eine Parodontalerkrankung, die zu Entzündung und Abbau des Zahnhalteapparats führt: des Knochens, des Zahnfleischs (Gingiva) und des parodontalen Ligaments.",
            "Die Erkrankung beginnt meist ohne Beschwerden (es gibt keine Anzeichen, die vor ihrem Beginn warnen), und genau deshalb sind regelmäßige Besuche beim Zahnarzt wichtig, damit sie möglichst früh erkannt wird. Je früher eine Parodontalerkrankung festgestellt wird, desto besser lassen sich die betroffenen Zähne behandeln und länger im Mund erhalten.",
          ],
        },
        {
          heading: "Wie wird Parodontitis behandelt?",
          paragraphs: [
            "Ziel der Behandlung ist es, die Zahl der Bakterien im Mund zu verringern, den Biofilm (eine organisierte Bakterienschicht auf dem Zahn) von den Zähnen zu entfernen und die Immunantwort des Körpers zu stärken, um das Fortschreiten der Erkrankung zu stoppen.",
            "Gute Mundhygiene und regelmäßige professionelle Entfernung von Plaque und Zahnstein sind der Schlüssel zur Vorbeugung und Behandlung der Parodontitis. Putzen Sie mindestens zweimal täglich mit Zahnbürste und Zahnpasta, immer zusammen mit Zahnseide oder einer Munddusche (für enge Zahnzwischenräume) und Interdentalbürsten (für breitere Zwischenräume und freiliegende Wurzelgabelungen).",
            "Bei der parodontalen Initialtherapie werden Zahnstein und Beläge über und unter dem Zahnfleischrand mit einem Ultraschallgerät entfernt. Danach folgen eine tiefe mechanische Reinigung und die Politur der Zahnwurzeln.",
            "Die parodontalchirurgische Therapie ist bei fortgeschrittener Parodontitis (Parodontose) angezeigt, weil sie den Zugang zu tiefen Zahnfleischtaschen und das Entfernen der dortigen Beläge ermöglicht. Mit regenerativen chirurgischen Verfahren lässt sich der Zahnhalteapparat wieder aufbauen, was die langfristige Prognose der betroffenen Zähne verbessern kann. Die Verfahren dienen auch dazu, eine ästhetisch ansprechende Form von Zähnen und Zahnfleisch wiederherzustellen: Eine Parodontalerkrankung führt zu Zahnfleischrückgang und empfindlichen Zahnwurzeln, und mit der regenerativen Therapie lassen sich die Wurzeln wieder bedecken und die Empfindlichkeit verringern.",
          ],
        },
        {
          heading: "Erkennen Sie die Anzeichen einer Parodontitis",
          bullets: [
            "Zahnfleischbluten",
            "geschwollenes Zahnfleisch, starke Rötung und Schmerzen",
            "Zahnfleischrückgang",
            "Absonderungen und Eiter aus dem Zahnfleisch",
            "wandernde Zähne und größere Lücken zwischen den Zähnen",
            "lockere Zähne",
            "Mundgeruch",
          ],
        },
      ],
    },
    "oralna-kirurgija": {
      slug: "oralna-kirurgija",
      meta: {
        title: "Oralchirurgie - Zahnentfernung, Alveotomie und Wurzelspitzenresektion | Dental Centar Repić",
        description:
          "Zahnentfernung, Entfernung von Weisheitszähnen durch Alveotomie und Wurzelspitzenresektion unter örtlicher Betäubung im Dental Centar Repić in Trogir.",
      },
      title: "Oralchirurgie",
      lead:
        "Oralchirurgische Eingriffe im Dental Centar Repić führen ausgezeichnete Ärzte mit langjähriger Erfahrung durch.",
      sections: [
        {
          heading: "Oralchirurgie auf höchstem Niveau",
          paragraphs: [
            "Die Oralchirurgie ist das chirurgische Fachgebiet der Zahnmedizin. Zur Arbeit des Oralchirurgen gehören das Ziehen von Zähnen, die Entfernung verlagerter oder retinierter Zähne durch Alveotomie, Operationen von Zysten im Knochen des Ober- und Unterkiefers, Wurzelspitzenresektionen, Frenektomien, das Einsetzen von Zahnimplantaten und die Anhebung des Kieferhöhlenbodens im Oberkiefer (Sinuslift). Der häufigste Eingriff ist die Extraktion (das Ziehen eines Zahns). Trotz aller Bemühungen von Zahnärzten und Patienten, Zähne möglichst lange zu erhalten, muss ein Zahn manchmal wegen tiefer Karies, eines Bruchs oder einer Parodontalerkrankung gezogen werden.",
            "Das Ziehen von Zähnen ist ein Routineeingriff unter örtlicher Betäubung. Vor jedem chirurgischen Eingriff in der Mundhöhle erhebt der Oralchirurg eine genaue Krankengeschichte. Wichtig ist, alle Medikamente anzugeben, die der Patient einnimmt, damit sie die Blutung während und nach dem Eingriff und die Heilung der Wunde nicht beeinflussen. Nach dem Eingriff wird die Wunde genäht oder heilt von selbst. Der Patient erhält Hinweise, wie er Schwellung und Schmerzen lindern kann, und eine Woche nach dem Ziehen wird eine Kontrolle beim Zahnarzt empfohlen, um die Heilung zu prüfen und gegebenenfalls die Fäden zu ziehen.",
          ],
        },
        {
          heading: "Was ist eine Alveotomie?",
          paragraphs: [
            "Neben einfachen Extraktionen entfernen wir auch verlagerte oder retinierte Zähne durch eine Alveotomie (Alveolotomie). Jeder Zahn im Kiefer kann verlagert oder retiniert sein. Verlagerte Zähne können wegen eines mechanischen Hindernisses nicht an ihren Platz durchbrechen, retinierte Zähne brechen aus nicht mechanischen Gründen nicht durch. Am häufigsten verlagert sind die Weisheitszähne, also die dritten Molaren. Ist der Knochen über der Krone eines verlagerten Zahns mit der Mundhöhle verbunden, lässt sich die Zahnreihe schwer reinigen, und das umliegende Weichgewebe entzündet sich, die sogenannte Perikoronitis. Verursacht ein verlagerter oder retinierter Zahn Beschwerden, empfehlen wir seine Entfernung durch Alveotomie.",
            "Die Alveotomie ist ein oralchirurgischer Eingriff unter örtlicher Betäubung und daher für den Patienten völlig schmerzfrei. Der Patient ist die ganze Zeit wach und kann sich mit dem Oralchirurgen verständigen. Vor der Alveotomie erhebt der Oralchirurg eine genaue Krankengeschichte. Wichtig ist, alle Medikamente anzugeben, damit sie die Blutung während und nach dem Eingriff und die Heilung der Wunde nicht beeinflussen. Die Alveotomie beginnt mit der örtlichen Betäubung, danach folgt ein Schnitt in die Schleimhaut mit dem Skalpell. Der Kieferknochen wird mit einem Bohrer geöffnet, damit der Oralchirurg an das Operationsgebiet gelangt, und der im Kiefer verbliebene Zahn wird mit speziellen chirurgischen Instrumenten (Meißel, Hebel) bei möglichst geringer Belastung des umliegenden Gewebes aus dem Knochen entfernt. Nach dem Eingriff wird die Wunde für eine bessere Heilung genäht, und der Patient erhält Hinweise für die Zeit danach. Nach sieben Tagen folgen eine Kontrolle in der Praxis und das Fädenziehen.",
          ],
        },
        {
          heading: "Was ist eine Wurzelspitzenresektion?",
          paragraphs: [
            "Die Wurzelspitzenresektion (Apikoektomie) ist ein oralchirurgischer Eingriff, bei dem die Wurzelspitze eines wurzelbehandelten Zahns entfernt wird. Sie wird von einem Facharzt für Oralchirurgie durchgeführt. Nötig ist sie, wenn die Wurzelbehandlung Schmerzen und Entzündung nicht beseitigt hat oder wenn sich ein Granulom an der Wurzelspitze selbst nach wiederholter Behandlung laut Kontrollröntgen nicht zurückgebildet hat. Dann empfiehlt sich die chirurgische Entfernung der Wurzelspitze, damit der Zahn im Kiefer bleiben kann.",
            "Die Wurzelspitzenresektion erfolgt unter örtlicher Betäubung und ist daher völlig schmerzfrei. Vorher erhebt der Oralchirurg eine genaue Krankengeschichte. Wichtig ist, alle Medikamente anzugeben, damit sie die Blutung während und nach dem Eingriff und die Wundheilung nicht beeinflussen. Der Ablauf im Einzelnen: Der Eingriff beginnt mit der örtlichen Betäubung, und der Patient ist die ganze Zeit wach und kann sich mit dem Oralchirurgen verständigen. Ist der Bereich betäubt, setzt der Oralchirurg einen waagrechten Schnitt auf Höhe der Wurzelspitze des betroffenen Zahns und öffnet den Knochen mit einem Bohrer, um an das Operationsgebiet zu gelangen. Die Wurzelspitze wird abgetrennt und das entzündlich veränderte Gewebe aus dem Knochen ausgeschabt. Bei Bedarf kann dann eine retrograde Wurzelfüllung gelegt werden, um die Kanäle abzudichten, danach wird die Wunde genäht. Der Eingriff dauert etwa eine halbe bis eine Stunde, je nach Knochendicke an der betreffenden Stelle. Danach bleibt nur eine kaum sichtbare Narbe an der Schleimhaut, und der Knochendefekt füllt sich innerhalb einiger Monate.",
            "Die Wurzelspitzenresektion wird durchgeführt, wenn eine Wurzelbehandlung nicht ausreicht, um eine Entzündung im Knochen zu heilen, die sich aus den Wurzelkanälen ausgebreitet hat, oder wenn Zysten mit der Zahnwurzel verbunden sind. Danach ist die Wurzel etwas kürzer, aber der Zahn bleibt im Kiefer und behält Funktion und Aussehen.",
          ],
        },
      ],
      faqs: [
        {
          id: "oralna-kirurgija-1",
          question: "Wann sollten verlagerte oder retinierte Zähne entfernt werden?",
          answer:
            "<ul><li>bei wiederholter Perikoronitis</li><li>bei Abszessen</li><li>bei Erkrankungen des Zahnmarks oder des Zahnhalteapparats</li><li>bei starker Zerstörung des Zahns durch Karies</li><li>bei Auflösung der Wurzel des Nachbarzahns</li></ul>",
        },
        {
          id: "oralna-kirurgija-2",
          question: "Welche Anzeichen hat eine Perikoronitis?",
          answer:
            "<ul><li>Schmerzen, die ins Ohr und ins Kiefergelenk ausstrahlen</li><li>eingeschränkte Mundöffnung (Kieferklemme, Trismus)</li><li>Schluckbeschwerden</li><li>geschwollene Lymphknoten unter dem Kieferrand und am Hals</li><li>Austritt von Eiter beim Druck auf das geschwollene Weichgewebe über dem Zahn</li></ul>",
        },
        {
          id: "oralna-kirurgija-3",
          question: "Wann wird von einer Alveotomie abgeraten?",
          answer:
            "<ul><li>bei einem Zahn, der weder örtliche noch allgemeine Beschwerden verursacht</li><li>bei höherem Alter des Patienten (der Knochen ist schlechter durchblutet)</li><li>bei einer belasteten Krankengeschichte</li></ul>",
        },
        {
          id: "oralna-kirurgija-4",
          question: "Was hilft gegen Schmerzen und Schwellung nach dem Ziehen eines Zahns?",
          answer:
            "<p>Kühlen Sie die Stelle von außen, essen Sie lauwarme, breiige Kost und verzichten Sie in den nächsten Tagen auf Heißes und Kohlensäurehaltiges. Raucher sollten nicht rauchen, damit die Wunde leichter und schneller heilt. Bei Bedarf können Sie ein Schmerzmittel nehmen, meiden Sie aber Präparate mit Acetylsalicylsäure (Andol, Aspirin), die die Blutung verlängern können.</p>",
        },
      ],
    },
    "rtg-dijagnostika": {
      slug: "rtg-dijagnostika",
      meta: {
        title: "Röntgendiagnostik - Einzelzahn- und Panoramaaufnahmen | Dental Centar Repić",
        description:
          "Digitale Einzelzahn- und Panoramaaufnahmen mit bis zu 90 % weniger Strahlung, direkt vor oder nach Ihrer Behandlung, im Dental Centar Repić in Trogir.",
      },
      title: "Röntgendiagnostik",
      lead:
        "Einzelzahn- und Panoramaaufnahmen mit moderner digitaler Technik und niedrigster Strahlendosis.",
      sections: [
        {
          heading: "Röntgendiagnostik (intraorale Aufnahmen und Panoramaaufnahme)",
          paragraphs: [
            "Röntgenaufnahmen von Zähnen und Kiefern sind in allen Bereichen der Zahnmedizin ein wichtiges diagnostisches Mittel, denn sie zeigen alle anatomischen und krankhaften Strukturen im Knochen, die bei der klinischen Untersuchung nicht sichtbar sind. Sie sind für die Planung fast jedes zahnmedizinischen Eingriffs nötig.",
            "Frühere herkömmliche Röntgensysteme zeigten Knochenstrukturen schlechter, bei deutlich höherer Strahlung für Patient und Behandler. Die digitale Radiologie hat die Strahlendosis gesenkt und den Umgang mit den Bildern vereinfacht. Die moderne digitale Technik im Dental Centar Repić garantiert Ihnen die niedrigste Strahlendosis (bis zu 90 % weniger Strahlung als bei klassischen Röntgenaufnahmen). Wir können unseren Patienten die Aufnahme direkt vor oder nach dem Eingriff anbieten, damit sie nicht mehrmals kommen müssen.",
            "Das Dental Centar Repić bietet Aufnahmen einzelner Zähne (intraorale Zahnfilmaufnahmen) und beider Kiefer (Orthopantomogramm) an. Intraorale Aufnahmen zeigen einzelne Zähne in tatsächlicher Größe; eine Zahnfilmaufnahme zeigt einen Zahn oder zwei benachbarte Zähne. Das Orthopantomogramm (OPG, Panoramaaufnahme) ist die häufigste Aufnahme in der Zahnmedizin: Es zeigt krankhafte Veränderungen um alle Zahnwurzeln, gibt Einblick in den Zustand des Knochens bei Parodontitis und zeigt Karies an den Zähnen. Die Strahlung beim Orthopantomogramm lässt sich so anpassen, dass es auch bei Kindern angefertigt werden kann, da es für die Planung einer kieferorthopädischen Behandlung nötig ist.",
            "Die Aufnahmen der Patienten werden auf dem Computer gespeichert, damit sie jederzeit verfügbar sind, und können auf Wunsch per E-Mail verschickt werden. Die digitale Speicherung erlaubt die Bearbeitung mit Software (Schärfen, Vergrößern, Verkleinern, Einfärben, weitere Diagnostik wie Messungen), um zusätzliche Einblicke in die Mundgesundheit zu gewinnen und dem Arzt die Diagnose zu erleichtern.",
            "In allen Behandlungsräumen sind die Computer mit einer zentralen Datenbank vernetzt, sodass alle digitalen Röntgendaten jederzeit in jedem Raum sichtbar sind. Das verkürzt die Auswertung erheblich und ermöglicht eine bessere Beratung zwischen Facharzt und Patient.",
            "Röntgenaufnahmen werden Schwangeren nicht empfohlen, besonders nicht im ersten Trimester.",
          ],
        },
      ],
    },
    "djecja-dentalna-medicina": {
      slug: "djecja-dentalna-medicina",
      meta: {
        title: "Kinderzahnmedizin - Zahnarzt für Kinder | Dental Centar Repić",
        description:
          "Erster Zahnarztbesuch um das erste Lebensjahr, Fluoridierung, Fissurenversiegelung und schmerzfreie Betäubung für Kinder im Dental Centar Repić in Trogir.",
      },
      title: "Kinderzahnmedizin",
      lead:
        "Die Mundgesundheit von Kindern liegt uns besonders am Herzen.",
      sections: [
        {
          heading: "Zahnmedizin für Kinder",
          paragraphs: [
            "Frühe Besuche beim Zahnarzt prägen gute Gewohnheiten bei der Mundhygiene und helfen, Ängste abzubauen, in der Kindheit wie im ganzen Leben. Der beste Zeitpunkt für den ersten Zahnarztbesuch ist um den ersten Geburtstag des Kindes.",
            "Mit Spiel und einer dem Alter des Kindes angepassten Ansprache versuchen wir, die Behandlung unterhaltsam und möglichst schonend zu gestalten. Die Zähne der Kleinsten bestreichen wir mit Fluoridgelen, die Karies vorbeugen. Diese Methode ist für das Kind völlig schmerzfrei.",
            "Wir erklären Eltern, wie wichtig die Behandlung von Milchzähnen ist, um späteren Problemen an den bleibenden Zähnen und Fehlstellungen durch den zu frühen Verlust von Milchzähnen vorzubeugen. Junge bleibende Zähne versiegeln wir, damit sich dort lange keine Karies bildet. Für die Fissurenversiegelung muss der Zahn nicht beschliffen werden.",
            "Muss ein Zahn wegen Karies gebohrt werden, betäuben wir schmerzfrei: Zuerst bestreichen wir die Einstichstelle mit einem Betäubungsgel, damit die Spritze nicht wehtut.",
            "Dank der fachübergreifenden Zusammenarbeit unserer Fachärzte Dr. Dario Repić und Dr. Slavica Pejda Repić, Fachärztin für Kieferorthopädie, erhalten Sie und Ihr Kind die beste Beratung und die bestmögliche Behandlung. Da wir während Wachstum und Entwicklung Ihres Kindes besonders auf Vorbeugung achten, beugen wir bestimmten Fehlstellungen und unangenehmen Erfahrungen beim Zahnarzt vor.",
            "Für eine erfolgreiche Behandlung erhalten unsere kleinen Patienten als Belohnung ein Tapferkeitsdiplom oder eine Urkunde.",
          ],
        },
      ],
    },
  },

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
