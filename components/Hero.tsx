import Image from "next/image";
import type { Translations } from "@/lib/i18n";

export default function Hero({ t }: { t: Translations["hero"] }) {
  const patternText = Array(300).fill("TECHITY").join(" · ");

  return (
    <section
      id="top"
      className="bg-navy min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 select-none pointer-events-none overflow-hidden leading-7 text-[10px] tracking-widest text-beige break-words opacity-[0.025]"
        aria-hidden="true"
      >
        {patternText}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl">
        <Image
          src="/logo-beige.png"
          alt="Techity"
          width={180}
          height={60}
          className="object-contain h-14 w-auto"
          priority
        />

        <div className="w-12 h-px bg-beige/20" />

        <h1 className="text-beige text-5xl md:text-7xl font-extralight leading-[1.1] tracking-tight">
          {t.heading1}
          <br />
          <em className="not-italic font-light">{t.heading2}</em>
        </h1>

        <p className="text-beige/50 text-base md:text-lg max-w-md leading-relaxed">
          {t.sub}
        </p>

        <a
          href="#contact"
          className="mt-2 px-10 py-3.5 border border-beige/40 text-beige text-xs tracking-[0.25em] uppercase hover:bg-beige hover:text-navy transition-all duration-300"
        >
          {t.cta}
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-beige text-[10px] tracking-[0.3em] uppercase">
          {t.scroll}
        </span>
        <div className="w-px h-8 bg-beige" />
      </div>
    </section>
  );
}
