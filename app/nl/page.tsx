import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LangSetter from "@/components/LangSetter";
import { translations } from "@/lib/i18n";

const t = translations.nl;

export const metadata: Metadata = {
  title: "Techity, IT waar u niet aan hoeft te denken.",
  description:
    "Volledig beheerde IT voor kleine bedrijven in Brussel. Samenwerkingsplatformen, volledige Ubiquiti-netwerken, onveranderlijke back-up, modern workplace, automatisering, op maat van uw echte behoeften, nooit overdreven.",
  alternates: {
    canonical: "/nl",
    languages: {
      en: "/",
      "fr-BE": "/fr",
      "nl-BE": "/nl",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "nl_BE",
    alternateLocale: ["en_US", "fr_BE"],
    url: "/nl",
    title: "Techity, IT waar u niet aan hoeft te denken.",
    description:
      "Volledig beheerde IT voor kleine bedrijven in Brussel, op maat van uw echte behoeften, nooit overdreven.",
  },
};

export default function HomeNl() {
  return (
    <>
      <LangSetter lang="nl" />
      <Nav t={t.nav} locale="nl" />
      <main>
        <Hero t={t.hero} />
        <Ticker t={t.ticker} />
        <Services t={t.services} />
        <WhyUs t={t.whyUs} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} nav={t.nav} locale="nl" />
    </>
  );
}
