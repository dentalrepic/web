import type { Translation } from "../types";

/**
 * Croatian translations (default locale).
 *
 * Copy is taken from the clinic's existing site, dentalrepic.com.hr.
 */
export const hr: Translation = {
  brand: {
    name: "Dental Centar Repić",
    tagline: "Brinemo za vaš savršen osmijeh",
    logoAlt: "Dental Centar Repić",
  },

  nav: {
    links: [
      { label: "Početna", href: "/", icon: "home" },
      { label: "O nama", href: "/about", icon: "info" },
      { label: "Usluge", href: "/services", icon: "clipboard" },
      { label: "Dentalni turizam", href: "/dental-tourism", icon: "star" },
      { label: "Informacije", href: "/info", icon: "book" },
    ],
    cta: { label: "Rezervirajte termin", href: "/contact" },
    languageLabel: "Jezik",
    menuLabel: "Otvori izbornik",
  },

  footer: {
    description:
      "Očuvanje oralnog zdravlja, funkcije i estetike temelj su našeg rada s pacijentima. Svakom pacijentu pristupamo individualno, pratimo napredak tehnologije i u svakom trenutku nastojimo svojim pacijentima omogućiti najbolju moguću uslugu. Konstantno ulažemo u novu opremu kao i u stručnu edukaciju našeg tima.",
    servicesHeading: "Usluge",
    rightsReserved: "Sva prava pridržana",
  },

  common: {
    learnMore: "Saznajte više",
    readMore: "Pročitajte više",
    readLess: "Prikaži manje",
    callUsToday: "Nazovite nas već danas!",
    bookAppointment: "Rezervirajte termin",
  },

  home: {
    meta: {
      title: "Dental Centar Repić | Stomatologija u Trogiru",
      description:
        "Dental Centar Repić u Trogiru: implantologija, ortodoncija, endodoncija, protetika i estetska dentalna medicina. Besplatan prvi pregled. Nazovite +385 21 796 241.",
    },
    hero: {
      title: "Vrhunska dentalna rješenja",
      subtitleLine1: "Rješenje za sve vaše dentalne potrebe",
      subtitleLine2: "na jednom mjestu.",
      ctaPrimary: "Rezervirajte termin",
      ctaSecondary: "Naše usluge",
      imageAlt: "Ordinacija Dental Centra Repić",
    },
    welcome: {
      eyebrow: "Dobrodošli na naše web stranice",
      heading: "Brinemo za vaš savršen osmijeh",
      intro:
        "Visoko educirano osoblje (specijalisti iz stomatoloških područja, doktori znanosti), interdisciplinarni pristup i ugodan ambijent je ono što Dental Centar Repić čini pravim izborom za Vas. Garantiramo Vam stručan pristup, visokokvalitetnu uslugu i upotrebu najmodernijih materijala. Želimo da se u našem centru osjećate ugodno, a mi ćemo svojim znanjem, stručnošću i iskustvom opravdati Vaše povjerenje.",
      highlights: [
        {
          title: "Oprema najviše kvalitete",
          description:
            "Koristimo najkvalitetnije materijale renomiranih svjetskih proizvođača",
        },
        {
          title: "Prostrane i opremljene ordinacije",
          description:
            "Pored vrhunskog tretmana, brinemo da se u našim ordinacijama osjećate ugodno",
        },
        {
          title: "Prijateljsko i stručno osoblje",
          description:
            "Doktori i medicinsko osoblje su Vam uvijek na raspolaganju",
        },
      ],
      link: "Saznajte više o nama",
      imageAlt: "Tim Dental Centra Repić",
    },
    servicesIntro: {
      eyebrow: "Stručnost i profesionalnost",
      heading: "Kompletna dentalna usluga",
      description:
        "Sve naše usluge i tretmane pružamo u moderno opremljenom prostoru, prema profesionalnim pravilima struke, kako bi se naši pacijenti osjećali ugodno i bili zadovoljni uslugom.",
      services: [
        {
          title: "Dentalni implantati",
          summary:
            "Trajno riješite problem nedostatka zuba i povratite funkciju zuba.",
        },
        {
          title: "Ortodoncija (aparatići za zube)",
          summary:
            "Ostvarite svoj san o prekrasnom osmijehu uz naše vrhunske doktore ortodonte.",
        },
        {
          title: "Estetska dentalna medicina",
          summary:
            "Osigurajte osmijeh kakav ste oduvijek željeli i uživajte u novostečenom samopouzdanju.",
        },
      ],
    },
    whyUs: {
      heading: "Zašto odabrati Dental Centar Repić",
      subheading:
        "Od besplatnog prvog pregleda do vrhunske opreme — sve na jednom mjestu, u srcu Dalmacije.",
      reasons: [
        "Besplatan prvi pregled",
        "Prijateljsko osoblje",
        "Prostrane ordinacije",
        "Vrhunski doktori",
        "Prilagođeno obiteljima",
        "Pristupačna lokacija",
        "Bez čekanja",
        "Garancija kvalitete",
        "Prilagođeno osobama s invaliditetom",
        "Moderna oprema",
        "Vrhunski materijali",
        "RTG dijagnostika",
      ],
      imageAlt: "Moderna oprema u ordinaciji",
    },
    problems: {
      heading: "Imamo rješenja za Vaše dentalne probleme",
      items: [
        {
          title: "Nedostatak zuba",
          description:
            "Ponosno se nasmijte, s našim protetskim i implantološkim rješenjima vraćamo Vam osmijeh na lice, kao i pravilnu funkciju zuba.",
        },
        {
          title: "Zubobolja",
          description:
            "Zubobolja može biti uzrokovana različitim faktorima. Detaljnim dentalnim pregledom odlučujemo o primjerenoj terapiji i liječenju.",
        },
        {
          title: "Strah od zubara",
          description:
            "Uspješno otklanjamo strah od zubara. Poseban naglasak stavljamo na rad s djecom, kako bi se od prvog posjeta osjećala ugodno.",
        },
        {
          title: "Slomljeni / otkrhnuti zubi",
          description:
            "Liječimo slomljene i otkrhnute zube zubnim krunicama ili drugim zahvatima.",
        },
        {
          title: "Parodontitis",
          description:
            "Nudimo kompletnu parodontološku uslugu, individualno prilagođenu potrebama svakog pacijenta.",
        },
        {
          title: "Nejednaki / razmaknuti zubi",
          description:
            "Specijalizirani smo za široku paletu ortodontoloških usluga koje će Vam donijeti savršeni osmijeh o kojem ste oduvijek sanjali.",
        },
        {
          title: "Karijes i propadanje zubi",
          description:
            "Koristimo modernu tehnologiju kako bismo detektirali bolesti u najranijem stadiju, te kako bismo osigurali pravovremeno liječenje i očuvanje vaših zubi.",
        },
        {
          title: "Mrlje na zubima / diskoloracija",
          description:
            "Naša usluga izbjeljivanja zubi osigurava Vam bijele zube kakve ste oduvijek željeli.",
        },
      ],
    },
    faq: {
      eyebrow: "ČPP",
      heading: "Često postavljana pitanja",
      viewAll: "Prikaži sva pitanja",
    },
    cta: {
      heading: "Rezervirajte svoj termin ili se naručite za besplatni pregled",
      text: "Ispunite formu ili nas nazovite — kontaktirat ćemo Vas unutar našeg radnog vremena.",
      button: "Naručite se",
    },
  },

  about: {
    meta: {
      title: "O nama - Naš tim | Dental Centar Repić",
      description:
        "Upoznajte tim Dental Centra Repić u Trogiru: specijalisti ortodoncije, endodoncije i restaurativne stomatologije s doktoratima znanosti.",
    },
    hero: {
      title: "O NAMA",
      description:
        "Visoko educirano osoblje, interdisciplinarni pristup i ugodan ambijent je ono što Dental Centar Repić čini pravim izborom za Vas. <br /> Garantiramo Vam stručan pristup, visokokvalitetnu uslugu i upotrebu najmodernijih materijala.",
    },
    team: {
      heading: "Upoznajte naš tim",
      subheading:
        "Stručni i nagrađivani doktori te profesionalno i ljubazno medicinsko osoblje",
      members: [
        {
          name: "Dr. sc. Slavica Pejda Repić",
          role: "Dr. med. dent., specijalist ortodoncije",
        },
        {
          name: "Dr. sc. Dario Repić",
          role: "Dr. med. dent., specijalist endodoncije i restaurativne stomatologije",
        },
      ],
    },
    approach: {
      heading: "Naš pristup pacijentima",
      paragraphs: [
        "Očuvanje oralnog zdravlja, funkcije i estetike temelj su našeg rada s pacijentima. Svakom pacijentu pristupamo individualno, pratimo napredak tehnologije i u svakom trenutku nastojimo svojim pacijentima omogućiti najbolju moguću uslugu.",
        "Konstantno ulažemo u novu opremu kao i u stručnu edukaciju našeg tima. Sve naše usluge i tretmane pružamo u moderno opremljenom prostoru, prema profesionalnim pravilima struke, kako bi se naši pacijenti osjećali ugodno i bili zadovoljni uslugom.",
      ],
      imageAlt: "Ordinacija Dental Centra Repić",
    },
    testimonials: {
      heading: "Iskustva naših pacijenata",
      items: [
        {
          quote:
            "Dental centar Repić je jedna od rijetkih zubarskih ordinacija gdje je usluga uvijek na razini. Osoblje je profesionalno i pažljivo, ali također vedro i nasmijano. Osobno sam popravio par zubiju i ugradio implantat prije 3 godine i mogu reći da sam i dalje zadovoljan s učinjenim.",
          author: "Toni Vešović",
        },
        {
          quote:
            "Osim saniranja zubnih kvarova, uspješno uklanjaju strah od zubara.",
          author: "Zorana Barada",
        },
        {
          quote:
            "Odlični doktori, stručni i profesionalni. Sve pohvale i na rad s djecom.",
          author: "Joško Herceg",
        },
      ],
    },
    cta: {
      heading: "Obratite nam se s povjerenjem",
      subheading:
        "Prvi pregled je besplatan. Rezervirajte termin i razgovarajmo o tome kako Vam možemo pomoći.",
      primaryButton: "Rezervirajte termin",
      secondaryButton: "Pogledajte naše usluge",
    },
  },

  services: {
    meta: {
      title: "Usluge - Kompletna dentalna usluga | Dental Centar Repić",
      description:
        "Implantologija, ortodoncija, endodoncija, dentalna protetika, estetska dentalna medicina, oralna kirurgija, parodontologija, RTG dijagnostika i dječja dentalna medicina.",
    },
    hero: {
      title: "NAŠE USLUGE",
      description:
        "Sve naše usluge i tretmane pružamo u moderno opremljenom prostoru, prema profesionalnim pravilima struke, kako bi se naši pacijenti osjećali ugodno i bili zadovoljni uslugom.",
    },
    intro: {
      heading: "Kompletna dentalna usluga",
      paragraph:
        "Od implantologije i ortodoncije do estetske dentalne medicine — pružamo rješenje za sve Vaše dentalne potrebe na jednom mjestu, uz stručan pristup i najmodernije materijale.",
    },
    groups: [
      {
        title: "Implantologija i protetika",
        items: [
          "Zubni implantati",
          "Dentalna protetika",
          "Zubne krunice i mostovi",
          "Oralno-protetska rehabilitacija",
        ],
      },
      {
        title: "Ortodoncija",
        items: [
          "Aparatići za zube",
          "Fiksni ortodontski aparati",
          "Mobilni ortodontski aparati",
          "Liječenje nejednakih i razmaknutih zubi",
        ],
      },
      {
        title: "Endodoncija i restaurativna stomatologija",
        items: [
          "Liječenje zubnih kanala",
          "Liječenje upale zuba",
          "Liječenje karijesa",
          "Restauracija slomljenih i otkrhnutih zubi",
        ],
      },
      {
        title: "Estetska dentalna medicina",
        items: [
          "Izbjeljivanje zubi",
          "Keramičke ljuskice",
          "Smile Design",
          "Zubni nakit",
          "Pjeskarenje zuba",
        ],
      },
      {
        title: "Oralna kirurgija i parodontologija",
        items: [
          "Oralna kirurgija",
          "Parodontologija",
          "Kirurško vađenje zuba",
          "Liječenje parodontitisa",
        ],
      },
      {
        title: "Dijagnostika i dječja stomatologija",
        items: [
          "RTG dijagnostika",
          "Dječja dentalna medicina",
          "Besplatan prvi pregled",
          "Preventivni pregledi",
        ],
      },
    ],
    detailsHeading: "Pojedine usluge",
    equipment: {
      heading: "Oprema i materijali",
      paragraph:
        "Koristimo najkvalitetnije materijale renomiranih svjetskih proizvođača i konstantno ulažemo u novu opremu, kako bismo bolesti detektirali u najranijem stadiju i osigurali pravovremeno liječenje.",
      features: [
        {
          title: "Vrhunski materijali",
          description:
            "Materijali renomiranih svjetskih proizvođača u svakom tretmanu",
        },
        {
          title: "RTG dijagnostika",
          description:
            "Moderna tehnologija za rano otkrivanje i precizno planiranje terapije",
        },
        {
          title: "Stalna edukacija",
          description:
            "Konstantno ulaganje u stručnu edukaciju cijelog našeg tima",
        },
      ],
      imageAlt: "Moderna dentalna oprema",
    },
    cta: {
      heading: "Ne vidite uslugu koju tražite?",
      subheading:
        "Nazovite nas ili rezervirajte termin — dogovorit ćemo pregled i predložiti najbolju terapiju za Vas.",
      primaryButton: "Rezervirajte termin",
      secondaryButton: "Dentalni turizam",
    },
  },

  tourism: {
    meta: {
      title: "Dentalni turizam u Trogiru | Dental Centar Repić",
      description:
        "Spojite odmor u Dalmaciji i vrhunsku dentalnu uslugu. Cijene do 5 puta niže od standardnih europskih. Dental Centar Repić, Trogir.",
    },
    hero: {
      title: "DENTALNI TURIZAM",
      description:
        "Spojite turistički posjet Dalmaciji i vrhunsku dentalnu uslugu. <br /> Atraktivan položaj u neposrednoj blizini stare gradske jezgre Unescova grada Trogira.",
    },
    intro: {
      heading: "Spojite ugodno i korisno",
      paragraphs: [
        "Atraktivni položaj Dental Centra Repić u neposrednoj blizini stare gradske jezgre Unescova grada Trogira idealna je opcija za dolazak inozemnih pacijenata koji bi spojili ugodno i korisno: ugodan odmor i kvalitetnu i povoljnu dentalnu uslugu.",
        "Dragim gostima, osim ugodnog boravka u srcu Dalmacije, nastojimo omogućiti kvalitetnu i dobro organiziranu stomatološku uslugu. Spremni smo omogućiti Vam potpunu oralno-protetsku rehabilitaciju u skladu s Vašim planiranim boravkom u našem gradu.",
        "Cijene naših usluga su i do 5 puta niže od standardnih europskih cijena, a naš tim će Vam rado pomoći u organizaciji dolaska i boravka u Trogiru.",
      ],
    },
    benefits: {
      heading: "Zašto Trogir",
      items: [
        {
          title: "Do 5 puta niže cijene",
          description:
            "Cijene naših usluga i do 5 puta su niže od standardnih europskih cijena",
        },
        {
          title: "UNESCO grad Trogir",
          description:
            "Ordinacija se nalazi u neposrednoj blizini stare gradske jezgre Trogira",
        },
        {
          title: "Pomoć u organizaciji",
          description:
            "Naš tim rado pomaže u organizaciji Vašeg dolaska i boravka u Trogiru",
        },
        {
          title: "Terapija po Vašoj mjeri",
          description:
            "Potpunu rehabilitaciju planiramo u skladu s trajanjem Vašeg boravka",
        },
      ],
    },
    howItWorks: {
      heading: "Kako to funkcionira",
      steps: [
        {
          title: "1. Kontaktirajte nas",
          description:
            "Pošaljite nam upit s opisom stanja i planiranim datumima boravka",
        },
        {
          title: "2. Plan terapije",
          description:
            "Predlažemo plan terapije i raspored posjeta prilagođen Vašem boravku",
        },
        {
          title: "3. Dolazak i tretman",
          description:
            "Provodimo terapiju u dogovorenim terminima, uz vrijeme za odmor i razgledavanje",
        },
        {
          title: "4. Kontrola i praćenje",
          description:
            "Nakon završetka terapije ostajemo Vam na raspolaganju za kontrolu i savjete",
        },
      ],
    },
    cta: {
      heading: "Planirate posjet Dalmaciji?",
      subheading:
        "Pošaljite nam upit s planiranim datumima i pripremit ćemo plan terapije prilagođen Vašem boravku.",
      primaryButton: "Pošaljite upit",
      secondaryButton: "Pogledajte usluge",
    },
  },

  contact: {
    meta: {
      title: "Kontakt - Rezervirajte termin | Dental Centar Repić",
      description:
        "Dental Centar Repić, Rimski put 3J, 21220 Trogir. Telefon +385 21 796 241, e-pošta info@dentalrepic.com. Radnim danom 8:00 - 20:00.",
    },
    hero: {
      title: "KONTAKT",
      description:
        "Obratite nam se s povjerenjem. Ispunite formu ili nas nazovite i dogovorite termin — prvi pregled je besplatan.",
    },
    intro:
      "Ispunite formu ispod i kontaktirat ćemo Vas u najkraćem mogućem roku, unutar našeg radnog vremena. Prvi pregled je besplatan.",
    addressHeading: "Naša adresa",
    contactHeading: "Kontakt",
    phoneLabel: "Telefon",
    emailLabel: "E-pošta",
    urgentNotice:
      "Ukoliko trebate hitnu intervenciju, molimo nazovite +385 21 796 241.",
    form: {
      heading: "Rezervirajte termin",
      description:
        "Ispunite formu ispod i kontaktirat ćemo Vas unutar našeg radnog vremena.",
      nameLabel: "Ime i prezime",
      namePlaceholder: "Vaše ime i prezime",
      emailLabel: "E-pošta",
      emailPlaceholder: "Vaša adresa e-pošte",
      phoneLabel: "Broj telefona",
      phonePlaceholder: "Vaš broj telefona",
      reasonLabel: "Razlog dolaska",
      reasonOptions: [
        "Prvi dolazak - besplatni pregled",
        "Implantati",
        "Aparatići",
        "Krunice i mostovi",
        "Estetska dentalna medicina",
        "Upala zuba",
        "Drugo",
      ],
      preferredTimeLabel: "Vrijeme dolaska",
      preferredTimeOptions: [
        "Bilo koje vrijeme",
        "08:00 - 11:00",
        "11:00 - 14:00",
        "14:00 - 16:00",
      ],
      messageLabel: "Napomena",
      messagePlaceholder: "Opišite ukratko razlog dolaska...",
      submit: "Pošalji",
      submitting: "Šaljem...",
      successMessage:
        "Hvala Vam! Zaprimili smo Vaš upit i kontaktirat ćemo Vas unutar radnog vremena.",
      errorMessage:
        "Slanje nije uspjelo. Molimo pokušajte ponovno ili nas nazovite na +385 21 796 241.",
    },
    mapTitle: "Karta s lokacijom Dental Centra Repić u Trogiru",
  },

  info: {
    meta: {
      title: "ČPP - Često postavljana pitanja | Dental Centar Repić",
      description:
        "Odgovori na česta pitanja o besplatnom prvom pregledu, implantatima, aparatićima, strahu od zubara i dentalnom turizmu u Trogiru.",
    },
    hero: {
      title: "ČESTO POSTAVLJANA PITANJA",
      description:
        "Jasni odgovori o našim uslugama, terminima i tretmanima — kako biste mogli donijeti sigurne odluke za sebe ili svoje najbliže.",
    },
    heading: "Često postavljana pitanja",
    cta: {
      heading: "Još imate pitanja?",
      subheading:
        "Naš tim rado će odgovoriti na sva dodatna pitanja. Nazovite nas ili nam pošaljite upit.",
      primaryButton: "Kontaktirajte nas",
    },
  },

  notFound: {
    meta: {
      title: "Stranica nije pronađena - Dental Centar Repić",
      description: "Stranicu koju tražite nije bilo moguće pronaći.",
    },
    heading: "Stranica nije pronađena",
    description:
      "Nažalost, nismo mogli pronaći stranicu koju tražite. Stranica je možda premještena ili ne postoji.",
    backHome: "Povratak na početnu",
    contactUs: "Kontaktirajte nas",
    lookingForLabel: "Možda tražite:",
  },

  serviceDetails: {
    implantologija: {
      slug: "implantologija",
      meta: {
        title: "Implantologija - zubni implantati | Dental Centar Repić",
        description:
          "Zubni implantati kao trajno rješenje za gubitak zuba. Augmentacija kosti, sinus lift i All-on-4 metoda u Dental Centru Repić u Trogiru.",
      },
      eyebrow: "ŠTO SU ZUBNI IMPLANTATI",
      title: "Implantologija",
      lead:
        "Zubni implantati predstavljaju uobičajeni zahvat kojim se nadomiještaju izgubljeni zubi bez zahvata na susjednim zubima.",
      sections: [
        {
          paragraphs: [
            "Zubnim implantatima nadomještamo gubitak jednog ili više zuba u gornjoj ili donjoj čeljusti. Ugrađeni zubni implantati predstavljaju zamjenu korijena zuba te kroz 3 – 6 mjeseci prolaze proces osteointegracije (učvršćivanje unutar kosti). Za vrijeme trajanja oseointegracije implantata, pacijent nije bezub već nosi privremeni nadomjestak koji osigurava estetiku i funkciju do izrade konačnog protetskog rada. Konačni protetski rad može biti pojedinačna krunica na implantatu, most na implantatima ili proteza na implantatima. Ugradnja implantata u kost pomaže u očuvanju količine kosti tj. alveolarnog grebena jer stimulira kost slično prirodnom zubu te ne dolazi do resorpcije kosti, što je inače posljedica gubitka zuba.",
          ],
          bullets: [
            "Trajno rješenje",
            "Potpuni povratak funkcije zuba",
            "Prirodan i lijep izgled zuba",
            "Poboljšan izgled cijelog lica",
            "Prevencija gubitka kosti",
            "Normalno održavanje",
          ],
        },
        {
          heading: "Kada preporučamo implantate",
          paragraphs: [
            "U slučajevima gubitka pojedinačnih zuba u čeljustima gdje su susjedni zubi zdravi, preporučamo postavljanje implantata kako bi izbjegli brušenje zdravih susjednih zuba. Na takav implantat tada se stavlja krunica.",
            "Nosioci potpunih zubnih proteza često su suočeni s problemom neodgovarajućeg prijanjanja proteza što se može riješiti izradom proteza na implantatima. Za retenciju gornje pokrovne proteze u potpuno bezuboj čeljusti obično su dovoljna četiri implantata, dok su za retenciju donje pokrovne proteze u potpuno bezuboj čeljusti obično dovoljna dva implantata. Proteze retinirane implantatima pridonose većem zadovoljstvu pacijenata u usporedbi s konvencionalnim protezama. Takve proteze imaju bolju estetiku, stabilnost i mogućnost žvakanja, manje ograničenje funkcije, olakšano je čišćenje proteze i govor.",
            "Implantate je moguće opteretiti imedijatno (odmah nakon stavljanja) ili konvencionalno (nakon perioda oseointegracije). Istraživanja su pokazala kako konvencionalno opterećenje implantata pokazuje nešto bolju stopu preživljenja implantata u ustima. Implantati koje koristimo u svakodnevnom radu su izrađeni od visoko kvalitetnog i otpornog, biokompatibilnog titana, a sam zahvat postavljanja implantata je u potpunosti bezbolan uz korištenje lokalne anestezije. Preduvjet za postavljanje implantata je odgovarajuća količina i kvaliteta kosti, što se provjerava rentgenskom panoramskom snimkom i CT-om prije planiranja terapije. U slučaju smanjene količine kosti, na raspolaganju su augmentacija kosti i postupak podizanja dna sinusa (sinus-lifting).",
          ],
        },
        {
          heading: "Što je augmentacija kosti?",
          paragraphs: [
            "Gubitkom zuba dolazi do atrofije kosti koja više nije stimulirana žvačnim opterećenjem preko korijena zuba. Volumen kosti se smanjuje te nema dovoljno prostora za postavljanje implantata. Resorpcija kosti je brža ako su izvađeni zubi koji su bili na tom mjestu imali upalne procese oko korijena jer je tada infekcija dodatno uništila kost. Svaki implantat oko sebe mora imati dovoljnu količinu kosti koja ga podupire i stabilizira te sprječava povlačenje zubnog mesa oko implantata i kasnije estetske probleme, kao što je prosijavanje implantata kroz sluznicu.",
            "Augmentacija kosti je kirurški zahvat kojim se nadomješta izgubljena kost. Za nadomještanje volumena kosti može se koristiti umjetno proizvedena kost sintetičkog ili životinjskog podrijetla ili vlastita kost (autologna kost) koja se u tom slučaju uzima s intraoralnih (donja čeljust) ili ekstraoralnih (npr. kuk) lokalizacija, usitnjava i ugrađuje na mjesto gdje je nema. Korištenje vlastite kosti predstavlja zlatni standard u augmentaciji kosti, s obzirom da takva kost ima najbolji potencijal za ugradnju i povećanje volumena. U tom slučaju potrebno je kirurški uzeti dovoljnu količinu kosti za ugradnju na mjesto defekta. Za nadomještanje malih i srednje velikih defekata kosti uglavnom se primjenjuje umjetno proizvedena kost sintetičkog ili životinjskog podrijetla. O metodi ugradnje kosti odlučuje specijalist oralni kirurg.",
            "Cijeljenje kosti i mekih tkiva nakon augmentacije može biti uspješnije uz unošenje pacijentovih vlastitih faktora rasta metodom PRF (trombocitima obogaćenog fibrina) ili stavljanjem biomembrane za stabilizaciju ugruška i koštanog nadomjestka. PRF metoda temelji se na izoliranju trombocitima obogaćenog fibrina iz pacijentove krvi te unošenja tog ekstrakta u operacijsko područje. Na ovaj način iz trombocita oslobađaju se faktori rasta koji potiču stvaranje novih krvnih žila i rast nove kosti. Metoda je bezopasna s obzirom da se unosi samo filtrirana pacijentova krv koja pospješuje cijeljenje. Ugrađeni materijali postupno se resorbiraju te dolazi do remodelacijom kosti i stvaranja nove čvrste koštane mase. Augmentacija kosti radi se u lokalnoj anesteziji te je u potpunosti bezbolna. Nakon zahvata potrebno je pričekati period sraštavanja kosti (otprilike osam mjeseci) da bi se nastavilo s ugradnjom implantata.",
          ],
        },
        {
          heading: "Što je sinus lift?",
          paragraphs: [
            "U slučajevima nedostatka kosti u bočnim dijelovima gornje čeljusti indicirano je podizanje dna maksilarnog sinusa (sinus lift).To je oralno-kirurški zahvat prilikom kojeg se podizanje dna sinusa kombinira s augmentacijom kosti kako bi se osiguralo dovoljno ležišta za implantate. Sinus lift se radi u lokalnoj anesteziji tako da je u potpunosti bezbolan.",
            "Ovisno o veličini zahvata, razlikujemo mali ili veliki sinus lift. U slučaju da nam za stavljanje implantata nedostaje samo otprilike 2 mm kosti, radi se mali sinus lift kada se istovremeno s podizanjem dna maksilarnog sinusa i augmentacijom kosti ugrađuju i implantati. Zahvat se radi tehnikom osteotoma, a dobila je naziv po instrumentu kojim se odiže membranu maksilarnog sinusa. Nakon zahvata malog sinus lifta potrebno je čekati kroz period oseointegracije da dođe do srastanja implantata s kosti (oko šest mjeseci), a tek potom protetski opteretiti implantat (krunica, most).",
            "Veliki sinus lift radi se kada nedostaje veći volumen kosti, a izvodi se tzv. bočnim pristupom. Ponekad je i tu moguća istovremena ugradnja implantata, no ako nedostaje puno kosti, preporuča se sinus lift s odgođenom implantacijom. Tada između sinus lifta i stavljanja implantata mora proći 6-8 mjeseci, inače postoji opasnost od komplikacija i neuspjeha zahvata. Specijalist oralni kirurg na temelju svog iskustva i Vaših nalaza donosi odluku o vrsti zahvata koja je Vama potrebna.",
          ],
        },
        {
          heading: "Koje su moguće komplikacije kod sinus lifta?",
          paragraphs: [
            "Sinus lift ima visoku uspješnost te komplikacije nisu česte prilikom ovog zahvata, ali su moguće. Komplikacije mogu nastati prilikom izvođenja sinus lifta ili nakon zahvata. Prilikom izvođenja podizanja dna sinusa moguće je puknuće membrane maksilarnog sinusa. Naime, debljina membrane sinusa razlikuje se od pacijenta do pacijenta. Ukoliko dođe do pucanja, oralni kirurg će različitim tehnikama sanirati defekt i spriječiti kasniju komplikaciju kao što je upala sinusa nakon ulaska materijala za nadomještanje kosti u sinus.",
            "Nakon sinus lifta moguće je lagano oticanje koje nestaje nakon nekoliko dana. Također je moguća upala sinusa zbog različitih uzroka, kao npr. prodora infekcije iz usne šupljine, prodora implantata ili koštanog materijala kroz membranu, ili izvođenja zahvata na bolesnom sinusu. Preduvjet za izvođenje sinus lifta su zdravi sinusi, a ako pacijent od ranije ima neku bolest sinusa, potrebna je konzultacija s otorinolaringologom prije zahvata.",
          ],
        },
        {
          heading: "All-on-4",
          paragraphs: [
            "\"All-on-4\" iliti \"sve na četiri (implantata)\" je izraz koji označava određeni oblik implantoprotetske rehabilitacije potpuno bezube donje ili gornje čeljusti. \"All-on-4\" metoda nije nova već je godinama dobro poznata i uspješna u kliničkoj primjeni. Naime, nakon vađenja zuba s vremenom dolazi do gubitka kosti čeljusti. Ako je sačuvano dovoljno kosti, preporuča se ugradnja većeg broja implantata jer je tada veći i broj nosača protetskog rada, no kod pojedinih pacijenata zbog premale količine ili lošije kvalitete kosti moguće je staviti samo manji broj implantata koji će nositi protetski rad. Ako je klijent prikladan kandidat za \"All-on-4\" metodu, u bezubu čeljust ugrađuju se samo četiri implantata (dva aksijalna implantata i dva nakošena implantata o čemu vodi računa oralni kirurg prilikom njihova postavljanja) i oni nose fiksni protetski rad.",
            "Nakon postavljanja implantata u čeljust, već isti dan ili najkasnije nakon nekoliko dana klijent dobiva najprije privremeni fiksni protetski rad, a potom za tri mjeseca i trajni fiksni protetski rad. Na taj način period bezubosti smanjen je na minimum što pridonosi većem zadovoljstvu klijenata. Ovo je moguće zbog koncepta imedijatnog (neposrednog) opterećenja implantata u trenutku postavljanja u kost, prilikom čega nije potrebno čekati da prođe razdoblje oseointegracije do opterećenja implantata. Metoda \"All-on-4\" ima brojne prednosti: izbjegavaju se kirurški zahvati podizanja dna sinusa i augmentacije kosti u gornjoj čeljusti što skraćuje vrijeme oporavka od zahvata i cijenu zahvata; klijentima koji su dugo bezubi i imaju malu preostalu količinu kosti moguće je napraviti fiksni protetski rad; ugrađuju se samo četiri implantata koji pridonose stabilnosti rada u ustima tako da ga klijent osjeća poput vlastitih zuba i nema straha od ispadanja i nestabilnosti u ustima kao npr. s potpunom protezom. Također, rad je pričvršćen vijcima te ga stomatolog može vrlo jednostavno skinuti, pregledati i popraviti ukoliko je to potrebno. Održavanje higijene ovakvih radova vrlo je lagano te se provodi uz pomoć četkice i paste te vodenog tuša ili zubnog konca oko implantata. Pravilnim održavanjem higijene oko implantata oni mogu trajati doživotno te se samo mijenja protetski rad, nakon njegove dotrajalosti.",
            "Cijena \"All-on-4\" metode je povoljnija od cijene ugradnje većeg broja implantata u čeljust i cijene dodatnih oralnokirurških postupaka te je na ovaj način izrada fiksnog protetskog rada na implantatima dostupna većem broju klijenata.",
          ],
        },
        {
          heading: "Upute nakon ugradnje implantata",
          paragraphs: [
            "Higijena rane: izbjegavajte žvakanje na mjestu operacije i ispiranje usne šupljine tijekom prvih 24 sata. Dan nakon operacije zube perite mekom četkicom, a ako Vam je propisan antiseptik (Curasept), ispirite usnu šupljinu 2-3 puta dnevno počevši dan nakon operacije. Izbjegavajte pušenje kako bi se osigurao neometan krvni protok i cijeljenje rane.",
            "Bolovi: prvu tabletu protiv bolova uzmite 30 minuta nakon kirurškog zahvata, dalje po potrebi. Izbjegavajte Aspirin, Andol i druge lijekove koji sadrže acetilsalicilnu kiselinu jer mogu produžiti krvarenje. Ako se bolovi ne smanjuju, nazovite nas.",
            "Krvarenje: manji znakovi krvarenja su normalni. Gaza postavljena nakon zahvata treba ostati pritisnuta na rani najmanje 20 do 30 minuta. Izbjegavajte ispiranje usne šupljine.",
            "Otok: moguća je pojava otoka nekoliko sati nakon zahvata. Hladite obraz hladnim oblozima naizmjenično, 20 minuta hlađenja i 10 minuta pauze, i spavajte na uzvišenom uzglavlju.",
            "Hrana i aktivnost: jedite što mekšu hranu i izbjegavajte vruću hranu. Izbjegavajte fizičku aktivnost i izlaganje jakom suncu 48 do 72 sata nakon zahvata.",
          ],
        },
      ],
      faqs: [
        {
          id: "implantologija-1",
          question: "Što je zubni implantat?",
          answer:
            "<p>Zubni implantat je vijak koji je izrađen od titana te svojim oblikom nalikuje na korijen zuba. Kiruškim postupkom se zubni implantat ugrađuje u kost gornje ili donje čeljusti na temelju predhodno napravljenog plana terapije. Dva do šest mjeseci nakon postavljanja implantata u kost na implantat se postavlja protetska nadogradnja, koja služi kao nosač za krunice, mostove ili proteze.</p>",
        },
        {
          id: "implantologija-2",
          question: "Kakav je postupak postavljanja implantata?",
          answer:
            "<ul><li>Prvi klinički pregled ukljucuje detaljan pregled i analizu postojećeg stanja zuba. Takoder, klinički pregled uključuje detaljnu analizu pregledne snimke čeljusti (ortopantomogram). Pri planiranju terapije nužno je uzeti u obzir klinički nalaz u ustima, želje i očekivanja pacijenta i njegove financijske mogućnosti. Na temelju navedenih cimbenika pacijentu se predlazu terapijske opcije lijecenja. Za potpuno razumijevanje terapijskih mogućnosti pacijentu prezentiramo situaciju kroz detaljnu analizu njegovih intraoralnih fotografija zuba te kroz demostracijske modele. Nakon prvog pregleda i odabira terapijske opcije pacijentu se prezentira detaljan protokol liječenja postojećeg stanja. Protokol sadrži vađenje zuba koji se ne mogu spasiti, čišćenje zubnog kamenca i poliranje zubi te sanaciju postojećih zuba. Ukoliko je potrebno, izrada privremenih protetskih nadomjestaka se radi isti dan tako da se pacijentu omogući normalna funkcija i estetika tijekom postupka sanacije. Ukoliko kliničko stanje zahtijeva detaljnu dijagnostiku preporučuje se precizna trodimenzionalna snimka (CT) dijela čeljusti gdje ce se stavljati implantati. CT snimka je potrebna kako bismo precizno odredili količinu i kvalitetu kosti te odredili najoptimalniju poziciju za postavljanje zubnog implantata. Klinički nalaz, ortopantomogram te CT snimak omogučuju nam donosenje detaljanog plana terapije koja uključuje odluku o broju i rasporedu implantata i eventualnoj potrebi za augmentacijom kosti.</li><li>Sljedeća faza je postavljanje zubnih implantata. Pacijent prolazi pripremu koja se sastoji od ispiranja usne šupljine antiseptikom i anestezije lokalnim anestetikom. Slijedi kiruško postavljanje implantata (rez, podizanje režnja, prikaz kostanog grebena, preparacija ležišta za implantat, uvrtanje implantata i šivanje reza, kontrolni rtg).Ističemo postavljanje zubnih implantata nije bolan proces. Nakon postavljanja zubnih implantata dobit ćete detaljne usmene i pisane upute kako bi se osiguralo uspješno cijeljene rane i uspješna osteintegracija (povezivanje implantata sa kosti).Skidanje šavova slijedi nakon sedam dana.</li><li>Ovisno o kliničkoj situaciji sljedeci posjet je dva do šest mjeseci nakon postavljanja zubnih implantata. Postupak uključuje otvaranje zubnih implantata te postavljanje određenih pričvrstaka koji služe za cijeljenje i oblikovanje gingive.</li><li>Nakon postavljanja pričvrstaka pristupa se uzimanju otisaka koji se potom šalju u dentalni laboratorij za izradu vaših protetskih nadomjestaka.</li><li>Sljedeća faza je proba protetskog rada i analiza protetskog rada sa pacijentom i zubnim tehničarem kako bi se uklonili eventualni nedostatci.</li><li>Završna faza je predaja proteskog rada!</li></ul>",
        },
        {
          id: "implantologija-3",
          question: "Koje su prednosti zubnih implantata u odnosu na druge protetske nadomjestke?",
          answer:
            "<p>Ukoliko vam nedostaje jedan ili više zuba te imate poteskoće prilikom žvakanja ili govora tad su zubni implantati rješenje za vas. Također ukoliko imate problema sa protezama koje ne prijanjaju ili su neudobne zubni implantati su prikladna terapijska mogućnost.</p>",
        },
        {
          id: "implantologija-4",
          question: "Jesu li zubni implantati sigurni?",
          answer:
            "<p>Postavljanje zubnih implantata te protetska rješenja na njima terapijski su izbor i sastavni dio kliničke prakse specijalističkih ordinacija sa potrebnom tehnologijom vec više od 40 godina. Primjenom visoko sofisticiranih i renomiranih sustava zubnih implantata u Dental Centru Repić omogučujemo vam pouzdane i dugoročne rezultate, kako s funkcijskog tako i sa estetskog stajališta.</p>",
        },
        {
          id: "implantologija-5",
          question: "Kakav je postotak uspješnog postavljanja implantata?",
          answer:
            "<p>Indikacije za postavljanje zubnih implantata odreduju se individualno prema kliničkom stanju svakog pacijenta te njegovom stupnju motiviranosti. Ukoliko je pravilno postavljena indikacija za postavljanje zubnih implantata, te uz dobro održavanje higijene usne šupljine, uspješnost implantološke terapije kreće se od 95% do 100%.</p>",
        },
      ],
    },
    ortodoncija: {
      slug: "ortodoncija",
      meta: {
        title: "Ortodoncija - aparatići za zube | Dental Centar Repić",
        description:
          "Fiksni i mobilni aparatići za zube. Ortodontski pregled, plan terapije i liječenje nepravilnog položaja zubi u Dental Centru Repić u Trogiru.",
      },
      eyebrow: "MOBILNI I FIKSNI APARATIĆI ZA ZUBE",
      title: "Ortodoncija",
      lead:
        "Ortodontska terapija (postavljanje aparatića za zube) indicirana je u slučajevima nepravilnog položaja i rasporeda zubi",
      sections: [
        {
          paragraphs: [
            "Pravilni kontakti među zubima omogućuju ravnomjernu raspodjelu žvačnih sila čime se omogućuje ispravan prijenos sila na parodont i kost. Također, pravilan raspored zubi olakšava održavanje oralne higijene. Zubi u nepravilnom položaju često su izloženi nakupljanju naslaga plaka koje ugrožavaju zdravlje zubi i parodontnog tkiva. Aparatići za zube su naprave koje koristimo kako bismo proveli ortodontsko liječenje.",
          ],
        },
        {
          heading: "Kako provodimo ortodontsko liječenje",
          paragraphs: [
            "Svakom pacijentu pristupamo individualno. Nakon detaljnog kliničkog pregleda, uvida u radiološke snimke te detaljne analize intraoralnih fotografija svakom pacijentu se predlaže plan liječenja. Zahvaljujući interdisciplinarnoj suradnji s dr.sc. Darijem Repićem, spec. endodoncije i restaurativne dentalne medicine u mogućnosti smo svakom pacijentu tijekom i nakon ortodontskog liječenja pruziti kompletnu stomatološku skrb.",
            "Svaki pacijent osim detaljnih informacija o stanju intraoralnog zdravlja dobiva sve potrebne pisane upute o funkciji i o odrzavanju ortodontskih naprava (aparatića za zube) kao i prikladan set za održavanje oralne higijene.",
          ],
        },
        {
          heading: "Protokol ortodontskog pregleda i plana terapije",
          paragraphs: [
            "Prvi ortodontski pregled sastoji se od kliničkog pregleda usne šupljine, zubi, zagriza, mekih tkiva te analize pregledne RTG snimke – ortopantomograma. Ukoliko nemate ortopan mozete ga napraviti kod nas u ordinaciji. U tu svrhu na raspologanju vam je digitalni RTG uređaj najnovije tehnologije s minimalnom dozom zračenja. Također u svrhu dijagnostike pristupa se uzimanju intraoralnih fotografija – dentalne fotografije s posebno prilagođenim fotoaparatom.",
            "Nakon inicijalne dijagnostike predlozit ćemo vam plan terapije koji ćemo usuglasiti s pacijentom, tj. sa roditeljima i samim djetetom.",
            "Nakon toga pristupa se uzimanju otiska za izradu studijskih modela kako bismo imali arhivirane podatke o početnom stanju zagriza prije ortodontske terapije tj. postavljanja aparatića za zube. Cijeli proces je u potpunosti transparentan, te se brinemo da ste u svakom trenutku svjesni troškova izrade i održavanja same ortodontske naprave (aparatića).",
          ],
        },
      ],
      faqs: [
        {
          id: "ortodoncija-1",
          question: "Što radi ortodont?",
          answer:
            "<p>Ortodont je specijalist koji postavlja dijagnozu i provodi terapiju nepravilnosti u rasporedu zuba ili u polozaju čeljusti. Također se bavi prevencijom nastanka ortodontskih nepravilnosti. U tu svrhu koristi različite ortodontske bravice i naprave.</p>",
        },
        {
          id: "ortodoncija-2",
          question: "Zašto mi je potreban ortodontski tretman?",
          answer:
            "<p>Postoje dva glavna razloga za ortodontski tretman: funkcija i estetika. S funkcijske strane ortodontsko liječenje poboljšava funkciju zuba i čeljusti kao cjeline te omogucava lakše odrzavanje oralne higijene. S estetske strane, lijep i atraktivan osmijeh pojačava izražajnost i upečatljivost lica, znatno pridonosi vašem samopouzdanju i pomaže ostavljanju boljeg prvog dojma.</p>",
        },
        {
          id: "ortodoncija-3",
          question: "Kada je pravo vrijeme za početak ortodonstkog liječenja?",
          answer:
            "<p>Za ortodontsko liječenje ne postoji vremensko ograničenje. Naravno, što se ortodontska anomalija uoči i liječi ranije, to je liječenje lakše. Američko udruženje ortodonata preporuča da se prvi ortodontski pregled napravi u dobi od 7 godina.</p>",
        },
        {
          id: "ortodoncija-4",
          question: "Kako mogu prepoznati ortodontsku anomaliju?",
          answer:
            "<p>Ako primijetite zbijenost ili razmake među zubima, nepravilan zagriz, isturenu gornju ili donju čeljust, ili se zubi ne spajaju pravilno pri zatvaranju usta, savjetujemo pregled kod specijalista ortodonta. Kod djece i navika poput sisanja prsta može dovesti do ortodontske anomalije.</p>",
        },
        {
          id: "ortodoncija-5",
          question: "Hoće li me boljeti postavljanje aparatića za zube?",
          answer:
            "<p>Postavljanje zubnog aparatića je bezbolno. Kod pojedinih pacijenata kroz nekoliko dana nakon postavljanja fiksnog aparatića za zube mogu se javiti manji znakovi boli ili pritiska. Također manji bolovi se mogu pojaviti nakon kontrolnih pregleda. Za ublažavanje tegoba preporuča se uzimanje analgetika.</p>",
        },
        {
          id: "ortodoncija-6",
          question: "Duljina trajanja ortodontske terapije",
          answer:
            "<p>Duljina ortodontske terapije je različita za svakog pacijenta. Općenito aktivno stanje (nošenje aparatića za zube) traje od 6 do 30 mjeseci. Nakon završene ortodonstke terapije nužno je nošenje \"retainera\" tijekom nekoliko mjeseci do godine dana ovisno o početnoj anomaliji.</p>",
        },
        {
          id: "ortodoncija-7",
          question: "Koliko često moram kod ortodonta na pregled?",
          answer:
            "<p>Ovisno o vrsti terapije kontrolni pregledi odvijaju se svakih 4 do 10 tjedana.</p>",
        },
        {
          id: "ortodoncija-8",
          question: "Hoću li morati vaditi zube?",
          answer:
            "<p>Ukoliko postoji jaka zbijenost ili je pojedini zub impaktiran (neizrastao i skriven u kosti) tada je vađenje zuba moguća opcija liječenja.</p>",
        },
        {
          id: "ortodoncija-9",
          question: "Hoću li moći svirati glazbeni instrument ili se baviti sportom?",
          answer:
            "<p>Da. Ortodontsko liječenje ne isključuje navedene aktivnosti. Naravno, ukoliko se bavite sportom preporuča se nošenje sportskog štitnika kako bi se spriječile ozljede usne šupljine i oštećenja aparatića za zube.</p>",
        },
        {
          id: "ortodoncija-10",
          question: "Hoću li morati posjećivati svog stomatologa?",
          answer:
            "<p>Naravno. Kontrolni pregledi kod svog stomatologa su iznimno bitni. Naime, aparatić za zube otežava čišćenje zubi pa je nakupljanje plaka olakšano a time i pojava karijesa. Vaš stomatolog će redovitim čišćenjem i pregledima spriječiti nastanak karijesa.</p>",
        },
        {
          id: "ortodoncija-11",
          question: "Hoću li nositi \"retainer \" kad skinem ortodontski aparat?",
          answer:
            "<p>Gotovo uvijek odgovor je DA. Nakon završene ortodontske terapije nužno je nošenje \"retainera\" tijekom nekoliko mjeseci do godine dana ovisno o početnoj anomaliji. U protivnom zubi se mogu relativno brzo vratiti u početno stanje i sav trud koji ste uložili Vi i Vaš ortodont biti će uzaludan. Ovisno o početnoj anomaliji određuje duljina nošenja retaniera.</p>",
        },
        {
          id: "ortodoncija-12",
          question: "Koliko sve to košta?",
          answer:
            "<p>Na prvom pregledu dobit ćete ponudu s cijenom ortodontske terapije. Cijena uključuje inicijalno čišćenje zubnog kamenca i poliranje, aktivne faze liječenja od početka do završetka terapije, postavljanje fiksnog aparata, kontrolne preglede, uklanjanje fiksnog aparata i prvi set retainera. Za prvi pregled potrebna je snimka cijele čeljusti (ortopantomogram); tu uslugu nudimo u našoj ustanovi i uključena je u cijenu terapije.</p><p>U terapiji koristimo metalne ili estetske bravice, ovisno o izboru pacijenta. Estetske bravice pružaju diskretniji izgled fiksnog aparata. Koristimo proizvode renomiranog proizvođača ortodontskog materijala American Orthodontics. Izgled i karakteristike pojedinih bravica pokazat ćemo Vam na pregledu.</p>",
        },
      ],
    },
    protetika: {
      slug: "protetika",
      meta: {
        title: "Dentalna protetika - zubne krunice i mostovi | Dental Centar Repić",
        description:
          "Zubne krunice i mostovi: metal-keramika, bezmetalna keramika, cirkon-oksidna keramika i staklokeramika. Dental Centar Repić, Trogir.",
      },
      eyebrow: "DENTALNA PROTETIKA",
      title: "Protetika",
      lead:
        "U Dental Centru Repić posebnu pažnju posvećujemo očuvanju funkcije zuba i stomatognatnog sustava",
      sections: [
        {
          paragraphs: [
            "Detaljnim kliničkim pregledom i analizom radioloških snimki zuba i čeljusti predlažemo svakom pacijentu individualni protetski plan terapije kako bismo nadomjestili izgubljeni zub ili više njih. Ovisno o kliničkom nalazu i financijskim mogućnostima pacijenta, izgubljene zube moguće je nadomjestiti mobilnim ili fiksnim protetskim nadomjestcima.",
            "Mobilni protetski radovi (zubne proteze) indicirani su kod pacijenata s potpunom ili djelomičnom bezubosti. Postoji nekoliko mogućnosti stabilizacije proteze u ustima, kao što su: kombinirani mobilno-fiksni radovi, teleskopske krunice ili proteze retinirane na implantatima.",
            "U fiksne protetske nadomjestke ubrajaju se ljuskice, zubne krunice, zubni mostovi i zubni mostovi na implantatima. Koristimo suvremene restaurativne materijale koji omogućuju ispunjavanje visokih estetskih i funkcijskih zahtjeva pacijenata.",
          ],
        },
        {
          heading: "Metal-keramičke zubne krunice i mostovi",
          paragraphs: [
            "Metal-keramičke zubne krunice ili mostovi imaju dugu povijest primjene u dentalnoj protetici i smatrani su svojevrsnim standardom u fiksno-protetskoj terapiji. Ova vrsta krunica ili mostova i danas je najčešći izbor pacijenata zbog pristupačne cijene i trajnosti materijala. Metalni kostur krunice ili mosta štiti zube nosače dok keramika estetikom oponaša izgubljene zube. Za metalnu bazu protetskog nadomjestka najčešće se koristi slitina od kobalta, kroma, nikla; dentalno zlato ili titan. Na metalnu bazu postupkom napečenja keramike nanosi se keramika u slojevima koja se kemijskim vezama veže za metal.",
            "Nakon dogovora s pacijentom i odluke o izradi krunice ili mosta, doktor dentalne medicine najprije mora izbrusiti zube nosače kako bi osigurao dovoljno prostora za protetski nadomjestak. Sljedeći korak je uzimanje otiska za izradu protetskog rada u laboratoriju. Tada se također odabire i odgovarajuća boja keramike koja će najprirodnije oponašati prirodne zube. Nakon izrade u laboratoriju i probe u stomatološkoj ordinaciji, zubna krunica ili most se u početku privremeno, a potom i trajno cementiraju na zub.",
            "Metal-keramički protetski nadomjestci prikladni su za nadomještanje jednog ili više izgubljenih zuba u prednjem ili stražnjem dijelu čeljusti. Uz pravilno postavljenu indikaciju, imaju odgovarajuća mehanička i estetska svojstva.",
            "Glavna prednost metal-keramičkih zubnih krunica i mostova je njihova cijena, mehanička izdržljivost i trajnost. Čak 90-95% metal-keramičkih nadomjestaka u ustima traje deset godina, prema podatcima iz literature. Cijenom su nešto povoljniji od potpuno keramičkih (bezmetalnih) nadomjestaka.",
            "Nedostatak metal-keramičkih zubnih krunica i mostova su ograničene estetske mogućnosti u usporedbi s potpuno keramičkim (bezmetalnim) sustavima. Uzrok tome je metalna baza tamno sive boje. Zbog boje metala ispod keramike koja ometa propuštanje svjetlosti, boja zuba može izgledati nedovoljno prirodno. Pacijenti se ponekad žale i na tamni rub gingive (zubnog mesa) uz rub zubne krunice. Naime, nakon određenog vremena dolazi do otpuštanja iona metala iz baze krunice koji potom ulaze u gingivu. Pažljiva preparacija (brušenje) zuba nosača može doprinijeti manjoj učestalosti javljanja ove nuspojave.",
          ],
        },
        {
          heading: "Potpuno keramičke zubne krunice i mostovi (bezmetalna keramika)",
          paragraphs: [
            "Zubne krunice i mostovi od potpune keramike su alternativa metal-keramičkim nadomjestcima. Nazivaju se još i tzv. \"porculanskim\" zubima. Estetski zahtjevi pacijenata u današnje vrijeme su sve veći i često ključni prilikom donošenja odluke o protetskoj restauraciji i nadomještanju izgubljenih zuba. Potpuno keramičke zubne krunice i mostovi savršeno oponašaju prirodan izgled zuba i u tome su superiorni u usporedbi s metal-keramikom. Za razliku od metal-keramičkih nadomjestaka gdje metalna baza ometa prodiranje i raspršivanje svjetla te time utječe na izgled boje zuba, krunice i mostovi od bezmetalne keramike imaju izvanrednu estetiku koja oponaša prirodan izgled zuba. Za pacijenta, postupak izrade potpuno keramičke krunice sličan je izradi metal-keramičke krunice: brušenje zuba (da bi stomatolog osigurao mjesto za nadomjestak) te uzimanje otiska koji se potom šalje u laboratorij. Istovremeno se određuje boja budućeg nadomjestka koja će najviše odgovarati pacijentovim željama i postojećim zubima. Nakon izrade, gotov rad se cementira (\"lijepi\") u ustima na izbrušene zube. Brušenje zuba prilikom preparacije za izradu ovakvih nadomjestaka je manjeg opsega te je moguće očuvati više zdravog zubnog tkiva. Kompjuterska izrada ovakvih krunica i mostova ima za posljedicu točno prianjanje uz izbrušeni rub zuba što olakšava čišćenje i smanjuje zadržavanje hrane i upalu desni.",
            "Tehnološki razvoj novih materijala omogućio je i odlična mehanička svojstva bezmetalne (potpune) keramike, bez narušavanja estetske funkcije. Po svojim mehaničkim svojstvima i trajnosti u ustima, potpuno keramičke zubne krunice i mostovi su usporedivi s metal-keramičkim sustavima. Prema podatcima iz literature, 91-97% nadomjestaka od bezmetalne keramike ima trajnost u ustima pet godina ili dulje.",
            "Protetski radovi od bezmetalne keramike mogu zamijeniti jedan ili više izgubljenih zuba. Novije materijale za potpuno keramičke fiksne protetske nadomjestke čine leucitno ojačana litij-disilikatna keramika, leucitno ili litij-disilikatno ojačana staklena keramika te oksidne keramike kao što su aluminij-oksidna keramika i cirkon-oksidna keramika. Cijena zubnih krunica i mostova od bezmetalne keramike je nešto viša od cijene metal-keramičkih nadomjestaka, zbog složenijeg postupka izrade u ordinaciji i laboratoriju.",
          ],
        },
        {
          heading: "Zubne krunice i mostovi od cirkon-oksidne keramike",
          paragraphs: [
            "Cirkon-oksidna keramika je vrsta bezmetalne keramike koja zbog izvanrednih estetskih i funkcijskih svojstava ima sve širu primjenu u stomatološkoj protetici, za izradu fiksnih protetskih nadomjestaka (krunica i mostova), u prednjem ili u stražnjem dijelu čeljusti. Pripada skupini oksidnih keramika koje imaju veliku lomnu žilavost, otpornost na trošenje i visoke temperature i korozijsku postojanost. Cirkon-oksid ima primjenu u medicini i stomatologiji preko 50 godina. Od ovog materijala izrađuju se glavice proteza za zglob kuka u ortopediji, dok se u stomatologiji, osim u protetici, koristi za izradu konfekcijskih kolčića, ortodontskih kvačica ili sidrišta implantata.",
            "Bazu krunice ili mosta čini cirkonijev dioksid na koji se napeče keramika. Bijele je boje te ne prosijava uz rubni dio nadomjestka. Cirkonijev dioksid je biokompatibilan materijal koji ne izaziva alergijske reakcije. Slabo provodi elektricitet i toplinu te na taj način doprinosi manjoj preosjetljivosti zuba. Brojne su kvalitete cirkon-oksidne keramike: vrhunska estetika; izvanredna čvrstoća; biokompatibilnost; manji opseg brušenja prirodnog zuba zbog velike čvrstoće materijala (debljina od samo 0,4 mm osigurava dovoljnu čvrstoću). Cirkon-oksidna keramika se zbog svoje velike čvrstoće i tvrdoće može izrađivati strojno iz tvornički izrađenih blokova. Zahvaljujući računalno potpomognutoj izradi nadomjestka, krunica ili most od cirkon-oksidne keramike precizno dosjedaju na izbrušeni rub zuba te je olakšano je održavanje oralne higijene i smanjena mogućnost nastanka upale gingive (zubnog mesa).",
            "Po svojim estetskim svojstvima, ova vrsta materijala je odličan izbor jer izvrsno oponaša prirodnu transparentnost i boju zuba, a visokom čvrstoćom parira čvrstoći najjačih metala. Mehanička svojstva cirkon-oksidne keramike usporediva su s metal-keramičkim nadomjestcima, dok istovremeno bolje oponaša prirodni izgled zuba. Konačna boja protetskog rada određena je debljinom keramike, debljinom i bojom cementa te bojom bataljka. Zbog velike čvrstoće, od ovog materijala moguće je raditi i vrlo tanke protetske nadomjestke (s debljinom osnovne konstrukcije od samo 0,3 mm u prednjem dijelu čeljusti i 0,6 mm u bočnom segmentu) tako da se zadrži translucenciju i estetika materijala. Prikladan je za primjenu i u prednjem i u stražnjem dijelu čeljusti te je njime moguće raditi i velike protetske restauracije koje nadomještaju veći broj izgubljenih zubi.",
            "Cijena cirkon keramičkih zubnih krunica i mostova je nešto viša od metal-keramičkih krunica i mostova, zbog složenijeg postupka izrade u ordinaciji i laboratoriju. Naime, brušenje, uzimanje otiska i cementiranje gotovog rada moraju biti vrlo precizni kako bi protetski nadomjestak (krunica ili most) točno prianjao uz izbrušeni zub.",
          ],
        },
        {
          heading: "Staklokeramika: E.max i Empress",
          paragraphs: [
            "Staklokeramika nastaje kontroliranom kristalizacijom stakla. Postoji nekoliko vrsta staklokeramike koje se razlikuju po svojim svojstvima, a to su: IPS Empres keramika (leucitima ojačana staklokeramika), IPS Empres 2 keramika (keramika s litij disilikatnom jezgrom, čvršća i žilavija od prethodne) i IPS E.Max keramika koja ima sastav sličan IPS Empres 2 keramici (litij-disilikatna jezgra), a mnogo je čvršća od prethodne dvije vrste staklokeramike.",
            "E.Max Press ili Empress zubne krunice i mostovi su potpuno keramičke krunice i mostovi izrađeni od litij-disilikatne keramike. Velika prozirnost litij-disilikatne keramike omogućuje izvanrednu estetiku te je posebno indicirana za protetske restauracije u estetskoj zoni čeljusti (području koje je vidljivo pri punom osmijehu). Čvršća je od drugih vrsta staklokeramike te je indicirana za protetske restauracije u prednjem dijelu čeljusti, za pojedinačne krunice ili tročlane mostove do završno drugog pretkutnjaka i za pojedinačne krunice u prednjem ili stražnjem dijelu zubnog niza, ljuskice i indirektno izrađene ispune (inlay, onlay).E.Max keramika proizvodi se u širokom rasponu boja stoga ima odlične mogućnosti oponašanja prirodnog izgleda zuba.",
            "Na boju konačnog protetskog rada utječu tri faktora: boja izbrušenog zubnog bataljka, boja cementa i boja krunice. U nekim slučajevima primjena litij-disilikatne keramike nije jednostavna zbog različitih boja izbrušenih zubnih bataljaka koji bi mogli prosijavati kroz materijal krunice, no poznavanjem svojstava materijala i tehnike pripreme takve probleme moguće je riješiti na obostrano zadovoljstvo pacijenta i doktora dentalne medicine.",
            "Kombinacijom različitih boja i transparencije cementa moguće je postići jednakost boje krunica, čak i kada boja izbrušenih zuba nije ujednačena. Nakon konačnog cementiranja krunica na izbrušene zube, slijedi poliranje spojeva krunice i zuba kako bi se olakšalo održavanje higijene.",
            "Za postizanje funkcijski i estetski zadovoljavajućeg rezultata, bitno je dobro postaviti indikaciju za ovakve radove. Mehanička svojstva Emax krunica su nešto slabija od cirkon-keramike te ovakvi protetski nadomjestci nisu preporučljivi za velike protetske restauracije u stražnjem dijelu usne šupljine već za pojedinačne krunice ili tročlane mostove u prednjem dijelu zubnog niza do završno drugog pretkutnjaka i za pojedinačne krunice u prednjem ili stražnjem dijelu zubnog niza; ljuskice i indirektno izrađene ispune (inlay, onlay).",
          ],
        },
      ],
      faqs: [
        {
          id: "protetika-1",
          question: "Koliko će dugo trajati krunice u ustima?",
          answer:
            "<p>Teško je odgovoriti na to pitanje. Trajnost krunica od svih vrsta materijala, u svijetu i kod nas, u razdoblju od 10 godina kreće se od 85%-95% i to se smatra uspješnom protetskom terapijom. Ipak, na postojanost protetskog rada utječu brojni čimbenici, kao što su redoviti kontrolni pregledi i održavanje oralne higijene, stanje zuba nosača i parodonta, pravilan odabir protetskog rada za određeni slučaj i pravilna izrada nadomjestka. Zbog svih navedenih čimbenika trajnost rada može varirati od pacijenta do pacijenta.</p>",
        },
        {
          id: "protetika-2",
          question: "Kako održavati higijenu zubnih krunica i mostova?",
          answer:
            "<ul><li>Pacijenti ponekad imaju krivu pretpostavku da su im zubi zaštićeni \"navlakama\" tj. krunicama ili mostovima i da oralna higijena ne mora biti intenzivna. Ovo je velika zabluda. Pacijent može trudom kojeg uloži u održavanje oralne higijene i redovitim kontrolnim pregledima kod doktora dentalne medicine znatno pridonijeti duljoj trajnosti protetskog rada u ustima i zdravlju preostalih zuba u usnoj šupljini.</li><li>Četkanje krunica i mostova preporuča se na način kao i kod prirodnih zuba-od desnog gornjeg kvadranta preko lijevog gornjeg kvadranta, lijevog donjeg kvadranta i desnog donjeg kvadranta. Potrebno je prijeći sve plohe zuba i nadomjestaka, u trajanju od ukupno tri minute. Preporučaju se kružni pokreti, a završno bi zube trebalo četkati od \"crvenog prema bijelom\", kako bi se usporilo povlačenje gingive (zubnog mesa) nakon fiksnoprotetske terapije. Na raspolaganju su i brojna pomagala koja olakšavaju higijenu protetskih radova, kao što su zubni konac s vodilicama, električne četkice, vodeni tuševi za usta, međuzubne četkice. Informaciju o kvaliteti četkanja koje provodi sam pacijent mogu dati i plak-revelatori koji se mogu nabaviti u slobodnoj prodaji. Rado ćemo Vas podučiti pravilnom održavanju higijene kako bismo zajedno produljili trajnost Vašeg nadomjestka, na Vaše i naše zadovoljstvo.</li></ul>",
        },
      ],
    },
    "estetska-dentalna-medicina": {
      slug: "estetska-dentalna-medicina",
      meta: {
        title: "Estetska dentalna medicina | Dental Centar Repić",
        description:
          "Izbjeljivanje zubi, keramičke ljuskice, Smile Design, zubni nakit i pjeskarenje zuba. Estetska dentalna medicina u Dental Centru Repić u Trogiru.",
      },
      eyebrow: "ZA VAŠ ZDRAV I LIJEP OSMIJEH",
      title: "Estetska dentalna medicina",
      lead:
        "Lijep osmijeh pridonosi dobrom raspoloženju, podiže samopouzdanje i pomaže Vam da ostavite pozitivan prvi dojam.",
      sections: [
        {
          paragraphs: [
            "Imperativ našeg rada je omogućiti svakom pacijentu lijep i zdrav osmijeh. Estetska dentalna medicina podrazumijeva niz postupaka kojima se oblikuje lijep osmijeh, uz praćenje određenih smjernica kako bi se postigao potpuni sklad mekih i tvrdih zubnih struktura.",
            "Estetski dentalno-medicinski zahvat integrira postupke iz različitih specijalističkih grana dentalne medicine (ortodoncije, parodontologije, protetike, implantologije, restaurativne dentalne medicine), s ciljem ispravljanja odstupanja od estetskih parametara i postizanja funkcije i estetike zdravih zubnih struktura. Istraživanja su pokazala da estetski stomatološki zahvati imaju veliki psihološki učinak na pacijenta te dovode do porasta samopouzdanja i poboljšanja kvalitete života.",
          ],
        },
        {
          heading: "Postupci koje nudimo",
          bullets: [
            "Izbjeljivanje zubi",
            "Keramičke ljuskice",
            "Smile Design",
            "Zubni nakit",
            "Pjeskarenje zuba",
          ],
        },
      ],
    },
    endodoncija: {
      slug: "endodoncija",
      meta: {
        title: "Endodoncija - liječenje korijenskih kanala zuba | Dental Centar Repić",
        description:
          "Liječenje upale zuba i korijenskih kanala. Strojna obrada kanala i kontrola RTG snimkom u Dental Centru Repić u Trogiru.",
      },
      eyebrow: "LIJEČENJE KORIJENSKIH KANALA ZUBA",
      title: "Endodoncija",
      lead:
        "Endodoncija je specijalistička disciplina dentalne medicine udružena s restaurativnom stomatologijom i karijesologijom",
      sections: [
        {
          paragraphs: [
            "Restaurativna stomatologija i karijesologija liječe bolest tvrdog zubnog tkiva odnosno dentina, a kada dođe do nepovratnih upalnih promjena u pulpi zuba, potrebno je liječiti meko zubno tkivo odnosno pulpu zuba, na način da se liječe korijenski kanali. To se radi endodontskim liječenjem koje se često naziva i endodoncijom.",
          ],
        },
        {
          heading: "Zašto zub boli?",
          paragraphs: [
            "Zubobolja je neugodan simptom kojeg je većina populacije iskusila barem jednom u životu. Zub može boljeti iz različitih razloga. Ponekad je uzrok ogoljeli dentin; upala u parodontnom ili periapikalnom tkivu; upala u okolnom tkivu usne šupljine kao što su npr. sinusi, kada se bol reflektira u zube; ili pak je uzrok bolova upala samog zuba odnosno zubne pulpe. U nekim slučajevima nije jednostavno odrediti uzrok bolova te će doktor dentalne medicine napraviti detaljan pregled i određene kliničke testove te RTG snimku. Nakon identificiranja uzroka slijedi odluka o načinu liječenja.",
          ],
        },
        {
          heading: "Kako nastaje upala zuba?",
          paragraphs: [
            "Upala zubne pulpe (pulpitis, \"upala zuba\") može nastati zbog različitih uzroka, kao što su duboki karijes, škripanje zubima ili nepravilan zagriz koji preopterećuje zub. Prilikom upale zuba dolazi do širenja krvnih žila unutar pulpe zuba, povećane kapilarne propusnosti i izlaska tekućine u okolno područje što dovodi do porasta tlaka. Pulpa zuba naziva se još i \"zubni živac\", no zapravo sadrži i krvne i limfne žile i živčana vlakna, a smještena je u pulpnoj komorici. Budući da je pulpna komorica zuba čvrsta struktura koja se ne može širiti, porast tlaka unutar komorice uzrokuje pritisak na živčani splet u pulpi te se javljaju simptomi bolova. Bolovi uzrokovani upalom zuba mogu biti različitog karaktera te se širiti ili reflektirati u okolne strukture. Tako se npr. bol iz donjih zuba često širi prema uhu, dok se bol iz gornjih zuba obično širi prema oku.",
            "Kod reverzibilnih upala zuba (zubne pulpe) bolovi su povremeni, javljaju se na različite podražaje (toplo, hladno, ugriz) te nestaju uklanjanjem uzročnika, no kod ireverzibilnih upala zuba (zubne pulpe) bolovi su spontani i prisutni gotovo stalno. Ostali simptomi upale zuba mogu biti povećani limfni čvorovi u blizini zahvaćenog zuba, curenje gnoja iz fistule na zubnom mesu, pomičnost zuba, oteklina oko zuba, vrućica, loše opće stanje. U slučaju neliječene upale zuba, dolazi do širenja infekcije kroz korijenski kanal u okolnu kost i nastanka granuloma. Granulom uništava okolnu kost, a infekcija se može širiti krvlju u ostatak organizma.",
          ],
        },
        {
          heading: "Kako se liječi upala zuba?",
          paragraphs: [
            "Upala zuba liječi se ovisno o uzroku. Kod reverzibilnih upala zubne pulpe dovoljno je ukloniti uzrok (karijes, prerani kontakt, ogoljele zubne vratove) te zube opskrbiti ispunom. Nakon toga dolazi do smirivanja simptoma. U slučaju ireverzibilnih upala zubne pulpe, zube nije dovoljno opskrbiti ispunom, već je potrebno endodontsko liječenje.",
          ],
        },
        {
          heading: "Što je endodontsko liječenje?",
          paragraphs: [
            "Endodontski zahvat (\"endodoncija\") predstavlja liječenje korijenskih kanala zuba s ciljem njegova očuvanja u usnoj šupljini. Postupak liječenja korijenskih kanala podrazumijeva vađenje pulpe zuba (tzv. vađenje živca zuba) te čišćenje i ispiranje korijenskih kanala posebnim ručnim ili strojnim iglicama i tekućinom za ispiranje kanala koja odstranjuje zaostale bakterije i upalne produkte te dezinficira kanale. Nakon toga slijedi punjenje korijenskih kanala za to namijenjenim punilima. Liječenje korijenskih kanala zahtijeva suho i sterilno radno polje kako bi se spriječio prodor bakterija iz usne šupljine u kost. Temelj svake daljnje intervencije leži u dobro izliječenim korijenskim kanalima. Endodontski liječeni zubi mogu postati nosači protetskih nadomjestaka i dugotrajno odgoditi potrebu za protezom ili implantatima. Uvijek se preporuča pokušati spasiti vlastiti zub jer je on najbolji nadomjestak.",
            "Naša dužnost je osigurati bezbolnost endodontskog zahvata što postižemo promjenom lokalne anestezije. Ovisno o složenosti slučaja, možda ćete trebati nekoliko posjeta ordinaciji da bismo pravilno izliječili zub. Samo ispravno provedeni svaki korak liječenja vodi uspješnom endodontskom tretmanu. Nakon završenog endodontskog liječenja zub neko vrijeme može biti osjetljiv na pritisak što je uobičajena nuspojava liječenja, no važno je da se bol i osjetljivost zuba postupno smanjuje. Po potrebi možete uzeti tabletu protiv bolova. Simptomi bi trebali nestati kroz nekoliko dana.",
            "Opremljeni smo modernim uređajima kojima vršimo precizno mjerenje duljine kanala te strojnu obradu korijenskih kanala. Završno punjenje korijenskih kanala provjeravamo RTG snimkom. Na taj način omogućavamo Vam liječenje zuba u najkraćem mogućem periodu uz izbjegavanje nepotrebnih dolazaka.",
          ],
        },
      ],
    },
    parodontologija: {
      slug: "parodontologija",
      meta: {
        title: "Parodontologija - liječenje parodontitisa | Dental Centar Repić",
        description:
          "Uklanjanje zubnog kamenca, inicijalna parodontološka terapija i parodontološko-kirurški zahvati u Dental Centru Repić u Trogiru.",
      },
      eyebrow: "PARODONTOLOGIJA",
      title: "Parodontologija",
      lead:
        "Reagirajte na vrijeme i spriječite bolesti i gubitak zuba",
      sections: [
        {
          paragraphs: [
            "U Dental Centru Repić profesionalno uklanjanjamo zubne naslaga zvucnim i ultrazvučnim instrumentima, pjeskarenjem i poliranjem, provodimo inicijalnu parodontološku terapiju i parodontološko-kirurške zahvate kako bi Vaši zubi ostali što dulje u punoj funkciji.",
            "Osnovni čimbenici za razvoj parodontitisa su porast broja bakterija u ustima i neodgovarajući imunološki odgovor domaćina. Do porasta broja bakterija dolazi uslijed lošijeg održavanja oralne higijene ili smanjenog lučenja sline koja ima prirodnu zaštitnu ulogu. Odgovor imunološkog sustava domaćina slabi pod utjecajem različitih sistemskih bolesti, stresa i pušenja. Posljedica postojanja ovih čimbenika je nastanak parodontne bolesti koja dovodi do upale i propadanja potpornog aparata zuba-kosti, zubnog mesa (gingive) i parodontnog ligamenta.",
            "Početak bolesti obično je asimptomatski (ne postoje simptomi koji bi upozorili na početak bolesti) te su upravo iz tog razloga bitni redoviti posjeti stomatologu kako bi se bolest otkrila u što ranijoj fazi. Što se ranije ustanovi bolest parodonta, veće su mogućnosti liječenja takvih zuba i njihovog dugotrajnijeg očuvanja u usnoj šupljini.",
          ],
        },
        {
          heading: "Kako se liječi parodontitis?",
          paragraphs: [
            "Cilj liječenja parodontitisa je smanjiti broj bakterija u ustima, ukloniti biofilm (organiziranu strukturu bakterija na zubu) sa zuba i poboljšati imunološki odgovor domaćina kako bismo zaustavili napredovanje bolesti.",
            "Dobra oralna higijena i redovito profesionalno uklanjanje zubnog plaka i kamenca su ključni u prevenciji i terapiji parodontitisa. Nužno je barem dva puta dnevno četkati zube četkicom i zubnom pastom, uz obavezno korištenje zubnog konca ili zubnog tuša (kod užih prostora između zuba) te međuzubne četkice (za šire prostore između zuba i zahvaćena račvišta korjenova).",
            "Inicijalnu parodontnu terapiju čini uklanjanje zubnog kamenca i naslaga na zubima, iznad i ispod razine zubnog mesa (gingive), uz pomoć ultrazvučnog aparata. Nakon toga slijedi duboko mehaničko čišćenje i poliranje zubnih korjenova.",
            "Parodontološko-kirurška terapija indicirana je kod uznapredovalih slučajeva parodontitisa (parodontoze) jer omogućuje pristup i uklanjanje naslaga sa zuba u dubokim parodontnim džepovima. Primjenom regenerativnih kirurških postupaka omogućuje se obnavljanje potpornog aparata zuba. Ovakav postupak može poboljšati dugoročnu prognozu zuba zahvaćenih parodontitisom. Također se provodi i za obnovu estetski prihvatljive anatomije zuba i pripadajućeg zubnog mesa (gingive). Naime, parodontna bolest dovodi do povlačenja zubnog mesa i osjetljivosti korijena zuba te se primjenom regenerativne parodontološke terapije može postići prekrivanje korijena zuba i smanjenje osjetljivosti korijena zuba.",
          ],
        },
        {
          heading: "Prepoznajte znakove parodontitisa",
          bullets: [
            "krvarenje iz zubnog mesa (gingive)",
            "natečenost zubnog mesa, izrazito crvenilo i bol",
            "povlačenje zubnog mesa",
            "sekret i gnoj iz zubnog mesa",
            "migracija zuba te povećani prostori medu zubima",
            "pomicnost zubi",
            "zadah iz usta",
          ],
        },
      ],
    },
  },

  serviceDetailChrome: {
    backToServices: "Sve usluge",
    faqHeading: "Česta pitanja",
    relatedHeading: "Ostale usluge",
    cta: {
      heading: "Imate pitanje o ovoj usluzi?",
      subheading:
        "Nazovite nas ili rezervirajte termin — prvi pregled je besplatan, a plan terapije dogovaramo s Vama.",
      primaryButton: "Rezervirajte termin",
    },
    availableInLabel: "Dostupno na hrvatskom i engleskom",
  },

  faqs: [
    {
      id: "prvi-pregled",
      question: "Je li prvi pregled besplatan?",
      answer:
        "<p>Da. Prvi dolazak i pregled u Dental Centru Repić su besplatni.</p><p>Na pregledu utvrđujemo stanje zubi i desni, po potrebi radimo RTG dijagnostiku i predlažemo plan terapije s procjenom trajanja i troška, kako biste mogli donijeti odluku bez obveze.</p>",
    },
    {
      id: "termin",
      question: "Kako mogu rezervirati termin?",
      answer:
        "<p>Termin možete rezervirati na dva načina:</p><ul><li><strong>Telefonom:</strong> +385 21 796 241, radnim danom od 8:00 do 20:00</li><li><strong>Obrascem:</strong> ispunite formu na stranici Kontakt i kontaktirat ćemo Vas unutar radnog vremena</li></ul><p>Ako trebate hitnu intervenciju, molimo nazovite nas telefonom.</p>",
    },
    {
      id: "usluge",
      question: "Koje usluge pružate?",
      answer:
        "<p>Pružamo kompletnu dentalnu uslugu na jednom mjestu:</p><ul><li>Implantologija i dentalna protetika (krunice, mostovi)</li><li>Ortodoncija — fiksni i mobilni aparatići</li><li>Endodoncija — liječenje zubnih kanala i upale zuba</li><li>Estetska dentalna medicina — izbjeljivanje, keramičke ljuskice, Smile Design</li><li>Oralna kirurgija i parodontologija</li><li>RTG dijagnostika i dječja dentalna medicina</li></ul>",
    },
    {
      id: "strah-od-zubara",
      question: "Imam strah od zubara. Kako mi možete pomoći?",
      answer:
        "<p>Strah od zubara je česta i potpuno razumljiva pojava, a mi ga uspješno otklanjamo.</p><p>Radimo bez pritiska, objašnjavamo svaki korak unaprijed i prilagođavamo tempo Vama. Poseban naglasak stavljamo na rad s djecom, kako bi se od prvog posjeta osjećala ugodno.</p>",
    },
    {
      id: "djeca",
      question: "Primate li djecu?",
      answer:
        "<p>Da, dječja dentalna medicina jedna je od naših usluga.</p><p>Ordinacija je prilagođena obiteljima, a naši doktori i osoblje posebno su posvećeni radu s najmlađim pacijentima — cilj je da dijete od prvog posjeta stekne povjerenje i pozitivno iskustvo.</p>",
    },
    {
      id: "dentalni-turizam",
      question: "Dolazim iz inozemstva. Možete li organizirati terapiju?",
      answer:
        "<p>Da. Naša lokacija u neposrednoj blizini stare gradske jezgre Unescova grada Trogira idealna je za pacijente koji žele spojiti odmor i dentalnu uslugu.</p><ul><li>Cijene su i do 5 puta niže od standardnih europskih</li><li>Plan terapije prilagođavamo trajanju Vašeg boravka</li><li>Naš tim pomaže u organizaciji dolaska i boravka u Trogiru</li></ul><p>Pošaljite nam upit s planiranim datumima i pripremit ćemo predlog terapije.</p>",
    },
    {
      id: "radno-vrijeme",
      question: "Kada ste otvoreni?",
      answer:
        "<p>Radimo od ponedjeljka do petka, od 8:00 do 20:00.</p><p>Subotom i nedjeljom ne radimo. Za termine i upite nazovite +385 21 796 241 ili nam pošaljite poruku putem obrasca.</p>",
    },
    {
      id: "lokacija",
      question: "Gdje se nalazite i ima li parkinga?",
      answer:
        "<p>Nalazimo se na adresi Rimski put 3J, 21220 Trogir, u neposrednoj blizini stare gradske jezgre.</p><p>Lokacija je lako dostupna, a ordinacija je prilagođena i osobama s invaliditetom.</p>",
    },
  ],
};
