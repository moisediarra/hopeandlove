import Image from "next/image";
import { ArrowRight, Globe, HandHeart } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { RichText } from "@/lib/rich-text";
import poster from "../../../public/images/affiche-main-d-amour.jpg";

export function Hero({ t }: { t: Dictionary["hero"] }) {
  // Foi / Amour / Espérance, in the colours of the logo's three figures.
  const [faith, love, hope] = t.titleWords;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-48 size-[38rem] rounded-full bg-sun-300/40 blur-3xl" />
        <div className="absolute -left-56 top-32 size-[32rem] rounded-full bg-plum-200/50 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 size-[24rem] rounded-full bg-leaf-100/80 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-plum-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-plum-800 shadow-sm backdrop-blur">
            <HandHeart className="size-4 text-leaf-600" aria-hidden />
            {t.badge}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-balance font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-plum-950 sm:text-6xl lg:text-[4.1rem]"
          >
            {t.titleLead} <span className="text-plum-600">{faith}</span>,{" "}
            <span className="text-sun-700">{love}</span> {t.titleAnd}{" "}
            <span className="text-leaf-600">{hope}</span>.
          </h1>

          <p className="mt-6 font-script text-[1.9rem] leading-snug text-plum-700 sm:text-[2.2rem]">
            {t.slogan}
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            <RichText text={t.intro} strongClassName="font-bold text-plum-800" />
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#actions"
              className="group inline-flex items-center gap-2 rounded-full bg-plum-800 px-6 py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-plum-900/20 transition hover:bg-plum-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              {t.primaryCta}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#vision"
              className="inline-flex items-center rounded-full border-2 border-plum-200 bg-white/60 px-6 py-3 font-display text-sm font-bold text-plum-800 transition hover:border-plum-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
            >
              {t.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-3 rotate-3 rounded-[2.25rem] bg-linear-to-br from-sun-300 via-sun-100 to-plum-200 sm:-inset-4"
          />
          <Image
            src={poster}
            alt={t.posterAlt}
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
            className="relative w-full rounded-[2rem] shadow-2xl shadow-plum-900/20 ring-1 ring-plum-900/5"
          />
          <p className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white py-3 pl-3 pr-5 font-display text-sm font-bold text-plum-900 shadow-xl shadow-plum-900/10 ring-1 ring-plum-100 sm:-left-6">
            <span className="grid size-9 place-items-center rounded-full bg-leaf-100 text-leaf-700">
              <Globe className="size-5" aria-hidden />
            </span>
            {t.origin}
          </p>
        </div>
      </div>
    </section>
  );
}
