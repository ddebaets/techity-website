import Image from "next/image";
import Link from "next/link";
import type { LegalDoc } from "@/lib/legal";
import type { Locale } from "@/lib/i18n";

const homeFor = (locale: Locale) =>
  locale === "en" ? "/" : locale === "fr" ? "/fr" : "/nl";

const backLabel: Record<Locale, string> = {
  en: "Back to home",
  fr: "Retour à l’accueil",
  nl: "Terug naar home",
};

const lastUpdatedLabel: Record<Locale, string> = {
  en: "Last updated",
  fr: "Dernière mise à jour",
  nl: "Laatst bijgewerkt",
};

export default function LegalPage({
  doc,
  locale,
}: {
  doc: LegalDoc;
  locale: Locale;
}) {
  return (
    <>
      {/* Minimal nav for legal pages — just the wordmark + back-to-home,
          so legal documents don't look tied to the marketing chrome. */}
      <header className="px-6 pt-10 md:px-20 md:pt-14">
        <div className="mx-auto flex max-w-[920px] items-center justify-between">
          <Link href={homeFor(locale)} className="flex items-center" aria-label="Techity home">
            <Image
              src="/logo-navy.png"
              alt="Techity"
              width={132}
              height={22}
              className="h-[22px] w-auto"
              priority
            />
          </Link>
          <Link
            href={homeFor(locale)}
            className="text-[11px] font-medium uppercase leading-none text-navy/60 transition-opacity hover:opacity-100 md:text-[12px]"
            style={{ letterSpacing: "0.22em" }}
          >
            ← {backLabel[locale]}
          </Link>
        </div>
      </header>

      <main className="px-6 pb-20 pt-14 md:px-20 md:pb-32 md:pt-24">
        <article className="mx-auto max-w-[720px] text-navy">
          <p
            className="m-0 mb-3 text-[11px] font-medium uppercase leading-none text-navy opacity-55 md:text-[12px]"
            style={{ letterSpacing: "0.4em" }}
          >
            {doc.eyebrow}
          </p>

          <h1
            className="m-0 font-thin"
            style={{
              fontSize: "clamp(40px, 6.5vw, 88px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              fontWeight: 100,
            }}
          >
            {doc.title}
          </h1>

          <p
            className="mt-6 text-[11px] font-medium uppercase leading-none text-navy opacity-40 md:text-[12px]"
            style={{ letterSpacing: "0.22em" }}
          >
            {lastUpdatedLabel[locale]} · {doc.lastUpdated}
          </p>

          {doc.intro && (
            <p className="mt-10 text-[17px] font-light leading-[1.7] text-navy opacity-80 md:text-[18px]">
              {doc.intro}
            </p>
          )}

          <div className="mt-12 space-y-12 border-t border-[var(--color-hair-on-cream)] pt-12">
            {doc.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2
                    className="m-0 mb-5 text-navy"
                    style={{
                      fontSize: 22,
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                  >
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs?.map((p, pi) => (
                  <p
                    key={pi}
                    className="mb-3 text-[16px] font-light leading-[1.7] text-navy opacity-80 last:mb-0 md:text-[17px]"
                  >
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-3 space-y-3 pl-5">
                    {section.list.map((item, li) => (
                      <li
                        key={li}
                        className="list-disc text-[16px] font-light leading-[1.7] text-navy opacity-80 marker:text-navy/40 md:text-[17px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>

      <footer className="border-t border-[var(--color-hair-on-cream)] px-6 py-8 text-navy md:px-20">
        <div className="mx-auto flex max-w-[720px] items-center justify-between">
          <Link
            href={homeFor(locale)}
            className="text-[10px] font-medium uppercase leading-none text-navy opacity-50 transition-opacity hover:opacity-100 md:text-[11px]"
            style={{ letterSpacing: "0.22em" }}
          >
            ← {backLabel[locale]}
          </Link>
          <span
            className="text-[9px] font-medium uppercase leading-none text-navy opacity-45"
            style={{ letterSpacing: "0.22em" }}
          >
            © {new Date().getFullYear()} Techity SRL
          </span>
        </div>
      </footer>
    </>
  );
}
