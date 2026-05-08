import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalContent } from "@/lib/legal";

const doc = legalContent.nl.privacy;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.intro,
  alternates: {
    canonical: "/nl/privacy",
    languages: {
      en: "/privacy",
      "fr-BE": "/fr/privacy",
      "nl-BE": "/nl/privacy",
      "x-default": "/privacy",
    },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyNl() {
  return <LegalPage doc={doc} locale="nl" />;
}
