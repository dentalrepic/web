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
      { label: "Turismo dentale", href: "/dental-tourism", icon: "star" },
      { label: "Informazioni", href: "/info", icon: "book" },
    ],
    cta: { label: "Prenota un appuntamento", href: "/contact" },
    languageLabel: "Lingua",
    menuLabel: "Apri il menu",
  },

  footer: {
    description:
      "La tutela della salute orale, della funzione e dell'estetica è il fondamento del nostro lavoro con i pazienti. Trattiamo ogni paziente in modo individuale, seguiamo il progresso tecnologico e ci impegniamo in ogni momento a offrire il miglior servizio possibile. Investiamo costantemente in nuove attrezzature e nella formazione professionale del nostro team.",
    servicesHeading: "Servizi",
    hoursHeading: "Orari di apertura",
    rightsReserved: "Tutti i diritti riservati",
  },

  common: {
    learnMore: "Scopri di più",
    readMore: "Leggi di più",
    readLess: "Mostra meno",
    callUsToday: "Chiamaci oggi stesso!",
    bookAppointment: "Prenota un appuntamento",
    openingHours: "Orari di apertura",
    openingHoursRows: [
      { day: "Lunedì", hours: "8:00 - 20:00" },
      { day: "Martedì", hours: "8:00 - 20:00" },
      { day: "Mercoledì", hours: "8:00 - 20:00" },
      { day: "Giovedì", hours: "8:00 - 20:00" },
      { day: "Venerdì", hours: "8:00 - 20:00" },
      { day: "Sabato", hours: "Chiuso" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  home: {
    meta: {
      title: "Dental Centar Repić | Studio dentistico a Trogir, Croazia",
      description:
        "Dental Centar Repić a Trogir: implantologia, ortodonzia, endodonzia, protesi e medicina dentale estetica. Prima visita gratuita. Tel. +385 21 796 241.",
    },
    hero: {
      title: "Soluzioni dentali di alto livello",
      subtitleLine1: "Una soluzione per tutte le tue esigenze dentali",
      subtitleLine2: "in un unico luogo.",
      ctaPrimary: "Prenota un appuntamento",
      ctaSecondary: "I nostri servizi",
      imageAlt: "Studio Dental Centar Repić",
    },
    welcome: {
      eyebrow: "Benvenuti sul nostro sito",
      heading: "Ci prendiamo cura del tuo sorriso perfetto",
      intro:
        "Personale altamente qualificato (specialisti delle discipline odontoiatriche, con dottorato di ricerca), un approccio interdisciplinare e un ambiente accogliente sono ciò che rende Dental Centar Repić la scelta giusta per te. Garantiamo un approccio professionale, un servizio di alta qualità e l'uso di materiali all'avanguardia. Vogliamo che ti senta a tuo agio nel nostro centro, e ripagheremo la tua fiducia con conoscenza, competenza ed esperienza.",
      highlights: [
        {
          title: "Attrezzature della massima qualità",
          description:
            "Utilizziamo esclusivamente materiali di alta qualità di produttori di fama internazionale",
        },
        {
          title: "Studio ampio e attrezzato",
          description:
            "Oltre a un trattamento di prim'ordine, facciamo in modo che ti senta a tuo agio",
        },
        {
          title: "Personale cordiale e competente",
          description:
            "I nostri medici e il personale sanitario sono sempre a tua disposizione",
        },
      ],
      link: "Scopri di più su di noi",
      imageAlt: "Il team di Dental Centar Repić",
    },
    servicesIntro: {
      eyebrow: "Competenza e professionalità",
      heading: "Servizio dentale completo",
      description:
        "Offriamo tutti i nostri servizi e trattamenti in ambienti modernamente attrezzati, secondo le regole della professione, affinché i nostri pazienti si sentano a proprio agio e siano soddisfatti del servizio.",
      services: [
        {
          title: "Impianti dentali",
          summary:
            "Risolvi in modo definitivo la mancanza di denti e recupera la funzione masticatoria.",
        },
        {
          title: "Ortodonzia (apparecchi)",
          summary:
            "Realizza il tuo sogno di un bel sorriso con i nostri ortodontisti specialisti.",
        },
        {
          title: "Medicina dentale estetica",
          summary:
            "Ottieni il sorriso che hai sempre desiderato e goditi la nuova sicurezza.",
        },
      ],
    },
    whyUs: {
      heading: "Perché scegliere Dental Centar Repić",
      subheading:
        "Dalla prima visita gratuita alle attrezzature di alto livello: tutto in un unico luogo, nel cuore della Dalmazia.",
      reasons: [
        "Prima visita gratuita",
        "Personale cordiale",
        "Studio ampio",
        "Medici esperti",
        "Adatto alle famiglie",
        "Posizione comoda",
        "Nessuna attesa",
        "Garanzia di qualità",
        "Accessibile ai disabili",
        "Attrezzature moderne",
        "Materiali di alta qualità",
        "Diagnostica radiologica",
      ],
      imageAlt: "Attrezzature moderne nello studio",
    },
    problems: {
      heading: "Abbiamo la soluzione ai tuoi problemi dentali",
      items: [
        {
          title: "Mancanza di denti",
          description:
            "Sorridi di nuovo con orgoglio: con le nostre soluzioni protesiche e implantari ti restituiamo il sorriso e la corretta funzione dei denti.",
        },
        {
          title: "Mal di denti",
          description:
            "Il mal di denti può avere diverse cause. Dopo una visita dentale approfondita decidiamo la terapia e il trattamento più adeguati.",
        },
        {
          title: "Paura del dentista",
          description:
            "Superiamo con successo la paura del dentista. Poniamo particolare attenzione al lavoro con i bambini, perché si sentano a proprio agio dalla prima visita.",
        },
        {
          title: "Denti rotti / scheggiati",
          description:
            "Trattiamo i denti rotti e scheggiati con corone o altri interventi.",
        },
        {
          title: "Parodontite",
          description:
            "Offriamo un servizio parodontale completo, adattato individualmente alle esigenze di ogni paziente.",
        },
        {
          title: "Denti irregolari / distanziati",
          description:
            "Siamo specializzati in un'ampia gamma di servizi ortodontici che ti porteranno il sorriso perfetto che hai sempre sognato.",
        },
        {
          title: "Carie e deterioramento dei denti",
          description:
            "Utilizziamo tecnologie moderne per individuare le patologie nella fase più precoce, garantire un trattamento tempestivo e preservare i tuoi denti.",
        },
        {
          title: "Macchie / discromie",
          description:
            "Il nostro servizio di sbiancamento ti garantisce i denti bianchi che hai sempre desiderato.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Domande frequenti",
      viewAll: "Vedi tutte le domande",
    },
    cta: {
      heading: "Prenota il tuo appuntamento o una visita gratuita",
      text: "Compila il modulo o chiamaci: ti contatteremo durante i nostri orari di apertura.",
      button: "Prenota ora",
    },
  },

  about: {
    meta: {
      title: "Chi siamo - Il nostro team | Dental Centar Repić",
      description:
        "Conosci il team di Dental Centar Repić a Trogir: specialisti in ortodonzia, endodonzia e odontoiatria restaurativa, con dottorato di ricerca.",
    },
    hero: {
      title: "CHI SIAMO",
      description:
        "Personale altamente qualificato, un approccio interdisciplinare e un ambiente accogliente rendono Dental Centar Repić la scelta giusta per te. <br /> Garantiamo un approccio professionale, un servizio di alta qualità e l'uso di materiali all'avanguardia.",
    },
    team: {
      heading: "Il nostro team",
      subheading:
        "Medici esperti e premiati, personale sanitario professionale e cortese",
      members: [
        {
          name: "Dr.ssa Slavica Pejda Repić",
          role: "Odontoiatra, specialista in ortodonzia",
        },
        {
          name: "Dr. Dario Repić",
          role: "Odontoiatra, specialista in endodonzia e odontoiatria restaurativa",
        },
      ],
    },
    approach: {
      heading: "Il nostro approccio ai pazienti",
      paragraphs: [
        "La tutela della salute orale, della funzione e dell'estetica è il fondamento del nostro lavoro con i pazienti. Trattiamo ogni paziente in modo individuale, seguiamo il progresso tecnologico e ci impegniamo a offrire il miglior servizio possibile.",
        "Investiamo costantemente in nuove attrezzature e nella formazione professionale del nostro team. Offriamo tutti i servizi in ambienti modernamente attrezzati, secondo le regole della professione, affinché i pazienti si sentano a proprio agio e soddisfatti.",
      ],
      imageAlt: "Lo studio Dental Centar Repić",
    },
    testimonials: {
      heading: "Cosa dicono i nostri pazienti",
      items: [
        {
          quote:
            "Dental Centar Repić è uno dei pochi studi dentistici dove il servizio è sempre all'altezza. Il personale è professionale e attento, ma anche allegro e sorridente. Personalmente ho fatto sistemare alcuni denti e ho ricevuto un impianto tre anni fa, e posso dire di essere ancora soddisfatto.",
          author: "Toni Vešović",
        },
        {
          quote:
            "Oltre a curare i problemi dentali, eliminano con successo la paura del dentista.",
          author: "Zorana Barada",
        },
        {
          quote:
            "Medici eccellenti, competenti e professionali. Complimenti anche per il lavoro con i bambini.",
          author: "Joško Herceg",
        },
        {
          quote: "Molto professionali e prezzi corretti.",
          author: "Gunther Braus",
        },
      ],
    },
    cta: {
      heading: "Rivolgiti a noi con fiducia",
      subheading:
        "La prima visita è gratuita. Prenota un appuntamento e parliamo di come possiamo aiutarti.",
      primaryButton: "Prenota un appuntamento",
      secondaryButton: "Vedi i nostri servizi",
    },
  },

  services: {
    meta: {
      title: "Servizi - Servizio dentale completo | Dental Centar Repić",
      description:
        "Implantologia, ortodonzia, endodonzia, protesi dentale, medicina dentale estetica, chirurgia orale, parodontologia, diagnostica radiologica e odontoiatria pediatrica.",
    },
    hero: {
      title: "I NOSTRI SERVIZI",
      description:
        "Offriamo tutti i nostri servizi e trattamenti in ambienti modernamente attrezzati, secondo le regole della professione, affinché i nostri pazienti si sentano a proprio agio e siano soddisfatti del servizio.",
    },
    intro: {
      heading: "Servizio dentale completo",
      paragraph:
        "Dall'implantologia e l'ortodonzia alla medicina dentale estetica: offriamo una soluzione per tutte le tue esigenze dentali in un unico luogo, con un approccio professionale e materiali all'avanguardia.",
    },
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
    equipment: {
      heading: "Attrezzature e materiali",
      paragraph:
        "Utilizziamo materiali di alta qualità di produttori di fama internazionale e investiamo costantemente in nuove attrezzature, per individuare le patologie nella fase più precoce e garantire un trattamento tempestivo.",
      features: [
        {
          title: "Materiali di alta qualità",
          description:
            "Materiali di produttori di fama internazionale in ogni trattamento",
        },
        {
          title: "Diagnostica radiologica",
          description:
            "Tecnologia moderna per la diagnosi precoce e una pianificazione precisa della terapia",
        },
        {
          title: "Formazione continua",
          description:
            "Investimento costante nella formazione professionale di tutto il team",
        },
      ],
      imageAlt: "Attrezzature dentali moderne",
    },
    cta: {
      heading: "Non trovi il servizio che cerchi?",
      subheading:
        "Chiamaci o prenota un appuntamento: fisseremo una visita e proporremo il trattamento migliore per te.",
      primaryButton: "Prenota un appuntamento",
      secondaryButton: "Turismo dentale",
    },
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
        "Dental Centar Repić, Put Dragulina 62 F, 21220 Trogir, Croazia. Telefono +385 21 796 241, e-mail dentalcenterrepic@gmail.com. Nei giorni lavorativi 8:00 - 20:00.",
    },
    hero: {
      title: "CONTATTI",
      description:
        "Rivolgiti a noi con fiducia. Compila il modulo o chiamaci per fissare un appuntamento: la prima visita è gratuita.",
    },
    intro:
      "Compila il modulo qui sotto e ti contatteremo il prima possibile, durante i nostri orari di apertura. La prima visita è gratuita.",
    addressHeading: "Il nostro indirizzo",
    contactHeading: "Contatti",
    phoneLabel: "Telefono",
    emailLabel: "E-mail",
    urgentNotice:
      "Se hai bisogno di un intervento urgente, chiama il +385 21 796 241.",
    form: {
      heading: "Prenota un appuntamento",
      description:
        "Compila il modulo qui sotto e ti contatteremo durante i nostri orari di apertura.",
      nameLabel: "Nome e cognome",
      namePlaceholder: "Il tuo nome e cognome",
      emailLabel: "E-mail",
      emailPlaceholder: "Il tuo indirizzo e-mail",
      phoneLabel: "Numero di telefono",
      phonePlaceholder: "Il tuo numero di telefono",
      reasonLabel: "Motivo della visita",
      reasonOptions: [
        "Prima visita - visita gratuita",
        "Impianti",
        "Apparecchi ortodontici",
        "Corone e ponti",
        "Medicina dentale estetica",
        "Infiammazione dentale",
        "Altro",
      ],
      preferredTimeLabel: "Orario preferito",
      preferredTimeOptions: [
        "Qualsiasi orario",
        "08:00 - 11:00",
        "11:00 - 14:00",
        "14:00 - 16:00",
      ],
      messageLabel: "Note",
      messagePlaceholder: "Descrivi brevemente il motivo della visita...",
      submit: "Invia",
      demoNote:
        "Modulo dimostrativo: collega questo modulo al tuo fornitore preferito prima della pubblicazione.",
      statusMessage:
        "Questo modulo dimostrativo funziona in locale. Collega un fornitore di moduli per ricevere i messaggi.",
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
        "<p>Ci trovi in Put Dragulina 62 F, 21220 Trogir, nelle immediate vicinanze del centro storico.</p><p>La posizione è facilmente raggiungibile e lo studio è accessibile anche alle persone con disabilità.</p>",
    },
  ],
};
