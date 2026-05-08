import type { Translations } from "@/lib/i18n";

export default function Services({ t }: { t: Translations["services"] }) {
  return (
    <section id="services" className="bg-beige py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-navy/40 text-[10px] tracking-[0.4em] uppercase mb-3">
            {t.label}
          </p>
          <h2 className="text-navy text-4xl md:text-5xl font-extralight">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10">
          {t.items.map(({ title, description }, i) => (
            <div
              key={i}
              className="bg-beige p-8 group hover:bg-navy transition-colors duration-300 cursor-default flex flex-col"
            >
              <span className="block text-navy/40 group-hover:text-beige/40 text-xs tracking-widest mb-4 font-light transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-navy group-hover:text-beige text-lg font-medium mb-3 transition-colors leading-snug">
                {title}
              </h3>
              <p className="text-navy/70 group-hover:text-beige/70 text-sm leading-relaxed transition-colors">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
