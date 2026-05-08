import type { Translations } from "@/lib/i18n";

const partners = ["Microsoft", "Google", "Ubiquiti", "Lenovo", "Apple", "Adobe"];

export default function Partners({ t }: { t: Translations["partners"] }) {
  return (
    <section id="partners" className="bg-beige-muted py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-navy/35 text-[10px] tracking-[0.4em] uppercase text-center mb-12">
          {t.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-navy/30 text-lg tracking-[0.2em] uppercase hover:text-navy/70 transition-colors duration-300 cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
