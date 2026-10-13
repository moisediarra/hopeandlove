import {
  Building2,
  Church,
  Globe,
  HandHeart,
  House,
  School,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { RichText } from "@/lib/rich-text";
import { SectionHeading } from "../section-heading";

const icons: Record<string, LucideIcon> = {
  families: House,
  youth: Sparkles,
  churches: Church,
  ngos: HandHeart,
  schools: School,
  organizations: Building2,
  diaspora: Globe,
};

const tones = [
  "bg-plum-100 text-plum-700",
  "bg-leaf-100 text-leaf-700",
  "bg-sun-100 text-sun-700",
];

export function Audience({ t }: { t: Dictionary["audience"] }) {
  return (
    <section
      id="audience"
      aria-labelledby="audience-title"
      className="relative isolate overflow-hidden bg-plum-50 py-24 lg:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 size-96 rounded-full bg-leaf-100/70 blur-3xl" />
        <div className="absolute -right-32 bottom-0 size-96 rounded-full bg-sun-100/80 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="audience-title" eyebrow={t.eyebrow} title={t.title} align="center" />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {t.groups.map((group, i) => {
            const Icon = icons[group.key] ?? Sparkles;
            // The diaspora is highlighted: it closes the list and is a key audience of Hope and Love.
            if (group.key === "diaspora") {
              return (
                <li
                  key={group.key}
                  className="col-span-2 flex items-center gap-4 rounded-2xl bg-plum-800 p-4 text-white shadow-lg shadow-plum-900/20 sm:col-span-3 sm:p-5 lg:col-span-2"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-sun-400">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="font-display font-bold">{group.label}</span>
                </li>
              );
            }
            return (
              // Stacked on phones so long labels ("Organisations sociales") keep enough room.
              <li
                key={group.key}
                className="flex flex-col items-start gap-3 rounded-2xl bg-white p-4 shadow-sm shadow-plum-900/5 ring-1 ring-plum-100 sm:flex-row sm:items-center sm:gap-4 sm:p-5"
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl sm:size-12 ${tones[i % tones.length]}`}
                >
                  <Icon className="size-6" aria-hidden />
                </span>
                <span className="min-w-0 hyphens-auto break-words font-display font-bold text-plum-900">
                  {group.label}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-muted">
          <RichText text={t.closing} strongClassName="font-bold text-plum-800" />
        </p>
      </div>
    </section>
  );
}
