import type { Translation } from "../types";

/**
 * English translations.
 *
 * Copy follows the clinic's own English pages on dentalrepic.com.hr where those
 * exist, with light copy-editing for typos in the original.
 */
export const en: Translation = {
  brand: {
    name: "Dental Centar Repić",
    tagline: "We care for your perfect smile",
    logoAlt: "Dental Centar Repić",
  },

  nav: {
    links: [
      { label: "Home", href: "/", icon: "home" },
      { label: "About Us", href: "/about", icon: "info" },
      { label: "Services", href: "/services", icon: "clipboard" },
      { label: "Contact", href: "/contact", icon: "phone" },
    ],
    cta: { label: "Book an Appointment", href: "/contact#form" },
    languageLabel: "Language",
    menuLabel: "Toggle menu",
  },

  footer: {
    description:
      "Preserving oral health, function and aesthetics are the foundation of the services we provide to patients. Each patient receives an individual approach, and we keep up with technological advancements to ensure the best possible service. We constantly invest in new equipment and in the professional development of our team.",
    hoursHeading: "Opening hours",
    closed: "Closed",
    contactHeading: "Contact",
    designCredit: "Design",
  },

  common: {
    learnMore: "Read more",
    readMore: "Read more",
    readLess: "Read less",
    callUsToday: "Call us today!",
    bookAppointment: "Book your appointment",
    booking: {
      eyebrow: "Contact us",
      heading: "Book your appointment. The first examination is free.",
      text: "Fill in the form or give us a call — we will get back to you within our working hours.",
    },
  },

  home: {
    meta: {
      title: "Dental Centar Repić | Dental Clinic in Trogir, Croatia",
      description:
        "Dental Centar Repić in Trogir: implantology, orthodontics, endodontics, prosthetics and aesthetic dental medicine. Free first examination. Call +385 21 796 241.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "A modern approach. A healthy smile.",
      lead: "Complete dental care with an expert team, modern technology and an individual approach to every patient.",
      ctaPrimary: "Book an appointment",
      ctaSecondary: "Our services",
    },
    services: {
      eyebrow: "Expertise and professionalism",
      heading: "Complete dental service",
      paragraph:
        "We bring together the knowledge of our specialists, modern technology and quality materials to provide complete dental care tailored to your needs.",
      // Paired in order with the pictograms in HomePage.astro.
      items: [
        { title: "General dentistry", summary: "Prevention and dental care" },
        { title: "Implantology", summary: "Replacing lost teeth" },
        { title: "Aesthetic dentistry", summary: "A natural, beautiful smile" },
        { title: "Orthodontics", summary: "Correctly aligned teeth" },
      ],
      cta: "Explore all our services",
    },
    team: {
      eyebrow: "Our team",
      heading: "The people behind your care",
      paragraphs: [
        "Knowledge, experience and teamwork in the service of your health.",
        "Our team brings together specialists from different fields of dentistry, who apply their knowledge and experience to simple and complex dental problems alike.",
      ],
      cta: "Meet our team",
      imageAlt: "Dr. Slavica Pejda Repić and Dr. Dario Repić",
    },
    visit: {
      eyebrow: "Your visit",
      heading: "How you feel matters to us",
      paragraph:
        "From your first visit to the end of your treatment, we aim to make the experience a pleasant one, in which you feel relaxed, informed and safe.",
    },
    space: {
      eyebrow: "Our clinic",
      heading: "A modern, well-equipped practice",
      paragraph:
        "We invest in equipment, technology and quality materials to ensure the conditions for expert work and high-quality dental care. It also matters to us that you feel comfortable and safe during your visit.",
      galleryLabel: "Photos of the clinic",
      previousLabel: "Previous photo",
      nextLabel: "Next photo",
      // Paired in order with the gallery photos in HomePage.astro.
      photoAlts: [
        "Reception and waiting area",
        "Seating area in the waiting room",
        "Children's corner in the waiting room",
        "Treatment room with a sea view",
        "Dental chair in a treatment room",
        "Treatment room with round mirrors",
        "The treatment rooms seen from outside",
      ],
      videoTitle: "Video: Dental Centar Repić",
      playLabel: "Play the Dental Centar Repić video",
    },
  },

  about: {
    meta: {
      title: "About Us - Our Team | Dental Centar Repić",
      description:
        "Meet the team at Dental Centar Repić in Trogir: specialists in orthodontics, endodontics and restorative dental medicine, holding PhDs in their fields.",
    },
    hero: {
      eyebrow: "Expertise that connects us",
      title: "People you can trust.",
    },
    intro: {
      eyebrow: "Expertise and professionalism",
      heading: "About us",
      paragraph:
        "Highly educated staff, an interdisciplinary approach and a pleasant atmosphere make Dental Centar Repić the right choice for you. We guarantee a professional approach, high quality service and the use of the most modern materials.",
    },
    // Paired in order with the portraits in AboutPage.astro.
    team: [
      { name: "Slavica Pejda Repić, DDM, PhD", role: "Doctor of dental medicine, specialist in orthodontics" },
      { name: "Dario Repić, DDM, PhD", role: "Doctor of dental medicine, specialist in endodontics and restorative dental medicine" },
      { name: "Danijela Maleta", role: "Doctor of dental medicine" },
      { name: "Magdalena Županović", role: "Doctor of dental medicine" },
      { name: "Katja Bažoka", role: "Dental assistant" },
      { name: "Manuela Škrobica", role: "Dental assistant" },
      { name: "Ana Papić", role: "Dental assistant" },
    ],
  },

  services: {
    meta: {
      title: "Services - Complete Dental Service | Dental Centar Repić",
      description:
        "Implantology, orthodontics, endodontics, dental prosthetics, aesthetic dental medicine, oral surgery, periodontology, X-ray diagnostics and pediatric dentistry.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "From prevention to complex treatment.",
    },
    intro: {
      eyebrow: "A complete approach",
      heading: "One centre. Many possibilities.",
      paragraph:
        "From implantology and orthodontics to aesthetic dental medicine — we provide a solution for all your dental needs in one place, with a professional approach and the most modern materials.",
    },
    // Paired in order with the images and detail pages in ServicesPage.astro.
    cards: [
      {
        title: "Dental implants",
        summary:
          "Dental implants are a routine procedure that replaces lost teeth without any work on the neighbouring teeth.",
      },
      {
        title: "Orthodontics",
        summary:
          "Orthodontic therapy (braces) is indicated when teeth are improperly positioned or unevenly distributed.",
      },
      {
        title: "Endodontics",
        summary:
          "A specialist discipline of dental medicine, closely associated with restorative dentistry and cariology.",
      },
      {
        title: "Dental prosthetics",
        summary:
          "We pay special attention to preserving the function of the teeth and the whole chewing system.",
      },
      {
        title: "Aesthetic dental medicine",
        summary:
          "A beautiful smile lifts your mood, boosts your confidence and helps you make a great first impression.",
      },
      {
        title: "Oral surgery",
        summary:
          "Surgical tooth extraction and other oral surgery procedures, carried out with expertise and care.",
      },
      {
        title: "Periodontology",
        summary:
          "Act in time to prevent gum disease and tooth loss.",
      },
      {
        title: "X-ray diagnostics",
        summary:
          "Modern X-ray diagnostics for early detection of disease and precise treatment planning.",
      },
      {
        title: "Paediatric dental medicine",
        summary:
          "A gentle approach for our youngest patients, with preventive check-ups for healthy teeth from an early age.",
      },
    ],
    // Treatment catalogue by area, listed in the footer.
    groups: [
      {
        title: "Implantology and prosthetics",
        items: [
          "Dental implants",
          "Dental prosthetics",
          "Crowns and bridges",
          "Full oral and prosthetic rehabilitation",
        ],
      },
      {
        title: "Orthodontics",
        items: [
          "Braces",
          "Fixed orthodontic appliances",
          "Removable orthodontic appliances",
          "Treatment of uneven and spaced teeth",
        ],
      },
      {
        title: "Endodontics and restorative dentistry",
        items: [
          "Root canal treatment",
          "Treatment of tooth inflammation",
          "Caries treatment",
          "Restoration of broken and chipped teeth",
        ],
      },
      {
        title: "Aesthetic dental medicine",
        items: [
          "Tooth whitening",
          "Ceramic veneers",
          "Smile Design",
          "Tooth jewellery",
          "Tooth sanding",
        ],
      },
      {
        title: "Oral surgery and periodontology",
        items: [
          "Oral surgery",
          "Periodontology",
          "Surgical tooth extraction",
          "Treatment of periodontitis",
        ],
      },
      {
        title: "Diagnostics and pediatric dentistry",
        items: [
          "X-ray diagnostics",
          "Pediatric dentistry",
          "Free first examination",
          "Preventive check-ups",
        ],
      },
    ],
  },

  tourism: {
    meta: {
      title: "Dental Tourism in Trogir, Croatia | Dental Centar Repić",
      description:
        "Combine a holiday in Dalmatia with top quality dental care. Prices up to 5 times lower than standard European prices. Dental Centar Repić, Trogir.",
    },
    hero: {
      title: "DENTAL TOURISM",
      description:
        "Combine a tourist visit to Dalmatia with top quality dental service. <br /> An attractive location in the immediate vicinity of the old town of Trogir, a UNESCO World Heritage site.",
    },
    intro: {
      heading: "Mix business and pleasure",
      paragraphs: [
        "The attractive position of Dental Centar Repić in the vicinity of the Trogir Old Town, inscribed on the UNESCO World Heritage List, is the ideal choice for foreign patients looking to mix business and pleasure: a pleasant vacation with high quality and reasonably priced dental service.",
        "In addition to a pleasant stay in the heart of Dalmatia, we do all we can to ensure that you receive well organised and top quality dental services. We are ready to provide you with complete oral and prosthetic rehabilitation in accordance with your planned visit to our town.",
        "The prices of our services are up to 5 times lower than standard European prices, and we will be very happy to help organise your arrival and stay in Trogir.",
      ],
    },
    benefits: {
      heading: "Why Trogir",
      items: [
        {
          title: "Up to 5 times lower prices",
          description:
            "Our prices are up to five times lower than standard European prices",
        },
        {
          title: "UNESCO town of Trogir",
          description:
            "The clinic sits in the immediate vicinity of the Trogir old town",
        },
        {
          title: "Help with arrangements",
          description:
            "Our team is happy to help organise your arrival and stay in Trogir",
        },
        {
          title: "Treatment around your trip",
          description:
            "We plan full rehabilitation to fit the length of your stay",
        },
      ],
    },
    howItWorks: {
      heading: "How it works",
      steps: [
        {
          title: "1. Get in touch",
          description:
            "Send us an enquiry describing your situation and your planned dates",
        },
        {
          title: "2. Treatment plan",
          description:
            "We propose a treatment plan and visit schedule that fits your stay",
        },
        {
          title: "3. Arrival and treatment",
          description:
            "We carry out the treatment at the agreed times, leaving room to rest and explore",
        },
        {
          title: "4. Follow-up",
          description:
            "After treatment we remain available for check-ups and advice",
        },
      ],
    },
    cta: {
      heading: "Planning a visit to Dalmatia?",
      subheading:
        "Send us an enquiry with your planned dates and we will prepare a treatment plan that fits your stay.",
      primaryButton: "Send an enquiry",
      secondaryButton: "See our services",
    },
  },

  contact: {
    meta: {
      title: "Contact - Book an Appointment | Dental Centar Repić",
      description:
        "Dental Centar Repić, Rimski put 3J, 21220 Trogir, Croatia. Phone +385 21 796 241, email info@dentalrepic.com. Weekdays 8:00 - 20:00.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "Get in touch with confidence.",
    },
    intro: {
      eyebrow: "Contact",
      heading: "Book an appointment",
      paragraph:
        "Fill in the form below and we will contact you as soon as possible, within our working hours. Your first examination is free.",
    },
    addressHeading: "Address",
    contactHeading: "Contact",
    emergencyHeading: "Emergencies",
    phoneLabel: "Phone",
    emailLabel: "Email",
    form: {
      heading: "Book an appointment",
      description: [
        "We are here to answer all your questions and schedule your next appointment.",
        "Write to us, call us, or drop by: your new smile starts here.",
      ],
      nameLabel: "Full name",
      emailLabel: "Email",
      messageLabel: "Message",
      messagePlaceholder: "Type your message...",
      submit: "Send",
      submitting: "Sending...",
      successMessage:
        "Thank you! We have received your enquiry and will contact you within our working hours.",
      errorMessage:
        "Sending failed. Please try again or call us on +385 21 796 241.",
      captchaMessage: "Please confirm you are not a robot.",
    },
    mapTitle: "Map showing the location of Dental Centar Repić in Trogir",
  },

  info: {
    meta: {
      title: "FAQ - Frequently Asked Questions | Dental Centar Repić",
      description:
        "Answers to common questions about the free first examination, implants, braces, fear of the dentist and dental tourism in Trogir.",
    },
    hero: {
      title: "FREQUENTLY ASKED QUESTIONS",
      description:
        "Clear answers about our services, appointments and treatments — so you can make confident decisions for yourself or a loved one.",
    },
    heading: "Frequently Asked Questions",
    cta: {
      heading: "Still have questions?",
      subheading:
        "Our team is happy to answer any further questions. Give us a call or send us an enquiry.",
      primaryButton: "Contact us",
    },
  },

  notFound: {
    meta: {
      title: "Page Not Found - Dental Centar Repić",
      description: "The page you're looking for could not be found.",
    },
    heading: "Page Not Found",
    description:
      "Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.",
    backHome: "Back to Home",
    contactUs: "Contact us",
    lookingForLabel: "You might be looking for:",
  },

  serviceDetails: {
    implantologija: {
      slug: "implantologija",
      meta: {
        title: "Implantology - dental implants | Dental Centar Repić",
        description:
          "Dental implants as a permanent solution for tooth loss. Bone augmentation, sinus lift and the All-on-4 method at Dental Centar Repić in Trogir.",
      },
      eyebrow: "WHAT ARE DENTAL IMPLANTS",
      title: "Implantology",
      lead:
        "Implantology is the fastest growing branch of dental medicine. Implants are used to replace one or more lost teeth in the upper or lower jaw. The installed implants represent a replacement for the tooth root, and pass through the process of osteointegration (fusion with the jawbone) over a period of 3 to 6 months. During the osteointegration period of the implant, the patient is not toothless and instead wears a temporary replacement that ensures the aesthetics and function of the tooth until the final prosthetic is completed. The final prosthetic can be a single crown on the implant, a bridge on the implant or a prosthetic on the implant. Installation of the implant into the bone helps also to retain the quantity of bone inthe alveolar arch, as it stimulates the bone similar to the natural tooth, and does not lead to bone resorption, which is a consequence of tooth loss.",
      sections: [
        {
          bullets: [
            "Permanent solution",
            "Complete return of tooth function",
            "Natural and beautiful tooth appearance",
            "Improved appearance of the whole face",
            "Prevention of bone loss",
            "Regular maintenance",
          ],
        },
        {
          heading: "When we recommend implants",
          paragraphs: [
            "In cases of one missing tooth in a jaw where the neighbouring teeth are healthy, an implant is recommended to avoid any abrasion of the neighbouring healthy teeth. A crown is then placed on this implant.",
            "People who wear full dentures are often faced with the problem of inadequate adhesion of the dentures, which can be resolved by making a prosthetic on implants. To retain the upper prosthetic in a completely toothless jaw, four implants are usually enough, while two implants should suffice for the lower prosthetic in a completely toothless jaw. Full prosthetics on implants contribute to higher patient satisfaction in comparison with conventional dentures. These prosthetics are more aesthetically pleasing, more stable and making chewing easier, with fewer functional limitations, easier cleaning and clearer speech.",
            "Implants can be loaded immediately (immediately after their installation) or conventionally (following the period of osteointegration). Research has shown that conventional loading has shown a somewhat better survival rate for the implants in the mouth.",
            "The implants we use in our daily operations are constructed of high quality, resistant, biocompatible titanium, and the installation procedure is completely painless, achieved through the use of local anaesthetic.",
            "The precondition for the installation of implants is an adequate quantity and quality of bone, which is verified by panoramic x-ray and CT scans of the mouth before the planned therapy. If there is reduced amount of bone, it is possible to perform bone augmentation and sinus lifting.",
          ],
        },
        {
          heading: "What is bone augmentation?",
          paragraphs: [
            "The loss of teeth results in the atrophy of bone that is no longer stimulated through chewing via the tooth root. The volume of bone is reduced and there is not sufficient space to install the implant. Bone resorption is faster if the extracted teeth also suffered from inflammatory processes around the root, as that infection further destroyed the bone. Every implant must have sufficient amount of bone around it to support and stabilise it, and prevent the retraction of the gums around the implant, resulting in subsequent aesthetic problems, such as when the implant becomes visible through the membranes. Bone augmentation is a surgical procedure used to replace lost bone. In order to replace bone volume, it is possible to use artificially produced bone of synthetic or animal origin, or the patient's own bone (autologous bone), which is taken either intraorally (from the lower jaw) or extraorally (from the hip), reduced in size and then built into the site where it is lacking. Using the patient's own bone is the golden standard in bone augmentation, since that bone has the best potential for installation and for increasing volume. In that case, it is necessary to surgically remove a sufficient quantity of bone to be installed at the site where it is lacking. To compensate for small and medium sized bone defects, artificially produced bone of synthetic or animal origin is usually used. The oral surgery specialist will decide on the method of bone augmentation. The healing of the bone and soft tissues after augmentation can be more successful by also applying the patient's own growth factor using the PRF method (platelet rich fibrin) or by installing a biomembrane for the stabilisation of clots and bone replacement. The PRF method is based on the isolation of platelet rich fibrin from the patient's own blood, and applying that extract to the surgical area. In this way, the platelets release the growth factor, which stimulates the formation of new blood vessels and the growth of new bone. This method is harmless since only the patient's filtered blood is used, to facilitate the healing process. The installed materials are gradually resorbed and the bone is remodelled and a new, strong bone mass is formed. Augmentation is performed under local anaesthesia and is completely painless. After the procedure, it is necessary to wait for the bone to heal (about eight months), before continuing with the installation of the implant.",
          ],
        },
        {
          heading: "What is a sinus lift?",
          paragraphs: [
            "Where the bone is lacking in the side sections of the upper jaw, the raising of the floor of the maxillary sinus (sinus lift) is indicated. This is an oral surgery procedure in which the lifting of the sinus floor is combined with bone augmentation, so as to ensure sufficient space for the installation of the implant. The sinus lift is performed under local anaesthesia, and is completely painless.",
            "Depending on the size of the procedure, the sinus lift can be large or small. When there is about 2 mm of bone missing to install the implant, then a small sinus lift is performed, where the raising of the floor of the maximally sinus and bone augmentation are performed simultaneously with the installation of the implant. The procedure is performed using a technique called osteotomy, named after the instrument used to raise the membrane of the maxillary sinus. After the small sinus lift, it is necessary to wait for the period of osteointegration of the implant with the bone to be completed (about six months), and only then can the implant be loaded with the prosthetic (crown, bridge).",
            "A large sinus lift is performed when a larger volume of bone is lacking, and is performed using the side procedure. Occasionally, it is also possible to install the implant at the same time, though if there is a lot of bone missing, it is recommended that the sinus lift be performed first, and the implant later. In that case, 6 to 8 months should pass before the implant can be installed, otherwise there can be a risk of complications and failure of the procedure. The oral surgery specialist will decide on the type of procedure you need, based on your scans.",
          ],
        },
        {
          heading: "What are the possible complications with a sinus lift?",
          paragraphs: [
            "The sinus lift has a high success rate, and complications are not common during this procedure, though they are possible. Complications can arise during the performance of the sinus lift, or following the procedure. While lifting the sinus, it is possible for the membrane of the maxillary sinus to burst. The thickness of the sinus membrane differs from patient to patient. If the membrane should burst, the oral surgeon can use a number of techniques to repair the defect and to prevent any subsequent complications, such as sinus infection caused by the entry of materials for bone replacement into the sinus cavity.",
            "After sinus lifting, minor swelling is possible and should go away after a few days. Sinus infections are also possible due to various causes, such as the penetration of an infection from the nasal cavity, penetration of the implant or bone material through the membrane, or performance of the procedure on sinuses that are not healthy. The precondition for performing the sinus lift is having healthy sinuses, and if they patient has previous sinus conditions, it is necessary to consult with an ear, nose and throat doctor before having this procedure.",
          ],
        },
        {
          heading: "All-on-4",
          paragraphs: [
            "The All-on-4 implant system is a form of implant prosthetic rehabilitation for completely toothless upper or lower jaws. The All-on-4 method is not new, and has been well known and successfully used in clinical practice for years. Once the teeth are lost, over time, the jaw bone loses a portion of its bone density. If sufficient bone is retained, then the recommendation is that a larger number of implants should be installed, as there are then more supports for the prosthetic. However, in certain patients with insufficient bone quantity or poor bone quality, few implants can be installed to support the prosthetic. If the client is a suitable candidate for the All-on-4 system, just four implants (two axial and two slanted implants, as determined by the oral surgeon at the time of installation) is enough to support the entire tooth arch. Once the implants are installed into the jaw, the client receives a temporary fixed prosthetic the same day, or just a few days later. Three months later, the final permanent prosthetic can be installed. In this way, the period of toothlessness is reduced to a minimum, which ensures increased client satisfaction. This is possible due to the concept of immediate loading of the implants at the time of their installation into the bone, meaning that it is not necessary to wait for the period of osteointegration to be completed before the implant can be loaded with the prosthetic. The All-on-4 method offers numerous advantages: it avoids surgical procedures such as sinus lifting and bone augmentation in the upper jaw, which reduces recovery time and procedure cost; clients who have long been toothless and have little remaining bone can finally receive a fixed prosthetic; just four implants are needed, which contributes to the stability of the prosthetic in the mouth, giving the client the feeling of natural teeth, without the fear of instability or falling out as is the case with dentures. Also, the prosthetic is affixed using screws, and can easily be removed by the dentist to examine and repair as needed. Maintaining oral hygiene of these types of prosthetics is also very easy using a toothbrush and toothpaste, and a water shower or floss around the implants. With the proper oral hygiene around the implants, they can last a lifetime, and only the prosthetic is replaced as needed.",
            "The price of the All-on-4 method is lower than the price of installing a larger number of implants in the jaw, and the price of additional oral surgery procedures. This makes this method of fixed prosthetics on implants more available to a wider number of clients.",
          ],
        },
      ],
      faqs: [
        {
          id: "implantologija-1",
          question: "Dental implants - definition",
          answer:
            "<p>A dental implant is a titanium screw that is shaped similar to the tooth root. The dental implant is surgically installed into the bone of the upper or lower jaw, based on the previously defined treatment plan. Two to six months after the implant is installed into the bone, the prosthetic can be affixed onto the implant, as the implant serves as the base for a crown, bridge or prosthetic.</p>",
        },
        {
          id: "implantologija-2",
          question: "Protocol for the installation of dental implants",
          answer:
            "<ul><li>1.</li><li>The first clinical exam includes a detailed overview and analysis of the existing state of the teeth. The clinical exam also includes a detailed analysis of the jaw x-rays (orthopantomogram). In planning treatment, it is necessary to consider the clinical condition in the mouth, the patient's desires and expectations, and the patient's budget. Given all these factors, the proposed treatment options are presented to the patient. In order to completely understand the therapeutic options, we present the situation to the patient using a detailed analysis of the intraoral photographs of the teeth and using demonstration models.</li><li>After the first examination and selection of the therapy option, we present the patient with the detailed protocol of treatment for the current state. The protocol includes extracting teeth that cannot be saved, cleaning plaque and polishing teeth to repair the existing teeth. If needed, temporary prosthetic replacements are installed on the same day, to enable patients to have normal function and aesthetics during the treatment procedure. If the clinical condition requires additional diagnostic examination, we recommend a precise three-dimensional scan (CT) of the lower jaw where the implants will be installed. The CT scan is necessary to precisely determine the quantity and quality of bone, and to determine the most optimal position for installation of the dental implant. The clinical findings, panoramic x-ray and CT scan enable us to develop a detailed therapy plan, which will include the decision on the number and distribution of implants, and any possible need for bone augmentation.</li><li>2.</li><li>The next phase is installation of the dental implants. The patient goes through preparations, consisting of rinsing out the mouth with antiseptic, and then anaesthetizing the area with a local anaesthetic. This is followed by the surgical installation of the implant (incision, revealing the bone ridge, preparation of the site for the implant, installation of the implant, suturing the wound, control x-ray). It can be emphasized that installation of the implant is not a painful process. Once the dental implants are installed, the patient receives detailed verbal and written instructions to ensure proper healing of the wound and successful osteointegration (fusion of the implant with the bone). The stitches are removed after seven days.</li><li>3.</li><li>Depending on the clinical condition, the next visit is two to six months after the implants are installed. The procedure includes opening the dental implants and installing certain anchors which helps the gums to heal and take proper shape.</li><li>4.</li><li>Once the anchors are installed, an impression is taken and sent to the dental laboratory for the creation of your prosthetic replacements.</li><li>5.</li><li>The next phase is a trial of the prosthetic and analysis of the prosthetic with the patient and the dental technician, in order to remedy any shortcomings.</li><li>6.</li><li>The final phase is the final installation of the prosthetic!</li></ul>",
        },
        {
          id: "implantologija-3",
          question: "What are the advantages of dental implants in comparison to other prosthetic replacements?",
          answer:
            "<p>If you are missing one or more teeth or if you have difficulty chewing or speaking, then dental implants are the best solution for you. Also, if you have problems with poorly fitting or uncomfortable dentures, implants are a suitable treatment option.</p>",
        },
        {
          id: "implantologija-4",
          question: "Safety of dental implants",
          answer:
            "<p>Installing dental implants and prosthetics on the implants have been a treatment option and integral part of clinical practice in specialized clinics for over 40 years. With the use of sophisticated and renowned dental implant systems, at Repić Dental Centre, you can be sure you will receive reliable and long-term results, both functionally and aesthetically.</p>",
        },
        {
          id: "implantologija-5",
          question: "Indications and success rate of dental implants",
          answer:
            "<p>Indications for the installation of dental implants are determined individually, based on each patient's clinic condition and their level of motivation. With the right decision to install dental implants, and with good maintenance of oral hygiene, the success rate of implant treatment is from 95 to 100%.</p>",
        },
        {
          id: "implantologija-6",
          question: "Contraindications for the installation of implants",
          answer:
            "<p>The installation of implants is not recommended for certain patients, including people under the age of 18 years, pregnant women, those with uncontrolled systematic diseases (diabetes, high blood pressure, immunological diseases), smokers (since smoking slows the healing of wounds), persons who have received radiation therapy in the head and neck region, and those who grind their teeth, as they can jeopardize the survival of the implant. These conditions, however, are relative contraindications for the installation of an implant, and the final decision will be made by the dentist, depending on the general condition of the patient and control of the disease.</p>",
        },
        {
          id: "implantologija-7",
          question: "Complications following the installation of implants",
          answer:
            "<p>Complications appear in a low percentage rate after the installation of implants, though they are possible. They include: rejection of the implant, damage to the nerves in the lower jaw, inflammation of the gums around the implant (periimplantitis), retraction of the gums, loss of interdental papilla.</p>",
        },
        {
          id: "implantologija-8",
          question: "Dental implants – worth the cost?",
          answer:
            "<p>In terms of price, dental implants are more expensive than other prosthetic solutions (bridges, dentures). However, dental implants are a longer-lasting solution than other prosthetics, and do not need to be replaced. Examining all the characteristics of dental implants, it could be concluded that they are the most effective solution to compensate for missing teeth.</p>",
        },
        {
          id: "implantologija-9",
          question: "Maintaining hygiene after the installation of implants",
          answer:
            "<p>After the installation of implants and prosthetic loading of implants, good oral hygiene is essential. Brush your implants and prosthetic replacements every day, and visit the dentist for a check-up at least twice a year. Professional tooth cleaning and plaque removal at the dental clinic is recommended at least twice a year.</p>",
        },
        {
          id: "implantologija-10",
          question: "If you feel pain",
          answer:
            "<ul><li>Take the first painkiller 30 minutes after the surgery, later as needed</li><li>If the pain does not subside, please call us to book an appointment at +385 21796 241.</li><li>Avoid using Aspirin, Andol or other medications containing acetylsalicylic acid, as this may cause extended bleeding.</li></ul>",
        },
        {
          id: "implantologija-11",
          question: "Signs of bleeding",
          answer:
            "<ul><li>If you should see signs of bleeding, don't worry, this is normal.</li><li>The gauze placed at the site of the procedure should remain pressed against the wound for at least 20 to 30 minutes</li><li>Avoid rinsing out your mouth.</li></ul>",
        },
        {
          id: "implantologija-12",
          question: "Swelling",
          answer:
            "<ul><li>Swelling may occur several hours after the surgical procedure.</li><li>If you observe signs of swelling, place a cold compress against your cheek, alternating: 20 minutes cooling, 10 minutes pause.</li><li>Sleep with your head in an elevated position.</li></ul>",
        },
        {
          id: "implantologija-13",
          question: "Food & Physical activity",
          answer:
            "<ul><li>Soft foods are recommended</li><li>Avoid hot foods</li><li>Avoid physical activity and exposure to the sun for 48 to 72 hours after the procedure</li></ul>",
        },
      ],
    },
    ortodoncija: {
      slug: "ortodoncija",
      meta: {
        title: "Orthodontics - braces for teeth | Dental Centar Repić",
        description:
          "Fixed and removable braces. Orthodontic examination, therapy plan and treatment of misaligned teeth at Dental Centar Repić in Trogir.",
      },
      eyebrow: "MOBILE AND FIXED BRACES",
      title: "Orthodontics",
      lead:
        "Orthodontic therapy is indicated in cases of improper positioning of teeth and distribution of teeth. The proper contactbetween teeth enables the even distribution of chewing forces, which enables the proper transfer of force to the gums and bone. Also, the proper distribution of teeth makesit easier to maintain oral hygiene. Improperly positioned teeth are often exposed to the accumulation of plaque deposits, which threatens the health of teeth and periodontal tissues.",
      sections: [
        {
          heading: "How we carry out orthodontic treatment",
          paragraphs: [
            "The orthodontic apparatus can be mobile or fixed. Orthodontic therapy is performed in children, and also in adults in order to achieve a harmony of function and aesthetics. After the fixed orthodontic apparatus (braces) is installed, good oral hygiene and regular check-ups as instructed by the orthodontist are necessary. There is no age limit to installing an orthodontic apparatus. If you have already had orthodontic therapy and were not pleased with the results, or if you want a beautiful and healthy smile, age is no obstacle to orthodontic treatment.",
            "Thanks to her additional education in the United States (School of Dental Medicine, Department of Orthodontic, University of Connecticut HealthCenter)and Denmark (Aarhus University, Aarhus), orthodontic specialist Dr. Slavica Pejda Repić is specialised in the orthodontic treatment of adults. Every patient receives individual treatment. After a detailed clinical exam, review of x-rays and detailed analysis of intraoral photographs, a treatment plan is proposed for each patient. Thanks to the interdisciplinary work with endodontic and restorative dentistry specialist Dr. DarijoRepić,we are able to provide every patient with complete dental care, both during and after orthodontic treatment.",
            "Every patient, in addition to the detailed information about the state of their intraoral health, also receives complete written instructions on the function and maintenance of braces, and an appropriate set for maintaining oral hygiene.",
          ],
        },
        {
          heading: "Protocol of orthodontic examination and therapy plan",
          paragraphs: [
            "The first orthodontic exam includes a clinical examination of the oral cavity, teeth, bite, soft tissues and an analysis of the panoramic x-ray. If you do not have a panoramic x-ray, it can be taken here at the clinic with the newest digital x-ray machine with minimal radiation dose. For the purpose of diagnostics, we also take intraoral photographs using a specially adapted camera.",
            "After the initial diagnostic process, we will propose a therapy plan, that we will work out with the parents and the child.",
            "Following this, impressions are taken to create the study models in order to have archived data on the initial state of the bite prior to orthodontic therapy. We will also inform you of the costs and of the maintenance of the braces.",
          ],
        },
      ],
      faqs: [
        {
          id: "ortodoncija-1",
          question: "What does the orthodontist do?",
          answer:
            "<p>An orthodontist is a specialist the gives the diagnosis and conducts the therapy for irregularities in the order of teeth or their position in the jaw. They also work to prevent the appearance of orthodontic irregularities. Various orthodontic devices and braces are used to achieve this.</p>",
        },
        {
          id: "ortodoncija-2",
          question: "Why do I need orthodontic treatment?",
          answer:
            "<p>There are two main reasons for orthodontic treatment: function and aesthetics. From the functional side, orthodontic treatment improves the function of teeth and the jaw as a whole, and enables easier maintenance of oral hygiene. On the aesthetic side, a beautiful and attractive smile will impress both you and others, and will contribute to your self-confidence.</p>",
        },
        {
          id: "ortodoncija-3",
          question: "When is the right time to start orthodontic treatment?",
          answer:
            "<p>There are no time limits for orthodontic treatment. However, the earlier the orthodontic anomaly is detected and treated, the easier treatment will be. The American Orthodontic Association recommends that children have their first orthodontic exam at the age of 7 years.</p>",
        },
        {
          id: "ortodoncija-4",
          question: "How can I recognize an orthodontic anomaly?",
          answer:
            "<p>If you or your child has one of the anomalies shown on the figure below, we recommend you make an appointment to see an orthodontic specialist. Also, if your child is prone to sucking their thumb, this condition can also lead to the occurrence of orthodontic anomalies.</p>",
        },
        {
          id: "ortodoncija-5",
          question: "Orthodontic therapy – PAIN?",
          answer:
            "<p>The installation of the orthodontic apparatus is not painful. For certain patients, some minor pain or pressure may appear in the initial days after the braces are installed. Minor pain may also arise after control check-ups. Painkillers can be taken to alleviate these symptoms.</p>",
        },
        {
          id: "ortodoncija-6",
          question: "Duration of orthodontic therapy",
          answer:
            "<p>The duration of orthodontic therapy differs for each patient. The generally active state (of wearing braces) lasts from 6 to 30 months. After the completion of orthodontic therapy, it is necessary to wear a retainer for several months to one year, depending on the initial anomaly</p>",
        },
        {
          id: "ortodoncija-7",
          question: "Frequency of control check-ups",
          answer:
            "<p>Depending on the type of therapy, control check-ups take place every 4 to 10 weeks.</p>",
        },
        {
          id: "ortodoncija-8",
          question: "Will I have to have any teeth removed?",
          answer:
            "<p>If your teeth are really crowded, or if an individual tooth has been impacted (unerupted and hidden in the bone), then tooth extraction is a possible option in treatment.</p>",
        },
        {
          id: "ortodoncija-9",
          question: "Will I be able to play an instrument or play sports?",
          answer:
            "<p>Yes. Orthodontic treatment does not exclude you from these activities. Of course, if you are an athlete, wearing a mouth guard is recommended to avoid any injuries to the oral cavity and damages to the braces.</p>",
        },
        {
          id: "ortodoncija-10",
          question: "Will I have to visit my dentist?",
          answer:
            "<p>Of course, the control check-ups at the dentist are very important. Braces makes cleaning teeth more difficult, meaning more plaque can accumulate, increasing the risk of caries. Your dentist will help to avoid this through regular cleaning and check-ups.</p>",
        },
        {
          id: "ortodoncija-11",
          question: "Will I have to wear a retainer once the braces are removed?",
          answer:
            "<p>Almost always, the answer is YES. Once the orthodontic therapy is complete, it is necessary to wear a retainer for several months to a year, depending on the initial anomaly. Otherwise, your teeth could return to their initial state relatively quickly, and all the efforts invested by you and your dentist will be in vain. The wearing of a retainer will depend on the original anomaly.</p>",
        },
        {
          id: "ortodoncija-12",
          question: "Price of orthodontic therapy",
          answer:
            "<p>At your first examination you will receive a price quote for the orthodontic therapy. The price includes the initial cleaning of plaque and tooth polishing, the active treatment phases from start to finish, fitting the braces, check-ups, removal of the braces and the first set of retainers. A panoramic X-ray of the jaws is needed for the first examination; we take it at the clinic and it is included in the price.</p><p>We use either metal or aesthetic brackets, depending on the patient's choice. Aesthetic brackets give a more discreet appearance. We work with products from American Orthodontics, a renowned manufacturer of orthodontic materials, and will show you the options at your examination.</p>",
        },
      ],
    },
    protetika: {
      slug: "protetika",
      meta: {
        title: "Dental prosthetics - crowns and bridges | Dental Centar Repić",
        description:
          "Dental crowns and bridges: metal-ceramic, metal-free ceramic, zirconia and glass-ceramic. Dental Centar Repić, Trogir.",
      },
      eyebrow: "DENTAL PROSTHETICS",
      title: "Dental prosthetics",
      lead:
        "At the Repić Dental Centre, we pay special attention to preserving the function of teeth and the biting and stomatognatic system. Upon detailed clinical examination and analysis of x-rays of the teeth and jaws, we are then able to propose an individual prosthetic treatment plan for each patient, in order to compensate for one or more missing teeth. Depending on the clinical findings and the patient's budget, missing teeth can be replaced using mobile or fixed prosthetic solutions.",
      sections: [
        {
          paragraphs: [
            "Mobile prosthetic solutions (dentures) are best for patients with complete or partial toothlessness. There are several options for stabilizing the dentures in the mouth, such as: combined mobile/fixed dentures, telescopic crowns or implant-set prosthetics.",
            "Fixed prosthetic solutions include veneers, crowns, bridges and implant-set bridges.",
            "We use contemporary restorative materials that allow us to meet the patient's aesthetic and functional requirements. We are able to offer a range of materials for fixed prosthetic work, including:",
          ],
        },
        {
          heading: "Metal-ceramic crowns and bridges",
          paragraphs: [
            "have a long tradition in dental prosthetics, and are considered the standard in fixed prosthetic therapy. This type of crown or bridge is the most common choice of patients, due to their affordable price and the long-lasting materials. The metal frame of the crown or bridge protects the load-bearing teeth, while the ceramic aesthetically mimics the missing teeth. The metal base of the prosthetic structure is most often an alloy of cobalt, chrome and nickel, dental gold or titanium. The ceramic structure is attached in layers to the metal structure, where the ceramic forms a strong bond with the metal.",
            "Once the decision is made to use crowns or bridges, the dentist must first abrade the load-bearing tooth in order to ensure sufficient space for the prosthetic. The next step is taking the impression in order to make the prosthetic in the laboratory. In this step, the colour of the ceramic is selected in order to best mimic the natural teeth. After the prosthetic is made in the laboratory and tried in the dental clinic, the crown or bridge is first installed temporarily, and once the dentist confirms that the fit is right, it is permanently cemented onto the tooth.",
            "Metal-ceramic prosthetic solutions are appropriate for the replacement of one or more lost teeth, either in the front or back of the jaw. When properly positioned, they have both the appropriate mechanical and aesthetic properties.",
            "The main advantage of metal-ceramic crowns and bridges is their price, mechanical durability and long life. According to the literature, 90–95% of all metal-ceramic prosthetics last ten or more years in the mouth. They are somewhat less expensive than fully ceramic (metal-free) solutions.",
            "Shortcomings of metal-ceramic crowns and bridges are the limited aesthetic possibilities in comparison with fully ceramic (metal-free) systems. The reason for this is that the metal base is a dark grey colour. Due to the colour of the metal under the ceramic layers, the penetration of light is hindered, and the tooth colour may not appear sufficiently natural. Patients often complain about the dark edge of the structure along the gumline at the edge of the crown. After a certain amount of time, the metals at the base of the crown may release ions, that they enter into the gums. However, careful preparation (abrasion) of the load-bearing tooth can help to reduce the appearance of these undesired effects.",
          ],
        },
        {
          heading: "Fully ceramic crowns and bridges (metal-free ceramic)",
          paragraphs: [
            "Crowns and bridges made completely of ceramic are the alternative to metal-ceramic prosthetics. They are also called \"porcelain\" teeth. The aesthetic demands of patients in recent years are increasing, and are often key in making the decision on which prosthetic restoration technique to use in replacing missing teeth. Fully ceramic crowns and bridges perfectly mimic the appearance of natural teeth, making them superior to metal-ceramic structures. Unlike metal-ceramic structures, where the metal base hinders the penetration and diffusion of light, which affects the colour of the tooth, crowns and bridges made exclusively of ceramic have exceptional aesthetic properties that closely mimic the natural appearance of teeth. For patients, the procedure of making ceramic crowns is similar to the procedure for metal-ceramic crowns: tooth abrasion (for the dentist to make room for the replacement) and taking the impression that is sent to the laboratory. Meanwhile, the colour of the future replacement that best suits the patient's wishes and existing teeth is selected. Once the prosthetic is made, it is cemented onto the abraded teeth. While preparing for this type of replacement, abrasion is less extensive, and more of the healthy tooth tissue can be preserved. The computer-guided construction of these crowns and bridges ensures the perfect fit along the abraded tooth surface, making cleaning easier and reducing the accumulation of food between teeth and the gum inflammation that can result.",
            "The technological development of new materials enables excellent mechanical properties of metal-free ceramic structures, without losing any aesthetic function. In terms of mechanical properties and the duration of these structures, fully ceramic crowns and bridges are comparable to metal-ceramic systems. According to the literature, 91–97% of metal-free ceramic replacements last for five or longer years.",
            "Metal-free ceramics can be used to replace one or more lost teeth. Newer materials for completely ceramic fixed prosthetic replacements are made up of leucite reinforced lithium-disilicate ceramic, leucite or lithium-disilicate reinforced glass-ceramic and oxide ceramics such as aluminium-oxide ceramics and zirconium-oxide ceramics. The price of metal-free ceramic crowns and bridges is somewhat higher than metal-ceramic replacements, due to the more complex procedures involved in the clinic and in the laboratory.",
          ],
        },
        {
          heading: "Zirconia ceramic crowns and bridges",
          paragraphs: [
            "Zirconia (Zirconium dioxide) ceramic is a type of metal-free ceramic that is becoming more widely used in dental prosthetics due to its exceptional aesthetic and functional properties, especially for building fixed prosthetic replacements (crowns and bridges) at the front and back of the jaw. This material belongs to the group of the oxide ceramics and has a high resistance to breakage, wear and high temperatures, and against corrosion. Zirconia has been widely used in medicine and dentistry for more than 50 years. This material is used to make the femoral head in orthopaedics, while in dentistry, in addition to prosthetics, it is also used to build endodontic posts, orthodontic brackets and implant abutments.",
            "The base of the crown or bridge is made of zirconium dioxide, and ceramic layers are baked onto this. They are white in colour and do not appear along the edge of the replacement. Zirconium dioxide is a biocompatible material that does not cause an allergic reaction. It poorly conducts electricity and heat, thereby making teeth less sensitive. There are numerous outstanding qualities of zirconia ceramic structures: premium quality aesthetics, exceptional purity, biocompatibility, less abrasion of natural teeth required due to the high strength of the material (thickness of only 0.4 mm ensures sufficient strength). Due to its high strength and hardness, zirconia ceramic structures can be machine made from factory-built blocks. Thanks to computer-aided construction, the crown or bridge made from zirconia ceramic sits precisely on the abraded edge of the tooth, making it easier to maintain oral hygiene and reducing the possibilities of gum inflammation.",
            "In terms of its aesthetic properties, this type of material is an excellent choice as it perfectly mimics the natural transparency and colour of teeth, and the high strength compares to the strength of the strongest metals. The mechanical properties of zirconia ceramic are comparable to metal-ceramic replacements, while they better mimic the natural appearance of teeth. The final colour of the prosthetic is determined by the thickness of the ceramic, thickness and colour of the cement and colour of the abutment. Due to its high strength, it is also possible to create very thin prosthetic replacements out of this material (with a thickness of the base construction of just 0.3 mm in the front of the jaw and 0.6 mm in side segments), thereby ensuring translucence and aesthetics of the material. It is suitable for use in both the front and back parts of the jaw, and can be used to create large prosthetic restorations to compensate for a larger number of missing teeth.",
            "The price of zirconia ceramic crowns and bridges is somewhat higher than metal-ceramic crowns and bridges, due to the more complex construction procedure in the clinic and the laboratory. The abrasion, taking the impression and cementing of the final prosthetic must be absolutely precise, in order to the prosthetic replacement (crown or bridge) to fit exactly against the abraded tooth.",
          ],
        },
        {
          heading: "Glass-ceramic: E.max and Empress",
          paragraphs: [
            "Glass-ceramic is a type of completely ceramic material that is used to make prosthetic replacements. The high aesthetic demands of patients who are becoming increasingly educated about these procedures are not met by those prosthetic materials used in the past. The intensive development of material technology has led to the creation of sufficiently strong glass-ceramic materials with exceptional aesthetic features. Glass-ceramic, like any material, has its limitations, and one should be familiar with them in order to obtain the best possible effect.",
            "Glass-ceramic is created through the controlled crystallization of glass. There are several types of glass-ceramic that differ by their properties: IPS Empressceramic (leucite reinforced glass-ceramic), IPS Empress 2 ceramic (ceramic with a lithium disilicate core, stronger and more resilient than the former type) and IPS E.max ceramic, which has a similar structure to IPS Empress 2 ceramic (lithium disilicate core) but is must stronger than the two previous types of glass-ceramic.",
            "E.Max Press or Empress crowns and bridges are fully ceramic crowns and bridges constructed of lithium disilicate ceramic. The high translucency of lithium disilicate ceramics enables exceptional aesthetics and is particularly indicated for prosthetic restoration in the aesthetic zone of the jaw (area visible while smiling). It is stronger than other types of glass-ceramic and is indicatorid for prosthetic work in the front part of the jaw, for individual crowns or three-tooth bridges ending at the second bicuspid tooth, and for individual crowns in the front or rear part of the tooth arch, veneers and indirectly laid fillings (inlay, onlay). E.Max ceramics are produced in a wide range of colours and therefore are able to closely mimic the natural appearance of teeth.",
            "Three factors will influence the final colour of the prosthetic: colour of the abraded tooth base, colour of the cement and colour of the crown. In some cases, the use of lithium disilicate ceramic is not simple, due to the differing colours of the abraded tooth base that might appear through the crown material. However, by knowing the properties of the material and the preparation techniques, such issues can be resolved to the mutual satisfaction of the patient and the dentist. A combination of different colours and cement transparency can be adjusted to achieve the same colour as the crown, even when the colour of the abraded teeth is not uniform. After the final cementing of the crown onto the abraded teeth, the connections between the crown and the tooth are then polished, in order to make maintaining oral hygiene easier.",
            "To achieve a functional and aesthetically pleasing result, it is important to properly determine the indications for this type of prosthetic. The mechanical properties of the E.Max crowns is slightly lower than zirconia ceramic, and these types of prosthetic replacements are not recommended for large prosthetic work in the back section of the mouth. They are best applied for individual crowns or three-tooth bridges in the front of the tooth arch up until the second bicuspid, and for individual crowns in the front of back of the tooth arch; for veneers and indirectly made fillings (inlays, onlays).",
          ],
        },
      ],
      faqs: [
        {
          id: "protetika-1",
          question: "How long with crowns last in the mouth?",
          answer:
            "<p>That is a difficult question to answer. The duration of crowns of all types of materials, in Croatia and abroad, for a 10-year period is from 85–95%, which is considered successful prosthetic work. However, numerous factors will influence the duration of prosthetic work, such as regular check-ups and maintaining oral hygiene, the condition of the load-bearing tooth and the gums, the proper selection of the prosthetic for a specific case, and the proper construction of the prosthetic. Due to all these factors, the duration will vary from patient to patient.</p>",
        },
        {
          id: "protetika-2",
          question: "How to maintain the hygiene of crowns and bridges?",
          answer:
            "<ul><li>Patients occasionally incorrectly assume that their teeth are protected by the \"covers\", i.e. crowns and bridges, and that oral hygiene therefore does not need to be intensive. This couldn't be further from the truth. Through diligent oral hygiene and regular check-ups at the dentist, patients can significantly contribute to the long life of the prosthetic in the mouth, and the health of the rest of the teeth in the oral cavity.</li><li>Crowns and bridges should brushed the same way as natural teeth – from the right upper quadrant to the left upper quadrant, and the left lower quadrant to the right lower quadrant. It is necessary to cover all surfaces of the teeth and replacements, for a total duration of three minutes. A circular motion of brushing is recommended, and the final brush stroke should be from \"red to white\", or from gums to teeth, in order to prevent the retraction of the gums after fixed prosthetic therapy. Numerous aids are available to facilitate the hygiene of prosthetic work, such as interdental floss, electric toothbrushes, oral water showers, interdental brushes. Plaque detectors are sold widely and give information about the quality of brushing. We will be happy to teach you how to properly maintain oral hygiene in order to extend the life of your replacements, to our mutual satisfaction.</li></ul>",
        },
      ],
    },
    "estetska-dentalna-medicina": {
      slug: "estetska-dentalna-medicina",
      meta: {
        title: "Aesthetic dental medicine | Dental Centar Repić",
        description:
          "Tooth whitening, ceramic veneers, Smile Design, tooth jewellery and air polishing. Aesthetic dental medicine at Dental Centar Repić in Trogir.",
      },
      eyebrow: "FOR YOUR HEALTHY AND BEAUTIFUL SMILE",
      title: "Aesthetic dental medicine",
      lead:
        "Our imperative is to make it possible for every patient to have a lovely and healthy smile. Aesthetic dentistry includes a series of procedures used to create a beautiful smile, while also following certain guidelines to achieve complete harmony between the soft and hard structures of the teeth. Aesthetic dentistry procedures are an integration of various specialist branches of dentistry (orthodontics, periodontology, prosthetics, implantology, and restorative dental medicine), aimed at correcting deviations from aesthetic parameters and achieving the function and aesthetics of healthy teeth. Research has shown that aesthetic dental procedures have a strong psychological effect on patients, and can result in increased self-confidence and improved quality of life.",
      sections: [
        {
          paragraphs: [
            "Patients who are satisfied with the size and shape of their teeth, but wish only to freshen up their appearance or need only minor corrections, can achieve a brilliant smile with minimally invasive aesthetic procedures that we perform at our clinic.",
          ],
        },
        {
          heading: "Treatments we offer",
          bullets: [
            "Tooth whitening",
            "Ceramic veneers",
            "Smile Design",
            "Tooth jewellery",
            "Air polishing",
          ],
        },
      ],
    },
    endodoncija: {
      slug: "endodoncija",
      meta: {
        title: "Endodontics - root canal treatment | Dental Centar Repić",
        description:
          "Treatment of tooth inflammation and root canals, with machine canal preparation and X-ray verification at Dental Centar Repić in Trogir.",
      },
      eyebrow: "ROOT CANAL TREATMENT",
      title: "Endodontics",
      lead:
        "This is a specialist discipline in dental medicine that deals with the endodontic (internal) treatment of the tooth. In dental specialisation, this field is closely associated with restorative dentistry and cariology. Restorative dentistry and cariology treat the disorders of the hard tooth tissue (dentin), while advanced inflammatory changes to the pulp of the tooth, or the soft tissue, requires treatment of the root canal. This is performed using endodontic treatment, and is often called endodontics.",
      sections: [
        {
          heading: "Why does a tooth hurt?",
          paragraphs: [
            "A toothache is an unpleasant symptom that most of the population has experienced at least once in their lifetime. A tooth can hurt for a number of reasons. Occasionally, the cause is thinned dentin, inflammation in the periodontal or periapical tissue, inflammation in the surrounding tissues of the oral cavity such as the sinuses, in which case the pain is reflected in the tooth, or due to a painful inflammation of the tooth (dental pulp) itself. In some cases, it is not easy to determine the source of the pain, and the dentist needs to perform a detailed examination and perform clinical tests and an x-ray. Once the cause is identified, the proper course of treatment can be determined.",
          ],
        },
        {
          heading: "How does tooth inflammation occur?",
          paragraphs: [
            "Inflammation of the dental pulp (also called pulpitis) can occur due to various causes, such as deep caries, grinding of the teeth or an improper bite that overloads the tooth. When a tooth becomes inflamed, the blood vessels within the pulp expand, increasing the capillary permeability and releasing fluid into the surrounding areas, which increases the pressure within the tooth. The tooth pulp is often also called the tooth nerve, though this tissue within the pulp chamber actually includes blood and lymph vessels and nerve fibres. Since the pulp chamber is a solid structure that cannot expand, any increases in pressure within the chamber create pressure upon the nerve fibres in the pulp, and the result is pain. Pain caused by an inflamed tooth can vary in character, and can expand or reflect in the surrounding structures. For example, pain in the teeth of the lower jaw may be felt in the ear, while pain in teeth in the upper jaw typically expand towards the eye. In reversable inflammations of the tooth (tooth pulp), this pain is temporary, and appears upon stimulation (hot, cold, when biting), and disappears when the cause is removed. However, in irreversible inflammations of the tooth (tooth pulp), the pain is spontaneous and almost always present. Other symptoms of tooth inflammation can be enlarged lymph nodes near the affected tooth, leakage of fluid from a fistula on the gums, loosening of the tooth, swelling around the tooth, fever, and generally feeling unwell. When the tooth inflammation is not treated, the infection can spread through the root canal into the surrounding bone, creating a granuloma. The granuloma destroys the surrounding bone, and the infection can even spread through the blood to the rest of the body.",
          ],
        },
        {
          heading: "How is tooth inflammation treated?",
          paragraphs: [
            "Tooth inflammation or infection is treated depending on the cause. In reversible inflammation of the tooth pulp, it is sufficient to remove the cause (caries, excessive contact between teeth, stripped tooth tissue) and to fix the tooth with a filling. After this, the symptoms should subside.",
            "For irreversible inflammation of the tooth pulp, it is not sufficient just to fill the tooth, and endodontic treatment is required",
          ],
        },
        {
          heading: "What is endodontic treatment?",
          paragraphs: [
            "Endodontic procedures (also called endodontics) is the treatment of the root canal of the tooth, for the purpose of preserving the tooth in the oral cavity. The procedure of treating the root canal implies the removal of the tooth pulp (also called extraction of the tooth nerve), and cleaning and rinsing out the tooth canal using special manual or power instruments, and fluids for rinsing out the canal to remove any remaining bacteria or inflammatory products, and to disinfect the canal. Following this, the root canal is filled with the appropriate fillers. Treating the root canal requires a dry and sterile work area in order to prevent the penetration of bacteria from the oral cavity into the bone. The foundation for any further treatment lies in the proper treatment of the root canal. Following endodontic treatment, the tooth can also serve as an anchor for minor prosthetics, which can result in a long-term delay for the need for larger prosthetic work or implants. Wherever possible, it is always best to try to save the tooth, as the natural tooth is always the best solution.",
            "It is our duty to ensure that endodontic procedures are painless, and this is achieved using local anaesthetic. Depending on the complexity of the condition, several visits to the clinic may be necessary to ensure complete treatment of the tooth. Only properly executed treatment at every step will ensure the success of the endodontic treatment. Following the completion of endodontic treatment, the tooth will be sensitive to pressure for a while, which is a typical side effect of the treatment, though it is important that the pain and sensitivity of the tooth will gradually subside. If necessary, take painkillers. The symptoms should subside within a few days.",
            "Our clinic is equipped with the most modern devices that allow us to precisely measure the length of the canal, and to perform machine treatment of root canals. The final filling of the root canal is verified using x-ray imaging. In this way, we can ensure that your tooth is fully treated in the shortest possible time period, to avoid any unnecessary trips to the clinic.",
          ],
        },
        {
          heading: "Endodontic instruments",
          paragraphs: [
            "The endodontic procedure is the treatment of the root canal of the tooth, which requires the extraction of the tooth pulp (i.e. tooth nerve), followed by cleansing, expanding the rinsing out the root canal using special hand instruments with fluids for rinsing out the canal. The success of endodontic treatment is directly associated with the effective biomechanical preparation of the tooth root canals. Mechanical tooth root cleaning is not enough on its own; chemical rinsing is also required using a special fluid that can remove material from the canal, including organic and inorganic debris. This will allow the fillers to better adhere to the walls of the tooth root, sealing it closed to prevent any further inflammation of the tooth. The root canals are filled with a combination of gutta-percha and cement. This is the final step of the endodontic treatment. Finally, the tooth is sealed with a filling or a crown, depending on the amount of tooth tissue lost.",
            "Endodontic instruments can be made of stainless steel or a nickel-titanium alloy. Both hand and power instruments in endodontics, if performed in accordance with the rules of the profession, can be equally successful in the treatment of teeth, though with the advancements in technology, hand endodontics is increasingly making way for power instruments that have numerous advantages for patients. Endodontic instruments are a contemporary dental technique for the cleaning and expansion of root canals, and the canals are then cleaned using both hand and power instruments. The procedure using power instruments is similar to manual endodontics, i.e. once the tooth is open and the pulp removed, it is necessary to measure the length of the canal using an endometer, and then the cleaning and shaping of the canal is possible using different attachments of the instruments. Cleaning and shaping the root canal is an essential part of the endodontic treatment. Power instruments for endodontics mimic the work of hand instruments, but are much faster and more effective. Cleaning and expanding the root canal using hand instruments can be demanding and is often a long-lasting phase of endodontic treatment. Power endodontics is painless and more comfortable for the patient, as it reduces the duration of tooth treatment. It shortens the time of each individual visit and the number of visits needed for endodontic treatment. There are various techniques of power endodontics, depending on the construction of the instrument used. Instruments may have two types of motion: rotary or reciprocal. Nickel-titanium instruments used in power endodontics vary in their design, construction and mechanical properties, and are present on the market under various names, depending on the manufacturer and product line, e.g. ProTaper Universal, ProTaper Next, HyFlex CM, etc. The use of nickel-titanium instruments in power endodontics has resulted in a revolution in the treatment of root canals, thereby accelerating the process of cleaning and shaping the canal, and reducing the likelihood of error, such as straightening the canal shape or perforation of the canal. Nickel-titanium instruments are flexible and elastic, and easily follow the natural shape of the root canal. They are quite resilient against breakage (breakage incidence in clinical practice ranges from 0.3–23%) and after use return to their original shape (e.g. memory effect). Due to their elasticity, they can enter into the narrow and bent sections of the canal and expand them, to give them a more regular shape, thereby facilitating the subsequent filling of the canal. Power endodontic nickel-titanium instruments enable constant rotation at a low rotation speed. This reduces the possibility of instrument breakage and allows faster and easier shaping of the canal in comparison to hand nickel-titanium endodontic instruments. Power or hand endodontic instruments enable the cleaning, expansion and shaping of the canal, making subsequent filling easier, and treatment of the tooth faster. The advantage of power endodontics is the faster and easier procedure, and the lower possibility of error during use of the instruments in the canal, which increases the success rate of endodontic treatment.",
          ],
        },
      ],
    },
    parodontologija: {
      slug: "parodontologija",
      meta: {
        title: "Periodontology - periodontitis treatment | Dental Centar Repić",
        description:
          "Scaling, initial periodontal therapy and periodontal surgery at Dental Centar Repić in Trogir.",
      },
      eyebrow: "PERIODONTOLOGY",
      title: "Periodontology",
      lead:
        "Periodontology is a branch of dental medicine that deals with preserving the health of the supporting apparatus of the teeth. The supporting apparatus is the surrounding bone, gums (gingiva) and the periodontal ligament that holds the tooth to the bone.",
      sections: [
        {
          paragraphs: [
            "According to some research, 75% of the adult population has signs of periodontal disease, independent of their race and socioeconomic status. Of these, almost 30% have severe forms and chronic periodontitis. This is the most common reason for tooth loss amongst adults. Research has shown there are connections between periodontal disease and other conditions such as diabetes, cardiovascular disease and pulmonary disease. Untreated periodontitis in pregnancy has also been associated with a lower birth weight of newborns and early birth.",
            "At Repić Dental Centre, we perform the professional removal of tooth deposits and plaque using sonic and ultrasonic instruments, sanding and polishing. We also perform initial periodontal therapy and periodontal surgical procedures as needed to keep your teeth fully functional for as long as possible.",
          ],
        },
        {
          heading: "How does periodontitis arise?",
          paragraphs: [
            "The basic factors for the development of periodontitis is an increasing number of bacteria in the mouth, and an inadequate immunological response by the host. The increasing number of bacteria may be due to poor maintenance of oral hygiene or reduced secretion of saliva, which has a natural protective function. The immunological response of the host weakens under the influence of different systematic diseases, due to stress, or from smoking. The consequence of these factors is the occurrence of periodontal disease, which leads to inflammation and decay of the supportive apparatus of teeth, primarily the bone, gums and periodontal ligaments.",
            "In the early phases of the disease, there are no symptoms, and this is why it is important to make regular visits to the dentist, in order to discover the disease as early as possible. The earlier periodontal disease is discovered, the greater the possibility for treatment and the more teeth can be saved.",
          ],
        },
        {
          heading: "How is periodontitis treated?",
          paragraphs: [
            "The objective of treating periodontitis is to reduce the number of bacteria in the mouth, to remove the biofilm (organised structure of bacteria on teeth) off the surface of teeth, and to improve the immunological response of the host, in order to prevent the disease from advancing.",
            "Good oral hygiene and regular professional plaque removal are key for the prevention and treatment of periodontitis. Brushing with a toothbrush and toothpaste is necessary at least twice a day, with the mandatory use of dental floss or a water shower (to clean the narrow spaces between the teeth) and interdental brush (for the wider spaces between the teeth).",
            "Initial periodontal therapy involves removal of dental plaque and deposits on the teeth, above and below the gumline, using an ultrasonic apparatus. This is followed by deep mechanical cleaning and polishing of the tooth roots.",
            "Periodontal and surgical therapy is indicated for advanced cases of periodontitis as it enables access and removal of deposits from teeth in deep periodontal pockets. The use of regenerative surgical procedures enables the supporting apparatus of the teeth to be regenerated. This procedure can improve the long-term prognosis of teeth affected by periodontitis. It is also used to restore the aesthetically acceptable anatomy of teeth and the surrounding gums. Periodontal disease can lead to the retraction of the gums, increasing the sensitivity of tooth roots, and the use of regenerative periodontal therapy can help to cover the tooth roots, thereby reducing their sensitivity.",
          ],
        },
        {
          heading: "How to recognise the signs of periodontitis",
          bullets: [
            "Bleeding of the gums",
            "Swelling of the gums, redness and pain",
            "Retraction of the gums",
            "Secretion or pus from the gums",
            "Tooth migration and increased spaces between the teeth",
            "Loosening of the teeth",
            "Bad breath",
          ],
        },
      ],
    },
    "oralna-kirurgija": {
      slug: "oralna-kirurgija",
      meta: {
        title: "Oral surgery - tooth extraction, alveotomy and apicoectomy | Dental Centar Repić",
        description:
          "Tooth extraction, wisdom tooth removal by alveotomy and apicoectomy under local anaesthesia at Dental Centar Repić in Trogir.",
      },
      eyebrow: "TOP ORAL SURGERY SERVICE",
      title: "Oral surgery",
      lead:
        "At Dental Centar Repić, oral surgery is performed by award-winning doctors with many years of practice",
      sections: [
        {
          paragraphs: [
            "Oral surgery is the surgical branch of the dental profession. It includes the extraction of teeth, the extraction of impacted or retained teeth through the alveotomy procedure, operations on bone cysts in the upper and lower jaws, apicoectomy, frenectomy, the placement of dental implants in the jaw and sinus lift in the upper jaw. The most common surgical procedure is extraction (tooth removal). Despite the great efforts of the profession and patients to keep teeth in the mouth for as long as possible, there are cases when a tooth needs to be removed, either due to a deep cavity, breakage of the tooth, or periodontal disease.",
            "Tooth extraction is a routine surgical procedure that is performed under local anaesthesia. Before any surgical procedure in the oral cavity, the oral surgeon takes a detailed medical history of the patient. It is necessary to list any and all medications the patient is taking, to prevent their impact on bleeding during and after the procedure, and on the healing of the wound. After the surgical procedure, the wound is sutured or left open to heal on its own. The patient receives instructions on recommended procedures to reduce swelling and pain, and a check-up at the dentist is recommended one week later, to check on the healing of the wound and to remove any stitches.",
          ],
        },
        {
          heading: "What is alveotomy?",
          paragraphs: [
            "In addition to the simple extraction of teeth, we also extract impacted and retained teeth using the alveotomy procedure. Any tooth in the jaw can be impacted or retained. An impacted tooth cannot erupt into its position in the jaw due to a mechanical obstacle blocking its path, while a retained tooth does not erupt for reasons that are not mechanical. The most commonly impacted teeth are the third molars, commonly called wisdom teeth. Where the bone above the crown of the impacted tooth is connected with the oral cavity, cleaning the dental arch becomes more difficult, and this may result in inflammation of the surrounding gums, called pericoronitis. If an impacted or retained tooth causes problems for the patient, its extraction by alveotomy is recommended.",
            "Alveotomy is an oral surgery procedure performed under local anaesthetic, making it completely painless for patients. The patient is conscious the entire time and can communicate with the oral surgeon. Before performing alveotomy, the oral surgeon takes a complete medical history of the patient. It is important to list any and all drugs the patient is taking, in order to prevent any influence on bleeding during and after the procedure, and on the healing of the extraction wound. Alveotomy begins with the injection of a local anaesthetic. Following this, the surgeon makes an incision with a scalpel. The jaw bone is drilled open in order for the oral surgeon to be able to access the surgical area, and the tooth remaining in the jaw is removed from the bone using special surgical instruments (chisel, lever), with minimal trauma to the surrounding tissue. After the procedure, the wound is sutured for easier healing, and the patient receives post-surgical instructions. One week later, the patient comes into the clinic for a check-up and removal of the stitches.",
          ],
        },
        {
          heading: "What is apicoectomy?",
          paragraphs: [
            "Apicoectomy is an oral surgery procedure that involves the removal of the root tip of an endodontically treated tooth. It is performed by an oral surgery specialist. Apicoectomy is performed when the endodontic treatment of a tooth did not end the painful symptoms and inflammation of the tooth, or when even repeated endodontic treatment did not result in the retraction of a granuloma on the tip of the root, as confirmed by X-ray. It is then recommended that the oral surgeon remove the tip of the tooth root (apicoectomy), so that the tooth can remain in the jaw.",
            "This procedure is performed under local anaesthesia, making it completely painless. Prior to the apicoectomy, the oral surgeon takes a complete medical history of the patient. It is important to list any and all drugs the patient is taking, in order to prevent any influence on bleeding during and after the procedure, and on the healing of the wound. A detailed description of the apicoectomy procedure is as follows: the first step is the administration of the local anaesthetic. During the entire procedure, the patient is conscious and can communicate with the oral surgeon. Once the area is anaesthetised, the oral surgeon makes a horizontal incision at the level of the root tip of the affected tooth, and opens the bone with a drill in order to access the affected area. The tip of the affected root is removed, and any inflamed tissue in the bone is scraped off. If needed, the root can also be filled endodontically from its tip to ensure the canal is sealed, and then the wound is sutured closed. The procedure takes from 30 to 60 minutes, depending on the thickness of the bone in the part of the mouth where it is being performed. Afterwards the scar is barely visible, and the bone defect fills in within several months.",
            "Apicoectomy is performed when endodontic treatment is not sufficient to repair the inflammatory processes within the bone due to the spread of infection from the root canal, or when there are oral cysts connected to the tooth root. After the apicoectomy, the tooth root is a little shorter, though the tooth remains in the jaw and retains its function and aesthetics.",
          ],
        },
      ],
      faqs: [
        {
          id: "oralna-kirurgija-1",
          question: "When should impacted or retained teeth be extracted?",
          answer:
            "<ul><li>with repeated pericoronitis</li><li>with abscesses</li><li>with disease of the tooth pulp or periodontium</li><li>with extensive destruction of the tooth by caries</li><li>with resorption of the roots of the neighbouring teeth</li></ul>",
        },
        {
          id: "oralna-kirurgija-2",
          question: "What are the symptoms of pericoronitis?",
          answer:
            "<ul><li>pain that spreads into the ear and jaw joint</li><li>difficulty opening the mouth (lockjaw, trismus)</li><li>difficulty swallowing</li><li>swollen lymph nodes under the edge of the jaw and on the neck</li><li>release of pus when the swollen tissue above the tooth is pressed</li></ul>",
        },
        {
          id: "oralna-kirurgija-3",
          question: "What are the contraindications for alveotomy?",
          answer:
            "<ul><li>a tooth that does not cause local or systemic problems</li><li>older age of the patient (the bone has a poorer blood supply)</li><li>a compromised medical history of the patient</li></ul>",
        },
        {
          id: "oralna-kirurgija-4",
          question: "What can I do to lessen the pain and swelling after tooth extraction?",
          answer:
            "<p>Cool the outside of the face over the extraction site, eat only lukewarm and soft foods, and do not consume anything hot or carbonated for the next few days. Smokers should avoid smoking to allow the wound to heal faster and better. If needed, take a painkiller, though avoid products containing acetylsalicylic acid (Andol, Aspirin), as they can prolong bleeding from the wound.</p>",
        },
      ],
    },
    "rtg-dijagnostika": {
      slug: "rtg-dijagnostika",
      meta: {
        title: "X-ray diagnostics - single-tooth and panoramic X-rays | Dental Centar Repić",
        description:
          "Digital single-tooth and panoramic X-rays with up to 90% less radiation, taken just before or after your procedure, at Dental Centar Repić in Trogir.",
      },
      eyebrow: "X-RAY DIAGNOSTICS (INTRAORAL AND PANORAMIC X-RAYS)",
      title: "X-ray diagnostics",
      lead:
        "Single-tooth and panoramic X-rays with modern digital imaging and the lowest radiation doses",
      sections: [
        {
          paragraphs: [
            "X-ray images of the teeth and jaws are an important diagnostic tool in all areas of dental medicine, as they provide insight into all the anatomical and pathological formations in the bone that cannot be seen during the clinical examination. They are essential for the planning of virtually every procedure in dental medicine.",
            "Earlier conventional X-ray systems gave poor insight into the bone structure, with much higher exposure to radiation for both the patient and the technician. With the development of digital X-ray technology, the radiation dose has been reduced substantially, and image handling is now much simpler. The modern digital technology at Dental Centar Repić guarantees the lowest radiation dose (up to 90% less radiation compared to classical X-ray images). Our patients are also able to have X-rays just before or after the procedure, in order to avoid the need for multiple visits.",
            "Dental Centar Repić also offers X-rays of a single tooth (intraoral retroalveolar images) and of both jaws (panoramic X-ray or orthopantomogram). Intraoral images show a single tooth in its actual size. One retroalveolar image can show one tooth, or that tooth with its two neighbouring teeth. The orthopantomogram (panoramic X-ray) is the most common image used in dental medicine, as it enables the detection of pathological processes at the tips of the tooth roots, gives an overview of the state of the bone in cases of periodontitis, and shows caries on teeth. The radiation dose of the orthopantomogram can be adjusted for children, since this image is important for planning orthodontic therapy.",
            "Patients' images are stored on the computer so that they are accessible at any time, and can be sent to the patient by email upon request. Digital storage enables the images to be processed using a range of software tools (to sharpen, enlarge, reduce, colour, measure and perform additional diagnostics), in order to obtain additional insight into the state of the patient's oral health and make it easier for the dentist to reach the right diagnosis.",
            "In all treatment rooms, the computers are connected to a central database, so all digital radiological data are available at any time, in any room. This system has substantially reduced the time needed for analysis, enabling better quality consultations between specialists and the patient.",
            "X-rays are not recommended for pregnant women, especially in the first trimester.",
          ],
        },
      ],
    },
    "djecja-dentalna-medicina": {
      slug: "djecja-dentalna-medicina",
      meta: {
        title: "Pediatric dentistry - a dentist for children | Dental Centar Repić",
        description:
          "A first dental visit around age 1, fluoride treatment, fissure sealing and painless anaesthesia for children at Dental Centar Repić in Trogir.",
      },
      eyebrow: "DENTAL CARE FOR CHILDREN",
      title: "Pediatric dentistry",
      lead:
        "We place exceptional importance on preserving the oral health of children",
      sections: [
        {
          paragraphs: [
            "Visiting the dentist at an early age results in the development of good oral hygiene habits, and it is also important for removing fears, both in childhood and later on in life. The best time for the first visit to the dentist is around the age of 1.",
            "Through play and communication appropriate for the child's age, we aim to make dental procedures fun and minimally traumatic. We coat the teeth of the youngest children with a fluoride gel to prevent cavities. This method is completely painless for children.",
            "We educate parents on the importance of repairing milk teeth, in order to prevent later problems with permanent teeth and orthodontic anomalies that can arise from the early loss of milk teeth. We seal young permanent teeth to prevent caries from forming in their fissures over a longer period of time. Fissure sealing does not require any drilling of the teeth.",
            "Where teeth need to be drilled to remove caries, we use painless methods of administering anaesthetic. We first coat the injection site with an anaesthetic gel to ensure that the injection is painless.",
            "Through the multidisciplinary approach of our specialists Dr. Dario Repić and Dr. Slavica Pejda Repić, a specialist in orthodontics, we provide you and your child with the best advice and the optimal treatment. We pay particular attention to preventive dentistry as your child grows and develops, in order to prevent certain orthodontic anomalies and unpleasant experiences at the dentist's.",
            "For a successful tooth repair, young patients are awarded a diploma for bravery or a certificate of praise.",
          ],
        },
      ],
    },
  },

  serviceDetailChrome: {
    backToServices: "All services",
    faqHeading: "Frequently asked questions",
    relatedHeading: "Other services",
    cta: {
      heading: "Have a question about this treatment?",
      subheading:
        "Call us or book an appointment — the first examination is free, and we agree the treatment plan together with you.",
      primaryButton: "Book your appointment",
    },
    availableInLabel: "Available in Croatian and English",
  },

  faqs: [
    {
      id: "prvi-pregled",
      question: "Is the first examination free?",
      answer:
        "<p>Yes. Your first visit and examination at Dental Centar Repić are free of charge.</p><p>During the examination we assess the condition of your teeth and gums, take X-rays if needed, and propose a treatment plan with an estimate of the time and cost involved, so you can decide without obligation.</p>",
    },
    {
      id: "termin",
      question: "How do I book an appointment?",
      answer:
        "<p>You can book an appointment in two ways:</p><ul><li><strong>By phone:</strong> +385 21 796 241, weekdays from 8:00 to 20:00</li><li><strong>By form:</strong> fill in the form on the Contact page and we will get back to you within working hours</li></ul><p>If you need urgent treatment, please call us by phone.</p>",
    },
    {
      id: "usluge",
      question: "What services do you provide?",
      answer:
        "<p>We provide a complete dental service in one place:</p><ul><li>Implantology and dental prosthetics (crowns, bridges)</li><li>Orthodontics — fixed and removable braces</li><li>Endodontics — root canal treatment and treatment of tooth inflammation</li><li>Aesthetic dental medicine — whitening, ceramic veneers, Smile Design</li><li>Oral surgery and periodontology</li><li>X-ray diagnostics and pediatric dentistry</li></ul>",
    },
    {
      id: "strah-od-zubara",
      question: "I'm afraid of the dentist. How can you help?",
      answer:
        "<p>Fear of the dentist is common and entirely understandable, and we treat it successfully.</p><p>We work without pressure, explain every step in advance and adjust the pace to you. We place special emphasis on working with children, so they feel comfortable from their very first visit.</p>",
    },
    {
      id: "djeca",
      question: "Do you treat children?",
      answer:
        "<p>Yes, pediatric dentistry is one of our services.</p><p>The clinic is family friendly, and our dentists and staff are particularly dedicated to working with our youngest patients — the goal is for a child to build trust and have a positive experience from the first visit.</p>",
    },
    {
      id: "dentalni-turizam",
      question: "I'm coming from abroad. Can you arrange treatment?",
      answer:
        "<p>Yes. Our location in the immediate vicinity of the old town of Trogir, a UNESCO World Heritage site, is ideal for patients who want to combine a holiday with dental care.</p><ul><li>Prices are up to 5 times lower than standard European prices</li><li>We adapt the treatment plan to the length of your stay</li><li>Our team helps organise your arrival and stay in Trogir</li></ul><p>Send us an enquiry with your planned dates and we will prepare a proposed treatment plan.</p>",
    },
    {
      id: "radno-vrijeme",
      question: "When are you open?",
      answer:
        "<p>We are open Monday to Friday, from 8:00 to 20:00.</p><p>We are closed on Saturdays and Sundays. For appointments and enquiries call +385 21 796 241 or send us a message using the form.</p>",
    },
    {
      id: "lokacija",
      question: "Where are you located?",
      answer:
        "<p>We are at Rimski put 3J, 21220 Trogir, in the immediate vicinity of the old town.</p><p>The location is easy to reach, and the clinic is wheelchair accessible.</p>",
    },
  ],
};
