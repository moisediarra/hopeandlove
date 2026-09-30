export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** Remembers the language the visitor last viewed, so `/` sends them back to it. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const openGraphLocale: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
};

/** Each language written in its own language, for the language switcher. */
export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};
