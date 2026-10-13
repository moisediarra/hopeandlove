import type { Dictionary } from "./fr";

// English translation. Keep the same structure as fr.ts (TypeScript will flag any missing key).

const en: Dictionary = {
  meta: {
    title: "Hope and Love — More than help, a hand of love and hope",
    description:
      "Hope and Love, a humanitarian and Christian organization born in Africa: acting with faith, love and hope alongside families, young people and the most vulnerable.",
    ogAlt: "Hope and Love — More than help, a hand of love and hope",
  },

  nav: {
    skip: "Skip to content",
    home: "Hope and Love home",
    main: "Main navigation",
    about: "About",
    vision: "Vision",
    mission: "Mission",
    actions: "What we do",
    audience: "Audience",
    contact: "Contact",
    donate: "Donate",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  hero: {
    badge: "Humanitarian & Christian organization",
    titleLead: "Acting with",
    titleWords: ["faith", "love", "hope"],
    titleAnd: "and",
    slogan: "More than help, a hand of love and hope",
    intro:
      "Born in Africa, **Hope and Love** is a **humanitarian and Christian organization** devoted to love, hope and solidarity in action.",
    primaryCta: "Explore our work",
    secondaryCta: "Our vision",
    posterAlt:
      "Two hands holding a purple heart in front of a family at sunrise, with the Hope and Love logo",
    origin: "Born in Africa, for the nations",
  },

  about: {
    eyebrow: "Context",
    title: "Why Hope and Love?",
    paragraphs: [
      "In a world marked by suffering, indifference and a loss of values, many are waiting for a helping hand.",
      "It is from this vision that **Hope and Love** was born: a **humanitarian and Christian organization** determined to **restore love, hope and solidarity to their rightful place**.",
    ],
    challengeLabel: "The reality",
    challenges: ["Suffering", "Indifference", "Loss of values"],
    answerLabel: "Our answer",
    answers: ["Love", "Hope", "Solidarity in action"],
    posterAlt: "Hope and Love logo with the motto “Because we love, we act”",
  },

  vision: {
    eyebrow: "Our vision",
    quote: "“To be an instrument of hope, faith and transformation for the nations.”",
    text: "Born in Africa, Hope and Love aims to be **a humanitarian and Christian organization with an international reach**, uplifting, raising awareness and inspiring people to act for a better world.",
    pillars: ["Uplift", "Raise awareness", "Inspire"],
  },

  mission: {
    eyebrow: "Our mission",
    title: "What drives us",
    items: [
      {
        key: "love",
        title: "Promote love",
        text: "Promote the love of God and of others through concrete, inspiring action.",
      },
      {
        key: "act",
        title: "Act for others",
        text: "Carry out and support **humanitarian action** in Africa and around the world.",
      },
      {
        key: "voice",
        title: "Give a voice",
        text: "Give a **voice to the voiceless**: underprivileged children, vulnerable families, young people who have lost their way, the forgotten sick.",
      },
      {
        key: "educate",
        title: "Educate and raise awareness",
        text: "Educate and raise awareness through workshops and gatherings on **family, youth, leadership and health**.",
      },
      {
        key: "platform",
        title: "Showcase initiatives",
        text: "Support and **showcase local and international initiatives** that change lives.",
      },
    ],
  },

  actions: {
    eyebrow: "What we do",
    title: "Our areas of action",
    intro: "Six areas to nourish faith, enlighten minds and encourage solidarity in action.",
    label: "Area",
    items: [
      {
        key: "faith",
        title: "Faith & Spirituality",
        topics: ["Sermons", "Teachings", "Worship", "Testimonies"],
      },
      {
        key: "education",
        title: "Education & Leadership",
        topics: ["Educational workshops", "Personal development", "Training"],
      },
      {
        key: "family",
        title: "Family & Youth",
        topics: ["Practical advice", "Parenting", "Married life", "Youth development"],
      },
      {
        key: "humanitarian",
        title: "Humanitarian & Social",
        topics: ["Solidarity actions", "NGOs & associations", "Community projects"],
      },
      {
        key: "culture",
        title: "Culture & Society",
        topics: ["Talks & debates", "African talent", "Entrepreneurship"],
      },
      {
        key: "health",
        title: "Health & Well-being",
        topics: ["Prevention", "Hygiene", "Nutrition", "Mental & physical health"],
      },
    ],
  },

  audience: {
    eyebrow: "Our audience",
    title: "Who we speak to",
    groups: [
      { key: "families", label: "Families" },
      { key: "youth", label: "Young people" },
      { key: "churches", label: "Churches" },
      { key: "ngos", label: "NGOs" },
      { key: "schools", label: "Schools" },
      { key: "organizations", label: "Social organizations" },
      { key: "diaspora", label: "The African diaspora" },
    ],
    closing:
      "…and everyone who cares about **humanitarian and spiritual causes**.",
  },

  donate: {
    eyebrow: "Donate",
    title: "Support our work",
    intro:
      "Every gift, whatever its size, helps us reach out to **underprivileged children, vulnerable families, young people who have lost their way and the forgotten sick**.",
    supportsTitle: "Your gift supports",
    supports: [
      { key: "solidarity", label: "Solidarity actions" },
      { key: "education", label: "Workshops and training" },
      { key: "health", label: "Health and prevention" },
      { key: "family", label: "Families and young people" },
    ],
    methodsTitle: "How to give",
    online: {
      title: "Give online",
      text: "Secure payment by card or online account.",
      button: "Donate online",
    },
    mobileMoney: {
      title: "Mobile Money",
      text: "Send your gift to the number below.",
      name: "Account name",
    },
    bank: {
      title: "Bank transfer",
      holder: "Account holder",
      bank: "Bank",
      iban: "IBAN",
      bic: "BIC / SWIFT",
    },
    copy: "Copy",
    copied: "Copied!",
    contactTitle: "Contact us to give",
    contactText: "Email or call us and we will tell you how to make your gift.",
    soonTitle: "Coming soon",
    soonText: "Ways to give will be published on this page very soon.",
    thanks: "Thank you for your generosity!",
  },

  cta: {
    title: "Because we love, we act",
    subtitle: "Parce que nous aimons, nous agissons",
    text: "Churches, NGOs, associations, partners and people of goodwill: join us and, together, let’s be an instrument of hope, faith and transformation.",
    youtube: "Subscribe on YouTube",
    email: "Email us",
    phone: "Call us",
    whatsapp: "WhatsApp",
    fallback: "Explore our work",
  },

  footer: {
    tagline: "A humanitarian and Christian organization born in Africa.",
    values: "Faith • Love • Hope",
    navigation: "Navigation",
    contact: "Contact",
    follow: "Follow us",
    rights: "All rights reserved.",
  },
};

export default en;
