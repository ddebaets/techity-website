import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalContent } from "@/lib/legal";

const doc = legalContent.fr.cookies;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.intro,
  alternates: {
    canonical: "/fr/cookies",
    languages: {
      en: "/cookies",
      "fr-BE": "/fr/cookies",
      "nl-BE": "/nl/cookies",
      "x-default": "/cookies",
    },
  },
  robots: { index: true, follow: true },
};

export default function CookiesFr() {
  return <LegalPage doc={doc} locale="fr" />;
}
