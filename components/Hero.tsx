import Image from "next/image";
import type { Translations } from "@/lib/i18n";

export default function Hero({ t }: { t: Translations["hero"] }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy text-beige"
    >
      {/* Watermark T-mark (desktop only) */}
      <Image
        src="/t-icon-beige.png"
        alt=""
        aria-hidden
        width={360}
        height={420}
        priority
        className="pointer-events-none absolute right-[120px] top-[140px] hidden h-[620px] w-auto object-contain opacity-[0.08] md:block"
      />

      {/* Body — centered, generous whitespace */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-32 pt-32 md:px-20 md:pb-24 md:pt-32">
        {/* Eyebrow rail */}
        <div
          className="mb-8 flex items-center md:mb-9"
          style={{ gap: 14 }}
        >
          <span
            className="inline-block h-px w-7 bg-beige opacity-40 md:w-10"
            aria-hidden
          />
          <span
            className="text-[10px] font-medium uppercase leading-none text-beige opacity-60 md:text-[11px]"
            style={{ letterSpacing: "0.22em" }}
          >
            {t.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="m-0 max-w-[1240px] font-thin text-beige"
          style={{
            fontSize: "clamp(44px, 8vw, 112px)",
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
            fontWeight: 100,
          }}
        >
          {t.heading1}
          <br />
          <em className="accent">{t.heading2}</em>
        </h1>

        {/* Sub row — paragraph + CTA */}
        <div className="mt-9 flex flex-col items-start gap-8 md:mt-14 md:flex-row md:items-end md:justify-between md:gap-16">
          <p
            className="m-0 max-w-[460px] text-[15px] font-light leading-[1.6] text-beige opacity-65 md:text-[17px]"
          >
            {t.sub}
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-beige px-9 py-3.5 text-[11px] font-semibold uppercase text-navy transition-opacity duration-200 hover:opacity-90 md:px-11"
            style={{ letterSpacing: "0.22em" }}
          >
            {t.cta}
          </a>
        </div>
      </div>

      {/* Bottom ledger */}
      <div className="relative z-10 flex flex-col gap-3 border-t border-[var(--color-hair-on-navy)] px-6 py-5 md:absolute md:bottom-9 md:left-20 md:right-20 md:flex-row md:items-center md:justify-between md:border-0 md:p-0">
        <span
          className="text-[9px] font-medium uppercase leading-none text-beige opacity-45 md:text-[11px]"
          style={{ letterSpacing: "0.22em" }}
        >
          {t.ledgerLocation}
        </span>
        <span
          className="text-[9px] font-medium uppercase leading-none text-beige opacity-45 md:text-[11px]"
          style={{ letterSpacing: "0.22em" }}
        >
          {t.ledgerEmail}
        </span>
      </div>
    </section>
  );
}
