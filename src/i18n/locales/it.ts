import type { Translation } from "../types";

/**
 * Italian translations.
 *
 * Translated from the clinic's Croatian and English copy on dentalrepic.com.hr.
 */
export const it: Translation = {
  brand: {
    name: "Dental Centar Repić",
    tagline: "Ci prendiamo cura del tuo sorriso perfetto",
    logoAlt: "Dental Centar Repić",
  },

  nav: {
    links: [
      { label: "Home", href: "/", icon: "home" },
      { label: "Chi siamo", href: "/about", icon: "info" },
      { label: "Servizi", href: "/services", icon: "clipboard" },
      { label: "Contatti", href: "/contact", icon: "phone" },
    ],
    cta: { label: "Prenota un appuntamento", href: "/contact#form" },
    languageLabel: "Lingua",
    menuLabel: "Apri il menu",
  },

  footer: {
    description:
      "La tutela della salute orale, della funzione e dell'estetica è il fondamento del nostro lavoro con i pazienti. Trattiamo ogni paziente in modo individuale, seguiamo il progresso tecnologico e ci impegniamo in ogni momento a offrire il miglior servizio possibile. Investiamo costantemente in nuove attrezzature e nella formazione professionale del nostro team.",
    hoursHeading: "Orari di apertura",
    closed: "Chiuso",
    contactHeading: "Contatti",
    designCredit: "Design",
  },

  common: {
    learnMore: "Scopri di più",
    readMore: "Leggi di più",
    readLess: "Mostra meno",
    callUsToday: "Chiamaci oggi stesso!",
    bookAppointment: "Prenota un appuntamento",
    booking: {
      eyebrow: "Contattaci",
      heading: "Prenota il tuo appuntamento. La prima visita è gratuita.",
      text: "Compila il modulo o chiamaci: ti ricontatteremo durante i nostri orari di apertura.",
    },
  },

  home: {
    meta: {
      title: "Dental Centar Repić | Studio dentistico a Trogir, Croazia",
      description:
        "Dental Centar Repić a Trogir: implantologia, ortodonzia, endodonzia, protesi e medicina dentale estetica. Prima visita gratuita. Tel. +385 21 796 241.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "Un approccio moderno. Un sorriso sano.",
      lead: "Cure dentali complete con un team esperto, tecnologia moderna e un approccio individuale a ogni paziente.",
      ctaPrimary: "Prenota un appuntamento",
      ctaSecondary: "I nostri servizi",
    },
    services: {
      eyebrow: "Competenza e professionalità",
      heading: "Servizio dentale completo",
      paragraph:
        "Uniamo le conoscenze dei nostri specialisti, la tecnologia moderna e materiali di qualità per offrire cure dentali complete, su misura per le tue esigenze.",
      // Paired in order with the pictograms in HomePage.astro.
      items: [
        { title: "Odontoiatria generale", summary: "Prevenzione e cura dei denti" },
        { title: "Implantologia", summary: "Sostituzione dei denti persi" },
        { title: "Odontoiatria estetica", summary: "Un sorriso bello e naturale" },
        { title: "Ortodonzia", summary: "Denti ben allineati" },
      ],
      cta: "Scopri tutti i nostri servizi",
    },
    team: {
      eyebrow: "Il nostro team",
      heading: "Le persone che si prendono cura di te",
      paragraphs: [
        "Conoscenza, esperienza e collaborazione al servizio della tua salute.",
        "Il nostro team riunisce specialisti di diversi ambiti dell'odontoiatria, che affrontano con competenza ed esperienza problemi dentali semplici e complessi.",
      ],
      cta: "Conosci il nostro team",
      imageAlt: "Dott.ssa Slavica Pejda Repić e Dott. Dario Repić",
    },
    visit: {
      eyebrow: "La tua visita",
      heading: "Per noi conta come ti senti",
      paragraph:
        "Dalla prima visita alla fine del trattamento, cerchiamo di offrirti un'esperienza piacevole, in cui ti senta rilassato, informato e al sicuro.",
    },
    space: {
      eyebrow: "Il nostro studio",
      heading: "Uno studio moderno e attrezzato",
      paragraph:
        "Investiamo in attrezzature, tecnologia e materiali di qualità per garantire le condizioni di un lavoro professionale e di cure dentali di alta qualità. Per noi è importante anche che tu ti senta a tuo agio e al sicuro durante la visita.",
      galleryLabel: "Foto dello studio",
      previousLabel: "Foto precedente",
      nextLabel: "Foto successiva",
      // Paired in order with the gallery photos in HomePage.astro.
      photoAlts: [
        "Reception e sala d'attesa",
        "Angolo relax nella sala d'attesa",
        "Angolo bambini nella sala d'attesa",
        "Studio con vista sul mare",
        "Poltrona odontoiatrica in uno studio",
        "Studio con specchi rotondi",
        "Gli studi visti dall'esterno",
      ],
      videoTitle: "Video: Dental Centar Repić",
      playLabel: "Riproduci il video di Dental Centar Repić",
    },
  },

  about: {
    meta: {
      title: "Chi siamo - Il nostro team | Dental Centar Repić",
      description:
        "Conosci il team di Dental Centar Repić a Trogir: specialisti in ortodonzia, endodonzia e odontoiatria restaurativa, con dottorato di ricerca.",
    },
    hero: {
      eyebrow: "La competenza che ci unisce",
      title: "Persone di cui puoi fidarti.",
    },
    intro: {
      eyebrow: "Competenza e professionalità",
      heading: "Chi siamo",
      paragraph:
        "Personale altamente qualificato, un approccio interdisciplinare e un ambiente accogliente rendono Dental Centar Repić la scelta giusta per te. Garantiamo un approccio professionale, un servizio di alta qualità e l'uso di materiali all'avanguardia.",
    },
    // Paired in order with the portraits in AboutPage.astro.
    team: [
      { name: "Dr.ssa Slavica Pejda Repić", role: "Odontoiatra, specialista in ortodonzia" },
      { name: "Dr. Dario Repić", role: "Odontoiatra, specialista in endodonzia e odontoiatria restaurativa" },
      { name: "Danijela Maleta", role: "Odontoiatra" },
      { name: "Magdalena Županović", role: "Odontoiatra" },
      { name: "Katja Bažoka", role: "Assistente dentale" },
      { name: "Manuela Škrobica", role: "Assistente dentale" },
      { name: "Ana Papić", role: "Assistente dentale" },
    ],
  },

  services: {
    meta: {
      title: "Servizi - Servizio dentale completo | Dental Centar Repić",
      description:
        "Implantologia, ortodonzia, endodonzia, protesi dentale, medicina dentale estetica, chirurgia orale, parodontologia, diagnostica radiologica e odontoiatria pediatrica.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "Dalla prevenzione agli interventi complessi.",
    },
    intro: {
      eyebrow: "Un approccio completo",
      heading: "Un centro. Tante possibilità.",
      paragraph:
        "Dall'implantologia e l'ortodonzia alla medicina dentale estetica: offriamo una soluzione per tutte le tue esigenze dentali in un unico luogo, con un approccio professionale e materiali all'avanguardia.",
    },
    // Paired in order with the images and detail pages in ServicesPage.astro.
    cards: [
      {
        title: "Impianti dentali",
        summary:
          "Gli impianti dentali sono un intervento consolidato che sostituisce i denti persi senza intervenire sui denti vicini.",
      },
      {
        title: "Ortodonzia",
        summary:
          "La terapia ortodontica (apparecchio per i denti) è indicata in caso di posizione e disposizione irregolare dei denti.",
      },
      {
        title: "Endodonzia",
        summary:
          "Una disciplina specialistica dell'odontoiatria, strettamente legata all'odontoiatria restaurativa e alla cariologia.",
      },
      {
        title: "Protesi dentale",
        summary:
          "Dedichiamo particolare attenzione alla conservazione della funzione dei denti e dell'intero apparato masticatorio.",
      },
      {
        title: "Medicina dentale estetica",
        summary:
          "Un bel sorriso migliora l'umore, rafforza la fiducia in te stesso e ti aiuta a fare un'ottima prima impressione.",
      },
      {
        title: "Chirurgia orale",
        summary:
          "Estrazioni chirurgiche e altri interventi di chirurgia orale, eseguiti con competenza e attenzione.",
      },
      {
        title: "Parodontologia",
        summary:
          "Intervieni in tempo per prevenire le malattie gengivali e la perdita dei denti.",
      },
      {
        title: "Diagnostica radiologica",
        summary:
          "Diagnostica radiologica moderna per individuare precocemente le patologie e pianificare con precisione la terapia.",
      },
      {
        title: "Odontoiatria pediatrica",
        summary:
          "Un approccio delicato con i pazienti più piccoli e controlli preventivi per denti sani fin dalla prima infanzia.",
      },
    ],
    // Treatment catalogue by area, listed in the footer.
    groups: [
      {
        title: "Implantologia e protesi",
        items: [
          "Impianti dentali",
          "Protesi dentale",
          "Corone e ponti",
          "Riabilitazione orale e protesica completa",
        ],
      },
      {
        title: "Ortodonzia",
        items: [
          "Apparecchi ortodontici",
          "Apparecchi fissi",
          "Apparecchi mobili",
          "Trattamento di denti irregolari e distanziati",
        ],
      },
      {
        title: "Endodonzia e odontoiatria restaurativa",
        items: [
          "Trattamento dei canali radicolari",
          "Trattamento dell'infiammazione dentale",
          "Trattamento della carie",
          "Restauro di denti rotti e scheggiati",
        ],
      },
      {
        title: "Medicina dentale estetica",
        items: [
          "Sbiancamento dei denti",
          "Faccette in ceramica",
          "Smile Design",
          "Gioielli dentali",
          "Sabbiatura dei denti",
        ],
      },
      {
        title: "Chirurgia orale e parodontologia",
        items: [
          "Chirurgia orale",
          "Parodontologia",
          "Estrazione chirurgica dei denti",
          "Trattamento della parodontite",
        ],
      },
      {
        title: "Diagnostica e odontoiatria pediatrica",
        items: [
          "Diagnostica radiologica",
          "Odontoiatria pediatrica",
          "Prima visita gratuita",
          "Visite preventive",
        ],
      },
    ],
  },

  tourism: {
    meta: {
      title: "Turismo dentale a Trogir, Croazia | Dental Centar Repić",
      description:
        "Unisci una vacanza in Dalmazia a cure dentali di alto livello. Prezzi fino a 5 volte inferiori a quelli europei. Dental Centar Repić, Trogir.",
    },
    hero: {
      title: "TURISMO DENTALE",
      description:
        "Unisci una visita turistica in Dalmazia a un servizio dentale di alto livello. <br /> Posizione attraente nelle immediate vicinanze del centro storico di Trogir, patrimonio UNESCO.",
    },
    intro: {
      heading: "Unisci l'utile al piacevole",
      paragraphs: [
        "La posizione attraente di Dental Centar Repić nelle immediate vicinanze del centro storico di Trogir, città patrimonio UNESCO, è la scelta ideale per i pazienti stranieri che desiderano unire l'utile al piacevole: una vacanza piacevole e un servizio dentale di qualità a prezzi vantaggiosi.",
        "Ai nostri ospiti, oltre a un soggiorno piacevole nel cuore della Dalmazia, cerchiamo di offrire un servizio odontoiatrico di qualità e ben organizzato. Siamo pronti a offrirti una riabilitazione orale e protesica completa, in linea con il soggiorno che hai programmato nella nostra città.",
        "I prezzi dei nostri servizi sono fino a 5 volte inferiori ai prezzi europei standard, e il nostro team sarà felice di aiutarti a organizzare l'arrivo e il soggiorno a Trogir.",
      ],
    },
    benefits: {
      heading: "Perché Trogir",
      items: [
        {
          title: "Prezzi fino a 5 volte inferiori",
          description:
            "I nostri prezzi sono fino a cinque volte inferiori ai prezzi europei standard",
        },
        {
          title: "Trogir, città UNESCO",
          description:
            "Lo studio si trova nelle immediate vicinanze del centro storico di Trogir",
        },
        {
          title: "Aiuto nell'organizzazione",
          description:
            "Il nostro team ti aiuta volentieri a organizzare l'arrivo e il soggiorno",
        },
        {
          title: "Terapia su misura per il viaggio",
          description:
            "Pianifichiamo la riabilitazione completa in base alla durata del tuo soggiorno",
        },
      ],
    },
    howItWorks: {
      heading: "Come funziona",
      steps: [
        {
          title: "1. Contattaci",
          description:
            "Inviaci una richiesta con la descrizione della situazione e le date previste",
        },
        {
          title: "2. Piano di terapia",
          description:
            "Proponiamo un piano di terapia e un calendario di visite adatto al tuo soggiorno",
        },
        {
          title: "3. Arrivo e trattamento",
          description:
            "Eseguiamo la terapia negli appuntamenti concordati, lasciando tempo per riposare",
        },
        {
          title: "4. Controlli successivi",
          description:
            "Dopo il trattamento restiamo a disposizione per controlli e consigli",
        },
      ],
    },
    cta: {
      heading: "Hai in programma un viaggio in Dalmazia?",
      subheading:
        "Inviaci una richiesta con le date previste e prepareremo un piano di terapia adatto al tuo soggiorno.",
      primaryButton: "Invia una richiesta",
      secondaryButton: "Vedi i servizi",
    },
  },

  contact: {
    meta: {
      title: "Contatti - Prenota un appuntamento | Dental Centar Repić",
      description:
        "Dental Centar Repić, Rimski put 3J, 21220 Trogir, Croazia. Telefono +385 21 796 241, e-mail info@dentalrepic.com. Nei giorni lavorativi 8:00 - 20:00.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "Rivolgiti a noi con fiducia.",
    },
    intro: {
      eyebrow: "Contatti",
      heading: "Prenota un appuntamento",
      paragraph:
        "Compila il modulo qui sotto e ti contatteremo il prima possibile, durante i nostri orari di apertura. La prima visita è gratuita.",
    },
    addressHeading: "Indirizzo",
    contactHeading: "Contatti",
    emergencyHeading: "Urgenze",
    phoneLabel: "Telefono",
    emailLabel: "E-mail",
    form: {
      heading: "Prenota un appuntamento",
      description: [
        "Siamo qui per rispondere a tutte le tue domande e fissare il tuo prossimo appuntamento.",
        "Scrivici, chiamaci o passa a trovarci: il tuo nuovo sorriso inizia qui.",
      ],
      nameLabel: "Nome e cognome",
      emailLabel: "E-mail",
      messageLabel: "Messaggio",
      messagePlaceholder: "Scrivi il tuo messaggio...",
      submit: "Invia",
      submitting: "Invio in corso...",
      successMessage:
        "Grazie! Abbiamo ricevuto la tua richiesta e ti contatteremo durante i nostri orari di apertura.",
      errorMessage:
        "Invio non riuscito. Riprova o chiamaci al +385 21 796 241.",
      captchaMessage: "Conferma di non essere un robot.",
    },
    mapTitle: "Mappa con la posizione di Dental Centar Repić a Trogir",
  },

  info: {
    meta: {
      title: "FAQ - Domande frequenti | Dental Centar Repić",
      description:
        "Risposte alle domande più comuni sulla prima visita gratuita, impianti, apparecchi, paura del dentista e turismo dentale a Trogir.",
    },
    hero: {
      title: "DOMANDE FREQUENTI",
      description:
        "Risposte chiare sui nostri servizi, sugli appuntamenti e sui trattamenti, per decidere con serenità per te o per i tuoi familiari.",
    },
    heading: "Domande frequenti",
    cta: {
      heading: "Hai ancora domande?",
      subheading:
        "Il nostro team risponderà volentieri a ogni ulteriore domanda. Chiamaci o inviaci una richiesta.",
      primaryButton: "Contattaci",
    },
  },

  notFound: {
    meta: {
      title: "Pagina non trovata - Dental Centar Repić",
      description: "Non è stato possibile trovare la pagina che cercavi.",
    },
    heading: "Pagina non trovata",
    description:
      "Purtroppo non abbiamo trovato la pagina che cercavi. Potrebbe essere stata spostata o non esistere.",
    backHome: "Torna alla home",
    contactUs: "Contattaci",
    lookingForLabel: "Forse stai cercando:",
  },

  // Nessuna pagina di dettaglio dei servizi: il testo è quello clinico della
  // clinica stessa ed esiste solo in croato e in inglese. Invece di tradurre
  // automaticamente migliaia di parole di terminologia dentale, queste pagine
  // sono assenti in italiano e l'elenco dei servizi rimanda alle lingue
  // disponibili. Aggiungendo le voci qui, le rotte, il selettore di lingua e la
  // sitemap si aggiornano da soli.
  serviceDetails: {},

  serviceDetailChrome: {
    backToServices: "Tutti i servizi",
    faqHeading: "Domande frequenti",
    relatedHeading: "Altri servizi",
    cta: {
      heading: "Hai una domanda su questo trattamento?",
      subheading:
        "Chiamaci o prenota un appuntamento — la prima visita è gratuita e il piano di terapia lo concordiamo insieme a te.",
      primaryButton: "Prenota un appuntamento",
    },
    availableInLabel: "Disponibile in croato e inglese",
  },

  faqs: [
    {
      id: "prvi-pregled",
      question: "La prima visita è gratuita?",
      answer:
        "<p>Sì. La prima visita presso Dental Centar Repić è gratuita.</p><p>Durante la visita valutiamo lo stato dei denti e delle gengive, se necessario eseguiamo una radiografia e proponiamo un piano di terapia con una stima di tempi e costi, così puoi decidere senza impegno.</p>",
    },
    {
      id: "termin",
      question: "Come posso prenotare un appuntamento?",
      answer:
        "<p>Puoi prenotare in due modi:</p><ul><li><strong>Per telefono:</strong> +385 21 796 241, nei giorni lavorativi dalle 8:00 alle 20:00</li><li><strong>Con il modulo:</strong> compila il modulo nella pagina Contatti e ti risponderemo durante gli orari di apertura</li></ul><p>Se hai bisogno di un intervento urgente, ti preghiamo di chiamarci per telefono.</p>",
    },
    {
      id: "usluge",
      question: "Quali servizi offrite?",
      answer:
        "<p>Offriamo un servizio dentale completo in un unico luogo:</p><ul><li>Implantologia e protesi dentale (corone, ponti)</li><li>Ortodonzia — apparecchi fissi e mobili</li><li>Endodonzia — trattamento dei canali radicolari e dell'infiammazione dentale</li><li>Medicina dentale estetica — sbiancamento, faccette in ceramica, Smile Design</li><li>Chirurgia orale e parodontologia</li><li>Diagnostica radiologica e odontoiatria pediatrica</li></ul>",
    },
    {
      id: "strah-od-zubara",
      question: "Ho paura del dentista. Come potete aiutarmi?",
      answer:
        "<p>La paura del dentista è comune e del tutto comprensibile, e noi la superiamo con successo.</p><p>Lavoriamo senza pressioni, spieghiamo ogni passaggio in anticipo e adattiamo il ritmo a te. Poniamo particolare attenzione al lavoro con i bambini, perché si sentano a proprio agio dalla prima visita.</p>",
    },
    {
      id: "djeca",
      question: "Trattate anche i bambini?",
      answer:
        "<p>Sì, l'odontoiatria pediatrica è uno dei nostri servizi.</p><p>Lo studio è adatto alle famiglie, e i nostri medici e il personale sono particolarmente dedicati ai pazienti più piccoli: l'obiettivo è che il bambino costruisca fiducia e viva un'esperienza positiva dalla prima visita.</p>",
    },
    {
      id: "dentalni-turizam",
      question: "Vengo dall'estero. Potete organizzare la terapia?",
      answer:
        "<p>Sì. La nostra posizione nelle immediate vicinanze del centro storico di Trogir, città patrimonio UNESCO, è ideale per i pazienti che desiderano unire vacanza e cure dentali.</p><ul><li>I prezzi sono fino a 5 volte inferiori a quelli europei standard</li><li>Adattiamo il piano di terapia alla durata del tuo soggiorno</li><li>Il nostro team aiuta a organizzare l'arrivo e il soggiorno a Trogir</li></ul><p>Inviaci una richiesta con le date previste e prepareremo una proposta di terapia.</p>",
    },
    {
      id: "radno-vrijeme",
      question: "Quando siete aperti?",
      answer:
        "<p>Siamo aperti dal lunedì al venerdì, dalle 8:00 alle 20:00.</p><p>Il sabato e la domenica siamo chiusi. Per appuntamenti e informazioni chiama il +385 21 796 241 o scrivici tramite il modulo.</p>",
    },
    {
      id: "lokacija",
      question: "Dove vi trovate?",
      answer:
        "<p>Ci trovi in Rimski put 3J, 21220 Trogir, nelle immediate vicinanze del centro storico.</p><p>La posizione è facilmente raggiungibile e lo studio è accessibile anche alle persone con disabilità.</p>",
    },
  ],
};
