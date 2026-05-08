import Image from "next/image";
import type { Translations } from "@/lib/i18n";

export default function WhyUs({ t }: { t: Translations["whyUs"] }) {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-navy px-6 pb-24 pt-24 text-beige md:px-20 md:pb-40 md:pt-36"
    >
      {/* Quiet watermark, top-left, partially clipped */}
      <Image
        src="/t-icon-beige.png"
        alt=""
        aria-hidden
        width={300}
        height={350}
        className="pointer-events-none absolute -left-[120px] top-10 hidden h-[480px] w-auto object-contain opacity-[0.05] md:block"
      />

      <div className="relative">
        {/* Section header */}
        <div className="flex items-center justify-between gap-6 border-b border-[var(--color-hair-on-navy)] pb-7">
          <span
            className="text-[11px] font-medium uppercase leading-none text-beige opacity-55 md:text-[12px]"
            style={{ letterSpacing: "0.4em" }}
          >
            {t.eyebrow}
          </span>
          <span
            className="tabular text-[11px] font-medium uppercase leading-none text-beige opacity-40 md:text-[12px]"
            style={{ letterSpacing: "0.22em" }}
          >
            {t.count}
          </span>
        </div>

        {/* Section title */}
        <h2
          className="m-0 mt-12 max-w-[1240px] font-thin text-beige md:mt-16"
          style={{
            fontSize: "clamp(36px, 6.5vw, 88px)",
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            fontWeight: 100,
          }}
        >
          {t.heading1}
          <br />
          <em className="accent">{t.heading2}</em>
        </h2>

        {/* Pillars grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-[var(--color-hair-on-navy)] pt-14 md:mt-24 md:grid-cols-3 md:gap-20">
          {t.pillars.map(({ title, body }, i) => (
            <div key={i}>
              <span
                className="block opacity-[0.22]"
                style={{
                  fontSize: "clamp(56px, 6vw, 88px)",
                  fontWeight: 100,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  marginBottom: 32,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="m-0 mb-4 text-beige"
                style={{
                  fontSize: 24,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                {title}
              </h3>
              <p className="m-0 text-[16px] font-light leading-[1.7] text-beige opacity-70 md:text-[17px]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
