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
        "Die Implantologie ist der am schnellsten wachsende Bereich der Zahnmedizin. Mit Implantaten ersetzen wir einen oder mehrere verlorene Zähne im Ober- oder Unterkiefer. Die eingesetzten Implantate ersetzen die Zahnwurzel und verwachsen innerhalb von 3 bis 6 Monaten mit dem Kieferknochen (Osseointegration). Während dieser Zeit ist der Patient nicht zahnlos, sondern trägt einen provisorischen Zahnersatz, der Ästhetik und Funktion bis zur Fertigstellung des endgültigen Zahnersatzes sichert. Der endgültige Zahnersatz kann eine Einzelkrone, eine Brücke oder eine Prothese auf Implantaten sein. Das Implantat im Knochen hilft außerdem, die Knochenmenge des Kieferkamms zu erhalten: Es belastet den Knochen ähnlich wie ein natürlicher Zahn, sodass es nicht zum Knochenabbau kommt, der sonst eine Folge des Zahnverlusts ist.",
      sections: [
        {
          heading: "Was sind Zahnimplantate",
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
            "Fehlt ein einzelner Zahn und sind die Nachbarzähne gesund, empfehlen wir ein Implantat, damit die gesunden Nachbarzähne nicht beschliffen werden müssen. Auf das Implantat wird anschließend eine Krone gesetzt.",
            "Träger von Vollprothesen haben oft Probleme mit dem schlechten Halt ihrer Prothese, die sich mit einer Prothese auf Implantaten lösen lassen. Im völlig zahnlosen Oberkiefer reichen für den Halt einer Prothese meist vier Implantate, im völlig zahnlosen Unterkiefer meist zwei. Prothesen auf Implantaten führen im Vergleich zu herkömmlichen Prothesen zu einer höheren Zufriedenheit der Patienten: Sie sind ästhetischer und stabiler, erleichtern das Kauen, schränken die Funktion weniger ein und sind leichter zu reinigen, und das Sprechen fällt leichter.",
            "Implantate können sofort (unmittelbar nach dem Einsetzen) oder konventionell (nach der Einheilzeit) belastet werden. Studien zeigen, dass konventionell belastete Implantate eine etwas höhere Überlebensrate im Mund haben.",
            "Die Implantate, die wir täglich verwenden, bestehen aus hochwertigem, widerstandsfähigem und biokompatiblem Titan, und dank örtlicher Betäubung ist das Einsetzen völlig schmerzfrei.",
            "Voraussetzung für ein Implantat sind ausreichend Knochenmenge und -qualität. Dies prüfen wir vor der Planung der Behandlung mit einer Panorama-Röntgenaufnahme und einem CT. Ist zu wenig Knochen vorhanden, sind ein Knochenaufbau und ein Sinuslift möglich.",
          ],
        },
        {
          heading: "Was ist ein Knochenaufbau?",
          paragraphs: [
            "Nach dem Verlust eines Zahns bildet sich der Knochen zurück, weil er nicht mehr über die Zahnwurzel durch das Kauen belastet wird. Das Knochenvolumen nimmt ab, und es bleibt nicht genug Platz für ein Implantat. Der Knochenabbau verläuft schneller, wenn die gezogenen Zähne Entzündungen an der Wurzel hatten, weil die Infektion den Knochen zusätzlich zerstört hat. Jedes Implantat braucht ausreichend Knochen, der es stützt und stabilisiert und verhindert, dass sich das Zahnfleisch um das Implantat zurückzieht und später ästhetische Probleme entstehen, etwa wenn das Implantat durch die Schleimhaut durchscheint. Der Knochenaufbau (Augmentation) ist ein chirurgischer Eingriff, mit dem verlorener Knochen ersetzt wird. Dafür kann künstlich hergestellter Knochen synthetischen oder tierischen Ursprungs verwendet werden oder körpereigener Knochen (autologer Knochen), der im Mund (Unterkiefer) oder außerhalb des Mundes (z. B. an der Hüfte) entnommen, zerkleinert und an der fehlenden Stelle eingesetzt wird. Körpereigener Knochen gilt als Goldstandard beim Knochenaufbau, weil er am besten einheilt und das Volumen am besten vergrößert. Dafür muss eine ausreichende Knochenmenge chirurgisch entnommen werden. Kleine und mittelgroße Knochendefekte werden meist mit künstlich hergestelltem Knochen synthetischen oder tierischen Ursprungs ausgeglichen. Über die Methode entscheidet der Facharzt für Oralchirurgie. Die Heilung von Knochen und Weichgewebe nach dem Aufbau kann mit körpereigenen Wachstumsfaktoren nach der PRF-Methode (plättchenreiches Fibrin) oder mit einer Biomembran zur Stabilisierung des Blutgerinnsels und des Knochenersatzes verbessert werden. Bei der PRF-Methode wird plättchenreiches Fibrin aus dem Blut des Patienten gewonnen und in das Operationsgebiet eingebracht. Die Blutplättchen setzen dort Wachstumsfaktoren frei, die die Bildung neuer Blutgefäße und neuen Knochens anregen. Die Methode ist unbedenklich, da nur das gefilterte Blut des Patienten verwendet wird, um die Heilung zu fördern. Die eingesetzten Materialien werden nach und nach abgebaut, der Knochen baut sich um, und es entsteht neue, feste Knochenmasse. Der Knochenaufbau erfolgt unter örtlicher Betäubung und ist völlig schmerzfrei. Nach dem Eingriff muss der Knochen etwa acht Monate einheilen, bevor das Implantat eingesetzt werden kann.",
          ],
        },
        {
          heading: "Was ist ein Sinuslift?",
          paragraphs: [
            "Fehlt Knochen in den seitlichen Bereichen des Oberkiefers, ist eine Anhebung des Kieferhöhlenbodens (Sinuslift) angezeigt. Bei diesem oralchirurgischen Eingriff wird der Boden der Kieferhöhle angehoben und gleichzeitig Knochen aufgebaut, damit genug Platz für die Implantate entsteht. Der Sinuslift erfolgt unter örtlicher Betäubung und ist völlig schmerzfrei.",
            "Je nach Umfang unterscheidet man einen kleinen und einen großen Sinuslift. Fehlen für das Implantat nur etwa 2 mm Knochen, wird ein kleiner Sinuslift durchgeführt, bei dem Anhebung des Kieferhöhlenbodens, Knochenaufbau und Einsetzen des Implantats gleichzeitig erfolgen. Der Eingriff erfolgt mit der Osteotom-Technik, benannt nach dem Instrument, mit dem die Kieferhöhlenschleimhaut angehoben wird. Nach dem kleinen Sinuslift muss das Implantat etwa sechs Monate mit dem Knochen verwachsen, bevor es mit Zahnersatz (Krone, Brücke) belastet werden kann.",
            "Ein großer Sinuslift wird durchgeführt, wenn mehr Knochenvolumen fehlt, und erfolgt über einen seitlichen Zugang. Manchmal kann das Implantat auch hier gleichzeitig eingesetzt werden. Fehlt jedoch viel Knochen, empfiehlt sich ein Sinuslift mit späterer Implantation. Zwischen Sinuslift und Implantation müssen dann 6 bis 8 Monate vergehen, sonst drohen Komplikationen und ein Misserfolg des Eingriffs. Der Facharzt für Oralchirurgie entscheidet anhand Ihrer Befunde, welcher Eingriff für Sie nötig ist.",
          ],
        },
        {
          heading: "Welche Komplikationen sind beim Sinuslift möglich?",
          paragraphs: [
            "Der Sinuslift hat eine hohe Erfolgsrate, und Komplikationen sind selten, aber möglich. Sie können während des Eingriffs oder danach auftreten. Beim Anheben des Kieferhöhlenbodens kann die Kieferhöhlenschleimhaut einreißen, denn ihre Dicke ist von Patient zu Patient verschieden. Reißt sie ein, verschließt der Oralchirurg den Defekt mit verschiedenen Techniken und beugt so späteren Komplikationen vor, etwa einer Entzündung der Kieferhöhle, wenn Knochenersatzmaterial in die Kieferhöhle gelangt.",
            "Nach dem Sinuslift ist eine leichte Schwellung möglich, die nach einigen Tagen abklingt. Auch eine Entzündung der Kieferhöhle ist aus verschiedenen Gründen möglich, etwa wenn eine Infektion aus der Mund- oder Nasenhöhle eindringt, das Implantat oder Knochenmaterial durch die Schleimhaut dringt oder der Eingriff an einer erkrankten Kieferhöhle erfolgt. Voraussetzung für einen Sinuslift sind gesunde Nebenhöhlen. Hat der Patient bereits eine Erkrankung der Nebenhöhlen, ist vor dem Eingriff eine Beratung bei einem HNO-Arzt nötig.",
          ],
        },
        {
          heading: "All-on-4",
          paragraphs: [
            "All-on-4 ist eine Form der implantatprothetischen Versorgung eines völlig zahnlosen Ober- oder Unterkiefers. Die Methode ist nicht neu, sondern seit Jahren bekannt und in der Praxis erfolgreich. Nach dem Verlust der Zähne verliert der Kieferknochen mit der Zeit an Substanz. Ist noch genug Knochen vorhanden, empfiehlt sich eine größere Zahl von Implantaten, weil der Zahnersatz dann mehr Stützen hat. Bei manchen Patienten mit zu wenig oder schlechtem Knochen lassen sich jedoch nur wenige Implantate setzen. Ist der Patient für All-on-4 geeignet, tragen bereits vier Implantate (zwei gerade und zwei schräg gesetzte, wie der Oralchirurg beim Einsetzen festlegt) den gesamten Zahnbogen. Nach dem Einsetzen der Implantate erhält der Patient noch am selben Tag oder wenige Tage später einen provisorischen festsitzenden Zahnersatz und nach drei Monaten den endgültigen. So bleibt die zahnlose Zeit so kurz wie möglich, was die Zufriedenheit der Patienten erhöht. Möglich macht das die Sofortbelastung: Die Implantate werden direkt beim Einsetzen in den Knochen belastet, sodass die Einheilzeit nicht abgewartet werden muss. Die All-on-4-Methode hat viele Vorteile: Sinuslift und Knochenaufbau im Oberkiefer werden vermieden, was die Erholung verkürzt und die Kosten senkt; auch Patienten, die lange zahnlos waren und wenig Knochen haben, können einen festsitzenden Zahnersatz bekommen; es werden nur vier Implantate benötigt, die den Zahnersatz stabil im Mund halten und ein Gefühl wie bei natürlichen Zähnen geben, ohne die Angst, dass er wackelt oder herausfällt wie bei einer herausnehmbaren Prothese. Der Zahnersatz ist verschraubt und kann vom Zahnarzt bei Bedarf leicht zur Kontrolle und Reparatur abgenommen werden. Auch die Pflege ist einfach: mit Zahnbürste und Zahnpasta sowie einer Munddusche oder Zahnseide um die Implantate. Bei guter Mundhygiene können die Implantate ein Leben lang halten, und nur der Zahnersatz wird bei Bedarf erneuert.",
            "All-on-4 ist günstiger als das Einsetzen einer größeren Zahl von Implantaten samt zusätzlicher oralchirurgischer Eingriffe. So wird festsitzender Zahnersatz auf Implantaten für mehr Patienten erschwinglich.",
          ],
        },
      ],
      faqs: [
        {
          id: "implantologija-1",
          question: "Was ist ein Zahnimplantat?",
          answer:
            "<p>Ein Zahnimplantat ist eine Schraube aus Titan, die in ihrer Form einer Zahnwurzel ähnelt. Es wird nach einem zuvor festgelegten Behandlungsplan chirurgisch in den Knochen des Ober- oder Unterkiefers eingesetzt. Zwei bis sechs Monate nach dem Einsetzen kann der Zahnersatz befestigt werden, denn das Implantat dient als Basis für eine Krone, Brücke oder Prothese.</p>",
        },
        {
          id: "implantologija-2",
          question: "Ablauf einer Implantatbehandlung",
          answer:
            "<ul><li>1.</li><li>Die erste Untersuchung umfasst eine gründliche Begutachtung und Analyse des Zustands Ihrer Zähne, einschließlich einer genauen Auswertung der Panorama-Röntgenaufnahme der Kiefer (Orthopantomogramm). Bei der Planung berücksichtigen wir den klinischen Befund, Ihre Wünsche und Erwartungen sowie Ihr Budget und stellen Ihnen daraufhin die möglichen Behandlungswege vor. Damit Sie die Möglichkeiten genau verstehen, erklären wir Ihnen die Situation anhand von intraoralen Fotos Ihrer Zähne und von Demonstrationsmodellen.</li><li>Nach der ersten Untersuchung und der Wahl der Behandlung stellen wir Ihnen den genauen Behandlungsablauf vor. Dazu gehören das Ziehen nicht erhaltungswürdiger Zähne, die Entfernung von Zahnstein und das Polieren sowie die Sanierung der vorhandenen Zähne. Bei Bedarf wird noch am selben Tag ein provisorischer Zahnersatz eingesetzt, damit Sie während der Behandlung normal kauen und gut aussehen. Erfordert der Befund weitere Diagnostik, empfehlen wir eine genaue dreidimensionale Aufnahme (CT) des Kiefers, in den die Implantate gesetzt werden. Das CT ist nötig, um Knochenmenge und -qualität genau zu bestimmen und die beste Position für das Implantat festzulegen. Klinischer Befund, Panorama-Röntgenbild und CT ermöglichen einen genauen Behandlungsplan, einschließlich der Anzahl und Verteilung der Implantate und eines eventuell nötigen Knochenaufbaus.</li><li>2.</li><li>Die nächste Phase ist das Einsetzen der Implantate. Zur Vorbereitung spülen Sie den Mund mit einem Antiseptikum, danach wird der Bereich örtlich betäubt. Es folgt das chirurgische Einsetzen des Implantats (Schnitt, Freilegen des Kieferkamms, Vorbereitung des Implantatbetts, Einsetzen des Implantats, Naht der Wunde, Kontrollröntgen). Das Einsetzen eines Implantats ist nicht schmerzhaft. Danach erhalten Sie mündliche und schriftliche Anweisungen für eine gute Wundheilung und eine erfolgreiche Osseointegration (Verwachsen des Implantats mit dem Knochen). Die Fäden werden nach sieben Tagen gezogen.</li><li>3.</li><li>Je nach Befund folgt der nächste Termin zwei bis sechs Monate nach dem Einsetzen. Dabei werden die Implantate freigelegt und Aufbauteile eingesetzt, die dem Zahnfleisch helfen, zu heilen und die richtige Form anzunehmen.</li><li>4.</li><li>Nach dem Einsetzen der Aufbauteile wird ein Abdruck genommen und an das Dentallabor geschickt, das Ihren Zahnersatz anfertigt.</li><li>5.</li><li>Danach folgt die Anprobe des Zahnersatzes gemeinsam mit Ihnen und dem Zahntechniker, um eventuelle Mängel zu beheben.</li><li>6.</li><li>Die letzte Phase ist das endgültige Einsetzen des Zahnersatzes!</li></ul>",
        },
        {
          id: "implantologija-3",
          question: "Welche Vorteile haben Zahnimplantate gegenüber anderem Zahnersatz?",
          answer:
            "<p>Fehlen Ihnen ein oder mehrere Zähne oder haben Sie Probleme beim Kauen oder Sprechen, sind Zahnimplantate die beste Lösung für Sie. Auch bei schlecht sitzenden oder unbequemen Prothesen sind Implantate eine geeignete Behandlungsmöglichkeit.</p>",
        },
        {
          id: "implantologija-4",
          question: "Sind Zahnimplantate sicher?",
          answer:
            "<p>Zahnimplantate und Zahnersatz auf Implantaten sind seit über 40 Jahren eine bewährte Behandlung und fester Bestandteil der Praxis in Fachkliniken. Mit hochentwickelten, renommierten Implantatsystemen erhalten Sie im Dental Centar Repić verlässliche und langfristige Ergebnisse, funktionell wie ästhetisch.</p>",
        },
        {
          id: "implantologija-5",
          question: "Wann sind Zahnimplantate angezeigt, und wie erfolgreich sind sie?",
          answer:
            "<p>Ob ein Implantat angezeigt ist, entscheiden wir individuell anhand des klinischen Befunds und der Motivation jedes Patienten. Bei richtiger Indikation und guter Mundhygiene liegt die Erfolgsrate der Implantatbehandlung bei 95 bis 100 %.</p>",
        },
        {
          id: "implantologija-6",
          question: "Wann wird von Implantaten abgeraten?",
          answer:
            "<p>Für manche Patienten werden Implantate nicht empfohlen, darunter Personen unter 18 Jahren, Schwangere, Patienten mit nicht eingestellten Allgemeinerkrankungen (Diabetes, Bluthochdruck, Immunerkrankungen), Raucher (Rauchen verlangsamt die Wundheilung), Patienten nach Bestrahlung im Kopf-Hals-Bereich sowie Patienten, die mit den Zähnen knirschen, da dies das Implantat gefährden kann. Dies sind jedoch relative Gegenanzeigen. Die endgültige Entscheidung trifft der Zahnarzt je nach Allgemeinzustand des Patienten und Kontrolle der Erkrankung.</p>",
        },
        {
          id: "implantologija-7",
          question: "Komplikationen nach dem Einsetzen von Implantaten",
          answer:
            "<p>Komplikationen nach dem Einsetzen von Implantaten sind selten, aber möglich. Dazu gehören: Abstoßung des Implantats, Verletzung von Nerven im Unterkiefer, Entzündung des Zahnfleischs um das Implantat (Periimplantitis), Rückgang des Zahnfleischs und Verlust der Zahnfleischpapille zwischen den Zähnen.</p>",
        },
        {
          id: "implantologija-8",
          question: "Lohnen sich Zahnimplantate?",
          answer:
            "<p>Zahnimplantate sind teurer als andere Lösungen (Brücken, Prothesen). Sie halten jedoch länger als anderer Zahnersatz und müssen nicht ersetzt werden. Betrachtet man alle Eigenschaften, sind Zahnimplantate die wirksamste Lösung, um fehlende Zähne zu ersetzen.</p>",
        },
        {
          id: "implantologija-9",
          question: "Mundhygiene nach dem Einsetzen von Implantaten",
          answer:
            "<p>Nach dem Einsetzen der Implantate und des Zahnersatzes ist eine gute Mundhygiene unerlässlich. Putzen Sie Implantate und Zahnersatz täglich und gehen Sie mindestens zweimal im Jahr zur Kontrolle zum Zahnarzt. Eine professionelle Zahnreinigung in der Praxis empfehlen wir mindestens zweimal im Jahr.</p>",
        },
        {
          id: "implantologija-10",
          question: "Wenn Sie Schmerzen haben",
          answer:
            "<ul><li>Nehmen Sie die erste Schmerztablette 30 Minuten nach dem Eingriff, danach nach Bedarf.</li><li>Lassen die Schmerzen nicht nach, rufen Sie uns bitte unter +385 21 796 241 an, um einen Termin zu vereinbaren.</li><li>Vermeiden Sie Aspirin, Andol und andere Medikamente mit Acetylsalicylsäure, da sie Blutungen verlängern können.</li></ul>",
        },
        {
          id: "implantologija-11",
          question: "Anzeichen von Blutungen",
          answer:
            "<ul><li>Leichte Blutungen sind normal und kein Grund zur Sorge.</li><li>Der nach dem Eingriff eingelegte Tupfer sollte mindestens 20 bis 30 Minuten auf die Wunde gedrückt bleiben.</li><li>Spülen Sie den Mund nicht aus.</li></ul>",
        },
        {
          id: "implantologija-12",
          question: "Schwellung",
          answer:
            "<ul><li>Einige Stunden nach dem Eingriff kann eine Schwellung auftreten.</li><li>Kühlen Sie dann die Wange mit kalten Umschlägen im Wechsel: 20 Minuten kühlen, 10 Minuten Pause.</li><li>Schlafen Sie mit erhöhtem Kopf.</li></ul>",
        },
        {
          id: "implantologija-13",
          question: "Essen und körperliche Aktivität",
          answer:
            "<ul><li>Essen Sie möglichst weiche Kost.</li><li>Vermeiden Sie heiße Speisen.</li><li>Vermeiden Sie 48 bis 72 Stunden nach dem Eingriff körperliche Anstrengung und starke Sonne.</li></ul>",
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
        "Eine kieferorthopädische Behandlung ist bei Fehlstellungen und ungleichmäßiger Anordnung der Zähne angezeigt. Der richtige Kontakt zwischen den Zähnen verteilt die Kaukräfte gleichmäßig, sodass sie richtig auf Zahnfleisch und Knochen übertragen werden. Gut ausgerichtete Zähne lassen sich außerdem leichter pflegen. An fehlstehenden Zähnen sammeln sich oft Beläge, die die Gesundheit von Zähnen und Zahnhalteapparat gefährden.",
      sections: [
        {
          heading: "So führen wir die kieferorthopädische Behandlung durch",
          paragraphs: [
            "Eine Zahnspange kann herausnehmbar oder festsitzend sein. Kieferorthopädisch behandelt werden Kinder ebenso wie Erwachsene, mit dem Ziel, Funktion und Ästhetik in Einklang zu bringen. Nach dem Einsetzen einer festsitzenden Zahnspange sind eine gute Mundhygiene und regelmäßige Kontrollen nach Anweisung der Kieferorthopädin nötig. Für eine Zahnspange gibt es keine Altersgrenze. Waren Sie mit einer früheren Behandlung nicht zufrieden oder wünschen Sie sich ein schönes und gesundes Lächeln, ist Ihr Alter kein Hindernis.",
            "Dank ihrer Zusatzausbildung in den USA (School of Dental Medicine, Department of Orthodontics, University of Connecticut Health Center) und in Dänemark (Universität Aarhus) ist die Fachärztin für Kieferorthopädie Dr. Slavica Pejda Repić auf die kieferorthopädische Behandlung Erwachsener spezialisiert. Jeder Patient wird individuell behandelt: Nach einer gründlichen klinischen Untersuchung, der Auswertung der Röntgenbilder und einer genauen Analyse intraoraler Fotos schlagen wir einen Behandlungsplan vor. Dank der fachübergreifenden Zusammenarbeit mit Dr. Dario Repić, Facharzt für Endodontie und restaurative Zahnmedizin, bieten wir jedem Patienten eine vollständige zahnärztliche Versorgung, während und nach der kieferorthopädischen Behandlung.",
            "Jeder Patient erhält neben genauen Informationen über seine Mundgesundheit auch schriftliche Anweisungen zur Funktion und Pflege der Zahnspange sowie ein passendes Set für die Mundhygiene.",
          ],
        },
        {
          heading: "Ablauf der kieferorthopädischen Untersuchung und Behandlungsplan",
          paragraphs: [
            "Die erste kieferorthopädische Untersuchung umfasst die klinische Untersuchung von Mundhöhle, Zähnen, Biss und Weichgewebe sowie die Auswertung der Panorama-Röntgenaufnahme. Haben Sie keine Aufnahme, fertigen wir sie in der Praxis mit einem modernen digitalen Röntgengerät bei minimaler Strahlendosis an. Für die Diagnose machen wir außerdem intraorale Fotos mit einer speziell angepassten Kamera.",
            "Nach der ersten Diagnostik schlagen wir einen Behandlungsplan vor, den wir gemeinsam mit den Eltern und dem Kind besprechen.",
            "Danach werden Abdrücke für Studienmodelle genommen, um den Ausgangszustand des Bisses vor der Behandlung zu dokumentieren. Wir informieren Sie auch über die Kosten und die Pflege der Zahnspange.",
          ],
        },
      ],
      faqs: [
        {
          id: "ortodoncija-1",
          question: "Was macht ein Kieferorthopäde?",
          answer:
            "<p>Ein Kieferorthopäde ist ein Facharzt, der Fehlstellungen der Zähne und Kiefer diagnostiziert und behandelt. Er arbeitet auch daran, der Entstehung solcher Fehlstellungen vorzubeugen. Dafür werden verschiedene kieferorthopädische Geräte und Zahnspangen eingesetzt.</p>",
        },
        {
          id: "ortodoncija-2",
          question: "Warum brauche ich eine kieferorthopädische Behandlung?",
          answer:
            "<p>Es gibt zwei Hauptgründe für eine kieferorthopädische Behandlung: Funktion und Ästhetik. Funktionell verbessert sie die Funktion der Zähne und des gesamten Kiefers und erleichtert die Mundhygiene. Ästhetisch wird ein schönes, ansprechendes Lächeln Sie und andere beeindrucken und Ihr Selbstvertrauen stärken.</p>",
        },
        {
          id: "ortodoncija-3",
          question: "Wann ist der richtige Zeitpunkt für eine kieferorthopädische Behandlung?",
          answer:
            "<p>Für eine kieferorthopädische Behandlung gibt es keine Altersgrenze. Je früher eine Fehlstellung erkannt und behandelt wird, desto einfacher ist jedoch die Behandlung. Die American Association of Orthodontists empfiehlt die erste kieferorthopädische Untersuchung im Alter von 7 Jahren.</p>",
        },
        {
          id: "ortodoncija-4",
          question: "Wie erkenne ich eine Zahnfehlstellung?",
          answer:
            "<p>Hat Ihr Kind oder haben Sie eine sichtbare Fehlstellung der Zähne oder des Bisses, empfehlen wir einen Termin bei einer Fachärztin für Kieferorthopädie. Auch Daumenlutschen kann zu Fehlstellungen führen.</p>",
        },
        {
          id: "ortodoncija-5",
          question: "Tut eine kieferorthopädische Behandlung weh?",
          answer:
            "<p>Das Einsetzen der Zahnspange ist nicht schmerzhaft. Bei manchen Patienten treten in den ersten Tagen danach leichte Schmerzen oder ein Druckgefühl auf, ebenso nach den Kontrollterminen. Zur Linderung können Schmerzmittel eingenommen werden.</p>",
        },
        {
          id: "ortodoncija-6",
          question: "Wie lange dauert die kieferorthopädische Behandlung?",
          answer:
            "<p>Die Dauer ist bei jedem Patienten anders. Die aktive Phase (mit Zahnspange) dauert in der Regel 6 bis 30 Monate. Danach muss je nach Ausgangsbefund einige Monate bis ein Jahr lang ein Retainer getragen werden.</p>",
        },
        {
          id: "ortodoncija-7",
          question: "Wie oft sind Kontrolltermine nötig?",
          answer:
            "<p>Je nach Art der Behandlung finden die Kontrollen alle 4 bis 10 Wochen statt.</p>",
        },
        {
          id: "ortodoncija-8",
          question: "Müssen mir Zähne gezogen werden?",
          answer:
            "<p>Stehen Ihre Zähne sehr eng oder ist ein Zahn verlagert (nicht durchgebrochen und im Knochen verborgen), kann das Ziehen eines Zahns Teil der Behandlung sein.</p>",
        },
        {
          id: "ortodoncija-9",
          question: "Kann ich ein Instrument spielen oder Sport treiben?",
          answer:
            "<p>Ja. Eine kieferorthopädische Behandlung schließt diese Aktivitäten nicht aus. Sportlern empfehlen wir einen Mundschutz, um Verletzungen im Mund und Schäden an der Zahnspange zu vermeiden.</p>",
        },
        {
          id: "ortodoncija-10",
          question: "Muss ich weiterhin zum Zahnarzt gehen?",
          answer:
            "<p>Ja, die Kontrollen beim Zahnarzt sind sehr wichtig. Mit einer Zahnspange ist das Zähneputzen schwieriger, es sammeln sich mehr Beläge an, und das Kariesrisiko steigt. Ihr Zahnarzt hilft Ihnen mit regelmäßiger Reinigung und Kontrolle, dies zu vermeiden.</p>",
        },
        {
          id: "ortodoncija-11",
          question: "Muss ich nach dem Abnehmen der Zahnspange einen Retainer tragen?",
          answer:
            "<p>Fast immer: JA. Nach Abschluss der Behandlung muss je nach Ausgangsbefund einige Monate bis ein Jahr lang ein Retainer getragen werden. Sonst können die Zähne relativ schnell in ihre alte Stellung zurückkehren, und Ihre Mühe und die Ihres Zahnarztes wären umsonst.</p>",
        },
        {
          id: "ortodoncija-12",
          question: "Was kostet eine kieferorthopädische Behandlung?",
          answer:
            "<p>Bei der ersten Untersuchung erhalten Sie einen Kostenvoranschlag für die Behandlung. Der Preis umfasst die erste Zahnreinigung und Politur, alle aktiven Behandlungsphasen von Anfang bis Ende, das Einsetzen der Zahnspange, die Kontrollen, das Entfernen der Zahnspange und den ersten Retainer. Für die erste Untersuchung ist eine Panorama-Röntgenaufnahme der Kiefer nötig; wir fertigen sie in der Praxis an, und sie ist im Preis enthalten.</p><p>Wir verwenden je nach Wunsch Metall- oder ästhetische Brackets. Ästhetische Brackets sind unauffälliger. Wir arbeiten mit Produkten von American Orthodontics, einem renommierten Hersteller kieferorthopädischer Materialien, und zeigen Ihnen die Möglichkeiten bei der Untersuchung.</p>",
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
        "Im Dental Centar Repić legen wir besonderen Wert darauf, die Funktion der Zähne und des gesamten Kausystems zu erhalten. Nach einer gründlichen klinischen Untersuchung und der Auswertung der Röntgenbilder von Zähnen und Kiefern schlagen wir jedem Patienten einen individuellen prothetischen Behandlungsplan vor, um einen oder mehrere fehlende Zähne zu ersetzen. Je nach Befund und Budget können fehlende Zähne mit herausnehmbarem oder festsitzendem Zahnersatz ersetzt werden.",
      sections: [
        {
          paragraphs: [
            "Herausnehmbarer Zahnersatz (Prothesen) eignet sich am besten für Patienten mit vollständiger oder teilweiser Zahnlosigkeit. Für einen festen Halt der Prothese gibt es mehrere Möglichkeiten, etwa kombiniert festsitzend-herausnehmbaren Zahnersatz, Teleskopkronen oder Prothesen auf Implantaten.",
            "Zum festsitzenden Zahnersatz gehören Veneers, Kronen, Brücken und Brücken auf Implantaten.",
            "Wir verwenden moderne Materialien, mit denen wir die ästhetischen und funktionellen Ansprüche unserer Patienten erfüllen. Für festsitzenden Zahnersatz bieten wir unter anderem folgende Materialien an:",
          ],
        },
        {
          heading: "Metallkeramische Kronen und Brücken",
          paragraphs: [
            "haben in der Zahnprothetik eine lange Tradition und gelten als Standard des festsitzenden Zahnersatzes. Sie werden von Patienten am häufigsten gewählt, weil sie erschwinglich und langlebig sind. Das Metallgerüst der Krone oder Brücke schützt die Pfeilerzähne, während die Keramik die fehlenden Zähne ästhetisch nachbildet. Das Metallgerüst besteht meist aus einer Kobalt-Chrom-Nickel-Legierung, Dentalgold oder Titan. Die Keramik wird schichtweise auf das Gerüst aufgebracht und verbindet sich fest mit dem Metall.",
            "Ist die Entscheidung für Kronen oder Brücken gefallen, beschleift der Zahnarzt zuerst die Pfeilerzähne, um Platz für den Zahnersatz zu schaffen. Danach wird ein Abdruck genommen, nach dem das Labor den Zahnersatz anfertigt. Dabei wird auch die Farbe der Keramik so gewählt, dass sie den natürlichen Zähnen möglichst gleicht. Nach der Anfertigung im Labor und der Anprobe in der Praxis wird die Krone oder Brücke zunächst provisorisch eingesetzt und, sobald der Zahnarzt den richtigen Sitz bestätigt hat, endgültig zementiert.",
            "Metallkeramischer Zahnersatz eignet sich zum Ersatz eines oder mehrerer verlorener Zähne im Front- wie im Seitenzahnbereich. Richtig eingesetzt, hat er gute mechanische und ästhetische Eigenschaften.",
            "Die Hauptvorteile metallkeramischer Kronen und Brücken sind Preis, mechanische Festigkeit und lange Haltbarkeit. Laut Fachliteratur halten 90–95 % aller metallkeramischen Arbeiten zehn Jahre oder länger im Mund. Sie sind etwas günstiger als vollkeramische (metallfreie) Lösungen.",
            "Ein Nachteil sind die im Vergleich zu vollkeramischen (metallfreien) Systemen begrenzten ästhetischen Möglichkeiten. Das liegt am dunkelgrauen Metallgerüst: Es behindert den Lichtdurchgang, sodass die Zahnfarbe weniger natürlich wirken kann. Patienten stören sich oft am dunklen Rand am Zahnfleischsaum der Krone. Mit der Zeit können die Metalle des Gerüsts außerdem Ionen abgeben, die ins Zahnfleisch gelangen. Eine sorgfältige Präparation (Beschleifen) des Pfeilerzahns kann diese unerwünschten Effekte jedoch verringern.",
          ],
        },
        {
          heading: "Vollkeramische Kronen und Brücken (metallfreie Keramik)",
          paragraphs: [
            "Kronen und Brücken ganz aus Keramik sind die Alternative zum metallkeramischen Zahnersatz. Sie werden auch „Porzellanzähne“ genannt. Die ästhetischen Ansprüche der Patienten sind in den letzten Jahren gestiegen und oft entscheidend für die Wahl der Versorgung fehlender Zähne. Vollkeramische Kronen und Brücken bilden das Aussehen natürlicher Zähne perfekt nach und sind darin metallkeramischen Arbeiten überlegen. Anders als bei Metallkeramik, wo das Metallgerüst Durchgang und Streuung des Lichts behindert und so die Zahnfarbe beeinflusst, haben rein keramische Kronen und Brücken hervorragende ästhetische Eigenschaften, die dem natürlichen Zahn sehr nahekommen. Für den Patienten verläuft die Anfertigung ähnlich wie bei Metallkeramik: Beschleifen der Zähne (um Platz für den Ersatz zu schaffen) und ein Abdruck, der an das Labor geht. Dabei wird die Farbe gewählt, die Ihren Wünschen und Ihren eigenen Zähnen am besten entspricht. Der fertige Zahnersatz wird auf die beschliffenen Zähne zementiert. Bei dieser Art von Ersatz wird weniger beschliffen, sodass mehr gesunde Zahnsubstanz erhalten bleibt. Die computergestützte Fertigung sorgt für einen perfekten Sitz am beschliffenen Zahn, was die Reinigung erleichtert und Speisereste zwischen den Zähnen sowie daraus folgende Zahnfleischentzündungen verringert.",
            "Dank neuer Materialien haben metallfreie Keramikarbeiten ausgezeichnete mechanische Eigenschaften, ohne an Ästhetik einzubüßen. In Festigkeit und Haltbarkeit sind vollkeramische Kronen und Brücken mit metallkeramischen Systemen vergleichbar. Laut Fachliteratur halten 91–97 % der metallfreien Keramikarbeiten fünf Jahre oder länger.",
            "Mit metallfreier Keramik lassen sich ein oder mehrere verlorene Zähne ersetzen. Neuere Materialien für vollkeramischen festsitzenden Zahnersatz sind leuzitverstärkte Lithiumdisilikat-Keramik, leuzit- oder lithiumdisilikatverstärkte Glaskeramik sowie Oxidkeramiken wie Aluminiumoxid- und Zirkonoxidkeramik. Metallfreie Kronen und Brücken sind etwas teurer als metallkeramische, weil ihre Herstellung in Praxis und Labor aufwendiger ist.",
          ],
        },
        {
          heading: "Kronen und Brücken aus Zirkonoxid",
          paragraphs: [
            "Zirkonoxid (Zirkoniumdioxid) ist eine metallfreie Keramik, die in der Zahnprothetik wegen ihrer hervorragenden ästhetischen und funktionellen Eigenschaften immer häufiger eingesetzt wird, besonders für festsitzenden Zahnersatz (Kronen und Brücken) im Front- und Seitenzahnbereich. Das Material gehört zu den Oxidkeramiken und ist sehr widerstandsfähig gegen Bruch, Abnutzung, hohe Temperaturen und Korrosion. Zirkonoxid wird seit über 50 Jahren in Medizin und Zahnmedizin verwendet: in der Orthopädie für Hüftgelenkköpfe, in der Zahnmedizin neben Zahnersatz auch für Wurzelstifte, kieferorthopädische Brackets und Implantataufbauten.",
            "Das Gerüst der Krone oder Brücke besteht aus Zirkoniumdioxid, auf das Keramikschichten aufgebrannt werden. Es ist weiß und am Rand des Zahnersatzes nicht sichtbar. Zirkoniumdioxid ist biokompatibel und löst keine Allergien aus. Es leitet Strom und Wärme schlecht, sodass die Zähne weniger empfindlich sind. Zirkonoxidkeramik hat viele hervorragende Eigenschaften: erstklassige Ästhetik, große Reinheit, Biokompatibilität und weniger Beschleifen der natürlichen Zähne dank der hohen Festigkeit (eine Stärke von nur 0,4 mm reicht aus). Wegen ihrer Festigkeit und Härte werden Zirkonoxidarbeiten maschinell aus industriell gefertigten Blöcken hergestellt. Dank computergestützter Fertigung sitzt die Krone oder Brücke genau am beschliffenen Zahnrand, was die Mundhygiene erleichtert und das Risiko von Zahnfleischentzündungen senkt.",
            "Ästhetisch ist das Material eine ausgezeichnete Wahl: Es bildet die natürliche Transparenz und Farbe der Zähne perfekt nach, und seine Festigkeit ist mit der der stärksten Metalle vergleichbar. Mechanisch entspricht Zirkonoxidkeramik der Metallkeramik, wirkt aber natürlicher. Die endgültige Farbe hängt von der Keramikstärke, der Stärke und Farbe des Zements und der Farbe des Zahnstumpfs ab. Dank der hohen Festigkeit sind sehr dünne Arbeiten möglich (ein Gerüst von nur 0,3 mm im Front- und 0,6 mm im Seitenzahnbereich), was Lichtdurchlässigkeit und Ästhetik sichert. Das Material eignet sich für den Front- wie den Seitenzahnbereich und auch für größere Arbeiten, wenn mehrere Zähne fehlen.",
            "Kronen und Brücken aus Zirkonoxid sind etwas teurer als metallkeramische, weil ihre Herstellung in Praxis und Labor aufwendiger ist. Beschleifen, Abdrucknahme und Zementieren müssen absolut präzise sein, damit der Zahnersatz (Krone oder Brücke) genau auf den beschliffenen Zahn passt.",
          ],
        },
        {
          heading: "Glaskeramik: E.max und Empress",
          paragraphs: [
            "Glaskeramik ist ein vollkeramisches Material für Zahnersatz. Die hohen ästhetischen Ansprüche immer besser informierter Patienten erfüllen die früher verwendeten Materialien nicht mehr. Die intensive Entwicklung der Werkstofftechnik hat ausreichend feste Glaskeramiken mit hervorragender Ästhetik hervorgebracht. Wie jedes Material hat auch Glaskeramik ihre Grenzen, die man kennen muss, um das bestmögliche Ergebnis zu erzielen.",
            "Glaskeramik entsteht durch kontrollierte Kristallisation von Glas. Es gibt mehrere Arten mit unterschiedlichen Eigenschaften: IPS Empress (leuzitverstärkte Glaskeramik), IPS Empress 2 (mit Lithiumdisilikat-Kern, fester und belastbarer als die erste) und IPS E.max, die ähnlich aufgebaut ist wie IPS Empress 2 (Lithiumdisilikat-Kern), aber deutlich fester als die beiden anderen.",
            "E.max-Press- oder Empress-Kronen und -Brücken sind vollkeramische Arbeiten aus Lithiumdisilikat-Keramik. Ihre hohe Lichtdurchlässigkeit ermöglicht eine hervorragende Ästhetik und ist besonders für Versorgungen im ästhetisch sichtbaren Bereich (beim Lächeln sichtbar) geeignet. Sie ist fester als andere Glaskeramiken und angezeigt für Einzelkronen oder dreigliedrige Brücken im Frontzahnbereich bis zum zweiten Prämolaren, für Einzelkronen im Front- oder Seitenzahnbereich, für Veneers und für indirekt gefertigte Füllungen (Inlays, Onlays). E.max-Keramik gibt es in vielen Farben, sodass sie das natürliche Aussehen der Zähne sehr gut nachbildet.",
            "Drei Faktoren bestimmen die endgültige Farbe des Zahnersatzes: die Farbe des beschliffenen Zahnstumpfs, die Farbe des Zements und die Farbe der Krone. Manchmal ist Lithiumdisilikat-Keramik nicht einfach einzusetzen, weil unterschiedlich gefärbte Zahnstümpfe durch die Krone durchscheinen können. Mit Kenntnis des Materials und der Präparationstechnik lassen sich solche Probleme jedoch zur Zufriedenheit von Patient und Zahnarzt lösen. Durch die Kombination verschiedener Zementfarben und -transparenzen erreicht man eine einheitliche Kronenfarbe, auch wenn die Zahnstümpfe ungleich gefärbt sind. Nach dem endgültigen Zementieren werden die Übergänge zwischen Krone und Zahn poliert, um die Mundhygiene zu erleichtern.",
            "Für ein funktionell und ästhetisch gutes Ergebnis muss die Indikation für diesen Zahnersatz richtig gestellt werden. E.max-Kronen sind mechanisch etwas weniger belastbar als Zirkonoxidkeramik und werden für große Arbeiten im Seitenzahnbereich nicht empfohlen. Am besten eignen sie sich für Einzelkronen oder dreigliedrige Brücken im Frontzahnbereich bis zum zweiten Prämolaren, für Einzelkronen im Front- oder Seitenzahnbereich sowie für Veneers und indirekt gefertigte Füllungen (Inlays, Onlays).",
          ],
        },
      ],
      faqs: [
        {
          id: "protetika-1",
          question: "Wie lange halten Kronen im Mund?",
          answer:
            "<p>Das ist schwer zu beantworten. Die Haltbarkeit von Kronen aus allen Materialien liegt in Kroatien und im Ausland über zehn Jahre bei 85–95 %, was als erfolgreicher Zahnersatz gilt. Die Haltbarkeit hängt jedoch von vielen Faktoren ab, etwa regelmäßigen Kontrollen und guter Mundhygiene, dem Zustand des Pfeilerzahns und des Zahnfleischs, der richtigen Wahl des Zahnersatzes für den jeweiligen Fall und seiner sorgfältigen Anfertigung. Deshalb ist sie von Patient zu Patient verschieden.</p>",
        },
        {
          id: "protetika-2",
          question: "Wie pflege ich Kronen und Brücken?",
          answer:
            "<ul><li>Patienten glauben manchmal fälschlich, ihre Zähne seien durch die „Kappen“, also Kronen und Brücken, geschützt, und die Mundhygiene müsse deshalb nicht so gründlich sein. Das Gegenteil ist der Fall. Mit sorgfältiger Mundhygiene und regelmäßigen Kontrollen beim Zahnarzt tragen Sie wesentlich zur langen Haltbarkeit des Zahnersatzes und zur Gesundheit Ihrer übrigen Zähne bei.</li><li>Kronen und Brücken werden genauso geputzt wie natürliche Zähne: vom rechten oberen zum linken oberen Quadranten und vom linken unteren zum rechten unteren Quadranten. Alle Flächen der Zähne und des Zahnersatzes sollten insgesamt drei Minuten lang geputzt werden. Empfohlen werden kreisende Bewegungen, und die letzte Bewegung sollte „von Rot nach Weiß“ gehen, also vom Zahnfleisch zum Zahn, um nach der Versorgung einem Zahnfleischrückgang vorzubeugen. Viele Hilfsmittel erleichtern die Pflege, etwa Zahnseide, elektrische Zahnbürsten, Mundduschen und Interdentalbürsten. Plaquetabletten sind überall erhältlich und zeigen, wie gründlich Sie putzen. Gern zeigen wir Ihnen, wie Sie Ihre Zähne richtig pflegen, damit Ihr Zahnersatz lange hält, zu unserer beider Zufriedenheit.</li></ul>",
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
        "Unser Anspruch ist, jedem Patienten ein schönes und gesundes Lächeln zu ermöglichen. Die ästhetische Zahnmedizin umfasst eine Reihe von Behandlungen für ein schönes Lächeln, die bestimmten Regeln folgen, um eine vollständige Harmonie zwischen weichen und harten Strukturen zu erreichen. Sie verbindet verschiedene Fachgebiete der Zahnmedizin (Kieferorthopädie, Parodontologie, Prothetik, Implantologie und restaurative Zahnmedizin), um Abweichungen von ästhetischen Maßstäben zu korrigieren und Funktion und Ästhetik gesunder Zähne zu erreichen. Studien zeigen, dass ästhetische Behandlungen eine starke psychologische Wirkung haben und zu mehr Selbstvertrauen und Lebensqualität führen können.",
      sections: [
        {
          heading: "Für Ihr gesundes und schönes Lächeln",
          paragraphs: [
            "Patienten, die mit Größe und Form ihrer Zähne zufrieden sind und ihr Lächeln nur auffrischen möchten oder kleine Korrekturen brauchen, erreichen mit minimalinvasiven ästhetischen Behandlungen in unserer Praxis ein strahlendes Lächeln.",
          ],
        },
        {
          heading: "Unsere Behandlungen",
          bullets: [
            "Zahnaufhellung",
            "Keramik-Veneers",
            "Smile Design",
            "Zahnschmuck",
            "Pulverstrahlreinigung (Air Polishing)",
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
        "Die Endodontie ist ein Fachgebiet der Zahnmedizin, das sich mit der Behandlung des Zahninneren befasst. In der Facharztausbildung ist sie eng mit der restaurativen Zahnmedizin und der Kariologie verbunden. Diese behandeln Erkrankungen der Zahnhartsubstanz (Dentin), während fortgeschrittene Entzündungen des Zahnmarks, also des Weichgewebes im Zahn, eine Wurzelkanalbehandlung erfordern. Diese endodontische Behandlung wird oft kurz Endodontie genannt.",
      sections: [
        {
          heading: "Warum tut ein Zahn weh?",
          paragraphs: [
            "Zahnschmerzen kennen die meisten Menschen aus eigener Erfahrung. Ein Zahn kann aus vielen Gründen schmerzen: wegen freiliegenden Dentins, einer Entzündung des Zahnhalteapparats oder des Gewebes an der Wurzelspitze, einer Entzündung benachbarter Strukturen wie der Nebenhöhlen, deren Schmerz in den Zahn ausstrahlt, oder einer schmerzhaften Entzündung des Zahnmarks (Pulpa) selbst. Manchmal ist die Ursache nicht leicht zu finden, und der Zahnarzt muss gründlich untersuchen, klinische Tests machen und ein Röntgenbild anfertigen. Ist die Ursache gefunden, kann die richtige Behandlung festgelegt werden.",
          ],
        },
        {
          heading: "Wie entsteht eine Zahnentzündung?",
          paragraphs: [
            "Eine Entzündung des Zahnmarks (Pulpitis) kann verschiedene Ursachen haben, etwa tiefe Karies, Zähneknirschen oder einen falschen Biss, der den Zahn überlastet. Bei einer Entzündung weiten sich die Blutgefäße im Zahnmark, die Kapillaren werden durchlässiger, Flüssigkeit tritt ins Gewebe aus, und der Druck im Zahn steigt. Das Zahnmark wird oft „Zahnnerv“ genannt, enthält in der Pulpakammer aber Blut- und Lymphgefäße ebenso wie Nervenfasern. Da sich die harte Pulpakammer nicht ausdehnen kann, drückt der steigende Druck auf die Nervenfasern, und es entsteht Schmerz. Er kann unterschiedlich sein und in benachbarte Bereiche ausstrahlen: Schmerzen an Zähnen des Unterkiefers spürt man etwa im Ohr, Schmerzen an Zähnen des Oberkiefers strahlen meist zum Auge aus. Bei einer reversiblen (heilbaren) Entzündung des Zahnmarks ist der Schmerz vorübergehend, tritt bei Reizen auf (heiß, kalt, beim Beißen) und verschwindet, wenn der Reiz endet. Bei einer irreversiblen Entzündung ist der Schmerz spontan und fast ständig da. Weitere Anzeichen können geschwollene Lymphknoten in der Nähe des Zahns, Ausfluss aus einer Fistel am Zahnfleisch, ein lockerer Zahn, Schwellungen um den Zahn, Fieber und allgemeines Unwohlsein sein. Bleibt die Entzündung unbehandelt, kann sich die Infektion über den Wurzelkanal in den umliegenden Knochen ausbreiten und ein Granulom bilden. Das Granulom zerstört den Knochen, und die Infektion kann sich sogar über das Blut im Körper ausbreiten.",
          ],
        },
        {
          heading: "Wie wird eine Zahnentzündung behandelt?",
          paragraphs: [
            "Die Behandlung richtet sich nach der Ursache. Bei einer reversiblen Entzündung des Zahnmarks genügt es, die Ursache zu beseitigen (Karies, zu starker Kontakt zwischen den Zähnen, abgenutzte Zahnsubstanz) und den Zahn mit einer Füllung zu versorgen. Danach sollten die Beschwerden abklingen.",
            "Bei einer irreversiblen Entzündung des Zahnmarks reicht eine Füllung nicht aus, und eine endodontische Behandlung ist nötig.",
          ],
        },
        {
          heading: "Was ist eine endodontische Behandlung?",
          paragraphs: [
            "Bei der endodontischen Behandlung (Endodontie) wird der Wurzelkanal behandelt, um den Zahn zu erhalten. Dabei wird das Zahnmark entfernt (umgangssprachlich: der Nerv gezogen), und der Kanal wird mit speziellen Hand- oder maschinellen Instrumenten gereinigt und mit Spüllösungen gespült, die verbliebene Bakterien und Entzündungsprodukte entfernen und den Kanal desinfizieren. Danach wird der Wurzelkanal mit geeigneten Materialien gefüllt. Die Behandlung erfordert ein trockenes und steriles Arbeitsfeld, damit keine Bakterien aus der Mundhöhle in den Knochen gelangen. Eine gute Wurzelkanalbehandlung ist die Grundlage jeder weiteren Behandlung. Danach kann der Zahn auch als Pfeiler für kleineren Zahnersatz dienen, was größere prothetische Arbeiten oder Implantate lange hinauszögern kann. Wo immer möglich, sollte man den Zahn erhalten, denn der natürliche Zahn ist immer die beste Lösung.",
            "Wir sorgen dafür, dass die Behandlung dank örtlicher Betäubung schmerzfrei ist. Je nach Befund können mehrere Termine nötig sein, bis der Zahn vollständig behandelt ist. Nur wenn jeder Schritt richtig ausgeführt wird, ist die Behandlung erfolgreich. Nach Abschluss der Behandlung ist der Zahn eine Zeit lang druckempfindlich. Das ist eine übliche Folge der Behandlung, wichtig ist, dass Schmerz und Empfindlichkeit allmählich nachlassen. Nehmen Sie bei Bedarf Schmerzmittel. Die Beschwerden sollten innerhalb weniger Tage abklingen.",
            "Unsere Praxis ist mit modernsten Geräten ausgestattet, mit denen wir die Kanallänge genau messen und die Wurzelkanäle maschinell aufbereiten. Die endgültige Wurzelfüllung kontrollieren wir mit einem Röntgenbild. So behandeln wir Ihren Zahn vollständig und in möglichst kurzer Zeit, ohne unnötige zusätzliche Termine.",
          ],
        },
        {
          heading: "Endodontische Instrumente",
          paragraphs: [
            "Bei der endodontischen Behandlung wird das Zahnmark (der Zahnnerv) entfernt, und der Wurzelkanal wird mit speziellen Handinstrumenten und Spüllösungen gereinigt, erweitert und gespült. Der Erfolg der Behandlung hängt direkt von der guten biomechanischen Aufbereitung der Wurzelkanäle ab. Die mechanische Reinigung allein reicht nicht; nötig ist auch eine chemische Spülung mit einer speziellen Lösung, die organische und anorganische Rückstände aus dem Kanal entfernt. So haftet das Füllmaterial besser an der Kanalwand und dichtet den Kanal ab, damit sich der Zahn nicht erneut entzündet. Die Wurzelkanäle werden mit einer Kombination aus Guttapercha und Zement gefüllt. Das ist der letzte Schritt der endodontischen Behandlung. Zum Schluss wird der Zahn je nach Substanzverlust mit einer Füllung oder einer Krone versorgt.",
            "Endodontische Instrumente bestehen aus Edelstahl oder einer Nickel-Titan-Legierung. Hand- und maschinelle Instrumente können bei fachgerechter Anwendung gleichermaßen erfolgreich sein, doch mit dem technischen Fortschritt weicht die Handaufbereitung immer mehr der maschinellen, die für Patienten viele Vorteile hat. Die maschinelle Endodontie ist eine moderne Technik zur Reinigung und Erweiterung der Wurzelkanäle, bei der Hand- und maschinelle Instrumente kombiniert werden. Der Ablauf ähnelt der Handaufbereitung: Nach dem Öffnen des Zahns und dem Entfernen des Zahnmarks wird die Kanallänge mit einem Endometer gemessen, danach wird der Kanal mit verschiedenen Instrumentenaufsätzen gereinigt und geformt. Reinigung und Formgebung sind ein wesentlicher Teil der Behandlung. Maschinelle Instrumente ahmen die Arbeit der Handinstrumente nach, sind aber viel schneller und wirksamer. Die Aufbereitung mit Handinstrumenten kann anspruchsvoll sein und ist oft die längste Phase der Behandlung. Die maschinelle Endodontie ist schmerzfrei und angenehmer, weil sie die Behandlungsdauer verkürzt, sowohl die Dauer der einzelnen Termine als auch deren Anzahl. Je nach Aufbau des Instruments gibt es verschiedene Techniken, und die Instrumente bewegen sich rotierend oder reziprok. Nickel-Titan-Instrumente unterscheiden sich in Design, Aufbau und mechanischen Eigenschaften und sind je nach Hersteller unter verschiedenen Namen erhältlich, z. B. ProTaper Universal, ProTaper Next oder HyFlex CM. Ihr Einsatz hat die Wurzelkanalbehandlung revolutioniert: Reinigung und Formgebung gehen schneller, und Fehler wie das Begradigen oder Durchbohren des Kanals werden seltener. Nickel-Titan-Instrumente sind flexibel und elastisch und folgen leicht dem natürlichen Verlauf des Kanals. Sie sind recht bruchfest (die Bruchrate liegt in der Praxis bei 0,3–23 %) und kehren nach dem Gebrauch in ihre ursprüngliche Form zurück (Formgedächtnis). Dank ihrer Elastizität gelangen sie auch in enge und gekrümmte Kanalabschnitte und erweitern diese zu einer regelmäßigeren Form, was das spätere Füllen erleichtert. Maschinelle Nickel-Titan-Instrumente drehen sich gleichmäßig mit niedriger Geschwindigkeit. Das verringert das Bruchrisiko und ermöglicht eine schnellere und einfachere Formgebung als mit Nickel-Titan-Handinstrumenten. Hand- wie maschinelle Instrumente reinigen, erweitern und formen den Kanal, was das Füllen erleichtert und die Behandlung beschleunigt. Der Vorteil der maschinellen Endodontie ist ein schnellerer und einfacherer Ablauf mit weniger Fehlern im Kanal, was die Erfolgsrate der Behandlung erhöht.",
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
        "Die Parodontologie ist ein Fachgebiet der Zahnmedizin, das sich mit der Gesundheit des Zahnhalteapparats befasst. Dazu gehören der umgebende Knochen, das Zahnfleisch (Gingiva) und das parodontale Ligament, das den Zahn im Knochen hält.",
      sections: [
        {
          paragraphs: [
            "Laut einigen Studien zeigen 75 % der Erwachsenen Anzeichen einer Parodontalerkrankung, unabhängig von Herkunft und sozialem Status. Fast 30 % davon haben schwere Formen und eine chronische Parodontitis. Sie ist die häufigste Ursache für Zahnverlust bei Erwachsenen. Studien zeigen Zusammenhänge zwischen Parodontalerkrankungen und anderen Erkrankungen wie Diabetes, Herz-Kreislauf- und Lungenerkrankungen. Eine unbehandelte Parodontitis in der Schwangerschaft wird zudem mit niedrigerem Geburtsgewicht und Frühgeburten in Verbindung gebracht.",
            "Im Dental Centar Repić entfernen wir Zahnstein und Beläge professionell mit Schall- und Ultraschallinstrumenten, glätten und polieren die Zähne. Bei Bedarf führen wir außerdem eine parodontale Initialtherapie und parodontalchirurgische Eingriffe durch, damit Ihre Zähne möglichst lange voll funktionsfähig bleiben.",
          ],
        },
        {
          heading: "Wie entsteht Parodontitis?",
          paragraphs: [
            "Die Hauptursachen einer Parodontitis sind eine zunehmende Zahl von Bakterien im Mund und eine unzureichende Immunantwort des Körpers. Mehr Bakterien entstehen durch mangelnde Mundhygiene oder eine verringerte Speichelproduktion, denn Speichel hat eine natürliche Schutzfunktion. Die Immunantwort wird durch verschiedene Allgemeinerkrankungen, Stress oder Rauchen geschwächt. Die Folge ist eine Parodontalerkrankung, die zu Entzündung und Abbau des Zahnhalteapparats führt, vor allem von Knochen, Zahnfleisch und parodontalem Ligament.",
            "Im frühen Stadium verursacht die Erkrankung keine Beschwerden. Deshalb sind regelmäßige Besuche beim Zahnarzt wichtig, damit sie möglichst früh erkannt wird. Je früher eine Parodontalerkrankung entdeckt wird, desto besser lässt sie sich behandeln und desto mehr Zähne können erhalten werden.",
          ],
        },
        {
          heading: "Wie wird Parodontitis behandelt?",
          paragraphs: [
            "Ziel der Behandlung ist es, die Zahl der Bakterien im Mund zu verringern, den Biofilm (eine organisierte Bakterienschicht auf den Zähnen) von den Zahnoberflächen zu entfernen und die Immunantwort des Körpers zu stärken, damit die Erkrankung nicht fortschreitet.",
            "Gute Mundhygiene und regelmäßige professionelle Zahnreinigung sind der Schlüssel zur Vorbeugung und Behandlung der Parodontitis. Putzen Sie mindestens zweimal täglich mit Zahnbürste und Zahnpasta, und verwenden Sie unbedingt Zahnseide oder eine Munddusche (für enge Zahnzwischenräume) und Interdentalbürsten (für breitere Zwischenräume).",
            "Bei der parodontalen Initialtherapie werden Beläge und Zahnstein über und unter dem Zahnfleischrand mit einem Ultraschallgerät entfernt. Danach folgen eine tiefe mechanische Reinigung und die Glättung der Wurzeloberflächen.",
            "Die parodontalchirurgische Therapie ist bei fortgeschrittener Parodontitis angezeigt, weil sie den Zugang zu tiefen Zahnfleischtaschen und das Entfernen der dortigen Beläge ermöglicht. Mit regenerativen chirurgischen Verfahren lässt sich der Zahnhalteapparat wieder aufbauen. Das verbessert die langfristige Prognose der betroffenen Zähne. Die Verfahren dienen auch dazu, eine ästhetisch ansprechende Form von Zähnen und Zahnfleisch wiederherzustellen. Eine Parodontalerkrankung kann zu Zahnfleischrückgang und empfindlichen Zahnhälsen führen, und die regenerative Therapie kann die freiliegenden Wurzeln wieder bedecken und so die Empfindlichkeit verringern.",
          ],
        },
        {
          heading: "So erkennen Sie Anzeichen einer Parodontitis",
          bullets: [
            "Zahnfleischbluten",
            "Geschwollenes, gerötetes und schmerzendes Zahnfleisch",
            "Zahnfleischrückgang",
            "Ausfluss oder Eiter aus dem Zahnfleisch",
            "Wandernde Zähne und größere Lücken zwischen den Zähnen",
            "Lockere Zähne",
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
        "Im Dental Centar Repić führen ausgezeichnete Ärzte mit langjähriger Erfahrung oralchirurgische Eingriffe durch.",
      sections: [
        {
          heading: "Oralchirurgie auf höchstem Niveau",
          paragraphs: [
            "Die Oralchirurgie ist das chirurgische Fachgebiet der Zahnmedizin. Dazu gehören das Ziehen von Zähnen, die Entfernung verlagerter oder retinierter Zähne durch Alveotomie, Operationen von Knochenzysten im Ober- und Unterkiefer, Wurzelspitzenresektionen, Lippenbändchen-Korrekturen (Frenektomie), das Einsetzen von Zahnimplantaten und der Sinuslift im Oberkiefer. Der häufigste Eingriff ist die Extraktion (das Ziehen eines Zahns). Trotz aller Bemühungen von Zahnärzten und Patienten, Zähne möglichst lange zu erhalten, muss ein Zahn manchmal entfernt werden, etwa wegen tiefer Karies, eines Zahnbruchs oder einer Parodontalerkrankung.",
            "Das Ziehen eines Zahns ist ein Routineeingriff unter örtlicher Betäubung. Vor jedem Eingriff in der Mundhöhle erhebt der Oralchirurg eine genaue Krankengeschichte. Alle Medikamente, die der Patient einnimmt, müssen angegeben werden, damit sie Blutungen während und nach dem Eingriff und die Wundheilung nicht beeinträchtigen. Nach dem Eingriff wird die Wunde genäht oder heilt offen. Der Patient erhält Anweisungen, um Schwellung und Schmerzen zu lindern, und eine Woche später wird eine Kontrolle empfohlen, um die Heilung zu prüfen und gegebenenfalls die Fäden zu ziehen.",
          ],
        },
        {
          heading: "Was ist eine Alveotomie?",
          paragraphs: [
            "Neben dem einfachen Ziehen von Zähnen entfernen wir verlagerte und retinierte Zähne durch eine Alveotomie. Jeder Zahn im Kiefer kann verlagert oder retiniert sein. Ein verlagerter Zahn kann wegen eines mechanischen Hindernisses nicht an seinen Platz im Kiefer durchbrechen, ein retinierter Zahn bricht aus anderen, nicht mechanischen Gründen nicht durch. Am häufigsten verlagert sind die dritten Molaren, die Weisheitszähne. Hat der Knochen über der Krone des verlagerten Zahns eine Verbindung zur Mundhöhle, ist der Bereich schwer zu reinigen, und es kann zu einer Entzündung des umliegenden Zahnfleischs kommen, der Perikoronitis. Verursacht ein verlagerter oder retinierter Zahn Beschwerden, empfehlen wir seine Entfernung durch Alveotomie.",
            "Die Alveotomie ist ein oralchirurgischer Eingriff unter örtlicher Betäubung und daher für den Patienten völlig schmerzfrei. Der Patient ist die ganze Zeit wach und kann sich mit dem Oralchirurgen verständigen. Vor der Alveotomie erhebt der Oralchirurg eine vollständige Krankengeschichte. Alle Medikamente müssen angegeben werden, damit sie Blutungen während und nach dem Eingriff und die Heilung der Wunde nicht beeinträchtigen. Die Alveotomie beginnt mit der örtlichen Betäubung. Danach setzt der Chirurg einen Schnitt mit dem Skalpell, öffnet den Kieferknochen mit einem Bohrer, um an das Operationsgebiet zu gelangen, und entfernt den Zahn mit speziellen chirurgischen Instrumenten (Meißel, Hebel) bei möglichst geringer Belastung des umliegenden Gewebes. Nach dem Eingriff wird die Wunde für eine bessere Heilung genäht, und der Patient erhält Anweisungen für die Zeit danach. Eine Woche später kommt er zur Kontrolle und zum Fädenziehen.",
          ],
        },
        {
          heading: "Was ist eine Wurzelspitzenresektion?",
          paragraphs: [
            "Die Wurzelspitzenresektion (Apikoektomie) ist ein oralchirurgischer Eingriff, bei dem die Wurzelspitze eines wurzelbehandelten Zahns entfernt wird. Sie wird von einem Facharzt für Oralchirurgie durchgeführt, wenn die Wurzelbehandlung Schmerzen und Entzündung nicht beseitigt hat oder sich ein Granulom an der Wurzelspitze trotz wiederholter Behandlung laut Röntgenbild nicht zurückgebildet hat. Dann empfiehlt sich die Entfernung der Wurzelspitze, damit der Zahn im Kiefer bleiben kann.",
            "Der Eingriff erfolgt unter örtlicher Betäubung und ist völlig schmerzfrei. Vorher erhebt der Oralchirurg eine vollständige Krankengeschichte. Alle Medikamente müssen angegeben werden, damit sie Blutungen während und nach dem Eingriff und die Wundheilung nicht beeinträchtigen. Der Ablauf ist folgender: Zuerst wird örtlich betäubt. Der Patient ist während des ganzen Eingriffs wach und kann sich mit dem Oralchirurgen verständigen. Nach Eintritt der Betäubung setzt der Oralchirurg einen waagrechten Schnitt auf Höhe der Wurzelspitze des betroffenen Zahns und öffnet den Knochen mit einem Bohrer, um an den Herd zu gelangen. Die Wurzelspitze wird entfernt und entzündetes Gewebe aus dem Knochen ausgeschabt. Bei Bedarf wird die Wurzel von der Spitze her gefüllt, um den Kanal abzudichten, und danach wird die Wunde genäht. Der Eingriff dauert je nach Knochendicke an der betreffenden Stelle 30 bis 60 Minuten. Die Narbe ist danach kaum sichtbar, und der Knochendefekt füllt sich innerhalb einiger Monate.",
            "Die Wurzelspitzenresektion wird durchgeführt, wenn eine Wurzelbehandlung nicht ausreicht, um eine Entzündung im Knochen zu heilen, die sich aus dem Wurzelkanal ausgebreitet hat, oder wenn Zysten mit der Zahnwurzel verbunden sind. Nach dem Eingriff ist die Wurzel etwas kürzer, aber der Zahn bleibt im Kiefer und behält Funktion und Aussehen.",
          ],
        },
      ],
      faqs: [
        {
          id: "oralna-kirurgija-1",
          question: "Wann sollten verlagerte oder retinierte Zähne entfernt werden?",
          answer:
            "<ul><li>bei wiederholter Perikoronitis</li><li>bei Abszessen</li><li>bei Erkrankungen des Zahnmarks oder des Zahnhalteapparats</li><li>bei starker Zerstörung des Zahns durch Karies</li><li>bei Auflösung der Wurzeln benachbarter Zähne</li></ul>",
        },
        {
          id: "oralna-kirurgija-2",
          question: "Welche Anzeichen hat eine Perikoronitis?",
          answer:
            "<ul><li>Schmerzen, die ins Ohr und ins Kiefergelenk ausstrahlen</li><li>eingeschränkte Mundöffnung (Kieferklemme, Trismus)</li><li>Schluckbeschwerden</li><li>geschwollene Lymphknoten unter dem Kieferrand und am Hals</li><li>Austritt von Eiter beim Druck auf das geschwollene Gewebe über dem Zahn</li></ul>",
        },
        {
          id: "oralna-kirurgija-3",
          question: "Wann wird von einer Alveotomie abgeraten?",
          answer:
            "<ul><li>wenn der Zahn weder örtliche noch allgemeine Beschwerden verursacht</li><li>bei höherem Alter des Patienten (der Knochen ist schlechter durchblutet)</li><li>bei einer belasteten Krankengeschichte des Patienten</li></ul>",
        },
        {
          id: "oralna-kirurgija-4",
          question: "Was hilft gegen Schmerzen und Schwellung nach dem Ziehen eines Zahns?",
          answer:
            "<p>Kühlen Sie die Wange von außen über der Wunde, essen Sie nur lauwarme und weiche Speisen und verzichten Sie in den nächsten Tagen auf Heißes und Kohlensäurehaltiges. Raucher sollten nicht rauchen, damit die Wunde schneller und besser heilt. Nehmen Sie bei Bedarf ein Schmerzmittel, aber keine Präparate mit Acetylsalicylsäure (Andol, Aspirin), da sie die Blutung verlängern können.</p>",
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
        "Einzelzahn- und Panoramaaufnahmen mit moderner digitaler Technik und niedrigster Strahlendosis",
      sections: [
        {
          heading: "Röntgendiagnostik (intraorale und Panoramaaufnahmen)",
          paragraphs: [
            "Röntgenaufnahmen von Zähnen und Kiefern sind in allen Bereichen der Zahnmedizin ein wichtiges diagnostisches Mittel, denn sie zeigen anatomische und krankhafte Veränderungen im Knochen, die bei der klinischen Untersuchung nicht sichtbar sind. Sie sind für die Planung fast jeder zahnmedizinischen Behandlung unverzichtbar.",
            "Frühere herkömmliche Röntgensysteme gaben nur einen schlechten Einblick in die Knochenstruktur, bei deutlich höherer Strahlenbelastung für Patient und Personal. Mit der digitalen Röntgentechnik ist die Strahlendosis stark gesunken, und die Bearbeitung der Bilder ist viel einfacher geworden. Die moderne digitale Technik im Dental Centar Repić garantiert die niedrigste Strahlendosis (bis zu 90 % weniger als bei klassischen Röntgenaufnahmen). Unsere Patienten können die Aufnahme direkt vor oder nach der Behandlung machen lassen, sodass zusätzliche Termine entfallen.",
            "Im Dental Centar Repić fertigen wir Aufnahmen eines einzelnen Zahns (intraorale retroalveoläre Aufnahmen) und beider Kiefer (Panoramaaufnahme oder Orthopantomogramm) an. Intraorale Aufnahmen zeigen einen einzelnen Zahn in tatsächlicher Größe, eine retroalveoläre Aufnahme einen Zahn oder diesen Zahn mit seinen beiden Nachbarn. Das Orthopantomogramm (Panoramaaufnahme) ist die häufigste Aufnahme in der Zahnmedizin: Es zeigt krankhafte Veränderungen an den Wurzelspitzen, gibt einen Überblick über den Knochenzustand bei Parodontitis und zeigt Karies. Bei Kindern kann die Strahlendosis des Orthopantomogramms angepasst werden, da diese Aufnahme für die Planung einer kieferorthopädischen Behandlung wichtig ist.",
            "Die Aufnahmen werden auf dem Computer gespeichert, sind jederzeit abrufbar und können dem Patienten auf Wunsch per E-Mail geschickt werden. Digital gespeicherte Bilder lassen sich mit verschiedenen Programmen bearbeiten (schärfen, vergrößern, verkleinern, einfärben, vermessen und weiter auswerten), um zusätzliche Erkenntnisse über die Mundgesundheit zu gewinnen und dem Zahnarzt die richtige Diagnose zu erleichtern.",
            "In allen Behandlungsräumen sind die Computer mit einer zentralen Datenbank verbunden, sodass alle digitalen Röntgendaten jederzeit in jedem Raum verfügbar sind. Das verkürzt die Auswertung erheblich und ermöglicht eine bessere Beratung zwischen Fachärzten und Patient.",
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
        "Die Mundgesundheit von Kindern liegt uns besonders am Herzen",
      sections: [
        {
          heading: "Zahnmedizin für Kinder",
          paragraphs: [
            "Frühe Besuche beim Zahnarzt fördern gute Gewohnheiten bei der Mundhygiene und helfen, Ängste abzubauen, in der Kindheit wie auch später im Leben. Der beste Zeitpunkt für den ersten Zahnarztbesuch ist um das erste Lebensjahr.",
            "Mit Spiel und einer dem Alter des Kindes angepassten Ansprache machen wir die Behandlung möglichst angenehm und schonend. Die Zähne der Kleinsten bestreichen wir zur Kariesvorbeugung mit einem Fluoridgel. Das ist für Kinder völlig schmerzfrei.",
            "Wir erklären Eltern, wie wichtig die Behandlung von Milchzähnen ist, um späteren Problemen an den bleibenden Zähnen und Zahnfehlstellungen vorzubeugen, die durch den frühen Verlust von Milchzähnen entstehen können. Junge bleibende Zähne versiegeln wir, damit sich in ihren Fissuren lange keine Karies bildet. Für die Fissurenversiegelung muss nicht gebohrt werden.",
            "Muss ein Zahn wegen Karies gebohrt werden, betäuben wir schmerzfrei: Zuerst bestreichen wir die Einstichstelle mit einem Betäubungsgel, damit die Spritze nicht wehtut.",
            "Dank der fachübergreifenden Zusammenarbeit unserer Fachärzte Dr. Dario Repić und Dr. Slavica Pejda Repić, Fachärztin für Kieferorthopädie, erhalten Sie und Ihr Kind die beste Beratung und die optimale Behandlung. Während Ihr Kind wächst, achten wir besonders auf Vorbeugung, um bestimmten Zahnfehlstellungen und unangenehmen Erfahrungen beim Zahnarzt vorzubeugen.",
            "Für eine erfolgreich behandelte Karies erhalten unsere jungen Patienten ein Tapferkeitsdiplom oder eine Urkunde.",
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
