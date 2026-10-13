import {
  BookOpen,
  Clapperboard,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../section-heading";

const icons: Record<string, LucideIcon> = {
  faith: BookOpen,
  education: GraduationCap,
  family: Users,
  humanitarian: HandHeart,
  culture: Clapperboard,
  health: HeartPulse,
};

const tones = [
  {
    bar: "from-plum-700 to-plum-400",
    icon: "bg-plum-100 text-plum-700",
    chip: "bg-plum-50 text-plum-800 ring-plum-100",
  },
  {
    bar: "from-leaf-700 to-leaf-500",
    icon: "bg-leaf-100 text-leaf-700",
    chip: "bg-leaf-50 text-leaf-700 ring-leaf-100",
  },
  {
    bar: "from-sun-600 to-sun-300",
    icon: "bg-sun-100 text-sun-700",
    chip: "bg-sun-50 text-sun-800 ring-sun-100",
  },
];

export function Programs({ t }: { t: Dictionary["programs"] }) {
  return (
    <section id="programs" aria-labelledby="programs-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="programs-title"
          eyebrow={t.eyebrow}
          title={t.title}
          intro={t.intro}
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => {
            const Icon = icons[item.key] ?? BookOpen;
            const tone = tones[i % tones.length];
            return (
              <li
                key={item.key}
                className="relative overflow-hidden rounded-3xl border border-plum-100 bg-cream p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-plum-900/10"
              >
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${tone.bar}`}
                />
                <div className="flex items-center justify-between gap-4">
                  <span className={`grid size-14 place-items-center rounded-2xl ${tone.icon}`}>
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted">
                    {t.label} {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-plum-900">{item.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.topics.map((topic) => (
                    <li
                      key={topic}
                      className={`rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ${tone.chip}`}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
