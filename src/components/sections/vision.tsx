import type { Dictionary } from "@/i18n/get-dictionary";
import { RichText } from "@/lib/rich-text";

const pillarDots = ["bg-sun-400", "bg-leaf-500", "bg-plum-300"];

export function Vision({ t }: { t: Dictionary["vision"] }) {
  return (
    <section
      id="vision"
      aria-labelledby="vision-title"
      className="relative isolate overflow-hidden bg-plum-900 py-24 text-white lg:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-40 h-[30rem] w-[64rem] -translate-x-1/2 rounded-full bg-plum-600/45 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 size-[26rem] rounded-full bg-sun-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 size-[22rem] rounded-full bg-leaf-500/15 blur-3xl" />
        <svg
          className="absolute inset-x-0 bottom-0 h-24 w-full text-sun-400/60"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0 90C380 10 1060 10 1440 78" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0 96C420 34 1020 34 1440 92" stroke="currentColor" strokeOpacity=".5" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2
          id="vision-title"
          className="inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.22em] text-sun-400"
        >
          <span aria-hidden className="h-px w-8 bg-current" />
          {t.eyebrow}
          <span aria-hidden className="h-px w-8 bg-current" />
        </h2>

        <blockquote className="mt-8 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          <p>{t.quote}</p>
        </blockquote>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-plum-100">
          <RichText text={t.text} strongClassName="font-bold text-white" />
        </p>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {t.pillars.map((pillar, i) => (
            <li
              key={pillar}
              className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-display text-sm font-bold backdrop-blur"
            >
              <span aria-hidden className={`size-2 rounded-full ${pillarDots[i]}`} />
              {pillar}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
