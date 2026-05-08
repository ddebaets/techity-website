import type { Translations } from "@/lib/i18n";

export default function Services({ t }: { t: Translations["services"] }) {
  return (
    <section
      id="services"
      className="bg-beige px-6 pb-24 pt-24 text-navy md:px-20 md:pb-40 md:pt-36"
    >
      {/* Section header */}
      <div className="flex items-center justify-between gap-6 border-b border-[var(--color-hair-on-cream)] pb-7">
        <span
          className="text-[11px] font-medium uppercase leading-none text-navy opacity-55 md:text-[12px]"
          style={{ letterSpacing: "0.4em" }}
        >
          {t.eyebrow}
        </span>
        <span
          className="tabular text-[11px] font-medium uppercase leading-none text-navy opacity-40 md:text-[12px]"
          style={{ letterSpacing: "0.22em" }}
        >
          {t.count}
        </span>
      </div>

      {/* Section title */}
      <h2
        className="m-0 mt-12 max-w-[1240px] font-thin text-navy md:mt-16"
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

      {/* Editorial spread — alternating columns on desktop, single col on mobile */}
      <div className="mt-16 grid grid-cols-1 gap-x-20 md:mt-24 md:grid-cols-2">
        {t.items.map(({ title, description }, i) => {
          const isLeft = i % 2 === 0;
          return (
            <article
              key={i}
              className={`grid grid-cols-[minmax(64px,140px)_1fr] items-baseline gap-6 border-t border-[var(--color-hair-on-cream)] py-10 md:grid-cols-[minmax(80px,180px)_1fr] md:gap-9 md:py-14 ${
                isLeft ? "md:col-start-1" : "md:col-start-2"
              }`}
            >
              <span
                className="tabular italic opacity-40"
                style={{
                  fontSize: "clamp(48px, 6vw, 96px)",
                  fontWeight: 100,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  className="m-0 mb-3.5 text-navy"
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    fontWeight: 200,
                    letterSpacing: "-0.018em",
                    lineHeight: 1.05,
                  }}
                >
                  {title}
                </h3>
                <p
                  className="m-0 max-w-[480px] text-[15px] font-light leading-[1.7] text-navy opacity-70 md:text-[16px]"
                >
                  {description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
