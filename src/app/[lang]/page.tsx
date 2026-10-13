import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Actions } from "@/components/sections/actions";
import { Audience } from "@/components/sections/audience";
import { CallToAction } from "@/components/sections/call-to-action";
import { Donate } from "@/components/sections/donate";
import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Vision } from "@/components/sections/vision";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero t={dict.hero} />
        <About t={dict.about} />
        <Vision t={dict.vision} />
        <Mission t={dict.mission} />
        <Actions t={dict.actions} />
        <Audience t={dict.audience} />
        <Donate t={dict.donate} />
        <CallToAction lang={lang} t={dict.cta} />
      </main>
      <Footer lang={lang} nav={dict.nav} t={dict.footer} slogan={dict.hero.slogan} />
    </>
  );
}
