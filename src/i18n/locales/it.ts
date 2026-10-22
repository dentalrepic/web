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
      title: "Un approccio\nmoderno. Un sorriso sano.",
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
      { name: "Antonela Drnasin", role: "Assistente dentale" },
    ],
    // Patient reviews, translated from the Croatian originals; quoted with permission.
    reviews: {
      heading: "Le esperienze dei pazienti",
      intro: [
        "La fiducia che costruiamo a ogni visita.",
        "Le esperienze dei nostri pazienti riflettono ciò che per noi conta: competenza, professionalità, attenzione e qualità del servizio.",
      ],
      items: [
        {
          name: "Toni Vešović",
          text:
            "Il Dental Centar Repić è uno dei rari studi dentistici in cui il servizio è sempre all'altezza. Il personale è professionale e attento, ma anche allegro e sorridente. Tre anni fa mi sono fatto curare un paio di denti e mettere un impianto, e posso dire di esserne ancora soddisfatto.",
        },
        {
          name: "Zorana Barada",
          text:
            "Oltre a curare la carie, riescono a far passare la paura del dentista.",
        },
        {
          name: "Joško Herceg",
          text:
            "Medici eccellenti, competenti e professionali. Complimenti anche per il lavoro con i bambini.",
        },
      ],
    },
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
      title: "Rivolgiti a noi\ncon fiducia.",
    },
    intro: {
      eyebrow: "Contatti",
      heading: "Prenota un appuntamento",
      paragraph:
        "Compila il modulo qui sotto e ti contatteremo il prima possibile, durante i nostri orari di apertura.\nLa prima visita è gratuita.",
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
        "Gli impianti dentali sono un intervento consolidato che sostituisce i denti persi senza toccare i denti vicini.",
      sections: [
        {
          heading: "Cosa sono gli impianti dentali",
          paragraphs: [
            "Con gli impianti dentali sostituiamo uno o più denti persi nell'arcata superiore o inferiore. Gli impianti sostituiscono la radice del dente e in 3-6 mesi si integrano con l'osso (osteointegrazione). In questo periodo il paziente non resta senza denti, ma porta una protesi provvisoria che garantisce estetica e funzione fino alla protesi definitiva. La protesi definitiva può essere una singola corona su impianto, un ponte su impianti o una protesi su impianti. L'impianto nell'osso aiuta anche a conservare il volume osseo, cioè la cresta alveolare: stimola l'osso come un dente naturale ed evita il riassorbimento osseo che altrimenti segue la perdita di un dente.",
          ],
          bullets: [
            "Soluzione definitiva",
            "Pieno recupero della funzione dei denti",
            "Denti dall'aspetto naturale e bello",
            "Aspetto di tutto il viso migliorato",
            "Prevenzione della perdita ossea",
            "Normale manutenzione",
          ],
        },
        {
          heading: "Quando consigliamo gli impianti",
          paragraphs: [
            "Quando manca un solo dente e i denti vicini sono sani, consigliamo un impianto per non dover limare i denti sani adiacenti. Sull'impianto si applica poi una corona.",
            "Chi porta una protesi totale ha spesso problemi di scarsa tenuta, che si risolvono con una protesi su impianti. Per stabilizzare una overdenture superiore in un'arcata del tutto edentula bastano di solito quattro impianti, per una inferiore di solito due. Le protesi ancorate agli impianti soddisfano di più i pazienti rispetto alle protesi tradizionali: hanno un'estetica migliore, sono più stabili, facilitano la masticazione, limitano meno la funzione e rendono più facili la pulizia e il parlare.",
            "Gli impianti possono essere caricati subito (appena inseriti) o in modo convenzionale (dopo l'osteointegrazione). Le ricerche mostrano che il carico convenzionale dà una sopravvivenza dell'impianto in bocca leggermente migliore. Gli impianti che usiamo ogni giorno sono in titanio di alta qualità, resistente e biocompatibile, e l'inserimento è del tutto indolore grazie all'anestesia locale. Per un impianto servono osso in quantità e qualità sufficienti, che verifichiamo con una radiografia panoramica e una TAC prima di pianificare la terapia. Se l'osso è scarso, sono possibili la rigenerazione ossea e il rialzo del pavimento del seno mascellare (sinus lift).",
          ],
        },
        {
          heading: "Cos'è la rigenerazione ossea?",
          paragraphs: [
            "Dopo la perdita di un dente l'osso si atrofizza, perché la masticazione non lo stimola più attraverso la radice. Il volume osseo diminuisce e non resta spazio sufficiente per un impianto. Il riassorbimento è più rapido se i denti estratti avevano infiammazioni intorno alla radice, perché l'infezione ha già distrutto parte dell'osso. Ogni impianto deve avere intorno abbastanza osso che lo sostenga e lo stabilizzi, impedisca alla gengiva di ritirarsi intorno all'impianto ed eviti problemi estetici successivi, come l'impianto che traspare attraverso la mucosa.",
            "La rigenerazione ossea è un intervento chirurgico che sostituisce l'osso perso. Il volume mancante si può ricostruire con osso prodotto artificialmente, di origine sintetica o animale, oppure con osso del paziente stesso (osso autologo), prelevato in bocca (mandibola) o fuori dalla bocca (ad esempio dall'anca), frantumato e inserito dove manca. L'osso del paziente è il gold standard della rigenerazione ossea, perché ha il miglior potenziale di integrazione e di aumento del volume. In questo caso occorre prelevare chirurgicamente abbastanza osso per colmare il difetto. I difetti piccoli e medi si colmano per lo più con osso artificiale di origine sintetica o animale. Il metodo viene scelto dallo specialista in chirurgia orale.",
            "La guarigione dell'osso e dei tessuti molli dopo la rigenerazione può migliorare con i fattori di crescita del paziente, ottenuti con il metodo PRF (fibrina ricca di piastrine), o con una biomembrana che stabilizza il coagulo e l'innesto osseo. Il metodo PRF consiste nell'isolare la fibrina ricca di piastrine dal sangue del paziente e applicarla nella zona operata. Le piastrine liberano fattori di crescita che stimolano la formazione di nuovi vasi sanguigni e di nuovo osso. Il metodo è innocuo, perché si usa solo il sangue filtrato del paziente per favorire la guarigione. I materiali inseriti vengono riassorbiti gradualmente, l'osso si rimodella e si forma nuova massa ossea solida. La rigenerazione si esegue in anestesia locale ed è del tutto indolore. Dopo l'intervento bisogna attendere che l'osso guarisca (circa otto mesi) prima di inserire l'impianto.",
          ],
        },
        {
          heading: "Cos'è il rialzo del seno mascellare?",
          paragraphs: [
            "Quando manca osso nelle zone laterali dell'arcata superiore, è indicato il rialzo del pavimento del seno mascellare (sinus lift). In questo intervento di chirurgia orale il rialzo del pavimento del seno si combina con la rigenerazione ossea, per creare una sede sufficiente per gli impianti. Il sinus lift si esegue in anestesia locale ed è del tutto indolore.",
            "A seconda dell'entità dell'intervento si distingue un rialzo piccolo e uno grande. Se per l'impianto mancano solo circa 2 mm di osso, si esegue un piccolo rialzo, in cui gli impianti si inseriscono insieme al rialzo del pavimento del seno e alla rigenerazione ossea. L'intervento si esegue con la tecnica degli osteotomi, che prende il nome dallo strumento con cui si solleva la membrana del seno mascellare. Dopo il piccolo rialzo occorre attendere che l'impianto si integri con l'osso (circa sei mesi), e solo dopo caricarlo con la protesi (corona, ponte).",
            "Il grande rialzo si esegue quando manca un volume d'osso maggiore, con un cosiddetto accesso laterale. A volte anche qui l'impianto si può inserire contemporaneamente, ma se manca molto osso si consiglia il rialzo con impianto differito. Tra rialzo e impianto devono allora passare 6-8 mesi, altrimenti c'è il rischio di complicanze e di insuccesso. Lo specialista in chirurgia orale decide, in base alla sua esperienza e ai Suoi esami, quale intervento Le serve.",
          ],
        },
        {
          heading: "Quali complicanze può avere il rialzo del seno?",
          paragraphs: [
            "Il sinus lift ha un'alta percentuale di successo e le complicanze sono rare, ma possibili. Possono verificarsi durante l'intervento o dopo. Durante il rialzo la membrana del seno mascellare può lacerarsi, perché il suo spessore varia da paziente a paziente. In tal caso il chirurgo orale ripara il difetto con diverse tecniche e previene complicanze successive, come una sinusite causata dall'ingresso del materiale osseo nel seno.",
            "Dopo il sinus lift è possibile un leggero gonfiore, che scompare in pochi giorni. È possibile anche una sinusite per varie cause, come la penetrazione di un'infezione dalla cavità orale, la penetrazione dell'impianto o del materiale osseo attraverso la membrana, o un intervento eseguito su un seno malato. Il requisito per il sinus lift sono seni paranasali sani: se il paziente ha già una malattia dei seni, prima dell'intervento è necessario un consulto con un otorinolaringoiatra.",
          ],
        },
        {
          heading: "All-on-4",
          paragraphs: [
            "«All-on-4», cioè «tutto su quattro (impianti)», indica una forma di riabilitazione implantoprotesica dell'arcata inferiore o superiore completamente edentula. Il metodo non è nuovo, ma noto da anni e collaudato nella pratica clinica. Dopo l'estrazione dei denti, col tempo la mascella perde osso. Se ne resta abbastanza, si consiglia un numero maggiore di impianti, perché la protesi ha più pilastri; in alcuni pazienti, però, l'osso è troppo scarso o di qualità peggiore e si può inserire solo un numero ridotto di impianti a sostegno della protesi. Se il paziente è adatto all'All-on-4, nell'arcata edentula si inseriscono solo quattro impianti (due assiali e due inclinati, di cui si occupa il chirurgo orale durante l'inserimento), che sostengono una protesi fissa.",
            "Dopo l'inserimento degli impianti, il paziente riceve lo stesso giorno, o al più tardi dopo pochi giorni, prima una protesi fissa provvisoria e dopo tre mesi quella definitiva. Così il periodo senza denti si riduce al minimo, con maggiore soddisfazione dei pazienti. Ciò è possibile grazie al carico immediato: gli impianti vengono caricati già al momento dell'inserimento nell'osso, senza attendere l'osteointegrazione. Il metodo All-on-4 ha molti vantaggi: si evitano il rialzo del seno e la rigenerazione ossea nell'arcata superiore, il che accorcia la guarigione e riduce i costi; anche i pazienti senza denti da molto tempo e con poco osso possono avere una protesi fissa; e bastano quattro impianti, che tengono la protesi così stabile da sentirla come i propri denti, senza la paura che si muova o cada come una protesi totale. Inoltre la protesi è avvitata, quindi il dentista può toglierla, controllarla e ripararla facilmente se serve. L'igiene è molto semplice: spazzolino e dentifricio, più un idropulsore o il filo interdentale intorno agli impianti. Con una buona igiene gli impianti possono durare tutta la vita, e solo la protesi si sostituisce quando è usurata.",
            "Il costo dell'All-on-4 è inferiore a quello di un numero maggiore di impianti più gli interventi di chirurgia orale aggiuntivi, il che rende la protesi fissa su impianti accessibile a più pazienti.",
          ],
        },
        {
          heading: "Istruzioni dopo l'inserimento degli impianti",
          paragraphs: [
            "Igiene della ferita: nelle prime 24 ore eviti di masticare dal lato operato e di sciacquare la bocca. Dal giorno dopo l'intervento lavi i denti con uno spazzolino morbido e, se Le è stato prescritto un antisettico (Curasept), sciacqui la bocca 2-3 volte al giorno a partire dal giorno dopo l'intervento. Eviti di fumare, perché la circolazione e la guarigione della ferita non siano disturbate.",
            "Dolore: prenda il primo antidolorifico 30 minuti dopo l'intervento, poi secondo necessità. Eviti Aspirina, Andol e altri farmaci con acido acetilsalicilico, che possono prolungare il sanguinamento. Se il dolore non diminuisce, ci chiami.",
            "Sanguinamento: un leggero sanguinamento è normale. La garza applicata dopo l'intervento deve restare premuta sulla ferita per almeno 20-30 minuti. Eviti di sciacquare la bocca.",
            "Gonfiore: qualche ora dopo l'intervento può comparire un gonfiore. Raffreddi la guancia con impacchi freddi, alternando 20 minuti di freddo e 10 minuti di pausa, e dorma con la testa sollevata.",
            "Alimentazione e attività: mangi cibi il più possibile morbidi ed eviti i cibi caldi. Eviti l'attività fisica e il sole forte per 48-72 ore dopo l'intervento.",
          ],
        },
      ],
      faqs: [
        {
          id: "implantologija-1",
          question: "Cos'è un impianto dentale?",
          answer:
            "<p>Un impianto dentale è una vite in titanio che per forma ricorda la radice di un dente. Si inserisce chirurgicamente nell'osso dell'arcata superiore o inferiore, secondo un piano di cura definito in precedenza. Da due a sei mesi dopo l'inserimento, sull'impianto si fissa un moncone protesico che sostiene corone, ponti o protesi.</p>",
        },
        {
          id: "implantologija-2",
          question: "Come si svolge l'inserimento degli impianti?",
          answer:
            "<ul><li>La prima visita clinica comprende un esame accurato e un'analisi dello stato dei Suoi denti, oltre a un'analisi dettagliata della radiografia panoramica delle arcate (ortopantomografia). Nel pianificare la terapia teniamo conto della situazione clinica in bocca, dei Suoi desideri e aspettative e delle Sue possibilità economiche, e su questa base Le proponiamo le opzioni di cura. Perché le comprenda bene, Le spieghiamo la situazione con fotografie intraorali dei Suoi denti e con modelli dimostrativi. Dopo la prima visita e la scelta della terapia, Le presentiamo il percorso di cura dettagliato. Comprende l'estrazione dei denti che non si possono salvare, la rimozione del tartaro e la lucidatura, e la cura dei denti esistenti. Se serve, lo stesso giorno si realizzano protesi provvisorie, perché possa masticare e avere un aspetto normale durante la cura. Se la situazione clinica richiede una diagnostica più dettagliata, consigliamo una scansione tridimensionale precisa (TAC) della parte di arcata in cui andranno gli impianti. La TAC serve a stabilire con precisione quantità e qualità dell'osso e la posizione migliore dell'impianto. Visita, ortopantomografia e TAC ci permettono di definire un piano di cura dettagliato, che comprende numero e disposizione degli impianti ed eventuale rigenerazione ossea.</li><li>La fase successiva è l'inserimento degli impianti. Per prepararsi si sciacqua la bocca con un antisettico e si riceve un'anestesia locale. Segue l'inserimento chirurgico dell'impianto (incisione, sollevamento del lembo gengivale, esposizione della cresta ossea, preparazione della sede, avvitamento dell'impianto, sutura, radiografia di controllo). Sottolineiamo che l'inserimento degli impianti non è doloroso. Dopo l'intervento riceve istruzioni dettagliate, orali e scritte, per una buona guarigione della ferita e una buona osteointegrazione (unione dell'impianto con l'osso). I punti si tolgono dopo sette giorni.</li><li>A seconda della situazione clinica, la visita successiva è da due a sei mesi dopo l'inserimento. Si scoprono gli impianti e si applicano monconi di guarigione, che aiutano la gengiva a guarire e a prendere forma.</li><li>Dopo i monconi si prendono le impronte, inviate al laboratorio odontotecnico che realizza le Sue protesi.</li><li>Segue la prova della protesi, che valutiamo con Lei e con l'odontotecnico per correggere eventuali difetti.</li><li>L'ultima fase è la consegna della protesi!</li></ul>",
        },
        {
          id: "implantologija-3",
          question: "Quali vantaggi hanno gli impianti rispetto ad altre protesi?",
          answer:
            "<p>Se Le mancano uno o più denti e ha difficoltà a masticare o a parlare, gli impianti dentali sono la soluzione per Lei. Sono un'opzione adatta anche se la Sua protesi non tiene o è scomoda.</p>",
        },
        {
          id: "implantologija-4",
          question: "Gli impianti dentali sono sicuri?",
          answer:
            "<p>Gli impianti dentali e le protesi su di essi sono da oltre 40 anni una terapia di scelta e parte integrante della pratica nelle cliniche specializzate ben attrezzate. Con sistemi implantari evoluti e affermati, il Dental Centar Repić Le offre risultati affidabili e duraturi, sia funzionali sia estetici.</p>",
        },
        {
          id: "implantologija-5",
          question: "Qual è la percentuale di successo degli impianti?",
          answer:
            "<p>L'indicazione per gli impianti si valuta individualmente, in base alla situazione clinica e alla motivazione di ciascun paziente. Con un'indicazione corretta e una buona igiene orale, la percentuale di successo della terapia implantare è dal 95% al 100%.</p>",
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
        "La terapia ortodontica (l'apparecchio per i denti) è indicata quando i denti sono in posizione o disposizione scorretta.",
      sections: [
        {
          heading: "Apparecchi mobili e fissi",
          paragraphs: [
            "Il giusto contatto tra i denti distribuisce in modo uniforme le forze della masticazione, che si trasmettono correttamente al parodonto e all'osso. Denti ben allineati sono anche più facili da pulire. Sui denti storti si accumula spesso placca, che minaccia la salute dei denti e delle gengive. Gli apparecchi sono i dispositivi con cui svolgiamo la terapia ortodontica.",
          ],
        },
        {
          heading: "Come svolgiamo la terapia ortodontica",
          paragraphs: [
            "Seguiamo ogni paziente individualmente. Dopo un'accurata visita clinica, l'esame delle radiografie e un'analisi dettagliata delle fotografie intraorali, proponiamo a ogni paziente un piano di cura. Grazie alla collaborazione interdisciplinare con il dott. Dario Repić, specialista in endodonzia e odontoiatria restaurativa, possiamo offrire a ogni paziente un'assistenza dentale completa durante e dopo la terapia ortodontica.",
            "Oltre a informazioni dettagliate sulla salute della sua bocca, ogni paziente riceve tutte le istruzioni scritte necessarie sul funzionamento e la cura dell'apparecchio, insieme a un kit adatto per l'igiene orale.",
          ],
        },
        {
          heading: "La visita ortodontica e il piano di cura",
          paragraphs: [
            "La prima visita ortodontica consiste nell'esame clinico di cavità orale, denti, morso e tessuti molli e nell'analisi della radiografia panoramica (ortopantomografia). Se non ce l'ha, può farla da noi in studio, con un apparecchio radiografico digitale di ultima generazione a dose minima. Per la diagnosi facciamo anche fotografie intraorali con una fotocamera dentale apposita.",
            "Dopo la diagnosi iniziale Le proporremo un piano di cura, che concordiamo con il paziente, o con i genitori e il bambino.",
            "Poi prendiamo le impronte per i modelli di studio, così da documentare lo stato del morso prima della terapia, cioè prima dell'apparecchio. Tutto il percorso è del tutto trasparente, e ci assicuriamo che sappia in ogni momento quanto costano la realizzazione e la cura dell'apparecchio.",
          ],
        },
      ],
      faqs: [
        {
          id: "ortodoncija-1",
          question: "Di cosa si occupa l'ortodontista?",
          answer:
            "<p>L'ortodontista è uno specialista che diagnostica e cura le irregolarità nella disposizione dei denti o nella posizione delle arcate. Si occupa anche di prevenirle. Per farlo usa diversi attacchi e apparecchi ortodontici.</p>",
        },
        {
          id: "ortodoncija-2",
          question: "Perché ho bisogno di una terapia ortodontica?",
          answer:
            "<p>I motivi principali sono due: funzione ed estetica. Dal punto di vista funzionale, la terapia migliora il funzionamento dei denti e delle arcate e rende più facile l'igiene orale. Dal punto di vista estetico, un sorriso bello e attraente rende il viso più espressivo, accresce molto la Sua sicurezza e La aiuta a fare una migliore prima impressione.</p>",
        },
        {
          id: "ortodoncija-3",
          question: "Qual è il momento giusto per iniziare la terapia ortodontica?",
          answer:
            "<p>Per la terapia ortodontica non ci sono limiti di età. Certo, prima si scopre e si cura un'anomalia, più semplice è la cura. L'American Association of Orthodontists consiglia la prima visita ortodontica a 7 anni.</p>",
        },
        {
          id: "ortodoncija-4",
          question: "Come riconosco un'anomalia ortodontica?",
          answer:
            "<p>Se nota denti affollati o spazi tra i denti, un morso scorretto, un'arcata superiore o inferiore sporgente, o denti che non combaciano bene quando chiude la bocca, Le consigliamo una visita da uno specialista in ortodonzia. Nei bambini anche abitudini come succhiare il pollice possono portare a un'anomalia ortodontica.</p>",
        },
        {
          id: "ortodoncija-5",
          question: "Mettere l'apparecchio fa male?",
          answer:
            "<p>L'applicazione dell'apparecchio è indolore. In alcuni pazienti, nei giorni dopo l'applicazione di un apparecchio fisso, possono comparire un leggero dolore o una sensazione di pressione, così come dopo i controlli. Per alleviarli consigliamo un antidolorifico.</p>",
        },
        {
          id: "ortodoncija-6",
          question: "Quanto dura la terapia ortodontica?",
          answer:
            "<p>La durata varia da paziente a paziente. La fase attiva (con l'apparecchio) dura in genere da 6 a 30 mesi. Dopo la terapia occorre portare un apparecchio di contenzione da qualche mese a un anno, a seconda dell'anomalia iniziale.</p>",
        },
        {
          id: "ortodoncija-7",
          question: "Ogni quanto devo andare dall'ortodontista?",
          answer:
            "<p>A seconda del tipo di terapia, i controlli sono ogni 4-10 settimane.</p>",
        },
        {
          id: "ortodoncija-8",
          question: "Dovrò togliere dei denti?",
          answer:
            "<p>Se c'è un forte affollamento o un dente è incluso (non spuntato e nascosto nell'osso), l'estrazione è una possibile opzione di cura.</p>",
        },
        {
          id: "ortodoncija-9",
          question: "Potrò suonare uno strumento o fare sport?",
          answer:
            "<p>Sì. La terapia ortodontica non esclude queste attività. Se fa sport, consigliamo un paradenti per evitare lesioni in bocca e danni all'apparecchio.</p>",
        },
        {
          id: "ortodoncija-10",
          question: "Dovrò continuare ad andare dal mio dentista?",
          answer:
            "<p>Certo. I controlli dal Suo dentista sono importantissimi. Con l'apparecchio è più difficile pulire i denti, quindi la placca si accumula più facilmente, e con essa la carie. Il Suo dentista la previene con pulizie e controlli regolari.</p>",
        },
        {
          id: "ortodoncija-11",
          question: "Dovrò portare una contenzione dopo aver tolto l'apparecchio?",
          answer:
            "<p>Quasi sempre la risposta è SÌ. Finita la terapia, occorre portare un apparecchio di contenzione da qualche mese a un anno, a seconda dell'anomalia iniziale. Altrimenti i denti possono tornare abbastanza in fretta nella posizione di partenza, e tutto l'impegno Suo e del Suo ortodontista sarebbe vano. La durata dipende dall'anomalia iniziale.</p>",
        },
        {
          id: "ortodoncija-12",
          question: "Quanto costa tutto questo?",
          answer:
            "<p>Alla prima visita riceve un preventivo per la terapia ortodontica. Il prezzo comprende la prima rimozione del tartaro e la lucidatura, le fasi attive dall'inizio alla fine della terapia, l'applicazione dell'apparecchio fisso, i controlli, la rimozione dell'apparecchio e la prima serie di contenzioni. Per la prima visita serve una radiografia di tutta l'arcata (ortopantomografia): la facciamo nel nostro studio ed è inclusa nel prezzo della terapia.</p><p>Usiamo attacchi metallici o estetici, a scelta del paziente. Gli attacchi estetici rendono l'apparecchio fisso più discreto. Usiamo prodotti del noto produttore di materiali ortodontici American Orthodontics, e durante la visita Le mostreremo aspetto e caratteristiche dei vari attacchi.</p>",
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
        "Al Dental Centar Repić dedichiamo particolare attenzione a conservare la funzione dei denti e di tutto l'apparato masticatorio.",
      sections: [
        {
          paragraphs: [
            "Dopo un'accurata visita clinica e l'analisi delle radiografie di denti e arcate, proponiamo a ogni paziente un piano protesico individuale per sostituire uno o più denti persi. A seconda della situazione clinica e delle possibilità economiche, i denti persi si possono sostituire con protesi mobili o fisse.",
            "Le protesi mobili (dentiere) sono indicate per i pazienti che hanno perso tutti o una parte dei denti. Per stabilizzare la protesi in bocca ci sono diverse possibilità, come protesi combinate fisse-mobili, corone telescopiche o protesi ancorate agli impianti.",
            "Le protesi fisse comprendono faccette, corone, ponti e ponti su impianti. Usiamo materiali restaurativi moderni che soddisfano le alte esigenze estetiche e funzionali dei pazienti.",
          ],
        },
        {
          heading: "Corone e ponti in metallo-ceramica",
          paragraphs: [
            "Corone e ponti in metallo-ceramica si usano da tempo in protesi dentale e sono considerati una sorta di standard della protesi fissa. Ancora oggi sono la scelta più frequente dei pazienti, per il prezzo accessibile e la durata dei materiali. La struttura metallica della corona o del ponte protegge i denti pilastro, mentre la ceramica riproduce esteticamente i denti persi. La base metallica è di solito una lega di cobalto, cromo e nichel, oro dentale o titanio. La ceramica si cuoce a strati sulla base metallica e vi si lega chimicamente.",
            "Concordata con il paziente la corona o il ponte, il dentista lima prima i denti pilastro per creare spazio sufficiente per la protesi. Poi prende un'impronta, su cui il laboratorio realizza la protesi. In questa fase si sceglie anche la tonalità di ceramica che imita meglio i denti naturali. Dopo la realizzazione in laboratorio e la prova in studio, la corona o il ponte si cementa prima in via provvisoria e poi definitiva.",
            "Le protesi in metallo-ceramica sono adatte a sostituire uno o più denti persi nella zona anteriore o posteriore dell'arcata. Con un'indicazione corretta, hanno buone proprietà meccaniche ed estetiche.",
            "I principali vantaggi di corone e ponti in metallo-ceramica sono il prezzo, la resistenza meccanica e la durata. Secondo la letteratura, ben il 90-95% delle protesi in metallo-ceramica dura dieci anni in bocca. Costano un po' meno delle protesi interamente in ceramica (senza metallo).",
            "Uno svantaggio sono le possibilità estetiche più limitate rispetto ai sistemi interamente in ceramica. Il motivo è la base metallica grigio scuro: poiché il metallo sotto la ceramica blocca la luce, il colore del dente può sembrare poco naturale. A volte i pazienti lamentano anche un bordo scuro della gengiva lungo il margine della corona, perché col tempo il metallo della base rilascia ioni che passano nella gengiva. Una preparazione (limatura) accurata del dente pilastro può rendere questo effetto meno frequente.",
          ],
        },
        {
          heading: "Corone e ponti interamente in ceramica (ceramica senza metallo)",
          paragraphs: [
            "Corone e ponti interamente in ceramica sono l'alternativa alla metallo-ceramica e si chiamano anche denti «di porcellana». Oggi le esigenze estetiche dei pazienti crescono sempre di più e sono spesso decisive nella scelta di come sostituire i denti persi. Corone e ponti in ceramica imitano perfettamente l'aspetto naturale dei denti e in questo superano la metallo-ceramica. Mentre nella metallo-ceramica la base metallica ostacola il passaggio e la diffusione della luce influenzando il colore del dente, corone e ponti senza metallo hanno un'estetica eccellente che imita i denti naturali. Per il paziente la procedura è simile a quella della metallo-ceramica: il dente si lima (per fare spazio alla protesi) e si prende un'impronta che si invia al laboratorio. Intanto si sceglie la tonalità più adatta ai desideri del paziente e ai suoi denti. La protesi finita si cementa («incolla») sui denti limati. Per queste protesi si lima meno, conservando più tessuto dentale sano. Realizzate al computer, queste corone e questi ponti aderiscono esattamente al margine del dente limato, il che facilita la pulizia e riduce il ristagno di cibo e l'infiammazione delle gengive.",
            "I nuovi materiali hanno dato alla ceramica senza metallo ottime proprietà meccaniche senza sacrificare l'estetica. Per resistenza e durata, corone e ponti interamente in ceramica sono paragonabili ai sistemi in metallo-ceramica. Secondo la letteratura, il 91-97% delle protesi in ceramica senza metallo dura in bocca cinque anni o più.",
            "Le protesi in ceramica senza metallo possono sostituire uno o più denti persi. I materiali più recenti per le protesi fisse interamente in ceramica sono la ceramica al disilicato di litio rinforzata con leucite, la vetroceramica rinforzata con leucite o disilicato di litio e le ceramiche ossidiche, come l'ossido di alluminio e l'ossido di zirconio. Corone e ponti in ceramica senza metallo costano un po' di più di quelli in metallo-ceramica, perché la loro realizzazione in studio e in laboratorio è più complessa.",
          ],
        },
        {
          heading: "Corone e ponti in zirconia",
          paragraphs: [
            "La zirconia (ossido di zirconio) è una ceramica senza metallo sempre più usata in protesi dentale per le sue ottime qualità estetiche e funzionali, per protesi fisse (corone e ponti) nella zona anteriore o posteriore. Appartiene alle ceramiche ossidiche, molto tenaci, resistenti all'usura e alle alte temperature e alla corrosione. La zirconia si usa da oltre 50 anni in medicina e odontoiatria: in ortopedia per le teste delle protesi d'anca, in odontoiatria, oltre che per le protesi, per perni prefabbricati, attacchi ortodontici e monconi implantari.",
            "La base della corona o del ponte è in biossido di zirconio, su cui si cuoce la ceramica. È bianca e non traspare al margine della protesi. Il biossido di zirconio è biocompatibile e non causa allergie. Conduce poco elettricità e calore, contribuendo a ridurre la sensibilità dei denti. La zirconia ha molte qualità: estetica di prim'ordine; resistenza eccezionale; biocompatibilità; e meno limatura del dente naturale grazie alla resistenza del materiale (bastano 0,4 mm di spessore). Per la sua resistenza e durezza, la zirconia si lavora a macchina da blocchi industriali. Grazie alla realizzazione al computer, corone e ponti in zirconia aderiscono con precisione al margine del dente limato, il che facilita l'igiene orale e riduce il rischio di infiammazione gengivale.",
            "Dal punto di vista estetico è un'ottima scelta, perché imita molto bene la trasparenza e il colore naturali dei denti, e con la sua alta resistenza tiene testa ai metalli più forti. Meccanicamente è paragonabile alla metallo-ceramica, ma imita meglio l'aspetto naturale. Il colore finale dipende dallo spessore della ceramica, dallo spessore e dal colore del cemento e dal colore del moncone. Grazie all'alta resistenza si possono realizzare protesi molto sottili (con una struttura di soli 0,3 mm nella zona anteriore e 0,6 mm in quella laterale), che conservano traslucenza ed estetica. È adatta alla zona anteriore e posteriore e anche a protesi estese, che sostituiscono molti denti persi.",
            "Corone e ponti in zirconia costano un po' di più di quelli in metallo-ceramica, perché la realizzazione in studio e in laboratorio è più complessa: limatura, impronta e cementazione devono essere molto precise, perché la protesi (corona o ponte) aderisca esattamente al dente limato.",
          ],
        },
        {
          heading: "Vetroceramica: E.max ed Empress",
          paragraphs: [
            "La vetroceramica si ottiene con la cristallizzazione controllata del vetro. Ne esistono diversi tipi con proprietà diverse: IPS Empress (vetroceramica rinforzata con leucite), IPS Empress 2 (con nucleo di disilicato di litio, più resistente e tenace della prima) e IPS E.max, simile per composizione a IPS Empress 2 (nucleo di disilicato di litio) ma molto più resistente delle altre due.",
            "Corone e ponti E.max Press o Empress sono protesi interamente in ceramica al disilicato di litio. La sua alta traslucenza permette un'estetica eccellente, per cui è particolarmente indicata nella zona estetica (visibile nel sorriso pieno). È più resistente delle altre vetroceramiche ed è indicata per protesi nella zona anteriore: corone singole o ponti di tre elementi fino al secondo premolare compreso, corone singole nella zona anteriore o posteriore, faccette e otturazioni indirette (inlay, onlay). La ceramica E.max esiste in moltissime tonalità e imita quindi molto bene l'aspetto naturale dei denti.",
            "Tre fattori influenzano il colore della protesi finale: il colore del moncone limato, il colore del cemento e il colore della corona. A volte la ceramica al disilicato di litio non è semplice da usare, perché monconi di colore diverso potrebbero trasparire attraverso la corona; conoscendo il materiale e le tecniche di preparazione, però, questi problemi si risolvono con soddisfazione di paziente e dentista.",
            "Combinando cementi di colore e trasparenza diversi si ottiene un colore uniforme delle corone, anche quando i denti limati non hanno un colore uniforme. Dopo la cementazione definitiva, le giunzioni tra corona e dente si lucidano per facilitare l'igiene.",
            "Per un risultato valido sia funzionalmente sia esteticamente, è importante porre bene l'indicazione. Le corone E.max sono meccanicamente un po' meno resistenti della zirconia, per cui non sono consigliate per protesi estese nella zona posteriore della bocca, ma per corone singole o ponti di tre elementi nella zona anteriore fino al secondo premolare compreso, corone singole nella zona anteriore o posteriore, faccette e otturazioni indirette (inlay, onlay).",
          ],
        },
      ],
      faqs: [
        {
          id: "protetika-1",
          question: "Quanto durano le corone in bocca?",
          answer:
            "<p>È difficile rispondere. Nel mondo e da noi, in un periodo di 10 anni dura l'85-95% delle corone di tutti i materiali, il che è considerato un buon risultato protesico. Tuttavia molti fattori influenzano la durata della protesi, come i controlli regolari e l'igiene orale, lo stato dei denti pilastro e del parodonto, la scelta giusta della protesi per il singolo caso e la sua corretta realizzazione. Per tutti questi motivi la durata può variare da paziente a paziente.</p>",
        },
        {
          id: "protetika-2",
          question: "Come si curano corone e ponti?",
          answer:
            "<ul><li>A volte i pazienti credono, sbagliando, che i denti siano protetti dalle «capsule», cioè corone o ponti, e che l'igiene orale non debba essere accurata. È un grande equivoco. Con l'impegno nell'igiene orale e controlli regolari dal dentista, il paziente può contribuire molto a far durare più a lungo la protesi e a mantenere sani gli altri denti.</li><li>Corone e ponti si lavano come i denti naturali: dal quadrante superiore destro a quello superiore sinistro, poi a quello inferiore sinistro e inferiore destro. Bisogna pulire tutte le superfici dei denti e delle protesi, per tre minuti in totale. Si consigliano movimenti circolari, e alla fine i denti vanno spazzolati «dal rosso al bianco», cioè dalla gengiva al dente, per rallentare la retrazione gengivale dopo una protesi fissa. Molti strumenti facilitano l'igiene delle protesi, come il filo interdentale con passafilo, gli spazzolini elettrici, gli idropulsori e gli scovolini. I rilevatori di placca, in libera vendita, mostrano al paziente quanto bene si lava i denti. Saremo lieti di insegnarLe la corretta igiene, perché insieme facciamo durare più a lungo la Sua protesi, con soddisfazione Sua e nostra.</li></ul>",
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
        "Un bel sorriso migliora l'umore, aumenta la sicurezza in sé stessi e La aiuta a fare una buona prima impressione.",
      sections: [
        {
          heading: "Per il Suo sorriso sano e bello",
          paragraphs: [
            "Il nostro obiettivo è offrire a ogni paziente un sorriso bello e sano. L'odontoiatria estetica comprende una serie di trattamenti che danno forma a un bel sorriso, seguendo precise linee guida per ottenere una piena armonia tra le strutture dentali molli e dure.",
            "Un trattamento di odontoiatria estetica unisce tecniche di diverse specialità dell'odontoiatria (ortodonzia, parodontologia, protesi, implantologia, odontoiatria restaurativa) per correggere le deviazioni dai parametri estetici e ottenere la funzione e l'estetica di denti sani. Le ricerche mostrano che i trattamenti estetici hanno un forte effetto psicologico sul paziente, aumentano la sicurezza in sé stessi e migliorano la qualità della vita.",
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
        "L'endodonzia è una disciplina specialistica dell'odontoiatria, strettamente legata all'odontoiatria restaurativa e alla cariologia.",
      sections: [
        {
          heading: "Cura dei canali radicolari",
          paragraphs: [
            "L'odontoiatria restaurativa e la cariologia curano le malattie dei tessuti duri del dente, cioè della dentina. Quando nella polpa si sviluppa un'infiammazione irreversibile, bisogna curare il tessuto molle del dente, la polpa, e lo si fa curando i canali radicolari. È la cura endodontica, spesso chiamata semplicemente endodonzia.",
          ],
        },
        {
          heading: "Perché un dente fa male?",
          paragraphs: [
            "Il mal di denti è un sintomo spiacevole che quasi tutti provano almeno una volta nella vita. Un dente può far male per diversi motivi: a volte la causa è la dentina esposta; un'infiammazione del parodonto o dei tessuti all'apice della radice; un'infiammazione di tessuti vicini, come i seni paranasali, quando il dolore si irradia ai denti; oppure un'infiammazione del dente stesso, cioè della polpa dentale. In alcuni casi la causa non è facile da trovare, e il dentista farà una visita accurata, alcuni test clinici e una radiografia. Individuata la causa, si decide la cura.",
          ],
        },
        {
          heading: "Come nasce l'infiammazione di un dente?",
          paragraphs: [
            "L'infiammazione della polpa dentale (pulpite, «infiammazione del dente») può avere varie cause, come una carie profonda, il digrignamento dei denti o un morso scorretto che sovraccarica il dente. Con l'infiammazione i vasi sanguigni nella polpa si dilatano, i capillari diventano più permeabili e il liquido esce nella zona circostante, facendo salire la pressione. La polpa si chiama anche «nervo del dente», ma in realtà contiene vasi sanguigni e linfatici oltre alle fibre nervose, e si trova nella camera pulpare. Poiché la camera pulpare è una struttura rigida che non può espandersi, l'aumento di pressione preme sui nervi della polpa e provoca dolore. Il dolore può essere di diverso tipo e diffondersi o irradiarsi alle strutture vicine: il dolore dei denti inferiori si irradia spesso verso l'orecchio, quello dei denti superiori di solito verso l'occhio.",
            "Nell'infiammazione reversibile della polpa il dolore è intermittente, compare con uno stimolo (caldo, freddo, masticazione) e scompare eliminando la causa; nell'infiammazione irreversibile è spontaneo e quasi costante. Altri sintomi possono essere linfonodi ingrossati vicino al dente colpito, pus che esce da una fistola sulla gengiva, un dente che si muove, gonfiore intorno al dente, febbre e malessere generale. Se l'infiammazione non si cura, l'infezione si diffonde attraverso il canale radicolare nell'osso circostante e si forma un granuloma. Il granuloma distrugge l'osso, e l'infezione può diffondersi attraverso il sangue nel resto del corpo.",
          ],
        },
        {
          heading: "Come si cura l'infiammazione di un dente?",
          paragraphs: [
            "La cura dipende dalla causa. Nell'infiammazione reversibile della polpa basta eliminare la causa (carie, contatto prematuro, colletti dentali esposti) e otturare il dente, dopo di che i sintomi si calmano. Nell'infiammazione irreversibile della polpa un'otturazione non basta ed è necessaria una cura endodontica.",
          ],
        },
        {
          heading: "Cos'è la cura endodontica?",
          paragraphs: [
            "La cura endodontica («endodonzia») è la cura dei canali radicolari del dente, per conservarlo in bocca. Comprende la rimozione della polpa (la cosiddetta devitalizzazione) e la pulizia e il lavaggio dei canali con strumenti manuali o meccanici appositi e una soluzione che elimina i batteri e i prodotti dell'infiammazione rimasti e disinfetta i canali. Poi i canali si riempiono con materiali appositi. La cura richiede un campo di lavoro asciutto e sterile, perché i batteri della bocca non penetrino nell'osso. Ogni intervento successivo si basa su canali radicolari ben curati. Un dente devitalizzato può sostenere una protesi e rimandare a lungo la necessità di una protesi mobile o di impianti. Conviene sempre provare a salvare il proprio dente, perché è il miglior sostituto che esista.",
            "È nostro dovere rendere la cura endodontica indolore, e lo facciamo con l'anestesia locale. A seconda della complessità del caso, possono servire più appuntamenti per curare bene il dente. Solo se ogni passaggio è eseguito correttamente la cura ha successo. Finita la cura, il dente può restare sensibile alla pressione per un po': è un effetto comune, l'importante è che dolore e sensibilità diminuiscano gradualmente. Se serve, può prendere un antidolorifico. I sintomi dovrebbero passare in pochi giorni.",
            "Disponiamo di apparecchi moderni con cui misuriamo con precisione la lunghezza dei canali e li prepariamo meccanicamente. L'otturazione finale dei canali la verifichiamo con una radiografia. Così curiamo il Suo dente nel minor tempo possibile, evitando visite inutili.",
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
        "Intervenga in tempo e prevenga le malattie e la perdita dei denti.",
      sections: [
        {
          paragraphs: [
            "Al Dental Centar Repić rimuoviamo professionalmente i depositi dai denti con strumenti sonici e a ultrasuoni, air polishing e lucidatura, ed eseguiamo la terapia parodontale iniziale e interventi di chirurgia parodontale, perché i Suoi denti restino pienamente funzionali il più a lungo possibile.",
            "I fattori principali della parodontite sono l'aumento dei batteri in bocca e una risposta immunitaria inadeguata dell'organismo. I batteri aumentano per una scarsa igiene orale o una minore produzione di saliva, che ha una funzione protettiva naturale. La risposta immunitaria si indebolisce per varie malattie sistemiche, per lo stress e per il fumo. La conseguenza è la malattia parodontale, che porta all'infiammazione e alla distruzione dell'apparato di sostegno dei denti: l'osso, la gengiva e il legamento parodontale.",
            "La malattia di solito inizia senza sintomi (non ci sono segnali che avvisino del suo inizio), ed è proprio per questo che sono importanti le visite regolari dal dentista, per scoprirla il prima possibile. Prima si scopre la malattia parodontale, più è possibile curare i denti colpiti e conservarli a lungo in bocca.",
          ],
        },
        {
          heading: "Come si cura la parodontite?",
          paragraphs: [
            "L'obiettivo della cura è ridurre i batteri in bocca, eliminare il biofilm (uno strato organizzato di batteri sul dente) dai denti e migliorare la risposta immunitaria, per fermare il progredire della malattia.",
            "Una buona igiene orale e la rimozione professionale regolare di placca e tartaro sono la chiave per prevenire e curare la parodontite. Lavi i denti almeno due volte al giorno con spazzolino e dentifricio, usando sempre il filo interdentale o un idropulsore (per gli spazi stretti tra i denti) e lo scovolino (per gli spazi più larghi e le forcazioni delle radici esposte).",
            "La terapia parodontale iniziale consiste nel rimuovere tartaro e depositi dai denti, sopra e sotto il bordo gengivale, con un apparecchio a ultrasuoni. Seguono una pulizia meccanica profonda e la lucidatura delle radici.",
            "La terapia chirurgica parodontale è indicata nei casi avanzati di parodontite (piorrea), perché permette di raggiungere le tasche parodontali profonde e rimuovere i depositi dai denti. Con le tecniche chirurgiche rigenerative si può ricostruire l'apparato di sostegno dei denti, migliorando la prognosi a lungo termine dei denti colpiti. Servono anche a ripristinare una forma esteticamente gradevole dei denti e della gengiva: la malattia parodontale fa ritirare la gengiva e rende sensibili le radici, e con la terapia rigenerativa si possono ricoprire le radici e ridurne la sensibilità.",
          ],
        },
        {
          heading: "Riconosca i segni della parodontite",
          bullets: [
            "sanguinamento delle gengive",
            "gengive gonfie, molto arrossate e doloranti",
            "retrazione delle gengive",
            "secrezione e pus dalle gengive",
            "denti che si spostano e spazi più ampi tra i denti",
            "denti che si muovono",
            "alito cattivo",
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
        "Al Dental Centar Repić gli interventi di chirurgia orale sono eseguiti da medici premiati con molti anni di esperienza.",
      sections: [
        {
          heading: "Chirurgia orale di alto livello",
          paragraphs: [
            "La chirurgia orale è la branca chirurgica dell'odontoiatria. Il chirurgo orale si occupa di estrazioni, di estrazioni di denti inclusi o ritenuti con l'alveolotomia, di interventi su cisti nell'osso dell'arcata superiore e inferiore, di apicectomia, frenulectomia, inserimento di impianti dentali e rialzo del pavimento del seno mascellare (sinus lift). L'intervento più frequente è l'estrazione. Nonostante l'impegno di dentisti e pazienti per conservare i denti il più a lungo possibile, ci sono casi in cui una carie profonda, una frattura o una malattia parodontale rendono necessaria l'estrazione.",
            "Le estrazioni sono interventi chirurgici di routine in anestesia locale. Prima di ogni intervento in bocca il chirurgo orale raccoglie un'anamnesi accurata. È importante indicare tutti i farmaci assunti, perché non influenzino il sanguinamento durante e dopo l'intervento e la guarigione della ferita. Dopo l'intervento la ferita si chiude con punti o si lascia guarire da sola. Il paziente riceve indicazioni per ridurre gonfiore e dolore, e una settimana dopo l'estrazione si consiglia un controllo dal dentista per verificare la guarigione e togliere eventuali punti.",
          ],
        },
        {
          heading: "Cos'è l'alveolotomia?",
          paragraphs: [
            "Oltre alle semplici estrazioni, eseguiamo anche l'estrazione di denti inclusi o ritenuti con l'alveolotomia. Qualsiasi dente può essere incluso o ritenuto. I denti inclusi non riescono a spuntare al loro posto per un ostacolo meccanico, quelli ritenuti non spuntano per cause non meccaniche. I denti più spesso inclusi sono i denti del giudizio, cioè i terzi molari. Se l'osso sopra la corona del dente incluso comunica con la bocca, la zona è difficile da pulire bene e il tessuto molle intorno si infiamma, la cosiddetta pericoronite. Se un dente incluso o ritenuto dà problemi, consigliamo di toglierlo con l'alveolotomia.",
            "L'alveolotomia è un intervento di chirurgia orale in anestesia locale, quindi del tutto indolore per il paziente, che resta sempre sveglio e può comunicare con il chirurgo. Prima dell'intervento il chirurgo orale raccoglie un'anamnesi accurata. È importante indicare tutti i farmaci assunti, perché non influenzino il sanguinamento durante e dopo l'intervento e la guarigione della ferita. L'alveolotomia inizia con l'anestesia locale, seguita da un'incisione della mucosa con il bisturi. L'osso si apre con una fresa per dare accesso al chirurgo, e il dente rimasto nell'osso si toglie con strumenti chirurgici appositi (scalpelli, leve) con il minimo trauma per i tessuti circostanti. Dopo l'intervento la ferita si sutura per facilitare la guarigione e il paziente riceve le istruzioni post-operatorie. Dopo sette giorni seguono il controllo in studio e la rimozione dei punti.",
          ],
        },
        {
          heading: "Cos'è l'apicectomia?",
          paragraphs: [
            "L'apicectomia è un intervento di chirurgia orale in cui si toglie l'apice della radice di un dente già devitalizzato. La esegue uno specialista in chirurgia orale. È necessaria quando la cura canalare non ha eliminato dolore e infiammazione, o quando nemmeno una nuova cura ha fatto regredire un granuloma all'apice, come si vede nella radiografia di controllo. In questo caso si consiglia di togliere chirurgicamente l'apice della radice, perché il dente possa restare nell'arcata.",
            "L'apicectomia si esegue in anestesia locale, quindi l'intervento è del tutto indolore. Prima il chirurgo orale raccoglie un'anamnesi accurata. È importante indicare tutti i farmaci assunti, perché non influenzino il sanguinamento durante e dopo l'intervento e la guarigione della ferita. La procedura nel dettaglio: si inizia con l'anestesia locale, e il paziente resta sveglio per tutto l'intervento e può comunicare con il chirurgo. Quando la zona è anestetizzata, il chirurgo incide orizzontalmente all'altezza dell'apice del dente colpito e apre l'osso con una fresa per raggiungere la zona. Taglia l'apice della radice e raschia il tessuto infiammato dall'osso. Se serve, si può poi eseguire un'otturazione retrograda della radice per sigillare i canali, dopo di che la ferita si chiude con punti. L'intervento dura da mezz'ora a un'ora circa, a seconda dello spessore dell'osso nella zona. Dopo resta sulla mucosa solo una cicatrice appena visibile, e il difetto osseo si riempie in qualche mese.",
            "L'apicectomia si esegue quando la cura canalare non basta a guarire un'infiammazione nell'osso, diffusa dai canali radicolari, o quando ci sono cisti legate alla radice. Dopo l'intervento la radice è un po' più corta, ma il dente resta nell'arcata e conserva funzione ed estetica.",
          ],
        },
      ],
      faqs: [
        {
          id: "oralna-kirurgija-1",
          question: "Quando si consiglia di togliere i denti inclusi o ritenuti?",
          answer:
            "<ul><li>in caso di pericoronite ripetuta</li><li>in caso di ascesso</li><li>in caso di malattie della polpa o del parodonto</li><li>in caso di grave distruzione del dente per carie</li><li>in caso di riassorbimento della radice del dente vicino</li></ul>",
        },
        {
          id: "oralna-kirurgija-2",
          question: "Quali sono i sintomi della pericoronite?",
          answer:
            "<ul><li>dolore che si irradia all'orecchio e all'articolazione della mandibola</li><li>difficoltà ad aprire la bocca (trisma)</li><li>difficoltà a deglutire</li><li>linfonodi ingrossati sotto il bordo della mandibola e sul collo</li><li>fuoriuscita di pus premendo il tessuto molle gonfio sopra il dente</li></ul>",
        },
        {
          id: "oralna-kirurgija-3",
          question: "Quali sono le controindicazioni all'alveolotomia (quando non si consiglia)?",
          answer:
            "<ul><li>un dente che non causa disturbi locali né generali</li><li>l'età avanzata del paziente (l'osso è meno irrorato)</li><li>un'anamnesi compromessa</li></ul>",
        },
        {
          id: "oralna-kirurgija-4",
          question: "Cosa posso fare contro dolore e gonfiore dopo un'estrazione?",
          answer:
            "<p>Si consiglia di raffreddare la zona dall'esterno, mangiare cibi tiepidi e morbidi ed evitare cibi e bevande caldi o gassati nei giorni successivi. Chi fuma dovrebbe evitare di fumare, perché la ferita guarisca più facilmente e in fretta. Se serve si può prendere un antidolorifico, evitando però i prodotti con acido acetilsalicilico (Andol, Aspirina), che possono prolungare il sanguinamento.</p>",
        },
      ],
    },
    "rtg-dijagnostika": {
      slug: "rtg-dijagnostika",
      meta: {
        title: "Diagnostica radiografica - radiografie endorali e panoramiche | Dental Centar Repić",
        description:
          "Radiografie digitali di un singolo dente e panoramiche con fino al 90% di radiazioni in meno, subito prima o dopo l'intervento, al Dental Centar Repić a Trogir.",
      },
      title: "Diagnostica radiografica",
      lead:
        "Radiografie di un singolo dente e panoramiche con moderna tecnologia digitale e le dosi di radiazioni più basse.",
      sections: [
        {
          heading: "Diagnostica radiografica (radiografie endorali e ortopantomografia)",
          paragraphs: [
            "Le radiografie dei denti e delle arcate sono uno strumento diagnostico essenziale in ogni campo dell'odontoiatria, perché mostrano tutte le strutture anatomiche e patologiche nell'osso che non si vedono durante la visita clinica. Servono per pianificare quasi ogni intervento odontoiatrico.",
            "I vecchi sistemi radiografici tradizionali mostravano peggio le strutture ossee, con radiazioni molto più alte per paziente e operatore. La radiologia digitale ha ridotto la dose e semplificato la gestione delle immagini. La moderna tecnologia digitale del Dental Centar Repić Le garantisce le dosi di radiazioni più basse (fino al 90% in meno rispetto alle radiografie classiche). Possiamo offrire ai nostri pazienti la radiografia subito prima o dopo l'intervento, per evitare più visite.",
            "Il Dental Centar Repić offre radiografie di singoli denti (radiografie endorali retroalveolari) e di entrambe le arcate (ortopantomografia). Le radiografie endorali mostrano i singoli denti nelle loro dimensioni reali; una radiografia retroalveolare mostra un dente o due denti vicini. L'ortopantomografia (OPT, panoramica) è la radiografia più comune in odontoiatria: mostra i processi patologici intorno a tutte le radici, dà una visione dello stato dell'osso in caso di parodontite e mostra le carie. La dose dell'ortopantomografia si può adattare perché possano farla anche i bambini, dato che serve a pianificare la terapia ortodontica.",
            "Le radiografie dei pazienti sono salvate sul computer, così sono sempre disponibili, e su richiesta del paziente si possono inviare via e-mail. L'archiviazione digitale permette di elaborare le immagini con strumenti software (nitidezza, ingrandimento, riduzione, colorazione, ulteriore diagnostica come le misurazioni), per avere più informazioni sulla salute orale del paziente e facilitare la diagnosi al medico.",
            "In tutti gli ambulatori i computer sono collegati a un archivio centrale, per cui tutti i dati radiologici digitali sono visibili in ogni momento in ogni stanza. Questo riduce molto i tempi di analisi e permette consulti migliori tra specialista e paziente.",
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
        "Diamo un'importanza particolare alla salute orale dei bambini.",
      sections: [
        {
          heading: "Cure dentali per bambini",
          paragraphs: [
            "Le visite dal dentista in tenera età creano buone abitudini di igiene orale e sono importanti per eliminare la paura, nell'infanzia e per tutta la vita. Il momento migliore per la prima visita è intorno al primo compleanno del bambino.",
            "Con il gioco e un modo di comunicare adatto all'età del bambino, cerchiamo di rendere la cura divertente e il meno traumatica possibile. Ai pazienti più piccoli applichiamo sui denti gel al fluoro che prevengono la carie. Il metodo è del tutto indolore per il bambino.",
            "Spieghiamo ai genitori quanto è importante curare i denti da latte, per evitare problemi futuri ai denti permanenti e anomalie ortodontiche dovute alla perdita troppo precoce dei denti da latte. Sigilliamo i denti permanenti giovani perché non vi si formi la carie per lungo tempo. La sigillatura non richiede di limare il dente.",
            "Quando un dente va trapanato per togliere la carie, usiamo metodi di anestesia indolori. Prima spalmiamo un gel anestetico sul punto dell'iniezione, così la puntura dell'ago non fa male.",
            "Con l'approccio multidisciplinare dei nostri specialisti, il dott. Dario Repić e la dott.ssa Slavica Pejda Repić, specialista in ortodonzia, offriamo a Lei e a Suo figlio i consigli migliori e la cura più adatta. Poiché durante la crescita e lo sviluppo del bambino dedichiamo particolare attenzione alla prevenzione, preveniamo alcune anomalie ortodontiche ed esperienze spiacevoli dal dentista.",
            "Per una cura ben riuscita, i piccoli pazienti ricevono in premio un diploma di coraggio o un attestato di lode.",
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
