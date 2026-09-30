import type { Metadata, Viewport } from "next";
import { Dancing_Script, Montserrat, Nunito_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale, locales, openGraphLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";
import "../globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

// Only /fr and /en exist; any other first segment returns a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  const shareImage = {
    url: "/images/partage-hope-and-love.jpg",
    width: 1200,
    height: 630,
    alt: meta.ogAlt,
  };

  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    applicationName: site.name,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      locale: openGraphLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => openGraphLocale[l]),
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [shareImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#3c0364",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      // Tells Next.js to skip the smooth scroll from globals.css during page transitions.
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${nunito.variable} ${dancing.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
