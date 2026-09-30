import type { Metadata } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";
import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Page introuvable · Page not found — Hope and Love TV",
};

// Shown for any URL that doesn't match a page. Bilingual because the language is unknown here.
export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${montserrat.variable} ${nunito.variable} antialiased`}>
      <body className="font-sans">
        <main className="grid min-h-dvh place-items-center px-5 py-16 text-center">
          <div>
            <BrandMark className="mx-auto size-28" />
            <p className="mt-8 font-display text-7xl font-extrabold text-plum-800">404</p>
            <h1 className="mt-4 font-display text-2xl font-bold text-plum-900">
              Page introuvable
              <span lang="en" className="mt-1 block text-lg font-semibold text-muted">
                Page not found
              </span>
            </h1>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/fr"
                className="rounded-full bg-plum-800 px-6 py-3 font-display text-sm font-bold text-white transition hover:bg-plum-700"
              >
                Retour à l’accueil
              </Link>
              <Link
                href="/en"
                lang="en"
                className="rounded-full border-2 border-plum-200 px-6 py-2.5 font-display text-sm font-bold text-plum-800 transition hover:border-plum-400"
              >
                Back to home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
