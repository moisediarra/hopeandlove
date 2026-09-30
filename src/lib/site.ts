/**
 * Informations générales du site.
 * Renseignez les coordonnées ci-dessous : chaque élément vide est simplement masqué sur le site.
 */
export const site = {
  name: "Hope and Love TV",

  /**
   * URL publique du site (sans « / » final). Sur Vercel, le domaine de production est détecté
   * automatiquement ; définissez NEXT_PUBLIC_SITE_URL si vous utilisez un domaine personnalisé.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  contact: {
    /** ex. "contact@hopeandlove.tv" */
    email: "",
    /** ex. "+225 07 00 00 00 00" */
    phone: "",
    /** Numéro WhatsApp au format international, chiffres uniquement, ex. "2250700000000" */
    whatsapp: "",
  },

  /** Réseaux sociaux, ex. { label: "YouTube", href: "https://youtube.com/@hopeandlovetv" } */
  socials: [] as { label: string; href: string }[],
};
