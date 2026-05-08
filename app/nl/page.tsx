import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { translations } from "@/lib/i18n";

const t = translations.nl;

export default function HomeNl() {
  return (
    <>
      <Nav t={t.nav} locale="nl" />
      <main>
        <Hero t={t.hero} />
        <Ticker />
        <Services t={t.services} />
        <WhyUs t={t.whyUs} />
        <Partners t={t.partners} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} nav={t.nav} />
    </>
  );
}
