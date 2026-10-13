/**
 * Informations générales du site.
 * Renseignez les coordonnées ci-dessous : chaque élément vide est simplement masqué sur le site.
 */
export const site = {
  name: "Hope and Love",

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
    /** ex. "contact@exemple.org" */
    email: "",
    /** ex. "+225 07 00 00 00 00" */
    phone: "",
    /** Numéro WhatsApp au format international, chiffres uniquement, ex. "2250700000000" */
    whatsapp: "",
  },

  /**
   * Moyens de don affichés dans la section « Faire un don ».
   * Chaque moyen vide est masqué. Tant qu'aucun n'est renseigné, la section invite à nous
   * contacter (si un e-mail, un téléphone ou un WhatsApp est renseigné ci-dessus).
   */
  donate: {
    /** Lien de paiement en ligne (PayPal, Stripe, HelloAsso…), ex. "https://www.paypal.com/donate/?hosted_button_id=XXXX" */
    onlineUrl: "",
    /** Comptes Mobile Money, ex. { operator: "Orange Money", number: "+225 07 00 00 00 00", name: "Hope and Love" } */
    mobileMoney: [] as { operator: string; number: string; name?: string }[],
    /** Virement bancaire : laisser `iban` vide pour masquer ce moyen. */
    bank: { holder: "", bank: "", iban: "", bic: "" },
  },

  /** Chaîne YouTube : bouton « S'abonner » de la section Contact et lien dans le pied de page. */
  youtube: "https://www.youtube.com/@HopeAndLoveTV",

  /** Autres réseaux sociaux, ex. { label: "Facebook", href: "https://facebook.com/hopeandlove" } */
  socials: [] as { label: string; href: string }[],
};
