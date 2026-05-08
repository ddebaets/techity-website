import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalContent } from "@/lib/legal";

const doc = legalContent.en.cookies;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.intro,
  alternates: {
    canonical: "/cookies",
    languages: {
      en: "/cookies",
      "fr-BE": "/fr/cookies",
      "nl-BE": "/nl/cookies",
      "x-default": "/cookies",
    },
  },
  robots: { index: true, follow: true },
};

export default function CookiesEn() {
  return <LegalPage doc={doc} locale="en" />;
}
