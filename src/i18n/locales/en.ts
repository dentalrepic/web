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
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
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
      heading: "People behind your care",
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
      title: "People you\ncan trust.",
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
    // Patient reviews, translated from the Croatian originals; quoted with permission.
    reviews: {
      heading: "Patient experiences",
      intro: [
        "Trust we build with every visit.",
        "Our patients' experiences reflect what matters to us: expertise, professionalism, a caring approach and quality of service.",
      ],
      items: [
        {
          name: "Toni Vešović",
          text:
            "Dental Centar Repić is one of the rare dental practices where the service is always top-notch. The staff are professional and attentive, but also cheerful and smiling. I had a couple of teeth repaired and an implant placed three years ago, and I can say I am still happy with the work.",
        },
        {
          name: "Zorana Barada",
          text:
            "Besides repairing tooth decay, they successfully take away the fear of the dentist.",
        },
        {
          name: "Joško Herceg",
          text:
            "Excellent doctors, expert and professional. All praise for their work with children too.",
        },
      ],
    },
  },

  services: {
    meta: {
      title: "Services - Complete Dental Service | Dental Centar Repić",
      description:
        "Implantology, orthodontics, endodontics, dental prosthetics, aesthetic dental medicine, oral surgery, periodontology, X-ray diagnostics and pediatric dentistry.",
    },
    hero: {
      eyebrow: "Dental Centar Repić - Trogir",
      title: "From prevention\nto complex treatment.",
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
      title: "Get in touch\nwith confidence.",
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
      title: "Implantology",
      lead:
        "Dental implants are a routine procedure that replaces lost teeth without any work on the neighbouring teeth.",
      sections: [
        {
          heading: "What are dental implants",
          paragraphs: [
            "With dental implants we replace one or more lost teeth in the upper or lower jaw. The implants replace the tooth root and, over 3 to 6 months, go through osseointegration (anchoring in the bone). During this time the patient is not left without teeth but wears a temporary replacement that provides appearance and function until the final prosthetic work is made. The final work can be a single crown on an implant, a bridge on implants or a denture on implants. An implant in the bone also helps preserve the amount of bone, that is, the alveolar ridge: it stimulates the bone much as a natural tooth does, so the bone does not shrink, which otherwise follows the loss of a tooth.",
          ],
          bullets: [
            "Permanent solution",
            "Full return of tooth function",
            "Natural and beautiful-looking teeth",
            "Improved appearance of the whole face",
            "Prevention of bone loss",
            "Normal maintenance",
          ],
        },
        {
          heading: "When we recommend implants",
          paragraphs: [
            "When a single tooth is lost and the neighbouring teeth are healthy, we recommend an implant so that the healthy neighbouring teeth do not have to be ground down. A crown is then placed on the implant.",
            "People who wear full dentures often struggle with dentures that do not hold well, which can be solved with a denture on implants. Four implants are usually enough to hold an upper overdenture in a completely toothless jaw, and two are usually enough for a lower one. Implant-retained dentures leave patients more satisfied than conventional dentures: they look better, are more stable, make chewing easier, limit function less, and make cleaning and speaking easier.",
            "Implants can be loaded immediately (straight after placement) or conventionally (after the osseointegration period). Studies have shown that conventionally loaded implants have a slightly better survival rate in the mouth. The implants we use every day are made of high-quality, durable, biocompatible titanium, and placing an implant is completely painless under local anaesthesia. An implant needs enough bone of good quality, which we check with a panoramic X-ray and a CT scan before planning treatment. Where bone is lacking, bone augmentation and a sinus floor lift (sinus lift) are available.",
          ],
        },
        {
          heading: "What is bone augmentation?",
          paragraphs: [
            "After a tooth is lost, the bone shrinks because chewing no longer loads it through the tooth root. The bone volume decreases and there is not enough room for an implant. The bone shrinks faster if the extracted teeth had inflammation around their roots, as the infection has already destroyed some of the bone. Every implant needs enough bone around it to support and stabilise it, to stop the gum from receding around the implant and to avoid later aesthetic problems, such as the implant showing through the gum.",
            "Bone augmentation is a surgical procedure that replaces lost bone. The missing volume can be rebuilt with manufactured bone of synthetic or animal origin, or with the patient's own (autologous) bone, taken from inside the mouth (the lower jaw) or from elsewhere in the body (for example the hip), ground and placed where bone is missing. The patient's own bone is the gold standard in bone augmentation, as it has the best potential to integrate and build volume. In that case enough bone has to be taken surgically to fill the defect. Small and medium-sized defects are mostly filled with manufactured bone of synthetic or animal origin. The oral surgery specialist decides on the method.",
            "Healing of the bone and soft tissue after augmentation can be improved by adding the patient's own growth factors with the PRF method (platelet-rich fibrin), or by placing a biomembrane to stabilise the clot and the bone graft. In the PRF method, platelet-rich fibrin is separated from the patient's blood and applied to the surgical area. The platelets then release growth factors that stimulate new blood vessels and new bone. The method is harmless, as only the patient's own filtered blood is used to speed up healing. The placed materials are gradually absorbed, the bone remodels and new, firm bone forms. Bone augmentation is done under local anaesthesia and is completely painless. After the procedure the bone needs to heal (about eight months) before the implant can be placed.",
          ],
        },
        {
          heading: "What is a sinus lift?",
          paragraphs: [
            "When bone is lacking in the back of the upper jaw, raising the floor of the maxillary sinus (sinus lift) is indicated. In this oral surgery procedure the sinus floor is raised and bone is built up at the same time, so that there is enough bed for the implants. A sinus lift is done under local anaesthesia and is completely painless.",
            "Depending on the size of the procedure, there is a small and a large sinus lift. If only about 2 mm of bone is missing for the implant, a small sinus lift is done, in which the implants are placed at the same time as the sinus floor is raised and the bone is built up. The procedure uses the osteotome technique, named after the instrument used to lift the membrane of the maxillary sinus. After a small sinus lift, the implant needs to fuse with the bone (about six months) before it can carry prosthetic work (a crown or bridge).",
            "A large sinus lift is done when more bone volume is missing, through a so-called lateral approach. Sometimes the implant can be placed at the same time here too, but if a lot of bone is missing, a sinus lift with delayed implant placement is recommended. Then 6 to 8 months must pass between the sinus lift and the implant, otherwise there is a risk of complications and failure. The oral surgery specialist decides which procedure you need, based on their experience and your findings.",
          ],
        },
        {
          heading: "What complications can a sinus lift have?",
          paragraphs: [
            "A sinus lift has a high success rate and complications are uncommon, but possible. They can occur during the sinus lift or afterwards. While the sinus floor is being raised, the membrane of the maxillary sinus can tear, as its thickness varies from patient to patient. If it tears, the oral surgeon repairs the defect with various techniques and prevents later complications, such as sinus inflammation caused by bone graft material entering the sinus.",
            "Mild swelling is possible after a sinus lift and goes away within a few days. Sinus inflammation is also possible for various reasons, for example an infection spreading from the mouth, the implant or bone material pushing through the membrane, or the procedure being done on a diseased sinus. A sinus lift requires healthy sinuses, so if the patient already has a sinus condition, they need to see an ear, nose and throat specialist before the procedure.",
          ],
        },
        {
          heading: "All-on-4",
          paragraphs: [
            "\"All-on-4\", or \"all on four (implants)\", is a form of implant-supported rehabilitation of a completely toothless lower or upper jaw. The method is not new; it has been well known and clinically successful for years. Over time after teeth are extracted, the jaw loses bone. If enough bone remains, a larger number of implants is recommended, as the prosthetic work then has more supports, but in some patients there is too little bone, or bone of poorer quality, for more than a few implants to carry the work. If the patient is a suitable candidate for All-on-4, only four implants are placed in the toothless jaw (two straight and two angled ones, which the oral surgeon takes care of when placing them), and they carry a fixed prosthetic bridge.",
            "After the implants are placed, the patient receives a temporary fixed bridge the same day or within a few days at most, and the permanent fixed bridge three months later. This keeps the time without teeth to a minimum, which makes patients more satisfied. It is possible thanks to immediate loading: the implants are loaded as soon as they are placed in the bone, without waiting for osseointegration. All-on-4 has many advantages: it avoids sinus lift and bone augmentation in the upper jaw, which shortens recovery and lowers the cost; patients who have been toothless for a long time and have little bone left can still get a fixed bridge; and only four implants are placed, which hold the work so firmly that it feels like the patient's own teeth, with no fear of it falling out or moving, as with a full denture. The work is also screwed in place, so the dentist can easily remove, check and repair it if needed. Cleaning it is very easy, with a toothbrush and toothpaste plus a water flosser or dental floss around the implants. With good hygiene around them, the implants can last a lifetime, and only the prosthetic work is replaced when it wears out.",
            "All-on-4 costs less than placing a larger number of implants in the jaw plus additional oral surgery, which makes a fixed bridge on implants affordable for more patients.",
          ],
        },
        {
          heading: "Instructions after implant placement",
          paragraphs: [
            "Wound care: avoid chewing on the operated side and rinsing your mouth for the first 24 hours. From the day after the operation, brush your teeth with a soft toothbrush, and if you have been prescribed an antiseptic (Curasept), rinse your mouth with it 2 to 3 times a day, starting the day after the operation. Avoid smoking so that the blood flow and the wound heal undisturbed.",
            "Pain: take the first painkiller 30 minutes after the surgery, then as needed. Avoid Aspirin, Andol and other medicines containing acetylsalicylic acid, as they can prolong bleeding. If the pain does not ease, call us.",
            "Bleeding: some bleeding is normal. Keep the gauze placed after the procedure pressed on the wound for at least 20 to 30 minutes. Avoid rinsing your mouth.",
            "Swelling: swelling may appear a few hours after the procedure. Cool your cheek with cold compresses, alternating 20 minutes of cooling with 10 minutes' rest, and sleep with your head raised.",
            "Food and activity: eat food that is as soft as possible and avoid hot food. Avoid physical activity and strong sun for 48 to 72 hours after the procedure.",
          ],
        },
      ],
      faqs: [
        {
          id: "implantologija-1",
          question: "What is a dental implant?",
          answer:
            "<p>A dental implant is a titanium screw shaped like a tooth root. It is placed surgically in the bone of the upper or lower jaw, following a treatment plan made beforehand. Two to six months after the implant is placed, a prosthetic abutment is fitted to it, which carries crowns, bridges or dentures.</p>",
        },
        {
          id: "implantologija-2",
          question: "What does implant placement involve?",
          answer:
            "<ul><li>The first clinical examination includes a thorough check and analysis of the current state of your teeth, as well as a detailed analysis of a panoramic X-ray of the jaws (orthopantomogram). When planning treatment we take into account the clinical findings in your mouth, your wishes and expectations, and your budget, and on that basis propose treatment options. To help you fully understand them, we explain the situation using intraoral photographs of your teeth and demonstration models. After the first examination and your choice of treatment, we present a detailed plan for treating your current condition. It includes extracting teeth that cannot be saved, removing tartar and polishing, and repairing your existing teeth. If needed, temporary replacements are made the same day so that you can chew and look normal throughout treatment. If the clinical situation calls for more detailed diagnostics, we recommend a precise three-dimensional scan (CT) of the part of the jaw where the implants will go. The CT scan lets us determine the amount and quality of bone precisely and choose the best position for the implant. The clinical findings, the orthopantomogram and the CT scan allow us to make a detailed treatment plan, including the number and position of the implants and whether bone augmentation is needed.</li><li>The next phase is placing the implants. You are prepared by rinsing your mouth with an antiseptic and receiving a local anaesthetic. This is followed by the surgical placement of the implant (incision, lifting the gum flap, exposing the bone ridge, preparing the implant bed, screwing in the implant, suturing, control X-ray). We emphasise that placing dental implants is not painful. Afterwards you receive detailed spoken and written instructions to ensure that the wound heals well and the implant integrates with the bone (osseointegration). The stitches are removed after seven days.</li><li>Depending on the clinical situation, the next visit is two to six months after the implants are placed. The implants are uncovered and healing abutments are fitted, which help the gum heal and take shape.</li><li>Once the abutments are in place, impressions are taken and sent to the dental laboratory, which makes your prosthetic replacements.</li><li>The next phase is a try-in of the prosthetic work, which we review with you and the dental technician to correct any shortcomings.</li><li>The final phase is fitting the finished prosthetic work!</li></ul>",
        },
        {
          id: "implantologija-3",
          question: "What are the advantages of dental implants over other replacements?",
          answer:
            "<p>If you are missing one or more teeth and have difficulty chewing or speaking, dental implants are the solution for you. They are also a suitable option if your dentures do not hold well or are uncomfortable.</p>",
        },
        {
          id: "implantologija-4",
          question: "Are dental implants safe?",
          answer:
            "<p>Dental implants and prosthetic solutions on them have been a treatment of choice and an established part of clinical practice in well-equipped specialist clinics for more than 40 years. By using highly sophisticated, renowned implant systems, Dental Centar Repić gives you reliable, long-lasting results, both functionally and aesthetically.</p>",
        },
        {
          id: "implantologija-5",
          question: "How successful is implant placement?",
          answer:
            "<p>Whether implants are indicated is decided individually, according to each patient's clinical condition and motivation. When the indication is right and oral hygiene is good, implant treatment is successful in 95% to 100% of cases.</p>",
        },
      ],
    },
    ortodoncija: {
      slug: "ortodoncija",
      meta: {
        title: "Orthodontics - braces for teeth | Dental Centar Repić",
        description:
          "Fixed and removable braces. Orthodontic examination, treatment plan and correction of misaligned teeth at Dental Centar Repić in Trogir.",
      },
      title: "Orthodontics",
      lead:
        "Orthodontic treatment (fitting braces) is indicated when teeth are misaligned or irregularly spaced.",
      sections: [
        {
          heading: "Removable and fixed braces",
          paragraphs: [
            "Correct contact between the teeth spreads the chewing forces evenly, so that they are properly transferred to the gums and bone. Well-aligned teeth are also easier to keep clean. Misaligned teeth often collect plaque, which threatens the health of the teeth and the gums. Braces are the devices we use to carry out orthodontic treatment.",
          ],
        },
        {
          heading: "How we carry out orthodontic treatment",
          paragraphs: [
            "We treat every patient individually. After a thorough clinical examination, a review of the X-rays and a detailed analysis of intraoral photographs, we propose a treatment plan to each patient. Thanks to our interdisciplinary work with Dario Repić, DDM, PhD, specialist in endodontics and restorative dental medicine, we can give every patient complete dental care during and after orthodontic treatment.",
            "Besides detailed information about the health of their mouth, every patient receives all the written instructions they need on how their orthodontic appliance (braces) works and how to look after it, along with a suitable oral hygiene kit.",
          ],
        },
        {
          heading: "The orthodontic examination and treatment plan",
          paragraphs: [
            "The first orthodontic examination consists of a clinical examination of the mouth, teeth, bite and soft tissues, and an analysis of a panoramic X-ray (orthopantomogram). If you do not have one, you can have it taken at our clinic, where we use a state-of-the-art digital X-ray unit with a minimal radiation dose. For diagnosis we also take intraoral photographs with a specially adapted dental camera.",
            "After the initial diagnosis we will propose a treatment plan, which we agree with the patient, or with the parents and the child.",
            "Next, impressions are taken to make study models, so that we have a record of the bite before orthodontic treatment, that is, before the braces are fitted. The whole process is completely transparent, and we make sure you know at every stage what making and maintaining the orthodontic appliance (braces) will cost.",
          ],
        },
      ],
      faqs: [
        {
          id: "ortodoncija-1",
          question: "What does an orthodontist do?",
          answer:
            "<p>An orthodontist is a specialist who diagnoses and treats irregularities in the alignment of the teeth or the position of the jaws. They also work to prevent such irregularities from developing, using various orthodontic brackets and appliances.</p>",
        },
        {
          id: "ortodoncija-2",
          question: "Why do I need orthodontic treatment?",
          answer:
            "<p>There are two main reasons for orthodontic treatment: function and appearance. Functionally, it improves how the teeth and jaws work together and makes oral hygiene easier. Aesthetically, a beautiful, attractive smile makes the face more expressive and striking, adds greatly to your self-confidence and helps you make a better first impression.</p>",
        },
        {
          id: "ortodoncija-3",
          question: "When is the right time to start orthodontic treatment?",
          answer:
            "<p>There is no age limit for orthodontic treatment. Of course, the earlier an orthodontic anomaly is spotted and treated, the easier the treatment. The American Association of Orthodontists recommends a first orthodontic examination at the age of 7.</p>",
        },
        {
          id: "ortodoncija-4",
          question: "How can I recognise an orthodontic anomaly?",
          answer:
            "<p>If you notice crowding or gaps between the teeth, an incorrect bite, a protruding upper or lower jaw, or teeth that do not meet properly when the mouth closes, we advise an examination by an orthodontic specialist. In children, habits such as thumb-sucking can also lead to an orthodontic anomaly.</p>",
        },
        {
          id: "ortodoncija-5",
          question: "Will fitting braces hurt?",
          answer:
            "<p>Fitting braces is painless. Some patients feel slight pain or pressure for a few days after fixed braces are fitted, and minor pain can also appear after check-ups. A painkiller is recommended to ease the discomfort.</p>",
        },
        {
          id: "ortodoncija-6",
          question: "How long does orthodontic treatment take?",
          answer:
            "<p>The length of treatment differs for every patient. The active phase (wearing braces) generally lasts 6 to 30 months. After treatment, a retainer has to be worn for several months to a year, depending on the original anomaly.</p>",
        },
        {
          id: "ortodoncija-7",
          question: "How often do I need to see the orthodontist?",
          answer:
            "<p>Depending on the type of treatment, check-ups take place every 4 to 10 weeks.</p>",
        },
        {
          id: "ortodoncija-8",
          question: "Will I need teeth taken out?",
          answer:
            "<p>If the teeth are severely crowded, or a tooth is impacted (has not erupted and is hidden in the bone), extraction is a possible treatment option.</p>",
        },
        {
          id: "ortodoncija-9",
          question: "Can I play a musical instrument or do sport?",
          answer:
            "<p>Yes. Orthodontic treatment does not rule out these activities. If you do sport, we recommend wearing a mouthguard to prevent injuries to the mouth and damage to the braces.</p>",
        },
        {
          id: "ortodoncija-10",
          question: "Will I still need to see my dentist?",
          answer:
            "<p>Of course. Check-ups with your dentist are extremely important. Braces make teeth harder to clean, so plaque builds up more easily, and with it tooth decay. Your dentist will prevent decay with regular cleaning and check-ups.</p>",
        },
        {
          id: "ortodoncija-11",
          question: "Will I wear a retainer once the braces come off?",
          answer:
            "<p>Almost always, YES. After orthodontic treatment, a retainer has to be worn for several months to a year, depending on the original anomaly. Otherwise the teeth can return to their original position fairly quickly, and all the effort you and your orthodontist have put in will be wasted. How long the retainer is worn depends on the original anomaly.</p>",
        },
        {
          id: "ortodoncija-12",
          question: "How much does it all cost?",
          answer:
            "<p>At your first examination you will receive a quote for the orthodontic treatment. The price includes the initial tartar removal and polishing, the active treatment phases from start to finish, fitting the fixed braces, check-ups, removing the braces and the first set of retainers. The first examination requires an X-ray of the whole jaw (orthopantomogram); we take it at our clinic and it is included in the price of treatment.</p><p>We use metal or aesthetic brackets, as the patient prefers. Aesthetic brackets make the fixed braces more discreet. We use products from the renowned orthodontic manufacturer American Orthodontics, and we will show you what the different brackets look like and how they differ at your examination.</p>",
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
      title: "Dental prosthetics",
      lead:
        "At Dental Centar Repić we pay special attention to preserving the function of the teeth and the whole chewing system.",
      sections: [
        {
          paragraphs: [
            "After a thorough clinical examination and analysis of X-rays of the teeth and jaws, we propose an individual prosthetic treatment plan to each patient to replace one or more lost teeth. Depending on the clinical findings and the patient's budget, lost teeth can be replaced with removable or fixed prosthetics.",
            "Removable prosthetics (dentures) are indicated for patients who have lost all or some of their teeth. There are several ways to stabilise a denture in the mouth, such as combined removable and fixed work, telescopic crowns or implant-retained dentures.",
            "Fixed prosthetics include veneers, dental crowns, dental bridges and bridges on implants. We use modern restorative materials that meet patients' high aesthetic and functional demands.",
          ],
        },
        {
          heading: "Metal-ceramic crowns and bridges",
          paragraphs: [
            "Metal-ceramic crowns and bridges have long been used in dental prosthetics and are regarded as something of a standard in fixed prosthetic treatment. They are still patients' most common choice today, thanks to their affordable price and durable materials. The metal framework of the crown or bridge protects the supporting teeth, while the ceramic imitates the lost teeth. The metal base is most often an alloy of cobalt, chrome and nickel, dental gold or titanium. Ceramic is fired onto the metal base in layers and bonds chemically to the metal.",
            "Once crowns or a bridge have been agreed with the patient, the dentist first grinds down the supporting teeth to make enough room for the prosthetic. The next step is taking an impression, from which the laboratory makes the prosthetic work. At this stage the ceramic shade that will best imitate the natural teeth is also chosen. After it is made in the laboratory and tried in at the clinic, the crown or bridge is first cemented temporarily and then permanently.",
            "Metal-ceramic prosthetics are suitable for replacing one or more lost teeth in the front or back of the jaw. When correctly indicated, they have the right mechanical and aesthetic properties.",
            "The main advantages of metal-ceramic crowns and bridges are their price, mechanical strength and durability. According to the literature, as many as 90-95% of metal-ceramic replacements last ten years in the mouth. They cost somewhat less than all-ceramic (metal-free) replacements.",
            "Their drawback is more limited aesthetics compared with all-ceramic (metal-free) systems. This is due to the dark grey metal base: because the metal under the ceramic blocks light, the tooth colour can look less natural. Patients sometimes also complain of a dark edge of gum (gingiva) along the margin of the crown, as over time metal ions are released from the base of the crown into the gum. Careful preparation (grinding) of the supporting tooth can make this side effect less frequent.",
          ],
        },
        {
          heading: "All-ceramic crowns and bridges (metal-free ceramic)",
          paragraphs: [
            "Crowns and bridges made entirely of ceramic are the alternative to metal-ceramic replacements, and are also known as \"porcelain\" teeth. Patients' aesthetic demands keep rising today and are often decisive when choosing how to restore and replace lost teeth. All-ceramic crowns and bridges imitate natural teeth perfectly, and in this they are superior to metal-ceramic. Unlike metal-ceramic replacements, where the metal base blocks the passage and scattering of light and so affects the tooth colour, metal-free crowns and bridges have outstanding aesthetics that imitate natural teeth. For the patient, getting an all-ceramic crown is similar to getting a metal-ceramic one: the tooth is ground down (to make room for the replacement) and an impression is taken and sent to the laboratory. At the same time the shade that best matches the patient's wishes and their existing teeth is chosen. Once made, the finished work is cemented (\"glued\") onto the prepared teeth. Less grinding is needed for these replacements, so more healthy tooth tissue can be preserved. Because they are made by computer, these crowns and bridges fit the prepared margin of the tooth precisely, which makes cleaning easier and reduces food trapping and gum inflammation.",
            "New materials have given metal-free (all-ceramic) restorations excellent mechanical properties without sacrificing aesthetics. In strength and durability, all-ceramic crowns and bridges are comparable to metal-ceramic systems. According to the literature, 91-97% of metal-free ceramic replacements last five years or longer in the mouth.",
            "Metal-free ceramic work can replace one or more lost teeth. Newer materials for all-ceramic fixed prosthetics include leucite-reinforced lithium disilicate ceramic, leucite- or lithium-disilicate-reinforced glass-ceramic, and oxide ceramics such as alumina and zirconia. Metal-free crowns and bridges cost somewhat more than metal-ceramic ones, because making them at the clinic and in the laboratory is more complex.",
          ],
        },
        {
          heading: "Zirconia crowns and bridges",
          paragraphs: [
            "Zirconia (zirconium oxide) ceramic is a type of metal-free ceramic that is used more and more in dental prosthetics thanks to its outstanding aesthetic and functional properties, for fixed prosthetics (crowns and bridges) in the front or back of the jaw. It belongs to the oxide ceramics, which are very tough, resistant to wear and high temperatures, and do not corrode. Zirconia has been used in medicine and dentistry for more than 50 years. In orthopaedics it is used for the heads of hip joint replacements, while in dentistry, besides prosthetics, it is used for prefabricated posts, orthodontic brackets and implant abutments.",
            "The base of the crown or bridge is zirconium dioxide, onto which ceramic is fired. It is white and does not show through at the margin of the replacement. Zirconium dioxide is biocompatible and does not cause allergic reactions. It conducts electricity and heat poorly, which helps reduce tooth sensitivity. Zirconia has many qualities: top aesthetics; exceptional strength; biocompatibility; and less grinding of the natural tooth thanks to the strength of the material (a thickness of just 0.4 mm is strong enough). Because it is so strong and hard, zirconia can be machined from factory-made blocks. Thanks to computer-aided manufacture, a zirconia crown or bridge sits precisely on the prepared margin of the tooth, which makes oral hygiene easier and reduces the chance of gum (gingiva) inflammation.",
            "Aesthetically this material is an excellent choice, as it imitates the natural translucency and colour of teeth very well, while its high strength rivals that of the strongest metals. Its mechanical properties are comparable to metal-ceramic replacements, while it imitates natural teeth better. The final colour of the work depends on the thickness of the ceramic, the thickness and colour of the cement and the colour of the tooth stump. Because it is so strong, very thin replacements can be made from it (with a framework of just 0.3 mm in the front of the jaw and 0.6 mm at the side) that keep the translucency and aesthetics of the material. It is suitable for both the front and the back of the jaw, and can also be used for large restorations replacing many lost teeth.",
            "Zirconia crowns and bridges cost somewhat more than metal-ceramic ones, because making them at the clinic and in the laboratory is more complex: the grinding, the impression and the cementing of the finished work must be very precise so that the replacement (crown or bridge) fits the prepared tooth exactly.",
          ],
        },
        {
          heading: "Glass-ceramic: E.max and Empress",
          paragraphs: [
            "Glass-ceramic is made by the controlled crystallisation of glass. There are several types with different properties: IPS Empress ceramic (leucite-reinforced glass-ceramic), IPS Empress 2 ceramic (with a lithium disilicate core, stronger and tougher than the first) and IPS E.max ceramic, which is similar in make-up to IPS Empress 2 (a lithium disilicate core) but much stronger than the other two.",
            "E.max Press or Empress crowns and bridges are all-ceramic crowns and bridges made of lithium disilicate ceramic. Its high translucency gives outstanding aesthetics, so it is especially indicated for restorations in the aesthetic zone of the jaw (the area visible in a full smile). It is stronger than other glass-ceramics and is indicated for restorations in the front of the jaw: single crowns or three-unit bridges up to and including the second premolar, single crowns in the front or back of the dental arch, veneers and indirect fillings (inlays, onlays). E.max ceramic comes in a wide range of shades, so it can imitate natural teeth very well.",
            "Three factors affect the colour of the final work: the colour of the prepared tooth stump, the colour of the cement and the colour of the crown. In some cases lithium disilicate ceramic is not simple to use, because differently coloured prepared stumps could show through the crown, but with knowledge of the material and the preparation technique such problems can be solved to the satisfaction of both patient and dentist.",
            "By combining cements of different colours and translucency, an even crown colour can be achieved even when the prepared teeth are not evenly coloured. After the crowns are finally cemented onto the prepared teeth, the joins between crown and tooth are polished to make hygiene easier.",
            "For a result that works well and looks good, it is important to choose these restorations for the right cases. E.max crowns are mechanically somewhat weaker than zirconia, so they are not recommended for large restorations at the back of the mouth, but for single crowns or three-unit bridges in the front of the dental arch up to and including the second premolar, single crowns in the front or back of the arch, veneers and indirect fillings (inlays, onlays).",
          ],
        },
      ],
      faqs: [
        {
          id: "protetika-1",
          question: "How long will crowns last in the mouth?",
          answer:
            "<p>That is hard to say. Over a 10-year period, 85-95% of crowns of all materials last, worldwide and here, which is considered successful prosthetic treatment. Even so, many factors affect how long prosthetic work lasts, such as regular check-ups and oral hygiene, the condition of the supporting teeth and gums, choosing the right work for the case, and making it properly. Because of all these factors, the life of the work can vary from patient to patient.</p>",
        },
        {
          id: "protetika-2",
          question: "How do I keep crowns and bridges clean?",
          answer:
            "<ul><li>Patients sometimes wrongly assume that their teeth are protected by \"caps\", that is, crowns or bridges, and that oral hygiene need not be thorough. This is a big misconception. Through the effort they put into oral hygiene and regular check-ups with the dentist, patients can do a great deal to make their prosthetic work last longer and keep the rest of their teeth healthy.</li><li>Crowns and bridges should be brushed the same way as natural teeth: from the upper right quadrant to the upper left, then the lower left and the lower right. All surfaces of the teeth and replacements should be brushed, for three minutes in total. Circular movements are recommended, and the final strokes should go \"from red to white\", from gum to tooth, to slow the gum (gingiva) from receding after fixed prosthetic treatment. Many aids make cleaning prosthetic work easier, such as floss with threaders, electric toothbrushes, water flossers and interdental brushes. Plaque-disclosing tablets, available over the counter, show patients how well they are brushing. We will gladly show you how to keep your teeth clean properly, so that together we make your replacement last longer, to your satisfaction and ours.</li></ul>",
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
      title: "Aesthetic dental medicine",
      lead:
        "A beautiful smile lifts your mood, boosts your self-confidence and helps you make a positive first impression.",
      sections: [
        {
          heading: "For your healthy and beautiful smile",
          paragraphs: [
            "Our goal is to give every patient a beautiful, healthy smile. Aesthetic dental medicine covers a range of procedures that shape a beautiful smile, following set guidelines to achieve full harmony between the soft and hard structures of the teeth.",
            "An aesthetic dental procedure combines techniques from different specialist branches of dental medicine (orthodontics, periodontology, prosthetics, implantology, restorative dental medicine) to correct deviations from aesthetic norms and achieve the function and appearance of healthy teeth. Studies have shown that aesthetic dental procedures have a strong psychological effect on patients, raising their self-confidence and improving their quality of life.",
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
          "Treatment of tooth inflammation and root canals, with machine canal preparation and X-ray checks, at Dental Centar Repić in Trogir.",
      },
      title: "Endodontics",
      lead:
        "Endodontics is a specialist field of dental medicine closely linked with restorative dentistry and cariology.",
      sections: [
        {
          heading: "Root canal treatment",
          paragraphs: [
            "Restorative dentistry and cariology treat disease of the hard tooth tissue, the dentin. When irreversible inflammation develops in the pulp, the soft tissue inside the tooth has to be treated, which means treating the root canals. This is done with endodontic treatment, often simply called endodontics.",
          ],
        },
        {
          heading: "Why does a tooth hurt?",
          paragraphs: [
            "Toothache is an unpleasant symptom that most people experience at least once in their life. A tooth can hurt for different reasons: sometimes the cause is exposed dentin; inflammation in the periodontal tissue or around the root tip; inflammation in nearby tissues such as the sinuses, when the pain is felt in the teeth; or inflammation of the tooth itself, that is, of the dental pulp. In some cases the cause is not easy to find, and the dentist will do a thorough examination, certain clinical tests and an X-ray. Once the cause is identified, the treatment is decided.",
          ],
        },
        {
          heading: "How does tooth inflammation develop?",
          paragraphs: [
            "Inflammation of the dental pulp (pulpitis, \"tooth inflammation\") can have various causes, such as deep decay, grinding the teeth or an incorrect bite that overloads the tooth. When a tooth is inflamed, the blood vessels inside the pulp widen, the capillaries become more permeable and fluid escapes into the surrounding area, which raises the pressure. The pulp is also called the \"tooth nerve\", but it actually contains blood and lymph vessels as well as nerve fibres, and sits in the pulp chamber. Because the pulp chamber is a rigid structure that cannot expand, the rising pressure inside it presses on the nerves in the pulp and causes pain. Pain from an inflamed tooth can vary in character and spread or radiate to nearby structures: pain from lower teeth often spreads towards the ear, while pain from upper teeth usually spreads towards the eye.",
            "In reversible inflammation of the tooth (the dental pulp), the pain comes and goes, is triggered by stimuli (warm, cold, biting) and stops when the cause is removed; in irreversible inflammation, the pain is spontaneous and almost constant. Other symptoms can include swollen lymph nodes near the affected tooth, pus draining from a fistula on the gum, a loose tooth, swelling around the tooth, fever and feeling generally unwell. If the inflammation is not treated, the infection spreads through the root canal into the surrounding bone and a granuloma forms. The granuloma destroys the surrounding bone, and the infection can spread through the blood to the rest of the body.",
          ],
        },
        {
          heading: "How is tooth inflammation treated?",
          paragraphs: [
            "Tooth inflammation is treated according to its cause. In reversible inflammation of the pulp, it is enough to remove the cause (decay, premature contact, exposed tooth necks) and give the tooth a filling, after which the symptoms settle. In irreversible inflammation of the pulp, a filling is not enough, and endodontic treatment is needed.",
          ],
        },
        {
          heading: "What is endodontic treatment?",
          paragraphs: [
            "An endodontic procedure (\"endodontics\") is treatment of the tooth's root canals to keep the tooth in the mouth. It involves removing the dental pulp (so-called nerve removal), then cleaning and rinsing the root canals with special hand or machine files and a rinsing solution that removes remaining bacteria and inflammatory products and disinfects the canals. The canals are then filled with purpose-made filling materials. Root canal treatment needs a dry, sterile working field to stop bacteria from the mouth getting into the bone. Every further treatment depends on well-treated root canals. A tooth that has had endodontic treatment can carry prosthetic work and put off the need for a denture or implants for a long time. It is always best to try to save your own tooth, as it is the best replacement there is.",
            "It is our duty to make endodontic treatment painless, which we achieve with local anaesthesia. Depending on how complex the case is, you may need several visits for us to treat the tooth properly. Only when every step is done correctly is endodontic treatment successful. After the treatment is finished, the tooth may be sensitive to pressure for a while, which is a common side effect, but it is important that the pain and sensitivity ease gradually. If needed, you can take a painkiller. The symptoms should go within a few days.",
            "We are equipped with modern devices for measuring the canal length precisely and for machine preparation of the root canals. We check the final root canal filling with an X-ray. This lets us treat your tooth in the shortest possible time and spare you unnecessary visits.",
          ],
        },
      ],
    },
    parodontologija: {
      slug: "parodontologija",
      meta: {
        title: "Periodontology - periodontitis treatment | Dental Centar Repić",
        description:
          "Tartar removal, initial periodontal therapy and periodontal surgery at Dental Centar Repić in Trogir.",
      },
      title: "Periodontology",
      lead:
        "Act in time to prevent disease and tooth loss.",
      sections: [
        {
          paragraphs: [
            "At Dental Centar Repić we professionally remove deposits from the teeth with sonic and ultrasonic instruments, air polishing and polishing, and we carry out initial periodontal therapy and periodontal surgery so that your teeth stay fully functional for as long as possible.",
            "The main factors in developing periodontitis are a growing number of bacteria in the mouth and an inadequate immune response from the body. Bacteria multiply when oral hygiene is poor or when less saliva is produced, as saliva has a natural protective role. The immune response is weakened by various general illnesses, stress and smoking. Together these factors lead to periodontal disease, which causes inflammation and breakdown of the tissues that support the teeth: the bone, the gum (gingiva) and the periodontal ligament.",
            "The disease usually starts without symptoms (there are no signs to warn you it has begun), which is exactly why regular visits to the dentist matter, so that it is found as early as possible. The earlier periodontal disease is found, the better the chances of treating the affected teeth and keeping them in the mouth for longer.",
          ],
        },
        {
          heading: "How is periodontitis treated?",
          paragraphs: [
            "The aim of treatment is to reduce the number of bacteria in the mouth, remove the biofilm (an organised layer of bacteria on the teeth) and improve the body's immune response, to stop the disease from progressing.",
            "Good oral hygiene and regular professional removal of plaque and tartar are key to preventing and treating periodontitis. Brush your teeth with a toothbrush and toothpaste at least twice a day, always together with dental floss or a water flosser (for narrow gaps between the teeth) and interdental brushes (for wider gaps and exposed root forks).",
            "Initial periodontal therapy consists of removing tartar and deposits from the teeth, above and below the gum line, with an ultrasonic device. This is followed by deep mechanical cleaning and polishing of the tooth roots.",
            "Periodontal surgery is indicated in advanced cases of periodontitis (periodontosis), as it gives access to deep periodontal pockets so that deposits can be removed from the teeth. Regenerative surgical techniques can rebuild the tissues that support the teeth, which can improve the long-term outlook for teeth affected by periodontitis. Surgery is also used to restore an attractive shape of the teeth and the surrounding gum (gingiva): periodontal disease makes the gum recede and the roots sensitive, and regenerative periodontal therapy can cover the roots again and reduce their sensitivity.",
          ],
        },
        {
          heading: "Recognise the signs of periodontitis",
          bullets: [
            "bleeding gums (gingiva)",
            "swollen gums, marked redness and pain",
            "receding gums",
            "discharge and pus from the gums",
            "teeth shifting and gaps between the teeth widening",
            "loose teeth",
            "bad breath",
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
      title: "Oral surgery",
      lead:
        "Oral surgery at Dental Centar Repić is performed by award-winning doctors with many years of practice.",
      sections: [
        {
          heading: "First-class oral surgery",
          paragraphs: [
            "Oral surgery is the surgical branch of dentistry. An oral surgeon's work includes extracting teeth, extracting impacted or retained teeth by alveotomy, removing cysts in the bones of the upper and lower jaw, apicoectomy, frenectomy, placing dental implants and raising the floor of the upper jaw's sinus (sinus lift). The most common procedure is extraction. Although dentists and patients work hard to keep teeth in the mouth for as long as possible, there are cases where deep decay, a broken tooth or periodontal disease means a tooth has to come out.",
            "Extractions are routine surgical procedures done under local anaesthesia. Before any surgery in the mouth, the oral surgeon takes a detailed medical history. It is important to list all the medicines the patient takes, so that they do not affect bleeding during and after the procedure or the healing of the wound. After the procedure, the wound is closed with stitches or left to heal on its own. The patient receives advice on easing swelling and pain, and a check-up with the dentist is recommended a week after the extraction to see how the wound is healing and remove any stitches.",
          ],
        },
        {
          heading: "What is alveotomy?",
          paragraphs: [
            "Besides simple extractions, we also extract impacted or retained teeth by alveotomy (alveolotomy). Any tooth in the jaw can be impacted or retained. Impacted teeth cannot erupt into place because of a mechanical obstacle, while retained teeth fail to erupt for reasons that are not mechanical. The teeth most often impacted are the wisdom teeth, the third molars. If the bone over the crown of an impacted tooth connects with the mouth, the area is hard to clean properly and the surrounding soft tissue becomes inflamed, a condition called pericoronitis. If an impacted or retained tooth causes problems, we recommend removing it by alveotomy.",
            "Alveotomy is an oral surgery procedure done under local anaesthesia, so it is completely painless for the patient. The patient is conscious the whole time and can communicate with the oral surgeon. Before the alveotomy, the oral surgeon takes a detailed medical history. It is important to list all the medicines the patient takes, so that they do not affect bleeding during and after the procedure or the healing of the wound. The alveotomy starts with local anaesthesia, followed by an incision in the gum with a scalpel. The jaw bone is opened with a drill to give the surgeon access, and the tooth left in the jaw is removed from the bone with special surgical instruments (chisels, elevators) with minimal trauma to the surrounding tissue. Afterwards the wound is stitched to help it heal, and the patient receives post-operative instructions. Seven days later there is a check-up at the clinic and the stitches are removed.",
          ],
        },
        {
          heading: "What is apicoectomy?",
          paragraphs: [
            "Apicoectomy is an oral surgery procedure that removes the tip of the root of a tooth that has had root canal treatment. It is done by an oral surgery specialist. An apicoectomy is needed when root canal treatment has not ended the pain and inflammation, or when even repeated root canal treatment has not made a granuloma at the root tip shrink, as seen on a control X-ray. Surgical removal of the root tip (apicoectomy) is then recommended, so that the tooth can stay in the jaw.",
            "Apicoectomy is done under local anaesthesia, so the procedure is completely painless. Before it, the oral surgeon takes a detailed medical history. It is important to list all the medicines the patient takes, so that they do not affect bleeding during and after the procedure or the healing of the wound. The procedure in detail: it starts with a local anaesthetic, and the patient is conscious throughout and can communicate with the oral surgeon. Once the area is numb, the oral surgeon makes a horizontal incision at the level of the affected tooth's root tip and opens the bone with a drill to reach the area. The root tip is cut off and the inflamed tissue in the bone is scraped away. If needed, a retrograde root filling can then be placed to seal the canals, after which the wound is closed with stitches. The procedure takes about half an hour to an hour, depending on how thick the bone is in that part of the mouth. Afterwards only a barely visible scar remains on the gum, and the bone defect fills in over a few months.",
            "Apicoectomy is done when root canal treatment is not enough to heal inflammation that has developed in the bone because infection spread from the root canals, or when there are oral cysts attached to the root. After an apicoectomy the root is slightly shorter, but the tooth stays in the jaw and keeps its function and appearance.",
          ],
        },
      ],
      faqs: [
        {
          id: "oralna-kirurgija-1",
          question: "When should impacted or retained teeth be extracted?",
          answer:
            "<ul><li>with repeated pericoronitis</li><li>with an abscess</li><li>with disease of the pulp or periodontium</li><li>with extensive destruction of the tooth by decay</li><li>when the root of the neighbouring tooth is being resorbed</li></ul>",
        },
        {
          id: "oralna-kirurgija-2",
          question: "What are the symptoms of pericoronitis?",
          answer:
            "<ul><li>pain spreading to the ear and jaw joint</li><li>difficulty opening the mouth (trismus)</li><li>difficulty swallowing</li><li>swollen lymph nodes under the jaw and on the neck</li><li>pus draining when the swollen soft tissue over the tooth is pressed</li></ul>",
        },
        {
          id: "oralna-kirurgija-3",
          question: "What are the contraindications for alveotomy (when is it not recommended)?",
          answer:
            "<ul><li>a tooth that causes no local or general problems</li><li>older age of the patient (the bone has a poorer blood supply)</li><li>a compromised medical history</li></ul>",
        },
        {
          id: "oralna-kirurgija-4",
          question: "What can I do to ease pain and swelling after an extraction?",
          answer:
            "<p>Cool the area of the extraction from the outside, eat lukewarm, soft food, and avoid anything hot or fizzy for the next few days. Smokers should avoid smoking so that the wound heals more easily and quickly. If needed, you can take a painkiller, but avoid products containing acetylsalicylic acid (Andol, Aspirin), which can make the wound bleed for longer.</p>",
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
      title: "X-ray diagnostics",
      lead:
        "Single-tooth and panoramic X-rays with modern digital imaging and the lowest radiation doses.",
      sections: [
        {
          heading: "X-ray diagnostics (intraoral and panoramic X-rays)",
          paragraphs: [
            "X-rays of the teeth and jaws are an essential diagnostic tool in every area of dental medicine, as they show all the anatomical and pathological structures in the bone that cannot be seen during a clinical examination. They are needed to plan almost every procedure in dental medicine.",
            "Older conventional X-ray systems showed bone structures less clearly, with much higher radiation for the patient and the clinician. Digital radiology has reduced the radiation dose and made handling the images simpler. The modern digital technology at Dental Centar Repić guarantees the lowest radiation doses (up to 90% less radiation than conventional X-rays). We can offer our patients X-rays just before or after a procedure, so that they do not need to come in several times.",
            "Dental Centar Repić offers X-rays of single teeth (intraoral periapical X-rays) and of both jaws (orthopantomogram). Intraoral X-rays show individual teeth at their actual size; one periapical X-ray shows one tooth or two neighbouring teeth. The orthopantomogram (OPG, panoramic X-ray) is the most common X-ray in dental medicine: it reveals pathological changes around all the tooth roots, shows the state of the bone in cases of periodontitis and shows decay in the teeth. The radiation for an orthopantomogram can be adjusted so that children can have one too, as it is needed for planning orthodontic treatment.",
            "Patients' X-rays are stored on computer so that we can access them at any time, and they can be sent by email if the patient asks. Digital storage lets us process the images with software tools (sharpening, enlarging, reducing, colouring, further diagnostics such as measurement) for further insight into the patient's oral health, which makes diagnosis easier for the doctor.",
            "The computers in all our treatment rooms are networked to a central database, so all digital X-ray data can be seen at any time in every room. This shortens analysis considerably and allows better consultation between the specialist and the patient.",
            "X-rays are not recommended for pregnant women, especially in the first trimester.",
          ],
        },
      ],
    },
    "djecja-dentalna-medicina": {
      slug: "djecja-dentalna-medicina",
      meta: {
        title: "Paediatric dentistry - a dentist for children | Dental Centar Repić",
        description:
          "A first dental visit around age 1, fluoride treatment, fissure sealing and painless anaesthesia for children at Dental Centar Repić in Trogir.",
      },
      title: "Paediatric dentistry",
      lead:
        "We give great importance to keeping children's mouths healthy.",
      sections: [
        {
          heading: "Dental care for children",
          paragraphs: [
            "Visiting the dentist at an early age builds good oral hygiene habits and is important for overcoming fear, both in childhood and throughout life. The best time for a first visit to the dentist is around the child's first birthday.",
            "Through play and talk suited to the child's age, we try to make dental treatment fun and as little traumatic as possible. We coat our youngest patients' teeth with fluoride gels that help prevent tooth decay. The method is completely painless for the child.",
            "We teach parents why it matters to repair milk teeth, to avoid later problems with the permanent teeth and orthodontic anomalies caused by losing milk teeth too early. We seal young permanent teeth with fissure sealants to keep decay from forming on them for a long time. Fitting a fissure sealant does not require drilling the tooth.",
            "When a tooth needs drilling to remove decay, we use painless methods of giving anaesthesia. We first coat the injection site with an anaesthetic gel so that the needle does not hurt.",
            "Through the multidisciplinary approach of our specialists, Dario Repić, DDM, PhD, and Slavica Pejda Repić, DDM, PhD, specialist in orthodontics, we give you and your child the best advice and the best treatment. Because we pay special attention to preventive care as your child grows and develops, we help prevent certain orthodontic anomalies and unpleasant experiences at the dentist.",
            "For a successful repair, our little patients are rewarded with a certificate of bravery or praise.",
          ],
        },
      ],
    },
  },

  serviceDetailChrome: {
    backToServices: "Other services",
    faqHeading: "Frequently asked questions",
    relatedHeading: "Other services",
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
