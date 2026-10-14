import {
  ArrowUpRight,
  CreditCard,
  GraduationCap,
  HandHeart,
  Heart,
  HeartPulse,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { RichText } from "@/lib/rich-text";
import { DONATE_ID } from "@/lib/sections";
import { site } from "@/lib/site";
import { CopyButton } from "../copy-button";
import { SectionHeading } from "../section-heading";

const supportIcons: Record<string, LucideIcon> = {
  solidarity: HandHeart,
  education: GraduationCap,
  health: HeartPulse,
  family: Users,
};

const tones = [
  "bg-plum-100 text-plum-700",
  "bg-leaf-100 text-leaf-700",
  "bg-sun-100 text-sun-700",
];

const cardClass = "rounded-3xl bg-white p-6 shadow-sm shadow-plum-900/5 ring-1 ring-plum-100";

function CardTitle({ Icon, tone, title, label }: { Icon: LucideIcon; tone: string; title: string; label?: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${tone}`}>
        <Icon className="size-6" aria-hidden />
      </span>
      <div>
        {label && (
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted">{label}</p>
        )}
        <h4 className="font-display text-lg font-bold text-plum-900">{title}</h4>
      </div>
    </div>
  );
}

/** On very narrow screens, wraps only between the country code and the local number. */
function PhoneNumber({ value }: { value: string }) {
  const match = value.match(/^(\+\d+)\s+(.+)$/);
  if (!match) return <span className="whitespace-nowrap">{value}</span>;
  return (
    <>
      <span className="whitespace-nowrap">{match[1]}</span>{" "}
      <span className="whitespace-nowrap">{match[2]}</span>
    </>
  );
}

export function Donate({ t }: { t: Dictionary["donate"] }) {
  const { onlineUrl, mobileMoney, bank } = site.donate;
  const { email, phone, whatsapp } = site.contact;
  const hasBank = Boolean(bank.account || bank.iban);
  const hasMethods = Boolean(onlineUrl || mobileMoney.length || hasBank);
  const hasContact = Boolean(email || phone || whatsapp);

  return (
    <section
      id={DONATE_ID}
      aria-labelledby="donate-title"
      className="relative isolate overflow-hidden bg-white py-24 lg:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-0 size-[30rem] rounded-full bg-sun-100/70 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading id="donate-title" eyebrow={t.eyebrow} title={t.title} />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            <RichText text={t.intro} strongClassName="font-bold text-plum-800" />
          </p>

          <h3 className="mt-10 font-display text-xs font-bold uppercase tracking-[0.2em] text-plum-900">
            {t.supportsTitle}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.supports.map((item, i) => {
              const Icon = supportIcons[item.key] ?? Heart;
              return (
                <li
                  key={item.key}
                  className="flex items-center gap-3 rounded-2xl bg-cream p-3 pr-4 ring-1 ring-plum-100"
                >
                  <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${tones[i % tones.length]}`}>
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-display text-sm font-bold text-plum-900">{item.label}</span>
                </li>
              );
            })}
          </ul>

          <p className="mt-10 font-script text-3xl text-plum-700">{t.thanks}</p>
        </div>

        <div className="rounded-[2rem] bg-plum-50 p-5 ring-1 ring-plum-100 sm:p-8 lg:self-start">
          <h3 className="font-display text-xl font-extrabold text-plum-900">{t.methodsTitle}</h3>

          <div className="mt-6 grid gap-4">
            {onlineUrl && (
              <div className={cardClass}>
                <CardTitle Icon={CreditCard} tone={tones[0]} title={t.online.title} />
                <p className="mt-4 text-muted">{t.online.text}</p>
                <a
                  href={onlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-sun-500 px-6 py-3 font-display text-sm font-bold text-plum-950 shadow-sm transition hover:bg-sun-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
                >
                  <Heart className="size-4" aria-hidden />
                  {t.online.button}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            )}

            {mobileMoney.length > 0 && (
              <div className={cardClass}>
                <CardTitle Icon={Smartphone} tone={tones[2]} title={t.mobileMoney.title} />
                <p className="mt-4 text-muted">{t.mobileMoney.text}</p>
                <ul className="mt-4 grid gap-3">
                  {mobileMoney.map((account) => (
                    <li
                      key={account.operator + account.number}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3"
                    >
                      <div>
                        <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-muted">
                          {account.operator}
                        </p>
                        <p className="mt-1 font-display text-xl font-extrabold tracking-wide text-plum-900">
                          <PhoneNumber value={account.number} />
                        </p>
                        {account.name && (
                          <p className="mt-1 text-sm text-muted">
                            {t.mobileMoney.name} :{" "}
                            <span className="font-semibold text-plum-900">{account.name}</span>
                          </p>
                        )}
                      </div>
                      <CopyButton
                        value={account.number.replace(/\s+/g, "")}
                        label={t.copy}
                        copiedLabel={t.copied}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hasBank && (
              <div className={cardClass}>
                <CardTitle Icon={Landmark} tone={tones[1]} title={t.bank.title} />
                <dl className="mt-5 grid gap-3 text-sm">
                  {bank.holder && (
                    <div>
                      <dt className="text-muted">{t.bank.holder}</dt>
                      <dd className="font-semibold text-plum-900">{bank.holder}</dd>
                    </div>
                  )}
                  {bank.bank && (
                    <div>
                      <dt className="text-muted">{t.bank.bank}</dt>
                      <dd className="font-semibold text-plum-900">{bank.bank}</dd>
                    </div>
                  )}
                  {bank.account && (
                    <div>
                      <dt className="text-muted">{t.bank.account}</dt>
                      <dd className="mt-1 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3">
                        <span className="break-all font-mono font-semibold text-plum-900">{bank.account}</span>
                        <CopyButton value={bank.account} label={t.copy} copiedLabel={t.copied} />
                      </dd>
                    </div>
                  )}
                  {bank.iban && (
                    <div>
                      <dt className="text-muted">{t.bank.iban}</dt>
                      <dd className="mt-1 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3">
                        <span className="break-all font-mono font-semibold text-plum-900">{bank.iban}</span>
                        <CopyButton
                          value={bank.iban.replace(/\s+/g, "")}
                          label={t.copy}
                          copiedLabel={t.copied}
                        />
                      </dd>
                    </div>
                  )}
                  {bank.bic && (
                    <div>
                      <dt className="text-muted">{t.bank.bic}</dt>
                      <dd className="font-mono font-semibold text-plum-900">{bank.bic}</dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            {!hasMethods && hasContact && (
              <div className={cardClass}>
                <CardTitle Icon={Heart} tone={tones[0]} title={t.contactTitle} />
                <p className="mt-4 text-muted">{t.contactText}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {email && (
                    <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-full bg-plum-800 px-5 py-2.5 font-display text-sm font-bold text-white hover:bg-plum-700">
                      <Mail className="size-4" aria-hidden />
                      {email}
                    </a>
                  )}
                  {phone && (
                    <a href={`tel:${phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 rounded-full border-2 border-plum-200 px-5 py-2 font-display text-sm font-bold text-plum-800 hover:border-plum-400">
                      <Phone className="size-4" aria-hidden />
                      {phone}
                    </a>
                  )}
                  {whatsapp && (
                    <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-plum-200 px-5 py-2 font-display text-sm font-bold text-plum-800 hover:border-plum-400">
                      <MessageCircle className="size-4" aria-hidden />
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            )}

            {!hasMethods && !hasContact && (
              <div className={cardClass}>
                <CardTitle Icon={Heart} tone={tones[2]} title={t.soonTitle} />
                <p className="mt-4 text-muted">{t.soonText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
