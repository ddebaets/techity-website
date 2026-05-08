import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { translations } from "@/lib/i18n";

const t = translations.en;

export const metadata: Metadata = {
  title: "Techity, IT you don't have to think about.",
  description:
    "Brussels-based managed IT for small businesses. Collaboration platforms, full Ubiquiti networks, immutable backup, modern workplace, automation, sized to your real needs, never oversold.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "fr-BE": "/fr",
      "nl-BE": "/nl",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "en_US",
    alternateLocale: ["fr_BE", "nl_BE"],
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Nav t={t.nav} locale="en" />
      <main>
        <Hero t={t.hero} />
        <Ticker t={t.ticker} />
        <Services t={t.services} />
        <WhyUs t={t.whyUs} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} nav={t.nav} />
    </>
  );
}
