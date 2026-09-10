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
    hoursHeading: "Radno vrijeme",
    rightsReserved: "Sva prava pridržana",
  },

  common: {
    learnMore: "Saznajte više",
    readMore: "Pročitajte više",
    readLess: "Prikaži manje",
    callUsToday: "Nazovite nas već danas!",
    bookAppointment: "Rezervirajte termin",
    openingHours: "Radno vrijeme",
    openingHoursRows: [
      { day: "Ponedjeljak", hours: "8:00 - 20:00" },
      { day: "Utorak", hours: "8:00 - 20:00" },
      { day: "Srijeda", hours: "8:00 - 20:00" },
      { day: "Četvrtak", hours: "8:00 - 20:00" },
      { day: "Petak", hours: "8:00 - 20:00" },
      { day: "Subota", hours: "Ne radimo" },
      { day: "Nedjelja", hours: "Ne radimo" },
    ],
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
        "Dental Centar Repić, Put Dragulina 62 F, 21220 Trogir. Telefon +385 21 796 241, e-pošta dentalcenterrepic@gmail.com. Radnim danom 8:00 - 20:00.",
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
      demoNote:
        "Demo obrazac: prije objave povežite ovaj obrazac s odabranim pružateljem usluge obrazaca.",
      statusMessage:
        "Ovaj demo obrazac radi lokalno. Povežite pružatelja usluge obrazaca za primanje poruka.",
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
        "<p>Nalazimo se na adresi Put Dragulina 62 F, 21220 Trogir, u neposrednoj blizini stare gradske jezgre.</p><p>Lokacija je lako dostupna, a ordinacija je prilagođena i osobama s invaliditetom.</p>",
    },
  ],
};
