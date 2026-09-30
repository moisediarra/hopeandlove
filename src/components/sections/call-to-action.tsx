import {
  ArrowRight,
  Heart,
  Mail,
  MessageCircle,
  Phone,
  TvMinimalPlay,
  type LucideIcon,
} from "lucide-react";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";

type Action = { href: string; label: string; Icon: LucideIcon; external?: boolean };

export function CallToAction({ lang, t }: { lang: Locale; t: Dictionary["cta"] }) {
  const { email, phone, whatsapp } = site.contact;
  const otherLang = locales.find((l) => l !== lang);

  const actions: Action[] = [];
  if (site.youtube)
    actions.push({
      // Opens YouTube's "Subscribe" confirmation directly
      href: `${site.youtube}?sub_confirmation=1`,
      label: t.youtube,
      Icon: TvMinimalPlay,
      external: true,
    });
  if (email) actions.push({ href: `mailto:${email}`, label: t.email, Icon: Mail });
  if (phone) actions.push({ href: `tel:${phone.replace(/\s+/g, "")}`, label: t.phone, Icon: Phone });
  if (whatsapp)
    actions.push({
      href: `https://wa.me/${whatsapp}`,
      label: t.whatsapp,
      Icon: MessageCircle,
      external: true,
    });

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-linear-to-br from-plum-700 via-plum-800 to-plum-950 py-24 text-white lg:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 size-[28rem] rounded-full bg-plum-500/40 blur-3xl" />
        <div className="absolute -bottom-40 right-0 size-[30rem] rounded-full bg-sun-500/25 blur-3xl" />
        {/* Gold ribbon, as on the Hope and Love poster */}
        <svg
          className="absolute inset-x-0 bottom-0 h-40 w-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0 150C420 40 1000 30 1440 120" stroke="#fbc035" strokeWidth="3" strokeOpacity=".8" />
          <path d="M0 160C460 70 980 60 1440 140" stroke="#fbd060" strokeWidth="1.5" strokeOpacity=".4" />
        </svg>
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Heart className="mx-auto size-10 text-sun-400" strokeWidth={1.75} aria-hidden />
        <h2
          id="contact-title"
          className="mt-6 text-balance font-script text-5xl leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          {t.title}
        </h2>
        <p
          lang={otherLang}
          className="mt-5 font-display text-xs font-bold uppercase tracking-[0.3em] text-sun-300 sm:text-sm"
        >
          {t.subtitle}
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-plum-100">{t.text}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {actions.length > 0 ? (
            actions.map(({ href, label, Icon, external }, i) => (
              <a
                key={href}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-300 ${
                  i === 0
                    ? "bg-sun-500 text-plum-950 shadow-lg shadow-black/20 hover:bg-sun-400"
                    : "border-2 border-white/30 text-white hover:border-white hover:bg-white/10"
                }`}
              >
                <Icon className="size-4" aria-hidden />
                {label}
              </a>
            ))
          ) : (
            <a
              href="#programs"
              className="group inline-flex items-center gap-2 rounded-full bg-sun-500 px-6 py-3.5 font-display text-sm font-bold text-plum-950 shadow-lg shadow-black/20 transition hover:bg-sun-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-300"
            >
              {t.fallback}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
