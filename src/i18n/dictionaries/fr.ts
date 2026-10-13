// Texte source (français). Le dictionnaire anglais doit suivre exactement la même structure.
// Astuce : entourez un passage de **doubles astérisques** pour le mettre en gras.

const fr = {
  meta: {
    title: "Hope and Love — Plus qu’une aide, une main d’amour et d’espoir",
    description:
      "Hope and Love, organisation humanitaire et chrétienne née d’Afrique : agir avec foi, amour et espérance auprès des familles, des jeunes et des plus vulnérables.",
    ogAlt: "Hope and Love — Plus qu’une aide, une main d’amour et d’espoir",
  },

  nav: {
    skip: "Aller au contenu",
    home: "Accueil Hope and Love",
    main: "Navigation principale",
    about: "À propos",
    vision: "Vision",
    mission: "Mission",
    actions: "Nos actions",
    audience: "Publics",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
  },

  hero: {
    badge: "Organisation humanitaire et chrétienne",
    titleLead: "Agir avec",
    titleWords: ["foi", "amour", "espérance"],
    titleAnd: "et",
    slogan: "Plus qu’une aide, une main d’amour et d’espoir",
    intro:
      "Née d’Afrique, **Hope and Love** est une **organisation humanitaire et chrétienne** au service de l’amour, de l’espérance et de l’action solidaire.",
    primaryCta: "Découvrir nos actions",
    secondaryCta: "Notre vision",
    posterAlt:
      "Deux mains tenant un cœur violet devant une famille au soleil levant, avec le logo Hope and Love",
    origin: "Née d’Afrique, pour les nations",
  },

  about: {
    eyebrow: "Contexte",
    title: "Pourquoi Hope and Love ?",
    paragraphs: [
      "Dans un monde marqué par la souffrance, l’indifférence et la perte des valeurs, beaucoup attendent une main tendue.",
      "C’est dans cette vision qu’est née **Hope and Love**, une **organisation humanitaire et chrétienne** qui veut **redonner la place à l’amour, à l’espérance et à l’action solidaire**.",
    ],
    challengeLabel: "Le constat",
    challenges: ["Souffrance", "Indifférence", "Perte des valeurs"],
    answerLabel: "Notre réponse",
    answers: ["Amour", "Espérance", "Action solidaire"],
    posterAlt: "Logo Hope and Love avec la devise « Parce que nous aimons, nous agissons »",
  },

  vision: {
    eyebrow: "Notre vision",
    quote:
      "« Être un instrument d’espoir, de foi et de transformation pour les nations. »",
    text: "Née d’Afrique, Hope and Love se veut **une organisation humanitaire et chrétienne de portée internationale**, qui édifie, sensibilise et inspire les peuples à agir pour un monde meilleur.",
    pillars: ["Édifier", "Sensibiliser", "Inspirer"],
  },

  mission: {
    eyebrow: "Notre mission",
    title: "Ce qui nous anime",
    items: [
      {
        key: "love",
        title: "Promouvoir l’amour",
        text: "Promouvoir l’amour de Dieu et des autres à travers des actions concrètes et inspirantes.",
      },
      {
        key: "act",
        title: "Agir pour les autres",
        text: "Mener et soutenir des **actions humanitaires** en Afrique et dans le monde.",
      },
      {
        key: "voice",
        title: "Donner une voix",
        text: "Donner une **voix aux sans-voix** : enfants défavorisés, familles vulnérables, jeunes sans repères, malades oubliés.",
      },
      {
        key: "educate",
        title: "Former et sensibiliser",
        text: "Former et sensibiliser à travers des ateliers et des rencontres sur **la famille, la jeunesse, le leadership et la santé**.",
      },
      {
        key: "platform",
        title: "Valoriser les initiatives",
        text: "Soutenir et **valoriser les initiatives** locales et internationales qui changent des vies.",
      },
    ],
  },

  actions: {
    eyebrow: "Ce que nous faisons",
    title: "Nos domaines d’action",
    intro:
      "Six domaines pour nourrir la foi, éclairer les esprits et encourager l’action solidaire.",
    label: "Domaine",
    items: [
      {
        key: "faith",
        title: "Foi et spiritualité",
        topics: ["Prédications", "Enseignements", "Louange", "Témoignages"],
      },
      {
        key: "education",
        title: "Éducation et leadership",
        topics: ["Ateliers éducatifs", "Développement personnel", "Formation"],
      },
      {
        key: "family",
        title: "Famille et jeunesse",
        topics: [
          "Conseils pratiques",
          "Éducation parentale",
          "Vie de couple",
          "Épanouissement des jeunes",
        ],
      },
      {
        key: "humanitarian",
        title: "Humanitaire et social",
        topics: ["Actions solidaires", "ONG et associations", "Projets communautaires"],
      },
      {
        key: "culture",
        title: "Culture et société",
        topics: ["Conférences et débats", "Talents africains", "Entrepreneuriat"],
      },
      {
        key: "health",
        title: "Santé et bien-être",
        topics: ["Prévention", "Hygiène", "Nutrition", "Santé mentale et physique"],
      },
    ],
  },

  audience: {
    eyebrow: "Nos publics",
    title: "À qui nous nous adressons",
    groups: [
      { key: "families", label: "Familles" },
      { key: "youth", label: "Jeunes" },
      { key: "churches", label: "Églises" },
      { key: "ngos", label: "ONG" },
      { key: "schools", label: "Écoles" },
      { key: "organizations", label: "Organisations sociales" },
      { key: "diaspora", label: "Africains de la diaspora" },
    ],
    closing:
      "…et toutes les personnes sensibles à la **cause humanitaire et spirituelle**.",
  },

  cta: {
    title: "Parce que nous aimons, nous agissons",
    subtitle: "Because we love, we act",
    text: "Églises, ONG, associations, partenaires et bonnes volontés : rejoignez-nous pour être, ensemble, un instrument d’espoir, de foi et de transformation.",
    youtube: "S’abonner sur YouTube",
    email: "Nous écrire",
    phone: "Nous appeler",
    whatsapp: "WhatsApp",
    fallback: "Découvrir nos actions",
  },

  footer: {
    tagline: "Organisation humanitaire et chrétienne née d’Afrique.",
    values: "Foi • Amour • Espérance",
    navigation: "Navigation",
    contact: "Contact",
    follow: "Suivez-nous",
    rights: "Tous droits réservés.",
  },
};

export default fr;

export type Dictionary = typeof fr;
