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
      { label: "Home", href: "/" },
      { label: "Chi siamo", href: "/about" },
      { label: "Servizi", href: "/services" },
      { label: "Contatti", href: "/contact" },
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
  serviceDetails: {
    implantologija: {
      slug: "implantologija",
      meta: {
        title: "Implantologia - impianti dentali | Dental Centar Repić",
        description:
          "Impianti dentali come soluzione definitiva alla perdita dei denti. Rigenerazione ossea, rialzo del seno mascellare e metodo All-on-4 al Dental Centar Repić a Trogir.",
      },
      title: "Implantologia",
      lead:
        "L'implantologia è il ramo dell'odontoiatria in più rapida crescita. Con gli impianti sostituiamo uno o più denti persi nell'arcata superiore o inferiore. Gli impianti inseriti sostituiscono la radice del dente e in 3-6 mesi si integrano con l'osso della mascella (osteointegrazione). In questo periodo il paziente non resta senza denti, ma porta una protesi provvisoria che garantisce estetica e funzione fino alla protesi definitiva. La protesi definitiva può essere una singola corona, un ponte o una protesi su impianti. L'impianto nell'osso aiuta anche a conservare il volume della cresta alveolare, perché stimola l'osso come un dente naturale ed evita il riassorbimento osseo che altrimenti segue la perdita di un dente.",
      sections: [
        {
          heading: "Cosa sono gli impianti dentali",
          bullets: [
            "Soluzione definitiva",
            "Pieno recupero della funzione dei denti",
            "Aspetto dei denti naturale e bello",
            "Aspetto di tutto il viso migliorato",
            "Prevenzione della perdita ossea",
            "Normale manutenzione",
          ],
        },
        {
          heading: "Quando consigliamo gli impianti",
          paragraphs: [
            "Quando manca un solo dente e i denti vicini sono sani, consigliamo un impianto per non dover limare i denti sani adiacenti. Sull'impianto si applica poi una corona.",
            "Chi porta una dentiera completa ha spesso problemi di scarsa tenuta, che si possono risolvere con una protesi su impianti. Nell'arcata superiore completamente edentula bastano di solito quattro impianti per stabilizzare la protesi, in quella inferiore di solito due. Le protesi su impianti portano a una maggiore soddisfazione rispetto alle dentiere tradizionali: sono più estetiche e stabili, facilitano la masticazione, limitano meno la funzione, si puliscono più facilmente e rendono più facile parlare.",
            "Gli impianti possono essere caricati subito (immediatamente dopo l'inserimento) o in modo convenzionale (dopo il periodo di osteointegrazione). Le ricerche mostrano che il carico convenzionale dà una sopravvivenza dell'impianto in bocca leggermente migliore.",
            "Gli impianti che usiamo ogni giorno sono in titanio di alta qualità, resistente e biocompatibile, e grazie all'anestesia locale l'intervento è del tutto indolore.",
            "Il requisito per un impianto è una quantità e qualità d'osso sufficiente, che verifichiamo prima di pianificare la terapia con una radiografia panoramica e una TAC. Se l'osso è scarso, sono possibili la rigenerazione ossea e il rialzo del seno mascellare.",
          ],
        },
        {
          heading: "Cos'è la rigenerazione ossea?",
          paragraphs: [
            "Dopo la perdita di un dente l'osso si atrofizza, perché non viene più stimolato dalla masticazione attraverso la radice. Il volume osseo diminuisce e non resta abbastanza spazio per un impianto. Il riassorbimento è più rapido se i denti estratti avevano infiammazioni intorno alla radice, perché l'infezione ha distrutto ulteriormente l'osso. Ogni impianto deve avere intorno a sé osso sufficiente che lo sostenga e lo stabilizzi, ed eviti la retrazione della gengiva intorno all'impianto e successivi problemi estetici, come l'impianto che traspare attraverso la mucosa. La rigenerazione ossea (augmentation) è un intervento chirurgico che sostituisce l'osso perso. Si può usare osso prodotto artificialmente, di origine sintetica o animale, oppure osso del paziente stesso (osso autologo), prelevato in bocca (mandibola) o fuori dalla bocca (ad esempio dall'anca), frantumato e inserito dove manca. L'osso autologo è il gold standard della rigenerazione ossea, perché ha il miglior potenziale di integrazione e di aumento del volume. In questo caso occorre prelevare chirurgicamente una quantità d'osso sufficiente. Per difetti ossei piccoli e medi si usa di solito osso artificiale di origine sintetica o animale. Il metodo viene scelto dallo specialista in chirurgia orale. La guarigione dell'osso e dei tessuti molli può migliorare con i fattori di crescita del paziente, ottenuti con il metodo PRF (fibrina ricca di piastrine), o con una biomembrana che stabilizza il coagulo e il materiale osseo. Il metodo PRF consiste nell'isolare la fibrina ricca di piastrine dal sangue del paziente e applicarla nella zona operata. Le piastrine liberano fattori di crescita che stimolano la formazione di nuovi vasi sanguigni e di nuovo osso. Il metodo è innocuo, perché si usa solo il sangue filtrato del paziente per favorire la guarigione. I materiali inseriti vengono riassorbiti gradualmente, l'osso si rimodella e si forma nuova massa ossea solida. La rigenerazione si esegue in anestesia locale ed è del tutto indolore. Dopo l'intervento bisogna attendere circa otto mesi perché l'osso guarisca, prima di inserire l'impianto.",
          ],
        },
        {
          heading: "Cos'è il rialzo del seno mascellare?",
          paragraphs: [
            "Quando manca osso nelle zone laterali dell'arcata superiore, è indicato il rialzo del pavimento del seno mascellare (sinus lift). È un intervento di chirurgia orale in cui il rialzo del pavimento del seno si combina con la rigenerazione ossea, per creare spazio sufficiente per gli impianti. Si esegue in anestesia locale ed è del tutto indolore.",
            "A seconda dell'entità dell'intervento si distingue un rialzo piccolo e uno grande. Se per l'impianto mancano solo circa 2 mm di osso, si esegue un piccolo rialzo, in cui il rialzo del pavimento del seno, la rigenerazione ossea e l'inserimento dell'impianto avvengono insieme. L'intervento si esegue con la tecnica degli osteotomi, che prende il nome dallo strumento con cui si solleva la membrana del seno mascellare. Dopo il piccolo rialzo occorre attendere circa sei mesi perché l'impianto si integri con l'osso, e solo dopo caricarlo con la protesi (corona, ponte).",
            "Il grande rialzo si esegue quando manca un volume d'osso maggiore, con un accesso laterale. A volte anche qui l'impianto si può inserire contemporaneamente, ma se manca molto osso si consiglia il rialzo con impianto differito. Tra rialzo e impianto devono allora passare 6-8 mesi, altrimenti c'è il rischio di complicanze e di insuccesso. Lo specialista in chirurgia orale decide, in base alla sua esperienza e ai Suoi esami, quale intervento Le serve.",
          ],
        },
        {
          heading: "Quali complicanze sono possibili con il rialzo del seno?",
          paragraphs: [
            "Il rialzo del seno ha un'alta percentuale di successo e le complicanze sono rare, ma possibili. Possono verificarsi durante l'intervento o dopo. Durante il rialzo la membrana del seno mascellare può lacerarsi, perché il suo spessore varia da paziente a paziente. In tal caso il chirurgo orale ripara il difetto con diverse tecniche e previene complicanze successive, come una sinusite causata dall'ingresso del materiale osseo nel seno.",
            "Dopo il rialzo è possibile un leggero gonfiore, che scompare in pochi giorni. È possibile anche una sinusite per varie cause, come la penetrazione di un'infezione dalla cavità orale, la penetrazione dell'impianto o del materiale osseo attraverso la membrana, o un intervento eseguito su un seno malato. Il requisito per il rialzo sono seni paranasali sani: se il paziente ha già una malattia dei seni, prima dell'intervento è necessario un consulto con un otorinolaringoiatra.",
          ],
        },
        {
          heading: "All-on-4",
          paragraphs: [
            "All-on-4, cioè «tutto su quattro (impianti)», indica una forma di riabilitazione implantoprotesica dell'arcata superiore o inferiore completamente senza denti. Il metodo non è nuovo, ma noto da anni e collaudato nella pratica clinica. Dopo la perdita dei denti l'osso della mascella si riduce col tempo. Se l'osso è ancora sufficiente, si consiglia un numero maggiore di impianti, perché la protesi ha più appoggi. In alcuni pazienti con osso scarso o di cattiva qualità, però, si possono inserire solo pochi impianti. Se il paziente è adatto all'All-on-4, bastano quattro impianti (due diritti e due inclinati, come stabilisce il chirurgo orale durante l'inserimento) per sostenere l'intera arcata. Dopo l'inserimento il paziente riceve lo stesso giorno, o al più tardi dopo pochi giorni, una protesi fissa provvisoria e dopo tre mesi quella definitiva. Così il periodo senza denti si riduce al minimo, con maggiore soddisfazione dei pazienti. Ciò è possibile grazie al carico immediato: gli impianti vengono caricati già al momento dell'inserimento, senza attendere l'osteointegrazione. Il metodo All-on-4 ha molti vantaggi: si evitano il rialzo del seno e la rigenerazione ossea nell'arcata superiore, il che accorcia la guarigione e riduce i costi; anche i pazienti senza denti da molto tempo e con poco osso possono avere una protesi fissa; bastano quattro impianti, che tengono la protesi stabile in bocca e danno la sensazione di denti naturali, senza la paura che si muova o cada come una dentiera. La protesi è avvitata e il dentista la può togliere facilmente per controlli e riparazioni. Anche l'igiene è semplice: spazzolino e dentifricio, più un idropulsore o il filo interdentale intorno agli impianti. Con una buona igiene gli impianti possono durare tutta la vita, e solo la protesi si sostituisce quando serve.",
            "Il costo dell'All-on-4 è inferiore a quello di un numero maggiore di impianti e degli interventi di chirurgia orale aggiuntivi. Così la protesi fissa su impianti diventa accessibile a più pazienti.",
          ],
        },
      ],
      faqs: [
        {
          id: "implantologija-1",
          question: "Cos'è un impianto dentale?",
          answer:
            "<p>Un impianto dentale è una vite in titanio che per forma ricorda la radice di un dente. Si inserisce chirurgicamente nell'osso dell'arcata superiore o inferiore, secondo un piano di cura definito in precedenza. Da due a sei mesi dopo l'inserimento si può fissare la protesi, perché l'impianto fa da base per una corona, un ponte o una protesi.</p>",
        },
        {
          id: "implantologija-2",
          question: "Come si svolge il trattamento implantare",
          answer:
            "<ul><li>1.</li><li>La prima visita comprende un esame accurato e un'analisi dello stato dei Suoi denti, inclusa un'analisi dettagliata della radiografia panoramica delle arcate (ortopantomografia). Nel pianificare la cura teniamo conto della situazione clinica, dei Suoi desideri e aspettative e del Suo budget, e Le presentiamo le possibili opzioni. Per farLe capire bene le possibilità, Le spieghiamo la situazione con fotografie intraorali dei Suoi denti e con modelli dimostrativi.</li><li>Dopo la prima visita e la scelta della terapia, Le presentiamo il percorso di cura dettagliato. Comprende l'estrazione dei denti che non si possono salvare, la rimozione del tartaro, la lucidatura e la cura dei denti esistenti. Se serve, lo stesso giorno si applica una protesi provvisoria, perché possa masticare e avere un bell'aspetto durante la cura. Se la situazione richiede altri esami, consigliamo una scansione tridimensionale precisa (TAC) dell'arcata in cui andranno gli impianti. La TAC serve a stabilire con precisione quantità e qualità dell'osso e la posizione migliore dell'impianto. Visita, radiografia panoramica e TAC ci permettono di definire un piano dettagliato, che comprende numero e distribuzione degli impianti ed eventuale rigenerazione ossea.</li><li>2.</li><li>La fase successiva è l'inserimento degli impianti. Per prepararsi si sciacqua la bocca con un antisettico, poi la zona viene anestetizzata. Segue l'inserimento chirurgico (incisione, esposizione della cresta ossea, preparazione della sede, inserimento dell'impianto, sutura, radiografia di controllo). L'inserimento di un impianto non è doloroso. Dopo l'intervento riceve istruzioni orali e scritte per una buona guarigione e una buona osteointegrazione (unione dell'impianto con l'osso). I punti si tolgono dopo sette giorni.</li><li>3.</li><li>A seconda della situazione clinica, la visita successiva è da due a sei mesi dopo l'inserimento. Si scoprono gli impianti e si applicano dei componenti che aiutano la gengiva a guarire e a prendere la forma giusta.</li><li>4.</li><li>Dopo questi componenti si prende un'impronta e la si invia al laboratorio odontotecnico, che realizza la Sua protesi.</li><li>5.</li><li>Segue la prova della protesi insieme a Lei e all'odontotecnico, per correggere eventuali difetti.</li><li>6.</li><li>L'ultima fase è l'applicazione definitiva della protesi!</li></ul>",
        },
        {
          id: "implantologija-3",
          question: "Quali vantaggi hanno gli impianti rispetto ad altre protesi?",
          answer:
            "<p>Se Le mancano uno o più denti, o ha difficoltà a masticare o a parlare, gli impianti dentali sono la soluzione migliore per Lei. Anche se ha problemi con una dentiera che non tiene o è scomoda, gli impianti sono un'opzione adatta.</p>",
        },
        {
          id: "implantologija-4",
          question: "Gli impianti dentali sono sicuri?",
          answer:
            "<p>Gli impianti dentali e le protesi su impianti sono da oltre 40 anni una terapia consolidata e parte integrante della pratica nelle cliniche specializzate. Con sistemi implantari evoluti e affermati, al Dental Centar Repić può contare su risultati affidabili e duraturi, sia funzionali sia estetici.</p>",
        },
        {
          id: "implantologija-5",
          question: "Quando sono indicati gli impianti e quanto sono efficaci?",
          answer:
            "<p>L'indicazione per gli impianti si valuta individualmente, in base alla situazione clinica e alla motivazione di ciascun paziente. Con un'indicazione corretta e una buona igiene orale, la percentuale di successo è del 95-100%.</p>",
        },
        {
          id: "implantologija-6",
          question: "Quando gli impianti sono sconsigliati?",
          answer:
            "<p>Gli impianti non sono consigliati ad alcuni pazienti, tra cui minori di 18 anni, donne in gravidanza, persone con malattie sistemiche non controllate (diabete, ipertensione, malattie immunitarie), fumatori (il fumo rallenta la guarigione), persone sottoposte a radioterapia nella zona di testa e collo, e chi digrigna i denti, perché ciò può compromettere l'impianto. Si tratta però di controindicazioni relative: la decisione finale spetta al dentista, in base alle condizioni generali del paziente e al controllo della malattia.</p>",
        },
        {
          id: "implantologija-7",
          question: "Complicanze dopo l'inserimento degli impianti",
          answer:
            "<p>Le complicanze dopo l'inserimento degli impianti sono rare, ma possibili. Tra queste: rigetto dell'impianto, lesione dei nervi della mandibola, infiammazione della gengiva intorno all'impianto (perimplantite), retrazione gengivale e perdita della papilla tra i denti.</p>",
        },
        {
          id: "implantologija-8",
          question: "Gli impianti valgono la spesa?",
          answer:
            "<p>Gli impianti costano di più di altre soluzioni protesiche (ponti, dentiere). Durano però più a lungo e non vanno sostituiti. Considerando tutte le loro caratteristiche, gli impianti sono la soluzione più efficace per sostituire i denti mancanti.</p>",
        },
        {
          id: "implantologija-9",
          question: "Igiene dopo l'inserimento degli impianti",
          answer:
            "<p>Dopo l'inserimento degli impianti e della protesi, una buona igiene orale è indispensabile. Lavi ogni giorno impianti e protesi e vada dal dentista per un controllo almeno due volte l'anno. Consigliamo una pulizia professionale in studio almeno due volte l'anno.</p>",
        },
        {
          id: "implantologija-10",
          question: "Se sente dolore",
          answer:
            "<ul><li>Prenda il primo antidolorifico 30 minuti dopo l'intervento, poi secondo necessità.</li><li>Se il dolore non passa, ci chiami al +385 21 796 241 per fissare un appuntamento.</li><li>Eviti Aspirina, Andol e altri farmaci con acido acetilsalicilico, perché possono prolungare il sanguinamento.</li></ul>",
        },
        {
          id: "implantologija-11",
          question: "Segni di sanguinamento",
          answer:
            "<ul><li>Un leggero sanguinamento è normale e non deve preoccuparLa.</li><li>La garza applicata dopo l'intervento deve restare premuta sulla ferita per almeno 20-30 minuti.</li><li>Eviti di sciacquare la bocca.</li></ul>",
        },
        {
          id: "implantologija-12",
          question: "Gonfiore",
          answer:
            "<ul><li>Qualche ora dopo l'intervento può comparire un gonfiore.</li><li>In tal caso raffreddi la guancia con impacchi freddi, alternando 20 minuti di freddo e 10 minuti di pausa.</li><li>Dorma con la testa sollevata.</li></ul>",
        },
        {
          id: "implantologija-13",
          question: "Alimentazione e attività fisica",
          answer:
            "<ul><li>Mangi cibi il più possibile morbidi.</li><li>Eviti i cibi caldi.</li><li>Eviti l'attività fisica e il sole forte per 48-72 ore dopo l'intervento.</li></ul>",
        },
      ],
    },
    ortodoncija: {
      slug: "ortodoncija",
      meta: {
        title: "Ortodonzia - apparecchi per i denti | Dental Centar Repić",
        description:
          "Apparecchi fissi e mobili. Visita ortodontica, piano di cura e correzione dei denti storti al Dental Centar Repić a Trogir.",
      },
      title: "Ortodonzia",
      lead:
        "La terapia ortodontica è indicata quando i denti sono in posizione o disposizione scorretta. Il giusto contatto tra i denti distribuisce in modo uniforme le forze della masticazione, che si trasmettono correttamente a gengive e osso. Denti ben allineati sono anche più facili da pulire. Sui denti storti si accumula spesso placca, che minaccia la salute dei denti e dei tessuti parodontali.",
      sections: [
        {
          heading: "Come svolgiamo la terapia ortodontica",
          paragraphs: [
            "L'apparecchio ortodontico può essere mobile o fisso. La terapia ortodontica si fa nei bambini e anche negli adulti, per armonizzare funzione ed estetica. Dopo l'applicazione dell'apparecchio fisso sono necessari una buona igiene orale e controlli regolari secondo le indicazioni dell'ortodontista. Per l'apparecchio non ci sono limiti di età. Se una terapia precedente non L'ha soddisfatta, o desidera un sorriso bello e sano, l'età non è un ostacolo.",
            "Grazie alla formazione complementare negli Stati Uniti (School of Dental Medicine, Department of Orthodontics, University of Connecticut Health Center) e in Danimarca (Università di Aarhus), la specialista in ortodonzia dott.ssa Slavica Pejda Repić è specializzata nella terapia ortodontica degli adulti. Ogni paziente è seguito individualmente: dopo un'accurata visita clinica, l'esame delle radiografie e un'analisi dettagliata delle fotografie intraorali, proponiamo un piano di cura. Grazie alla collaborazione interdisciplinare con il dott. Dario Repić, specialista in endodonzia e odontoiatria restaurativa, offriamo a ogni paziente un'assistenza dentale completa, durante e dopo la terapia ortodontica.",
            "Ogni paziente riceve, oltre a informazioni dettagliate sulla salute della sua bocca, anche istruzioni scritte sul funzionamento e la cura dell'apparecchio e un kit adatto per l'igiene orale.",
          ],
        },
        {
          heading: "Come si svolgono la visita ortodontica e il piano di cura",
          paragraphs: [
            "La prima visita ortodontica comprende l'esame clinico di cavità orale, denti, morso e tessuti molli e l'analisi della radiografia panoramica. Se non ha una panoramica, la facciamo in studio con un moderno apparecchio radiografico digitale a dose minima. Per la diagnosi facciamo anche fotografie intraorali con una fotocamera apposita.",
            "Dopo la diagnosi iniziale proponiamo un piano di cura, che concordiamo con i genitori e il bambino.",
            "Poi prendiamo le impronte per i modelli di studio, così da documentare lo stato iniziale del morso prima della terapia. La informiamo anche sui costi e sulla cura dell'apparecchio.",
          ],
        },
      ],
      faqs: [
        {
          id: "ortodoncija-1",
          question: "Di cosa si occupa l'ortodontista?",
          answer:
            "<p>L'ortodontista è uno specialista che diagnostica e cura le irregolarità nella posizione dei denti e delle arcate. Lavora anche per prevenire la comparsa di queste irregolarità. Per farlo usa diversi dispositivi ortodontici e apparecchi.</p>",
        },
        {
          id: "ortodoncija-2",
          question: "Perché ho bisogno di una terapia ortodontica?",
          answer:
            "<p>I motivi principali sono due: funzione ed estetica. Dal punto di vista funzionale, la terapia migliora la funzione dei denti e di tutta la bocca e rende più facile l'igiene orale. Dal punto di vista estetico, un sorriso bello e attraente piacerà a Lei e agli altri e rafforzerà la Sua sicurezza.</p>",
        },
        {
          id: "ortodoncija-3",
          question: "Qual è il momento giusto per iniziare la terapia ortodontica?",
          answer:
            "<p>Per la terapia ortodontica non ci sono limiti di età. Tuttavia, prima si scopre e si cura un'anomalia, più semplice è la cura. L'American Association of Orthodontists consiglia la prima visita ortodontica a 7 anni.</p>",
        },
        {
          id: "ortodoncija-4",
          question: "Come riconosco un'anomalia ortodontica?",
          answer:
            "<p>Se Lei o Suo figlio avete un'evidente irregolarità dei denti o del morso, consigliamo una visita da una specialista in ortodonzia. Anche l'abitudine di succhiare il pollice può portare ad anomalie ortodontiche.</p>",
        },
        {
          id: "ortodoncija-5",
          question: "La terapia ortodontica fa male?",
          answer:
            "<p>L'applicazione dell'apparecchio non è dolorosa. In alcuni pazienti, nei primi giorni dopo l'applicazione, possono comparire un leggero dolore o una sensazione di pressione, così come dopo i controlli. Per alleviarli si possono prendere antidolorifici.</p>",
        },
        {
          id: "ortodoncija-6",
          question: "Quanto dura la terapia ortodontica?",
          answer:
            "<p>La durata varia da paziente a paziente. La fase attiva (con l'apparecchio) dura di solito da 6 a 30 mesi. Dopo la terapia occorre portare un apparecchio di contenzione da qualche mese a un anno, a seconda dell'anomalia iniziale.</p>",
        },
        {
          id: "ortodoncija-7",
          question: "Ogni quanto servono i controlli?",
          answer:
            "<p>A seconda del tipo di terapia, i controlli sono ogni 4-10 settimane.</p>",
        },
        {
          id: "ortodoncija-8",
          question: "Dovrò togliere dei denti?",
          answer:
            "<p>Se i denti sono molto affollati, o se un dente è incluso (non spuntato e nascosto nell'osso), l'estrazione di un dente può far parte della cura.</p>",
        },
        {
          id: "ortodoncija-9",
          question: "Potrò suonare uno strumento o fare sport?",
          answer:
            "<p>Sì. La terapia ortodontica non esclude queste attività. A chi fa sport consigliamo un paradenti, per evitare lesioni in bocca e danni all'apparecchio.</p>",
        },
        {
          id: "ortodoncija-10",
          question: "Dovrò continuare ad andare dal dentista?",
          answer:
            "<p>Certo, i controlli dal dentista sono molto importanti. Con l'apparecchio è più difficile lavare i denti, si accumula più placca e aumenta il rischio di carie. Il Suo dentista La aiuterà a evitarlo con pulizie e controlli regolari.</p>",
        },
        {
          id: "ortodoncija-11",
          question: "Dovrò portare una contenzione dopo aver tolto l'apparecchio?",
          answer:
            "<p>Quasi sempre SÌ. Finita la terapia, occorre portare un apparecchio di contenzione da qualche mese a un anno, a seconda dell'anomalia iniziale. Altrimenti i denti possono tornare abbastanza in fretta nella posizione di partenza, e il Suo impegno e quello del Suo dentista sarebbero vani.</p>",
        },
        {
          id: "ortodoncija-12",
          question: "Quanto costa la terapia ortodontica?",
          answer:
            "<p>Alla prima visita riceve un preventivo per la terapia. Il prezzo comprende la prima pulizia e lucidatura dei denti, tutte le fasi attive della terapia dall'inizio alla fine, l'applicazione dell'apparecchio, i controlli, la rimozione dell'apparecchio e la prima contenzione. Per la prima visita serve una radiografia panoramica delle arcate: la facciamo in studio ed è inclusa nel prezzo.</p><p>Usiamo attacchi metallici o estetici, a scelta del paziente. Gli attacchi estetici sono più discreti. Lavoriamo con prodotti di American Orthodontics, un noto produttore di materiali ortodontici, e Le mostreremo le opzioni durante la visita.</p>",
        },
      ],
    },
    protetika: {
      slug: "protetika",
      meta: {
        title: "Protesi dentale - corone e ponti | Dental Centar Repić",
        description:
          "Corone e ponti dentali: metallo-ceramica, ceramica senza metallo, zirconia e vetroceramica. Dental Centar Repić, Trogir.",
      },
      title: "Protesi dentale",
      lead:
        "Al Dental Centar Repić dedichiamo particolare attenzione a conservare la funzione dei denti e di tutto l'apparato masticatorio. Dopo un'accurata visita clinica e l'analisi delle radiografie di denti e arcate, proponiamo a ogni paziente un piano protesico individuale per sostituire uno o più denti mancanti. A seconda della situazione clinica e del budget, i denti mancanti si possono sostituire con protesi mobili o fisse.",
      sections: [
        {
          paragraphs: [
            "Le protesi mobili (dentiere) sono la soluzione migliore per i pazienti senza denti, del tutto o in parte. Per stabilizzare la protesi in bocca ci sono diverse possibilità, come protesi combinate fisse-mobili, corone telescopiche o protesi su impianti.",
            "Le soluzioni protesiche fisse comprendono faccette, corone, ponti e ponti su impianti.",
            "Usiamo materiali moderni che ci permettono di soddisfare le esigenze estetiche e funzionali dei pazienti. Per le protesi fisse offriamo, tra gli altri, questi materiali:",
          ],
        },
        {
          heading: "Corone e ponti in metallo-ceramica",
          paragraphs: [
            "hanno una lunga tradizione nella protesi dentale e sono considerati lo standard della protesi fissa. Sono la scelta più frequente dei pazienti, perché accessibili e durevoli. La struttura in metallo della corona o del ponte protegge i denti pilastro, mentre la ceramica riproduce esteticamente i denti mancanti. La base metallica è di solito una lega di cobalto, cromo e nichel, oro dentale o titanio. La ceramica si applica a strati sulla struttura metallica e vi si lega saldamente.",
            "Scelta la corona o il ponte, il dentista lima prima i denti pilastro per creare spazio per la protesi. Poi prende un'impronta, su cui il laboratorio realizza la protesi. In questa fase si sceglie anche il colore della ceramica, il più simile possibile ai denti naturali. Dopo la realizzazione in laboratorio e la prova in studio, la corona o il ponte si fissa prima in via provvisoria e, quando il dentista ha verificato che calza bene, si cementa in modo definitivo.",
            "Le protesi in metallo-ceramica sono adatte a sostituire uno o più denti persi, sia nella zona anteriore sia in quella posteriore. Se ben eseguite, hanno buone proprietà meccaniche ed estetiche.",
            "I principali vantaggi di corone e ponti in metallo-ceramica sono il prezzo, la resistenza meccanica e la lunga durata. Secondo la letteratura, il 90-95% di tutte le protesi in metallo-ceramica dura in bocca dieci anni o più. Costano un po' meno delle soluzioni interamente in ceramica (senza metallo).",
            "Uno svantaggio sono le possibilità estetiche più limitate rispetto ai sistemi interamente in ceramica. Il motivo è la base metallica grigio scuro: ostacola il passaggio della luce, per cui il colore del dente può apparire meno naturale. I pazienti lamentano spesso un bordo scuro lungo la gengiva, al margine della corona. Col tempo i metalli della base possono rilasciare ioni che passano nella gengiva. Una preparazione (limatura) accurata del dente pilastro può però ridurre questi effetti indesiderati.",
          ],
        },
        {
          heading: "Corone e ponti interamente in ceramica (ceramica senza metallo)",
          paragraphs: [
            "Corone e ponti interamente in ceramica sono l'alternativa alle protesi in metallo-ceramica. Si chiamano anche denti «di porcellana». Le esigenze estetiche dei pazienti sono cresciute negli ultimi anni e sono spesso decisive nella scelta di come sostituire i denti mancanti. Corone e ponti in ceramica riproducono perfettamente l'aspetto dei denti naturali e in questo superano la metallo-ceramica. Mentre nella metallo-ceramica la base metallica ostacola il passaggio e la diffusione della luce, influenzando il colore del dente, corone e ponti solo in ceramica hanno qualità estetiche eccellenti, molto vicine all'aspetto naturale. Per il paziente la procedura è simile a quella della metallo-ceramica: limatura dei denti (per fare spazio alla protesi) e impronta inviata al laboratorio. Intanto si sceglie il colore più adatto ai Suoi desideri e ai Suoi denti. La protesi finita si cementa sui denti limati. Per questo tipo di protesi si lima meno, conservando più tessuto dentale sano. La realizzazione guidata dal computer garantisce un'aderenza perfetta al dente limato, che facilita la pulizia e riduce l'accumulo di cibo tra i denti e le infiammazioni gengivali che ne derivano.",
            "Grazie ai nuovi materiali, le protesi in ceramica senza metallo hanno ottime proprietà meccaniche senza perdere in estetica. Per resistenza e durata sono paragonabili ai sistemi in metallo-ceramica. Secondo la letteratura, il 91-97% delle protesi in ceramica senza metallo dura cinque anni o più.",
            "Con la ceramica senza metallo si possono sostituire uno o più denti persi. I materiali più recenti per le protesi fisse interamente in ceramica sono la ceramica al disilicato di litio rinforzata con leucite, la vetroceramica rinforzata con leucite o disilicato di litio e le ceramiche ossidiche, come l'ossido di alluminio e l'ossido di zirconio. Corone e ponti in ceramica senza metallo costano un po' di più di quelli in metallo-ceramica, perché la loro realizzazione in studio e in laboratorio è più complessa.",
          ],
        },
        {
          heading: "Corone e ponti in zirconia",
          paragraphs: [
            "La zirconia (biossido di zirconio) è una ceramica senza metallo sempre più usata in protesi dentale per le sue ottime qualità estetiche e funzionali, soprattutto per protesi fisse (corone e ponti) nella zona anteriore e posteriore. Il materiale appartiene alle ceramiche ossidiche ed è molto resistente a fratture, usura, alte temperature e corrosione. La zirconia si usa da oltre 50 anni in medicina e odontoiatria: in ortopedia per la testa del femore, in odontoiatria, oltre che per le protesi, anche per perni endodontici, attacchi ortodontici e monconi implantari.",
            "La base della corona o del ponte è in biossido di zirconio, su cui si cuociono strati di ceramica. È bianca e non si vede al margine della protesi. Il biossido di zirconio è biocompatibile e non causa allergie. Conduce poco elettricità e calore, per cui i denti sono meno sensibili. Le strutture in zirconia hanno molte qualità: estetica di prima qualità, grande purezza, biocompatibilità e meno limatura dei denti naturali grazie all'alta resistenza del materiale (bastano 0,4 mm di spessore). Per la loro resistenza e durezza, le strutture in zirconia si producono a macchina da blocchi industriali. Grazie alla realizzazione al computer, la corona o il ponte aderisce esattamente al margine del dente limato, il che facilita l'igiene orale e riduce il rischio di infiammazioni gengivali.",
            "Dal punto di vista estetico è un'ottima scelta: riproduce perfettamente la trasparenza e il colore naturali dei denti, e la sua resistenza è paragonabile a quella dei metalli più forti. Meccanicamente la zirconia equivale alla metallo-ceramica, ma imita meglio l'aspetto naturale. Il colore finale dipende dallo spessore della ceramica, dallo spessore e dal colore del cemento e dal colore del moncone. Grazie all'alta resistenza si possono realizzare protesi molto sottili (una struttura di soli 0,3 mm nella zona anteriore e 0,6 mm in quella laterale), che garantiscono traslucenza ed estetica. Il materiale è adatto alla zona anteriore e posteriore e anche a protesi estese, quando mancano più denti.",
            "Corone e ponti in zirconia costano un po' di più di quelli in metallo-ceramica, perché la realizzazione in studio e in laboratorio è più complessa. Limatura, impronta e cementazione devono essere assolutamente precise, perché la protesi (corona o ponte) aderisca esattamente al dente limato.",
          ],
        },
        {
          heading: "Vetroceramica: E.max ed Empress",
          paragraphs: [
            "La vetroceramica è un materiale interamente ceramico per protesi dentali. Le alte esigenze estetiche di pazienti sempre più informati non sono soddisfatte dai materiali usati in passato. Il forte sviluppo della tecnologia dei materiali ha portato a vetroceramiche abbastanza resistenti e con un'estetica eccellente. Come ogni materiale, anche la vetroceramica ha i suoi limiti, che bisogna conoscere per ottenere il miglior risultato possibile.",
            "La vetroceramica si ottiene con la cristallizzazione controllata del vetro. Ne esistono diversi tipi con proprietà diverse: IPS Empress (vetroceramica rinforzata con leucite), IPS Empress 2 (con nucleo di disilicato di litio, più resistente della prima) e IPS E.max, simile per struttura a IPS Empress 2 (nucleo di disilicato di litio) ma molto più resistente delle altre due.",
            "Corone e ponti E.max Press o Empress sono protesi interamente in ceramica al disilicato di litio. La sua alta traslucenza permette un'estetica eccellente ed è particolarmente indicata nella zona estetica (visibile quando si sorride). È più resistente delle altre vetroceramiche ed è indicata per corone singole o ponti di tre elementi nella zona anteriore fino al secondo premolare, per corone singole nella zona anteriore o posteriore, per faccette e per otturazioni indirette (inlay, onlay). La ceramica E.max esiste in molti colori e riproduce quindi molto bene l'aspetto naturale dei denti.",
            "Tre fattori determinano il colore finale della protesi: il colore del moncone limato, il colore del cemento e il colore della corona. A volte la ceramica al disilicato di litio non è semplice da usare, perché monconi di colore diverso possono trasparire attraverso la corona. Conoscendo il materiale e le tecniche di preparazione, però, questi problemi si risolvono con soddisfazione di paziente e dentista. Combinando colori e trasparenze diversi del cemento si ottiene un colore uniforme della corona, anche quando i monconi non lo sono. Dopo la cementazione definitiva, le giunzioni tra corona e dente vengono lucidate per facilitare l'igiene orale.",
            "Per un risultato funzionale ed estetico è importante porre correttamente l'indicazione per questo tipo di protesi. Le corone E.max sono meccanicamente un po' meno resistenti della zirconia e non sono consigliate per protesi estese nella zona posteriore. Sono ideali per corone singole o ponti di tre elementi nella zona anteriore fino al secondo premolare, per corone singole nella zona anteriore o posteriore, per faccette e per otturazioni indirette (inlay, onlay).",
          ],
        },
      ],
      faqs: [
        {
          id: "protetika-1",
          question: "Quanto durano le corone in bocca?",
          answer:
            "<p>È difficile rispondere. In Croazia e all'estero la durata delle corone di tutti i materiali in un periodo di dieci anni è dell'85-95%, il che è considerato un buon risultato protesico. La durata dipende però da molti fattori, come i controlli regolari e l'igiene orale, lo stato del dente pilastro e della gengiva, la scelta giusta della protesi per il singolo caso e la sua corretta realizzazione. Per questo varia da paziente a paziente.</p>",
        },
        {
          id: "protetika-2",
          question: "Come si curano corone e ponti?",
          answer:
            "<ul><li>A volte i pazienti credono, sbagliando, che i denti siano protetti dalle «capsule», cioè corone e ponti, e che l'igiene orale non debba essere accurata. È vero il contrario. Con un'igiene orale scrupolosa e controlli regolari dal dentista contribuisce molto alla lunga durata della protesi e alla salute degli altri denti.</li><li>Corone e ponti si lavano come i denti naturali: dal quadrante superiore destro a quello superiore sinistro, e da quello inferiore sinistro a quello inferiore destro. Bisogna pulire tutte le superfici dei denti e della protesi, per tre minuti in totale. Si consigliano movimenti circolari, e l'ultimo movimento dovrebbe andare «dal rosso al bianco», cioè dalla gengiva al dente, per prevenire la retrazione gengivale dopo la protesi fissa. Molti strumenti facilitano l'igiene, come filo interdentale, spazzolini elettrici, idropulsori e scovolini. I rilevatori di placca si trovano facilmente e mostrano quanto bene si lavano i denti. Saremo lieti di insegnarLe come curare correttamente i denti, perché la Sua protesi duri a lungo, con soddisfazione di entrambi.</li></ul>",
        },
      ],
    },
    "estetska-dentalna-medicina": {
      slug: "estetska-dentalna-medicina",
      meta: {
        title: "Odontoiatria estetica | Dental Centar Repić",
        description:
          "Sbiancamento dei denti, faccette in ceramica, Smile Design, gioielli per denti e air polishing. Odontoiatria estetica al Dental Centar Repić a Trogir.",
      },
      title: "Odontoiatria estetica",
      lead:
        "Il nostro obiettivo è offrire a ogni paziente un sorriso bello e sano. L'odontoiatria estetica comprende una serie di trattamenti per un bel sorriso, che seguono precise regole per ottenere una piena armonia tra le strutture molli e dure. Unisce diverse specialità dell'odontoiatria (ortodonzia, parodontologia, protesi, implantologia e odontoiatria restaurativa) per correggere le deviazioni dai parametri estetici e ottenere la funzione e l'estetica di denti sani. Le ricerche mostrano che i trattamenti estetici hanno un forte effetto psicologico e possono aumentare la sicurezza di sé e la qualità della vita.",
      sections: [
        {
          heading: "Per il Suo sorriso sano e bello",
          paragraphs: [
            "I pazienti soddisfatti della forma e della dimensione dei denti, che vogliono solo rinfrescare il sorriso o hanno bisogno di piccole correzioni, possono ottenere un sorriso splendente con i trattamenti estetici minimamente invasivi del nostro studio.",
          ],
        },
        {
          heading: "I trattamenti che offriamo",
          bullets: [
            "Sbiancamento dei denti",
            "Faccette in ceramica",
            "Smile Design",
            "Gioielli per denti",
            "Air polishing",
          ],
        },
      ],
    },
    endodoncija: {
      slug: "endodoncija",
      meta: {
        title: "Endodonzia - cura dei canali radicolari | Dental Centar Repić",
        description:
          "Cura delle infiammazioni dei denti e dei canali radicolari, con preparazione meccanica dei canali e controllo radiografico, al Dental Centar Repić a Trogir.",
      },
      title: "Endodonzia",
      lead:
        "L'endodonzia è una disciplina specialistica dell'odontoiatria che si occupa della cura dell'interno del dente. Nella specializzazione è strettamente legata all'odontoiatria restaurativa e alla cariologia. Queste curano le malattie dei tessuti duri del dente (dentina), mentre le infiammazioni avanzate della polpa, cioè del tessuto molle, richiedono la cura del canale radicolare. Questa cura endodontica si chiama spesso, semplicemente, endodonzia.",
      sections: [
        {
          heading: "Perché un dente fa male?",
          paragraphs: [
            "Il mal di denti è un sintomo spiacevole che quasi tutti hanno provato almeno una volta. Un dente può far male per molti motivi: dentina esposta, infiammazione dei tessuti parodontali o di quelli all'apice della radice, infiammazione di strutture vicine come i seni paranasali, il cui dolore si irradia al dente, oppure un'infiammazione dolorosa della polpa stessa. A volte la causa non è facile da trovare, e il dentista deve fare una visita accurata, test clinici e una radiografia. Trovata la causa, si può stabilire la cura giusta.",
          ],
        },
        {
          heading: "Come nasce l'infiammazione di un dente?",
          paragraphs: [
            "L'infiammazione della polpa (pulpite) può avere varie cause, come una carie profonda, il digrignamento dei denti o un morso scorretto che sovraccarica il dente. Con l'infiammazione i vasi sanguigni nella polpa si dilatano, i capillari diventano più permeabili, il liquido esce nei tessuti e la pressione nel dente aumenta. La polpa si chiama spesso «nervo del dente», ma nella camera pulpare contiene vasi sanguigni e linfatici oltre alle fibre nervose. Poiché la camera pulpare è rigida e non può espandersi, l'aumento di pressione preme sulle fibre nervose e provoca dolore. Il dolore può essere di diverso tipo e irradiarsi alle zone vicine: il dolore ai denti inferiori si sente ad esempio all'orecchio, quello ai denti superiori si irradia di solito verso l'occhio. Nell'infiammazione reversibile della polpa il dolore è passeggero, compare con uno stimolo (caldo, freddo, masticazione) e scompare quando lo stimolo cessa. Nell'infiammazione irreversibile il dolore è spontaneo e quasi costante. Altri segni possono essere linfonodi ingrossati vicino al dente, fuoriuscita di liquido da una fistola sulla gengiva, un dente che si muove, gonfiore intorno al dente, febbre e malessere generale. Se l'infiammazione non si cura, l'infezione può diffondersi attraverso il canale radicolare nell'osso circostante e formare un granuloma. Il granuloma distrugge l'osso, e l'infezione può diffondersi anche attraverso il sangue nel resto del corpo.",
          ],
        },
        {
          heading: "Come si cura l'infiammazione di un dente?",
          paragraphs: [
            "La cura dipende dalla causa. Nell'infiammazione reversibile della polpa basta eliminare la causa (carie, contatto eccessivo tra i denti, tessuto dentale consumato) e otturare il dente. Dopo, i disturbi dovrebbero passare.",
            "Nell'infiammazione irreversibile della polpa un'otturazione non basta ed è necessaria una cura endodontica.",
          ],
        },
        {
          heading: "Cos'è la cura endodontica?",
          paragraphs: [
            "La cura endodontica (endodonzia) è la cura del canale radicolare, per conservare il dente in bocca. Si toglie la polpa (comunemente: si «devitalizza» il dente), e il canale si pulisce con strumenti manuali o meccanici speciali e si lava con soluzioni che eliminano i batteri e i prodotti dell'infiammazione rimasti e disinfettano il canale. Poi il canale radicolare si riempie con materiali appositi. La cura richiede un campo di lavoro asciutto e sterile, perché i batteri della bocca non penetrino nell'osso. Una buona cura del canale è la base di ogni cura successiva. Dopo, il dente può anche fare da pilastro per piccole protesi, il che può rimandare a lungo protesi più estese o impianti. Quando è possibile, conviene sempre salvare il dente, perché il dente naturale è sempre la soluzione migliore.",
            "Ci impegniamo perché la cura sia indolore, grazie all'anestesia locale. A seconda della complessità possono servire più appuntamenti per curare completamente il dente. Solo se ogni passaggio è eseguito correttamente la cura ha successo. Finita la cura, il dente resta sensibile alla pressione per un po': è un effetto normale, l'importante è che dolore e sensibilità diminuiscano gradualmente. Se serve, prenda un antidolorifico. I disturbi dovrebbero passare in pochi giorni.",
            "Il nostro studio dispone di apparecchi modernissimi che misurano con precisione la lunghezza del canale e permettono la preparazione meccanica dei canali. L'otturazione finale del canale si verifica con una radiografia. Così curiamo completamente il Suo dente nel minor tempo possibile, senza appuntamenti inutili.",
          ],
        },
        {
          heading: "Strumenti endodontici",
          paragraphs: [
            "Nella cura endodontica si toglie la polpa (il nervo del dente) e il canale radicolare si pulisce, si allarga e si lava con strumenti manuali speciali e soluzioni di lavaggio. Il successo della cura dipende direttamente da una buona preparazione biomeccanica dei canali. La pulizia meccanica da sola non basta: serve anche un lavaggio chimico con una soluzione speciale che elimina dal canale i residui organici e inorganici. Così il materiale di otturazione aderisce meglio alle pareti e sigilla il canale, impedendo nuove infiammazioni. I canali si riempiono con una combinazione di guttaperca e cemento: è l'ultima fase della cura endodontica. Infine il dente si chiude con un'otturazione o una corona, a seconda di quanto tessuto è andato perso.",
            "Gli strumenti endodontici sono in acciaio inossidabile o in lega di nichel-titanio. Strumenti manuali e meccanici, se usati secondo le regole della professione, possono dare risultati ugualmente buoni, ma con il progresso tecnologico la preparazione manuale lascia sempre più spazio a quella meccanica, con molti vantaggi per i pazienti. L'endodonzia meccanica è una tecnica moderna per pulire e allargare i canali, in cui si combinano strumenti manuali e meccanici. La procedura è simile a quella manuale: aperto il dente e tolta la polpa, si misura la lunghezza del canale con un endometro, poi si pulisce e si modella il canale con diversi strumenti. Pulizia e modellazione sono una parte essenziale della cura. Gli strumenti meccanici imitano il lavoro di quelli manuali, ma sono molto più rapidi ed efficaci. La preparazione con strumenti manuali può essere impegnativa ed è spesso la fase più lunga della cura. L'endodonzia meccanica è indolore e più comoda, perché accorcia la cura: sia la durata di ogni appuntamento sia il loro numero. Ci sono diverse tecniche a seconda della struttura dello strumento, che si muove con moto rotante o reciprocante. Gli strumenti in nichel-titanio differiscono per design, struttura e proprietà meccaniche e sono in commercio con nomi diversi a seconda del produttore, ad esempio ProTaper Universal, ProTaper Next o HyFlex CM. Il loro uso ha rivoluzionato la cura dei canali: pulizia e modellazione sono più rapide, ed errori come il raddrizzamento o la perforazione del canale sono meno probabili. Gli strumenti in nichel-titanio sono flessibili ed elastici e seguono facilmente la forma naturale del canale. Sono abbastanza resistenti alla rottura (nella pratica clinica la frequenza di rottura è dello 0,3-23%) e dopo l'uso tornano alla forma originale (memoria di forma). Grazie all'elasticità raggiungono anche i tratti stretti e curvi del canale e li allargano a una forma più regolare, facilitando l'otturazione. Gli strumenti meccanici in nichel-titanio ruotano in modo costante a bassa velocità. Questo riduce il rischio di rottura e permette di modellare il canale più in fretta e più facilmente che con gli strumenti manuali in nichel-titanio. Strumenti manuali e meccanici puliscono, allargano e modellano il canale, facilitando l'otturazione e accelerando la cura. Il vantaggio dell'endodonzia meccanica è una procedura più rapida e semplice, con meno errori nel canale, il che aumenta il successo della cura.",
          ],
        },
      ],
    },
    parodontologija: {
      slug: "parodontologija",
      meta: {
        title: "Parodontologia - cura della parodontite | Dental Centar Repić",
        description:
          "Rimozione del tartaro, terapia parodontale iniziale e chirurgia parodontale al Dental Centar Repić a Trogir.",
      },
      title: "Parodontologia",
      lead:
        "La parodontologia è il ramo dell'odontoiatria che si occupa della salute dell'apparato di sostegno dei denti. Ne fanno parte l'osso circostante, la gengiva e il legamento parodontale che tiene il dente nell'osso.",
      sections: [
        {
          paragraphs: [
            "Secondo alcune ricerche, il 75% degli adulti ha segni di malattia parodontale, indipendentemente da origine e condizione sociale. Di questi, quasi il 30% ha forme gravi e una parodontite cronica. È la causa più frequente di perdita dei denti negli adulti. Le ricerche mostrano legami tra malattia parodontale e altre malattie come diabete, malattie cardiovascolari e polmonari. La parodontite non curata in gravidanza è inoltre associata a un minor peso alla nascita e a parti prematuri.",
            "Al Dental Centar Repić rimuoviamo professionalmente tartaro e placca con strumenti sonici e a ultrasuoni, levighiamo e lucidiamo i denti. Se serve, eseguiamo anche la terapia parodontale iniziale e interventi di chirurgia parodontale, perché i Suoi denti restino pienamente funzionali il più a lungo possibile.",
          ],
        },
        {
          heading: "Come nasce la parodontite?",
          paragraphs: [
            "Le cause principali della parodontite sono l'aumento dei batteri in bocca e una risposta immunitaria insufficiente dell'organismo. I batteri aumentano per una scarsa igiene orale o una minore produzione di saliva, che ha una funzione protettiva naturale. La risposta immunitaria si indebolisce per varie malattie sistemiche, per lo stress o per il fumo. La conseguenza è la malattia parodontale, che porta a infiammazione e distruzione dell'apparato di sostegno dei denti, soprattutto di osso, gengiva e legamento parodontale.",
            "Nelle fasi iniziali la malattia non dà sintomi, ed è per questo che sono importanti visite regolari dal dentista, per scoprirla il prima possibile. Prima si scopre la malattia parodontale, più è curabile e più denti si possono salvare.",
          ],
        },
        {
          heading: "Come si cura la parodontite?",
          paragraphs: [
            "L'obiettivo della cura è ridurre i batteri in bocca, eliminare il biofilm (uno strato organizzato di batteri sui denti) dalle superfici dei denti e rafforzare la risposta immunitaria, perché la malattia non progredisca.",
            "Una buona igiene orale e pulizie professionali regolari sono la chiave per prevenire e curare la parodontite. Lavi i denti almeno due volte al giorno con spazzolino e dentifricio, usando sempre il filo interdentale o un idropulsore (per gli spazi stretti tra i denti) e lo scovolino (per quelli più larghi).",
            "La terapia parodontale iniziale consiste nel rimuovere placca e tartaro sopra e sotto il bordo gengivale con un apparecchio a ultrasuoni. Seguono una pulizia meccanica profonda e la levigatura delle radici.",
            "La terapia chirurgica parodontale è indicata nella parodontite avanzata, perché permette di raggiungere le tasche parodontali profonde e rimuovere i depositi. Con le tecniche chirurgiche rigenerative si può ricostruire l'apparato di sostegno dei denti, migliorando la prognosi a lungo termine dei denti colpiti. Servono anche a ripristinare una forma esteticamente gradevole di denti e gengive. La malattia parodontale può causare retrazione gengivale e radici sensibili, e la terapia rigenerativa può ricoprire le radici esposte, riducendone la sensibilità.",
          ],
        },
        {
          heading: "Come riconoscere i segni della parodontite",
          bullets: [
            "Sanguinamento delle gengive",
            "Gengive gonfie, arrossate e doloranti",
            "Retrazione delle gengive",
            "Secrezione o pus dalle gengive",
            "Denti che si spostano e spazi più ampi tra i denti",
            "Denti che si muovono",
            "Alito cattivo",
          ],
        },
      ],
    },
    "oralna-kirurgija": {
      slug: "oralna-kirurgija",
      meta: {
        title: "Chirurgia orale - estrazioni, alveolotomia e apicectomia | Dental Centar Repić",
        description:
          "Estrazione dei denti, rimozione dei denti del giudizio con alveolotomia e apicectomia in anestesia locale al Dental Centar Repić a Trogir.",
      },
      title: "Chirurgia orale",
      lead:
        "Al Dental Centar Repić la chirurgia orale è affidata a medici premiati con molti anni di esperienza.",
      sections: [
        {
          heading: "Chirurgia orale di alto livello",
          paragraphs: [
            "La chirurgia orale è la branca chirurgica dell'odontoiatria. Comprende l'estrazione dei denti, la rimozione di denti inclusi o ritenuti con l'alveolotomia, l'asportazione di cisti ossee della mascella e della mandibola, l'apicectomia, la frenulectomia, l'inserimento di impianti dentali e il rialzo del seno mascellare. L'intervento più frequente è l'estrazione. Nonostante gli sforzi di dentisti e pazienti per conservare i denti il più a lungo possibile, a volte un dente va tolto, per una carie profonda, una frattura o una malattia parodontale.",
            "L'estrazione è un intervento di routine in anestesia locale. Prima di ogni intervento in bocca il chirurgo orale raccoglie un'anamnesi accurata. Bisogna indicare tutti i farmaci che il paziente assume, perché non influenzino il sanguinamento durante e dopo l'intervento e la guarigione della ferita. Dopo l'intervento la ferita si sutura o guarisce da sola. Il paziente riceve istruzioni per ridurre gonfiore e dolore, e si consiglia un controllo dopo una settimana per verificare la guarigione e togliere eventuali punti.",
          ],
        },
        {
          heading: "Cos'è l'alveolotomia?",
          paragraphs: [
            "Oltre alle semplici estrazioni, rimuoviamo i denti inclusi e ritenuti con l'alveolotomia. Qualsiasi dente può essere incluso o ritenuto. Un dente incluso non riesce a spuntare al suo posto per un ostacolo meccanico, un dente ritenuto non spunta per cause non meccaniche. I denti più spesso inclusi sono i terzi molari, i denti del giudizio. Se l'osso sopra la corona del dente incluso è in comunicazione con la bocca, la zona è difficile da pulire e può infiammarsi la gengiva intorno, una condizione chiamata pericoronite. Se un dente incluso o ritenuto dà disturbi, consigliamo di toglierlo con l'alveolotomia.",
            "L'alveolotomia è un intervento di chirurgia orale in anestesia locale, quindi del tutto indolore per il paziente, che resta sempre sveglio e può comunicare con il chirurgo. Prima dell'intervento il chirurgo orale raccoglie un'anamnesi completa. Bisogna indicare tutti i farmaci assunti, perché non influenzino il sanguinamento durante e dopo l'intervento e la guarigione della ferita. L'alveolotomia inizia con l'anestesia locale. Poi il chirurgo incide con il bisturi, apre l'osso con una fresa per raggiungere la zona e toglie il dente con strumenti chirurgici speciali (scalpello, leva), con il minimo trauma per i tessuti circostanti. Dopo l'intervento la ferita si sutura per una guarigione migliore e il paziente riceve le istruzioni post-operatorie. Dopo una settimana torna per il controllo e la rimozione dei punti.",
          ],
        },
        {
          heading: "Cos'è l'apicectomia?",
          paragraphs: [
            "L'apicectomia è un intervento di chirurgia orale in cui si toglie l'apice della radice di un dente già devitalizzato. Lo esegue uno specialista in chirurgia orale quando la cura endodontica non ha eliminato dolore e infiammazione, o quando un granuloma all'apice, anche dopo una nuova cura, non si è ridotto secondo la radiografia. In questo caso si consiglia di togliere l'apice della radice, perché il dente possa restare nell'arcata.",
            "L'intervento si esegue in anestesia locale ed è del tutto indolore. Prima il chirurgo orale raccoglie un'anamnesi completa. Bisogna indicare tutti i farmaci assunti, perché non influenzino il sanguinamento durante e dopo l'intervento e la guarigione della ferita. La procedura è questa: prima l'anestesia locale. Il paziente resta sveglio per tutto l'intervento e può comunicare con il chirurgo. Quando la zona è anestetizzata, il chirurgo incide orizzontalmente all'altezza dell'apice del dente colpito e apre l'osso con una fresa per raggiungere il focolaio. Toglie l'apice della radice e raschia il tessuto infiammato dall'osso. Se serve, la radice si ottura anche dall'apice per sigillare il canale, poi la ferita si sutura. L'intervento dura da 30 a 60 minuti, a seconda dello spessore dell'osso nella zona. La cicatrice poi si vede appena, e il difetto osseo si riempie in qualche mese.",
            "L'apicectomia si esegue quando la cura endodontica non basta a guarire un'infiammazione nell'osso diffusa dal canale radicolare, o quando ci sono cisti legate alla radice. Dopo l'intervento la radice è un po' più corta, ma il dente resta nell'arcata e conserva funzione ed estetica.",
          ],
        },
      ],
      faqs: [
        {
          id: "oralna-kirurgija-1",
          question: "Quando vanno tolti i denti inclusi o ritenuti?",
          answer:
            "<ul><li>in caso di pericoronite ripetuta</li><li>in caso di ascessi</li><li>in caso di malattie della polpa o del parodonto</li><li>in caso di grave distruzione del dente per carie</li><li>in caso di riassorbimento delle radici dei denti vicini</li></ul>",
        },
        {
          id: "oralna-kirurgija-2",
          question: "Quali sono i segni della pericoronite?",
          answer:
            "<ul><li>dolore che si irradia all'orecchio e all'articolazione della mandibola</li><li>difficoltà ad aprire la bocca (trisma)</li><li>difficoltà a deglutire</li><li>linfonodi gonfi sotto il bordo della mandibola e sul collo</li><li>fuoriuscita di pus premendo il tessuto gonfio sopra il dente</li></ul>",
        },
        {
          id: "oralna-kirurgija-3",
          question: "Quando l'alveolotomia è sconsigliata?",
          answer:
            "<ul><li>quando il dente non causa disturbi locali né generali</li><li>in età avanzata del paziente (l'osso è meno irrorato)</li><li>quando l'anamnesi del paziente è compromessa</li></ul>",
        },
        {
          id: "oralna-kirurgija-4",
          question: "Cosa posso fare contro dolore e gonfiore dopo un'estrazione?",
          answer:
            "<p>Raffreddi la guancia dall'esterno sopra la ferita, mangi solo cibi tiepidi e morbidi e nei giorni successivi eviti cibi e bevande caldi o gassati. Chi fuma dovrebbe astenersi, perché la ferita guarisca prima e meglio. Se serve, prenda un antidolorifico, ma non prodotti con acido acetilsalicilico (Andol, Aspirina), che possono prolungare il sanguinamento.</p>",
        },
      ],
    },
    "rtg-dijagnostika": {
      slug: "rtg-dijagnostika",
      meta: {
        title: "Diagnostica radiografica - radiografie endorali e panoramiche | Dental Centar Repić",
        description:
          "Radiografie digitali endorali e panoramiche con fino al 90% di radiazioni in meno, subito prima o dopo il trattamento, al Dental Centar Repić a Trogir.",
      },
      title: "Diagnostica radiografica",
      lead:
        "Radiografie di un singolo dente e panoramiche con moderna tecnologia digitale e la dose di radiazioni più bassa",
      sections: [
        {
          heading: "Diagnostica radiografica (radiografie endorali e panoramiche)",
          paragraphs: [
            "Le radiografie dei denti e delle arcate sono uno strumento diagnostico importante in tutti i campi dell'odontoiatria, perché mostrano le strutture anatomiche e le alterazioni patologiche nell'osso che non si vedono durante la visita clinica. Sono indispensabili per pianificare quasi ogni trattamento odontoiatrico.",
            "I vecchi sistemi radiografici tradizionali davano una visione scarsa della struttura ossea, con un'esposizione molto più alta per paziente e operatore. Con la radiografia digitale la dose si è ridotta molto e la gestione delle immagini è molto più semplice. La moderna tecnologia digitale del Dental Centar Repić garantisce la dose di radiazioni più bassa (fino al 90% in meno rispetto alle radiografie classiche). I nostri pazienti possono fare la radiografia subito prima o dopo il trattamento, evitando visite in più.",
            "Al Dental Centar Repić facciamo radiografie di un singolo dente (radiografie endorali retroalveolari) e di entrambe le arcate (radiografia panoramica o ortopantomografia). Le radiografie endorali mostrano un singolo dente nelle sue dimensioni reali; una radiografia retroalveolare mostra un dente, o quel dente con i due vicini. L'ortopantomografia (panoramica) è la radiografia più usata in odontoiatria: mostra i processi patologici agli apici delle radici, dà una visione dello stato dell'osso in caso di parodontite e mostra le carie. Nei bambini la dose dell'ortopantomografia si può ridurre, ed è importante per pianificare la terapia ortodontica.",
            "Le immagini dei pazienti sono salvate sul computer, consultabili in ogni momento, e su richiesta si possono inviare al paziente via e-mail. L'archiviazione digitale permette di elaborare le immagini con diversi programmi (nitidezza, ingrandimento, riduzione, colorazione, misurazioni e ulteriori analisi), per avere più informazioni sulla salute orale e aiutare il dentista a fare la diagnosi giusta.",
            "In tutti gli ambulatori i computer sono collegati a un archivio centrale, per cui tutti i dati radiologici digitali sono sempre disponibili in ogni stanza. Questo ha ridotto molto i tempi di analisi e permette consulti migliori tra specialisti e paziente.",
            "Le radiografie non sono consigliate in gravidanza, soprattutto nel primo trimestre.",
          ],
        },
      ],
    },
    "djecja-dentalna-medicina": {
      slug: "djecja-dentalna-medicina",
      meta: {
        title: "Odontoiatria pediatrica - il dentista per bambini | Dental Centar Repić",
        description:
          "Prima visita dal dentista intorno a 1 anno, fluoroprofilassi, sigillatura dei solchi e anestesia indolore per bambini al Dental Centar Repić a Trogir.",
      },
      title: "Odontoiatria pediatrica",
      lead:
        "Diamo un'importanza particolare alla salute orale dei bambini",
      sections: [
        {
          heading: "Cure dentali per bambini",
          paragraphs: [
            "Andare presto dal dentista aiuta a sviluppare buone abitudini di igiene orale ed è importante per eliminare le paure, nell'infanzia e più avanti nella vita. Il momento migliore per la prima visita è intorno a 1 anno.",
            "Con il gioco e un modo di comunicare adatto all'età del bambino, rendiamo i trattamenti divertenti e il meno traumatici possibile. Ai più piccoli applichiamo sui denti un gel al fluoro per prevenire la carie. È un metodo del tutto indolore.",
            "Spieghiamo ai genitori quanto è importante curare i denti da latte, per evitare problemi futuri ai denti permanenti e anomalie ortodontiche che possono nascere dalla perdita precoce dei denti da latte. Sigilliamo i denti permanenti giovani perché nei loro solchi non si formi carie per molto tempo. La sigillatura non richiede trapano.",
            "Quando un dente va curato per una carie, usiamo un'anestesia indolore: prima spalmiamo un gel anestetico sul punto dell'iniezione, così la puntura non fa male.",
            "Grazie all'approccio multidisciplinare dei nostri specialisti, il dott. Dario Repić e la dott.ssa Slavica Pejda Repić, specialista in ortodonzia, offriamo a Lei e a Suo figlio i consigli migliori e la cura ottimale. Mentre Suo figlio cresce, curiamo in particolare la prevenzione, per evitare alcune anomalie ortodontiche ed esperienze spiacevoli dal dentista.",
            "Per una cura ben riuscita, i piccoli pazienti ricevono un diploma di coraggio o un attestato di lode.",
          ],
        },
      ],
    },
  },

  serviceDetailChrome: {
    backToServices: "Altri servizi",
    faqHeading: "Domande frequenti",
    relatedHeading: "Altri servizi",
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
