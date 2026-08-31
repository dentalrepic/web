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
      { label: "Dental Tourism", href: "/dental-tourism", icon: "star" },
      { label: "Info", href: "/info", icon: "book" },
    ],
    cta: { label: "Book an Appointment", href: "/contact" },
    languageLabel: "Language",
    menuLabel: "Toggle menu",
  },

  footer: {
    description:
      "Preserving oral health, function and aesthetics are the foundation of the services we provide to patients. Each patient receives an individual approach, and we keep up with technological advancements to ensure the best possible service. We constantly invest in new equipment and in the professional development of our team.",
    servicesHeading: "Services",
    hoursHeading: "Opening Hours",
    rightsReserved: "All rights reserved",
  },

  common: {
    learnMore: "Read more",
    readMore: "Read more",
    readLess: "Read less",
    callUsToday: "Call us today!",
    bookAppointment: "Book your appointment",
    openingHours: "Opening Hours",
    openingHoursRows: [
      { day: "Monday", hours: "8:00 - 20:00" },
      { day: "Tuesday", hours: "8:00 - 20:00" },
      { day: "Wednesday", hours: "8:00 - 20:00" },
      { day: "Thursday", hours: "8:00 - 20:00" },
      { day: "Friday", hours: "8:00 - 20:00" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
  },

  home: {
    meta: {
      title: "Dental Centar Repić | Dental Clinic in Trogir, Croatia",
      description:
        "Dental Centar Repić in Trogir: implantology, orthodontics, endodontics, prosthetics and aesthetic dental medicine. Free first examination. Call +385 21 796 241.",
    },
    hero: {
      title: "Premium Dental Solutions",
      subtitleLine1: "Solutions for all your dental needs",
      subtitleLine2: "in one place.",
      ctaPrimary: "Book an Appointment",
      ctaSecondary: "Our Services",
      imageAlt: "Treatment room at Dental Centar Repić with a modern dental chair",
    },
    welcome: {
      eyebrow: "Welcome to our web site",
      heading: "We care for your perfect smile",
      intro:
        "Highly educated staff (dental specialists holding PhDs in their respective fields), an interdisciplinary approach and a pleasant atmosphere make Dental Centar Repić the right choice for you. We guarantee a professional approach, high quality service and the use of the most modern materials. We want you to feel comfortable at our clinic, and our knowledge, expertise and experience ensure that you are in the best hands.",
      highlights: [
        {
          title: "Top quality equipment",
          description:
            "We use only the best materials of renowned global manufacturers",
        },
        {
          title: "Spacious and equipped clinic",
          description:
            "In addition to first class treatment, we take every step to ensure you feel comfortable at our clinic",
        },
        {
          title: "Friendly and professional staff",
          description: "Our dentists and medical staff are always at your disposal",
        },
      ],
      link: "Read more about us",
      imageAlt: "Reception at Dental Centar Repić",
    },
    servicesIntro: {
      eyebrow: "Expertise and professionalism",
      heading: "Complete Dental Service",
      description:
        "We provide all our services and treatments in our modernly equipped clinic, in accordance with the rules of the profession, to ensure our patients feel at ease and are satisfied with our service.",
      services: [
        {
          title: "Dental Implants",
          summary:
            "A permanent solution to missing teeth that restores oral function.",
        },
        {
          title: "Orthodontics (Braces)",
          summary:
            "Achieve the smile you have dreamed of with our expert orthodontists.",
        },
        {
          title: "Aesthetic Dental Medicine",
          summary:
            "Get the smile you have always wanted and enjoy your new confidence.",
        },
      ],
    },
    whyUs: {
      heading: "Why choose Dental Centar Repić",
      subheading:
        "From a free first examination to top quality equipment — all in one place, in the heart of Dalmatia.",
      reasons: [
        "Free first examination",
        "Friendly staff",
        "Spacious clinic",
        "Expert dentists",
        "Family friendly",
        "Accessible location",
        "No waiting",
        "Quality guarantee",
        "Wheelchair accessible",
        "Modern equipment",
        "Premium materials",
        "X-ray diagnostics",
      ],
      imageAlt: "Spacious treatment room with a panoramic view",
    },
    problems: {
      heading: "We have the solution to your dental problems",
      items: [
        {
          title: "Missing teeth",
          description:
            "Smile with pride again with our prosthetic and implant solutions that will return the smile to your face and restore proper tooth function.",
        },
        {
          title: "Toothache",
          description:
            "Toothache can be caused by a number of factors. Following a detailed dental exam, we will propose the appropriate course of therapy and treatment.",
        },
        {
          title: "Fear of the dentist",
          description:
            "We successfully treat fear of the dentist. We place special emphasis on working with children, to ensure they feel comfortable from their very first visit.",
        },
        {
          title: "Broken / chipped teeth",
          description:
            "We treat broken and chipped teeth using crowns and other procedures.",
        },
        {
          title: "Periodontitis",
          description:
            "We provide complete periodontic services, individually tailored to each patient.",
        },
        {
          title: "Uneven / spaced teeth",
          description:
            "We are specialised in a wide range of orthodontic services to bring you the perfect smile you have always dreamed of.",
        },
        {
          title: "Caries and tooth decay",
          description:
            "We use modern technology to detect problems in the earliest stage, to ensure timely treatment and to preserve your teeth.",
        },
        {
          title: "Stains / discolouration",
          description:
            "Our tooth whitening services will give you the white teeth you have always wanted.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Frequently Asked Questions",
      viewAll: "View all questions",
    },
    cta: {
      heading: "Book your appointment or arrange a free examination",
      text: "Fill in the form or give us a call — we will contact you within our working hours.",
      button: "Book now",
    },
  },

  about: {
    meta: {
      title: "About Us - Our Team | Dental Centar Repić",
      description:
        "Meet the team at Dental Centar Repić in Trogir: specialists in orthodontics, endodontics and restorative dental medicine, holding PhDs in their fields.",
    },
    hero: {
      title: "ABOUT US",
      description:
        "Highly educated staff, an interdisciplinary approach and a pleasant atmosphere make Dental Centar Repić the right choice for you. <br /> We guarantee a professional approach, high quality service and the use of the most modern materials.",
    },
    team: {
      heading: "Meet our team",
      subheading:
        "Expert, award winning dentists and professional, courteous medical staff",
      members: [
        {
          name: "Slavica Pejda Repić, DDM, PhD",
          role: "Doctor of dental medicine, specialist in orthodontics",
        },
        {
          name: "Dario Repić, DDM, PhD",
          role: "Doctor of dental medicine, specialist in endodontics and restorative dental medicine",
        },
      ],
    },
    approach: {
      heading: "Our approach to patients",
      paragraphs: [
        "Preserving oral health, function and aesthetics are the foundation of the services we provide to patients. Each patient receives an individual approach, and we keep up with technological advancements to ensure the best possible service.",
        "We constantly invest in new equipment and in the professional development of our team. We provide all our services and treatments in our modernly equipped clinic, in accordance with the rules of the profession, to ensure our patients feel at ease and are satisfied with our service.",
      ],
      imageAlt: "Interior of Dental Centar Repić",
    },
    gallery: {
      heading: "Our clinic",
      subheading:
        "A modern, well equipped space where our patients feel at ease — from reception to treatment rooms with panoramic views.",
      images: [
        { file: "reception.jpg", alt: "Reception with the Dental Centar Repić logo" },
        { file: "waiting-lounge.jpg", alt: "Waiting area with comfortable seating" },
        { file: "treatment-panorama.jpg", alt: "Treatment room with a panoramic view" },
        { file: "treatment-room.jpg", alt: "Dental chair and equipment in the treatment room" },
        { file: "treatment-window.jpg", alt: "Treatment room with large windows" },
        { file: "glass-partition.jpg", alt: "Glass entrance with the logo motif" },
        { file: "interior-corridor.jpg", alt: "Corridor leading to the waiting area" },
        { file: "kids-corner.jpg", alt: "Colouring corner for our youngest patients" },
        { file: "entrance.jpg", alt: "Entrance to Dental Centar Repić" },
      ],
    },
    testimonials: {
      heading: "What our patients say",
      items: [
        {
          quote:
            "Dental Centar Repić is one of the few dental practices where the service is always excellent. The staff are professional and attentive, but also cheerful and welcoming. I had a few teeth repaired and an implant fitted three years ago, and I am still happy with the result.",
          author: "Toni Vešović",
        },
        {
          quote:
            "Besides treating dental problems, they successfully cure the fear of the dentist.",
          author: "Zorana Barada",
        },
        {
          quote:
            "Excellent dentists, expert and professional. Great with children too.",
          author: "Joško Herceg",
        },
        {
          quote: "Top professional and fair pricing.",
          author: "Gunther Braus",
        },
      ],
    },
    cta: {
      heading: "Get in touch with confidence",
      subheading:
        "Your first examination is free. Book an appointment and let's talk about how we can help.",
      primaryButton: "Book an Appointment",
      secondaryButton: "See our services",
    },
  },

  services: {
    meta: {
      title: "Services - Complete Dental Service | Dental Centar Repić",
      description:
        "Implantology, orthodontics, endodontics, dental prosthetics, aesthetic dental medicine, oral surgery, periodontology, X-ray diagnostics and pediatric dentistry.",
    },
    hero: {
      title: "OUR SERVICES",
      description:
        "We provide all our services and treatments in our modernly equipped clinic, in accordance with the rules of the profession, to ensure our patients feel at ease and are satisfied with our service.",
    },
    intro: {
      heading: "Complete Dental Service",
      paragraph:
        "From implantology and orthodontics to aesthetic dental medicine — we provide a solution for all your dental needs in one place, with a professional approach and the most modern materials.",
    },
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
    equipment: {
      heading: "Equipment and materials",
      paragraph:
        "We use the best materials from renowned global manufacturers and constantly invest in new equipment, so we can detect problems at the earliest stage and ensure timely treatment.",
      features: [
        {
          title: "Premium materials",
          description:
            "Materials from renowned global manufacturers in every treatment",
        },
        {
          title: "X-ray diagnostics",
          description:
            "Modern technology for early detection and precise treatment planning",
        },
        {
          title: "Ongoing education",
          description:
            "Continuous investment in the professional development of our whole team",
        },
      ],
      imageAlt: "Dental chair and equipment in the treatment room",
    },
    cta: {
      heading: "Don't see the service you are looking for?",
      subheading:
        "Call us or book an appointment — we will arrange an examination and propose the best treatment for you.",
      primaryButton: "Book an Appointment",
      secondaryButton: "Dental Tourism",
    },
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
        "Dental Centar Repić, Put Dragulina 62 F, 21220 Trogir, Croatia. Phone +385 21 796 241, email dentalcenterrepic@gmail.com. Weekdays 8:00 - 20:00.",
    },
    hero: {
      title: "CONTACT",
      description:
        "Get in touch with confidence. Fill in the form or give us a call to arrange an appointment — your first examination is free.",
    },
    intro:
      "Fill in the form below and we will contact you as soon as possible, within our working hours. Your first examination is free.",
    addressHeading: "Our address",
    contactHeading: "Contact",
    phoneLabel: "Phone",
    emailLabel: "Email",
    urgentNotice:
      "If you need urgent treatment, please call +385 21 796 241.",
    form: {
      heading: "Book an appointment",
      description:
        "Fill in the form below and we will contact you within our working hours.",
      nameLabel: "Full name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "Your email address",
      phoneLabel: "Phone number",
      phonePlaceholder: "Your phone number",
      reasonLabel: "Reason for your visit",
      reasonOptions: [
        "First visit - free examination",
        "Implants",
        "Braces",
        "Crowns and bridges",
        "Aesthetic dental medicine",
        "Tooth inflammation",
        "Other",
      ],
      preferredTimeLabel: "Preferred time",
      preferredTimeOptions: [
        "Any time",
        "08:00 - 11:00",
        "11:00 - 14:00",
        "14:00 - 16:00",
      ],
      messageLabel: "Notes",
      messagePlaceholder: "Briefly describe the reason for your visit...",
      submit: "Send",
      demoNote:
        "Demo form: connect this form to your preferred form provider before launch.",
      statusMessage:
        "This demo form is working locally. Connect a form provider to receive submissions.",
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
        "<p>We are at Put Dragulina 62 F, 21220 Trogir, in the immediate vicinity of the old town.</p><p>The location is easy to reach, and the clinic is wheelchair accessible.</p>",
    },
  ],
};
