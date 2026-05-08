import type { Translations } from "@/lib/i18n";

const partners = [
  "Microsoft",
  "Google",
  "Ubiquiti",
  "Lenovo",
  "Apple",
  "Adobe",
];

export default function Partners({ t }: { t: Translations["partners"] }) {
  return (
    <section
      id="partners"
      className="bg-beige-muted px-6 py-20 text-navy md:px-20 md:py-[100px]"
    >
      <p
        className="m-0 mb-12 text-center text-[10px] font-medium uppercase leading-none text-navy opacity-45 md:mb-14 md:text-[11px]"
        style={{ letterSpacing: "0.22em" }}
      >
        {t.label}
      </p>

      <div
        className="flex flex-wrap items-center justify-center"
        style={{ gap: "20px 80px" }}
      >
        {partners.map((p) => (
          <span
            key={p}
            className="select-none text-[16px] font-light uppercase text-navy opacity-45 transition-opacity hover:opacity-70 md:text-[22px]"
            style={{ letterSpacing: "0.18em" }}
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
