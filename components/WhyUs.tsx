import type { Translations } from "@/lib/i18n";

export default function WhyUs({ t }: { t: Translations["whyUs"] }) {
  return (
    <section id="why-us" className="bg-navy py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-beige/40 text-[10px] tracking-[0.4em] uppercase mb-3">
            {t.label}
          </p>
          <h2 className="text-beige text-4xl md:text-5xl font-extralight leading-tight">
            {t.heading1}
            <br />
            <span className="text-beige/40">{t.heading2}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-beige/10 pt-12">
          {t.pillars.map(({ title, body }, i) => (
            <div key={i}>
              <span className="block text-beige/15 text-6xl font-extralight mb-6 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-beige text-base font-medium mb-3">{title}</h3>
              <p className="text-beige/45 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
