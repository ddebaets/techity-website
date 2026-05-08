import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalContent } from "@/lib/legal";

const doc = legalContent.fr.privacy;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.intro,
  alternates: {
    canonical: "/fr/privacy",
    languages: {
      en: "/privacy",
      "fr-BE": "/fr/privacy",
      "nl-BE": "/nl/privacy",
      "x-default": "/privacy",
    },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyFr() {
  return <LegalPage doc={doc} locale="fr" />;
}
