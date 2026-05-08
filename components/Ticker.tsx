import type { Translations } from "@/lib/i18n";

export default function Ticker({ t }: { t: Translations["ticker"] }) {
  return (
    <div className="overflow-hidden border-y border-[var(--color-hair-on-navy)] bg-navy py-[18px]">
      <div className="hidden flex-wrap items-center justify-around whitespace-nowrap px-20 md:flex">
        {t.items.map((item) => (
          <span
            key={item}
            className="text-[10px] font-medium uppercase text-beige opacity-40"
            style={{ letterSpacing: "0.4em" }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Mobile: marquee — six items don't fit horizontally on phone */}
      <div className="md:hidden">
        <div className="ticker-track flex whitespace-nowrap">
          {[...t.items, ...t.items].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="shrink-0 px-6 text-[9px] font-medium uppercase text-beige opacity-40"
              style={{ letterSpacing: "0.4em" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
