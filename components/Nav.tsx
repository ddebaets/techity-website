"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Translations, Locale } from "@/lib/i18n";

const localePaths: Record<Locale, string> = { en: "/", fr: "/fr", nl: "/nl" };
const localeLabels: Record<Locale, string> = { en: "EN", fr: "FR", nl: "NL" };

export default function Nav({
  t,
  locale,
}: {
  t: Translations["nav"];
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#services", label: t.services },
    { href: "#why-us", label: t.whyUs },
    { href: "#partners", label: t.partners },
    { href: "#contact", label: t.contact },
  ];

  const textColor = scrolled ? "text-navy" : "text-beige";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-beige shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <Image
            src={scrolled ? "/logo-navy.png" : "/logo-beige.png"}
            alt="Techity"
            width={120}
            height={40}
            className="object-contain h-8 w-auto"
            priority
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase transition-colors ${textColor}`}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:opacity-50 transition-opacity">
                {label}
              </a>
            </li>
          ))}

          <li className="flex items-center gap-2 ml-4 pl-4 border-l border-current/20">
            {(Object.keys(localePaths) as Locale[]).map((loc) => (
              <a
                key={loc}
                href={localePaths[loc]}
                className={`text-[10px] tracking-[0.15em] transition-opacity ${
                  loc === locale
                    ? "opacity-100 font-medium"
                    : "opacity-35 hover:opacity-70"
                }`}
              >
                {localeLabels[loc]}
              </a>
            ))}
          </li>
        </ul>

        <button
          className={`md:hidden flex flex-col gap-1.5 transition-colors ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-current transition-transform origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-transform origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-beige/10 px-6 pb-8 pt-4">
          <ul className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-beige/80 text-xs tracking-[0.2em] uppercase hover:text-beige transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-8 pt-6 border-t border-beige/10">
            {(Object.keys(localePaths) as Locale[]).map((loc) => (
              <a
                key={loc}
                href={localePaths[loc]}
                className={`text-[10px] tracking-[0.2em] uppercase transition-opacity ${
                  loc === locale
                    ? "text-beige"
                    : "text-beige/35 hover:text-beige/70"
                }`}
              >
                {localeLabels[loc]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
