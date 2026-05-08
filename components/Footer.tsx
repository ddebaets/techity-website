import Image from "next/image";
import Link from "next/link";
import type { Translations, Locale } from "@/lib/i18n";

const localePrefix: Record<Locale, string> = {
  en: "",
  fr: "/fr",
  nl: "/nl",
};

export default function Footer({
  t,
  nav,
  locale,
}: {
  t: Translations["footer"];
  nav: Translations["nav"];
  locale: Locale;
}) {
  const links = [
    { href: "#top", label: nav.home },
    { href: "#services", label: nav.services },
    { href: "#why-us", label: nav.whyUs },
    { href: "#contact", label: nav.contact },
  ];

  const prefix = localePrefix[locale];
  const legalLinks = [
    { href: `${prefix}/privacy`, label: t.privacy },
    { href: `${prefix}/legal`, label: t.legal },
    { href: `${prefix}/cookies`, label: t.cookies },
  ];

  return (
    <footer className="border-t border-[var(--color-hair-on-navy)] bg-navy px-6 py-10 text-beige md:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Top row — wordmark + section nav + copyright */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6">
          <a href="#top" aria-label="Techity home">
            <Image
              src="/logo-beige.png"
              alt="Techity"
              width={132}
              height={22}
              className="h-[22px] w-auto opacity-50 transition-opacity hover:opacity-80"
            />
          </a>

          <nav className="flex flex-wrap justify-center" style={{ gap: 32 }}>
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[10px] font-medium uppercase leading-none text-beige opacity-50 transition-opacity hover:opacity-100 md:text-[11px]"
                style={{ letterSpacing: "0.22em" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <span
            className="text-[9px] font-medium uppercase leading-none text-beige opacity-45"
            style={{ letterSpacing: "0.22em" }}
          >
            © {new Date().getFullYear()} Techity · {t.rights}
          </span>
        </div>

        {/* Bottom row — legal links */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-[var(--color-hair-on-navy)] pt-6 md:justify-end">
          {legalLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[9px] font-medium uppercase leading-none text-beige opacity-40 transition-opacity hover:opacity-80"
              style={{ letterSpacing: "0.22em" }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
