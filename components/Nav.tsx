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
    { href: "#top", label: t.home },
    { href: "#services", label: t.services },
    { href: "#why-us", label: t.whyUs },
    { href: "#contact", label: t.contact },
  ];

  // On hero (top), header sits on the navy bg → beige fg.
  // On scroll, fade in beige bg with navy fg.
  const fg = scrolled ? "text-navy" : "text-beige";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-beige/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 items-center justify-between px-6 md:h-[72px] md:px-20">
        <a href="#top" className="flex items-center" aria-label="Techity home">
          <Image
            src={scrolled ? "/logo-navy.png" : "/logo-beige.png"}
            alt="Techity"
            width={156}
            height={26}
            className="h-[22px] w-auto md:h-[26px]"
            priority
          />
        </a>

        <ul
          className={`hidden items-center md:flex ${fg} transition-colors`}
          style={{ gap: 36 }}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[12px] font-medium uppercase leading-none opacity-65 transition-opacity duration-200 hover:opacity-100"
                style={{ letterSpacing: "0.22em" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ul
          className={`hidden items-center md:flex ${fg} transition-colors`}
          style={{ gap: 14 }}
        >
          {(Object.keys(localePaths) as Locale[]).map((loc) => (
            <li key={loc}>
              <a
                href={localePaths[loc]}
                className={`text-[12px] uppercase leading-none transition-opacity duration-200 ${
                  loc === locale
                    ? "font-semibold opacity-100"
                    : "font-medium opacity-35 hover:opacity-70"
                }`}
                style={{ letterSpacing: "0.22em" }}
              >
                {localeLabels[loc]}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`flex flex-col gap-1.5 md:hidden ${fg} transition-colors`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[var(--color-hair-on-navy)] bg-navy px-6 pb-10 pt-6 md:hidden">
          <ul className="flex flex-col gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[12px] font-medium uppercase text-beige opacity-80 transition-opacity hover:opacity-100"
                  style={{ letterSpacing: "0.22em" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="mt-8 flex border-t border-[var(--color-hair-on-navy)] pt-6"
            style={{ gap: 14 }}
          >
            {(Object.keys(localePaths) as Locale[]).map((loc) => (
              <a
                key={loc}
                href={localePaths[loc]}
                className={`text-[12px] uppercase ${
                  loc === locale
                    ? "font-semibold text-beige opacity-100"
                    : "font-medium text-beige opacity-35 hover:opacity-70"
                }`}
                style={{ letterSpacing: "0.22em" }}
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
