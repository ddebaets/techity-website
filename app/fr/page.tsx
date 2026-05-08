import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LangSetter from "@/components/LangSetter";
import { translations } from "@/lib/i18n";

const t = translations.fr;

export const metadata: Metadata = {
  title: "Techity — L'IT que vous n'avez pas à gérer.",
  description:
    "IT entièrement géré pour les petites entreprises à Bruxelles. Microsoft 365, réseaux Ubiquiti complets, backup immuable, modern workplace, automatisation — adapté à vos vrais besoins, jamais sur-vendu.",
  alternates: {
    canonical: "/fr",
    languages: {
      en: "/",
      "fr-BE": "/fr",
      "nl-BE": "/nl",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "fr_BE",
    alternateLocale: ["en_US", "nl_BE"],
    url: "/fr",
    title: "Techity — L'IT que vous n'avez pas à gérer.",
    description:
      "IT entièrement géré pour les petites entreprises à Bruxelles — adapté à vos vrais besoins, jamais sur-vendu.",
  },
};

export default function HomeFr() {
  return (
    <>
      <LangSetter lang="fr" />
      <Nav t={t.nav} locale="fr" />
      <main>
        <Hero t={t.hero} />
        <Ticker t={t.ticker} />
        <Services t={t.services} />
        <WhyUs t={t.whyUs} />
        <Partners t={t.partners} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} nav={t.nav} />
    </>
  );
}
