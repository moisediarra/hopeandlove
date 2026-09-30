import Link from "next/link";
import { localeNames, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SECTIONS } from "@/lib/sections";
import { site } from "@/lib/site";
import { BrandMark, Wordmark } from "./brand";

export function Footer({
  lang,
  nav,
  t,
  slogan,
}: {
  lang: Locale;
  nav: Dictionary["nav"];
  t: Dictionary["footer"];
  slogan: string;
}) {
  const { email, phone, whatsapp } = site.contact;
  const hasContact = Boolean(email || phone || whatsapp);
  const socials = [
    ...(site.youtube ? [{ label: "YouTube", href: site.youtube }] : []),
    ...site.socials,
  ];
  const headingClass =
    "font-display text-xs font-bold uppercase tracking-[0.2em] text-white";
  const linkClass = "transition-colors hover:text-white";

  return (
    <footer className="bg-plum-950 text-plum-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link
            href={`/${lang}`}
            aria-label={nav.home}
            className="inline-flex items-center gap-3 text-[1.05rem]"
          >
            {/* White disc keeps the purple of the emblem legible on the dark footer */}
            <span className="grid size-14 place-items-center rounded-full bg-white p-1 shadow-lg">
              <BrandMark className="size-full" />
            </span>
            <Wordmark inverted />
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed">{t.tagline}</p>
          <p className="mt-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-sun-400">
            {t.values}
          </p>
        </div>

        <nav aria-label={t.navigation}>
          <h2 className={headingClass}>{t.navigation}</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={linkClass}>
                  {nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-10">
          <div>
            <h2 className={headingClass}>{nav.language}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {locales.map((locale) => (
                <li key={locale}>
                  {locale === lang ? (
                    <span aria-current="true" className="font-bold text-white">
                      {localeNames[locale]}
                    </span>
                  ) : (
                    <Link href={`/${locale}`} hrefLang={locale} lang={locale} className={linkClass}>
                      {localeNames[locale]}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {hasContact && (
            <div>
              <h2 className={headingClass}>{t.contact}</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className={linkClass}>
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a href={`tel:${phone.replace(/\s+/g, "")}`} className={linkClass}>
                      {phone}
                    </a>
                  </li>
                )}
                {whatsapp && (
                  <li>
                    <a
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      WhatsApp
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {socials.length > 0 && (
            <div>
              <h2 className={headingClass}>{t.follow}</h2>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm">
                {socials.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-white/15 px-3.5 py-1.5 transition-colors hover:border-white/40 hover:text-white"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-plum-300 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. {t.rights}
          </p>
          <p className="font-script text-lg text-plum-200">{slogan}</p>
        </div>
      </div>
    </footer>
  );
}
