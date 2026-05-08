import Image from "next/image";
import type { Translations } from "@/lib/i18n";

export default function Footer({
  t,
  nav,
}: {
  t: Translations["footer"];
  nav: Translations["nav"];
}) {
  const links = [
    { href: "#top", label: nav.home },
    { href: "#services", label: nav.services },
    { href: "#why-us", label: nav.whyUs },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <footer className="border-t border-[var(--color-hair-on-navy)] bg-navy px-6 py-10 text-beige md:px-20">
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

        <nav className="flex" style={{ gap: 32 }}>
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
    </footer>
  );
}
