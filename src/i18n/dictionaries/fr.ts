// Texte source (français). Le dictionnaire anglais doit suivre exactement la même structure.
// Astuce : entourez un passage de **doubles astérisques** pour le mettre en gras.

const fr = {
  meta: {
    title: "Hope and Love TV — La chaîne qui inspire, informe et impacte",
    description:
      "Hope and Love TV, télévision humanitaire et chrétienne née d’Afrique : des programmes qui édifient, sensibilisent et inspirent les peuples à agir pour un monde meilleur.",
    ogAlt: "Hope and Love TV — Plus qu’une aide, une main d’amour et d’espoir",
  },

  nav: {
    skip: "Aller au contenu",
    home: "Accueil Hope and Love TV",
    main: "Navigation principale",
    about: "À propos",
    vision: "Vision",
    mission: "Mission",
    programs: "Programmes",
    audience: "Publics",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
  },

  hero: {
    badge: "Télévision humanitaire et chrétienne",
    titleLead: "La chaîne qui",
    titleWords: ["inspire", "informe", "impacte"],
    titleAnd: "et",
    slogan: "Plus qu’une aide, une main d’amour et d’espoir",
    intro:
      "Hope and Love TV se veut **la première télévision humanitaire chrétienne internationale née d’Afrique**, au service de l’amour, de l’espérance et de l’action solidaire.",
    primaryCta: "Découvrir nos programmes",
    secondaryCta: "Notre vision",
    values: ["Foi", "Amour", "Espérance"],
    posterAlt:
      "Deux mains tenant un cœur violet devant une famille au soleil levant, avec le logo Hope and Love",
    origin: "Née d’Afrique, pour les nations",
  },

  about: {
    eyebrow: "Contexte",
    title: "Pourquoi Hope and Love TV ?",
    paragraphs: [
      "Dans un monde marqué par la souffrance, l’indifférence et la perte des valeurs, les médias jouent un rôle capital dans la transformation des mentalités.",
      "Cependant, la plupart des chaînes privilégient le divertissement au détriment de l’éducation, de la foi et de l’humanitaire.",
      "C’est dans cette vision qu’est née **Hope and Love TV**, une **télévision humanitaire et chrétienne** qui veut **redonner la place à l’amour, à l’espérance et à l’action solidaire**.",
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
      "« Faire des médias un instrument d’espoir, de foi et de transformation pour les nations. »",
    text: "Hope and Love TV se veut **la première télévision humanitaire chrétienne internationale née d’Afrique**, diffusant des contenus qui édifient, sensibilisent et inspirent les peuples à agir pour un monde meilleur.",
    pillars: ["Édifier", "Sensibiliser", "Inspirer"],
  },

  mission: {
    eyebrow: "Notre mission",
    title: "Ce qui nous anime",
    items: [
      {
        key: "love",
        title: "Promouvoir l’amour",
        text: "Promouvoir l’amour de Dieu et des autres à travers des programmes inspirants.",
      },
      {
        key: "spotlight",
        title: "Mettre en lumière",
        text: "Mettre en lumière les **actions humanitaires** réalisées en Afrique et dans le monde.",
      },
      {
        key: "voice",
        title: "Donner une voix",
        text: "Donner une **voix aux sans-voix** : enfants défavorisés, familles vulnérables, jeunes sans repères, malades oubliés.",
      },
      {
        key: "educate",
        title: "Former et sensibiliser",
        text: "Former et sensibiliser à travers des émissions éducatives sur **la famille, la jeunesse, le leadership et la santé**.",
      },
      {
        key: "platform",
        title: "Valoriser les initiatives",
        text: "Être une **plateforme de valorisation** des initiatives locales et internationales qui changent des vies.",
      },
    ],
  },

  programs: {
    eyebrow: "Contenus et rubriques",
    title: "Nos programmes",
    intro:
      "Six grandes rubriques pour nourrir la foi, éclairer les esprits et encourager l’action.",
    label: "Rubrique",
    items: [
      {
        key: "faith",
        title: "Foi et spiritualité",
        topics: ["Prédications", "Enseignements", "Louange", "Témoignages"],
      },
      {
        key: "education",
        title: "Éducation et leadership",
        topics: ["Émissions éducatives", "Développement personnel", "Formation"],
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
        topics: [
          "Reportages sur les actions solidaires",
          "ONG",
          "Associations",
          "Projets communautaires",
        ],
      },
      {
        key: "culture",
        title: "Culture et société",
        topics: ["Documentaires", "Débats", "Talents africains", "Entrepreneuriat"],
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
    text: "Églises, ONG, associations, partenaires et bonnes volontés : rejoignez-nous pour faire des médias un instrument d’espoir, de foi et de transformation.",
    youtube: "S’abonner sur YouTube",
    email: "Nous écrire",
    phone: "Nous appeler",
    whatsapp: "WhatsApp",
    fallback: "Découvrir nos programmes",
  },

  footer: {
    tagline: "La chaîne qui inspire, informe et impacte.",
    values: "Foi • Amour • Espérance",
    navigation: "Navigation",
    contact: "Contact",
    follow: "Suivez-nous",
    rights: "Tous droits réservés.",
  },
};

export default fr;

export type Dictionary = typeof fr;
