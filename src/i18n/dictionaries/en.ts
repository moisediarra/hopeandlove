import type { Dictionary } from "./fr";

// English translation. Keep the same structure as fr.ts (TypeScript will flag any missing key).

const en: Dictionary = {
  meta: {
    title: "Hope and Love TV — The channel that inspires, informs and impacts",
    description:
      "Hope and Love TV, a humanitarian and Christian television channel born in Africa: programs that uplift, raise awareness and inspire people to act for a better world.",
    ogAlt: "Hope and Love TV — More than help, a hand of love and hope",
  },

  nav: {
    skip: "Skip to content",
    home: "Hope and Love TV home",
    main: "Main navigation",
    about: "About",
    vision: "Vision",
    mission: "Mission",
    programs: "Programs",
    audience: "Audience",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  hero: {
    badge: "Humanitarian & Christian television",
    titleLead: "The channel that",
    titleWords: ["inspires", "informs", "impacts"],
    titleAnd: "and",
    slogan: "More than help, a hand of love and hope",
    intro:
      "Hope and Love TV aims to be **the first international Christian humanitarian television channel born in Africa**, devoted to love, hope and solidarity in action.",
    primaryCta: "Explore our programs",
    secondaryCta: "Our vision",
    values: ["Faith", "Love", "Hope"],
    posterAlt:
      "Two hands holding a purple heart in front of a family at sunrise, with the Hope and Love logo",
    origin: "Born in Africa, for the nations",
  },

  about: {
    eyebrow: "Context",
    title: "Why Hope and Love TV?",
    paragraphs: [
      "In a world marked by suffering, indifference and a loss of values, the media play a vital role in transforming mindsets.",
      "Yet most channels favor entertainment at the expense of education, faith and humanitarian causes.",
      "It is from this vision that **Hope and Love TV** was born: a **humanitarian and Christian television channel** determined to **restore love, hope and solidarity to their rightful place**.",
    ],
    challengeLabel: "The reality",
    challenges: ["Suffering", "Indifference", "Loss of values"],
    answerLabel: "Our answer",
    answers: ["Love", "Hope", "Solidarity in action"],
    posterAlt: "Hope and Love logo with the motto “Because we love, we act”",
  },

  vision: {
    eyebrow: "Our vision",
    quote:
      "“To make media an instrument of hope, faith and transformation for the nations.”",
    text: "Hope and Love TV aims to be **the first international Christian humanitarian television channel born in Africa**, broadcasting content that uplifts, raises awareness and inspires people to act for a better world.",
    pillars: ["Uplift", "Raise awareness", "Inspire"],
  },

  mission: {
    eyebrow: "Our mission",
    title: "What drives us",
    items: [
      {
        key: "love",
        title: "Promote love",
        text: "Promote the love of God and of others through inspiring programs.",
      },
      {
        key: "spotlight",
        title: "Shine a light",
        text: "Shine a light on **humanitarian work** carried out in Africa and around the world.",
      },
      {
        key: "voice",
        title: "Give a voice",
        text: "Give a **voice to the voiceless**: underprivileged children, vulnerable families, young people who have lost their way, the forgotten sick.",
      },
      {
        key: "educate",
        title: "Educate and raise awareness",
        text: "Educate and raise awareness through educational programs on **family, youth, leadership and health**.",
      },
      {
        key: "platform",
        title: "Showcase initiatives",
        text: "Be a **platform that showcases** local and international initiatives that change lives.",
      },
    ],
  },

  programs: {
    eyebrow: "Content & programming",
    title: "Our programs",
    intro: "Six main categories to nourish faith, enlighten minds and encourage action.",
    label: "Category",
    items: [
      {
        key: "faith",
        title: "Faith & Spirituality",
        topics: ["Sermons", "Teachings", "Worship", "Testimonies"],
      },
      {
        key: "education",
        title: "Education & Leadership",
        topics: ["Educational programs", "Personal development", "Training"],
      },
      {
        key: "family",
        title: "Family & Youth",
        topics: ["Practical advice", "Parenting", "Married life", "Youth development"],
      },
      {
        key: "humanitarian",
        title: "Humanitarian & Social",
        topics: [
          "Reports on solidarity work",
          "NGOs",
          "Associations",
          "Community projects",
        ],
      },
      {
        key: "culture",
        title: "Culture & Society",
        topics: ["Documentaries", "Debates", "African talent", "Entrepreneurship"],
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

  cta: {
    title: "Because we love, we act",
    subtitle: "Parce que nous aimons, nous agissons",
    text: "Churches, NGOs, associations, partners and people of goodwill: join us in making media an instrument of hope, faith and transformation.",
    email: "Email us",
    phone: "Call us",
    whatsapp: "WhatsApp",
    fallback: "Explore our programs",
  },

  footer: {
    tagline: "The channel that inspires, informs and impacts.",
    values: "Faith • Love • Hope",
    navigation: "Navigation",
    contact: "Contact",
    follow: "Follow us",
    rights: "All rights reserved.",
  },
};

export default en;
