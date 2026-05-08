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
    { href: "#services", label: nav.services },
    { href: "#why-us", label: nav.whyUs },
    { href: "#partners", label: nav.partners },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <footer className="bg-navy border-t border-beige/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#top">
          <Image
            src="/logo-beige.png"
            alt="Techity"
            width={90}
            height={30}
            className="object-contain h-7 w-auto opacity-50 hover:opacity-80 transition-opacity"
          />
        </a>

        <nav className="flex gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-beige/50 text-[10px] tracking-[0.2em] uppercase hover:text-beige transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <p className="text-beige/45 text-[10px] tracking-wide">
          © {new Date().getFullYear()} Techity. {t.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}
