import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { RichText } from "@/lib/rich-text";
import { SectionHeading } from "../section-heading";
import poster from "../../../public/images/affiche-nous-agissons.jpg";

export function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-last mx-auto w-full max-w-md lg:order-first lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-3 -rotate-2 rounded-[2.25rem] bg-linear-to-tr from-leaf-100 via-sun-50 to-plum-100 sm:-inset-4"
          />
          <Image
            src={poster}
            alt={t.posterAlt}
            placeholder="blur"
            sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 28rem, 90vw"
            className="relative w-full rounded-[2rem] shadow-xl shadow-plum-900/10 ring-1 ring-plum-900/5"
          />
        </div>

        <div>
          <SectionHeading id="about-title" eyebrow={t.eyebrow} title={t.title} />

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {t.paragraphs.map((paragraph, i) => (
              <p key={i}>
                <RichText text={paragraph} strongClassName="font-bold text-plum-800" />
              </p>
            ))}
          </div>

          <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="rounded-3xl border border-plum-100 bg-cream p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted">
                {t.challengeLabel}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.challenges.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-muted ring-1 ring-plum-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ArrowRight
              className="mx-auto size-7 rotate-90 text-sun-600 sm:rotate-0"
              aria-hidden
            />

            <div className="rounded-3xl bg-plum-800 p-6 text-white shadow-lg shadow-plum-900/20">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-sun-300">
                {t.answerLabel}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.answers.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold ring-1 ring-white/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
