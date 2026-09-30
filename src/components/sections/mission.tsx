import {
  GraduationCap,
  Heart,
  Megaphone,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { RichText } from "@/lib/rich-text";
import { SectionHeading } from "../section-heading";

const icons: Record<string, LucideIcon> = {
  love: Heart,
  spotlight: Sun,
  voice: Megaphone,
  educate: GraduationCap,
  platform: Sparkles,
};

const tones = [
  "bg-plum-100 text-plum-700",
  "bg-leaf-100 text-leaf-700",
  "bg-sun-100 text-sun-700",
];

export function Mission({ t }: { t: Dictionary["mission"] }) {
  return (
    <section id="mission" aria-labelledby="mission-title" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="mission-title" eyebrow={t.eyebrow} title={t.title} align="center" />

        {/* 3 + 2 layout on large screens: the last two cards are centred. */}
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {t.items.map((item, i) => {
            const Icon = icons[item.key] ?? Heart;
            return (
              <li
                key={item.key}
                className={`relative flex flex-col rounded-3xl border border-plum-100 bg-white p-8 shadow-sm shadow-plum-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-plum-900/10 sm:max-lg:last:col-span-2 lg:col-span-2 ${
                  i === 3 ? "lg:col-start-2" : ""
                }`}
              >
                <span className={`grid size-14 place-items-center rounded-2xl ${tones[i % tones.length]}`}>
                  <Icon className="size-7" aria-hidden />
                </span>
                <span
                  aria-hidden
                  className="absolute right-7 top-6 font-display text-5xl font-extrabold text-plum-50"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-plum-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  <RichText text={item.text} strongClassName="font-bold text-plum-800" />
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
