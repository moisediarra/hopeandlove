"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { localeNames, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { DONATE_ID, SECTIONS } from "@/lib/sections";
import { BrandMark, Wordmark } from "./brand";

export function Header({ lang, nav }: { lang: Locale; nav: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item of the section currently in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...SECTIONS, DONATE_ID]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Switching language keeps the visitor on the same section.
  const hash = active && active !== "top" ? `#${active}` : "";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open
          ? "bg-cream/90 shadow-[0_1px_0_rgba(60,3,100,0.08),0_10px_30px_-14px_rgba(60,3,100,0.25)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-plum-800 px-4 py-2 text-sm font-bold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        {nav.skip}
      </a>

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-8 lg:gap-4 xl:gap-6">
        <Link
          href={`/${lang}`}
          aria-label={nav.home}
          className="flex shrink-0 items-center gap-2 text-[0.9rem] sm:gap-2.5 sm:text-[1.05rem]"
        >
          <BrandMark className="size-10 sm:size-11" />
          <Wordmark />
        </Link>

        <nav aria-label={nav.main} className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`whitespace-nowrap rounded-full px-2.5 py-2 font-display text-[0.8rem] font-semibold transition-colors xl:px-3.5 ${
                    active === id
                      ? "bg-plum-100 text-plum-900"
                      : "text-muted hover:text-plum-800"
                  }`}
                >
                  {nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`#${DONATE_ID}`}
            aria-current={active === DONATE_ID ? "true" : undefined}
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-sun-500 px-4 py-2 font-display text-[0.8rem] font-bold text-plum-950 shadow-sm shadow-sun-700/20 transition-colors hover:bg-sun-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 lg:inline-flex"
          >
            <Heart className="size-4" aria-hidden />
            {nav.donate}
          </a>

          {/* Small screens: a single pill leading to the other language */}
          {locales
            .filter((locale) => locale !== lang)
            .map((locale) => (
              <Link
                key={locale}
                href={`/${locale}${hash}`}
                hrefLang={locale}
                lang={locale}
                aria-label={localeNames[locale]}
                className="rounded-full border border-plum-200 bg-white/70 px-3 py-1.5 font-display text-xs font-bold uppercase text-plum-800 transition-colors hover:bg-plum-50 sm:hidden"
              >
                {locale}
              </Link>
            ))}

          <div
            role="group"
            aria-label={nav.language}
            className="hidden rounded-full border border-plum-200 bg-white/70 p-0.5 font-display text-xs font-bold sm:flex"
          >
            {locales.map((locale) =>
              locale === lang ? (
                <span
                  key={locale}
                  aria-current="true"
                  className="rounded-full bg-plum-800 px-3 py-1.5 uppercase text-white"
                >
                  {locale}
                </span>
              ) : (
                <Link
                  key={locale}
                  href={`/${locale}${hash}`}
                  hrefLang={locale}
                  lang={locale}
                  className="rounded-full px-3 py-1.5 uppercase text-plum-800 transition-colors hover:bg-plum-50"
                >
                  {locale}
                </Link>
              ),
            )}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            className="grid size-10 place-items-center rounded-full text-plum-900 transition-colors hover:bg-plum-100 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={nav.main} className="border-t border-plum-100 lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-5 py-4 sm:px-8">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-display font-semibold text-plum-900 hover:bg-plum-50"
                >
                  {nav[id]}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`#${DONATE_ID}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-sun-500 px-4 py-3 font-display font-bold text-plum-950 hover:bg-sun-400"
              >
                <Heart className="size-5" aria-hidden />
                {nav.donate}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
