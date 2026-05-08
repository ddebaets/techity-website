import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalContent } from "@/lib/legal";

const doc = legalContent.en.privacy;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.intro,
  alternates: {
    canonical: "/privacy",
    languages: {
      en: "/privacy",
      "fr-BE": "/fr/privacy",
      "nl-BE": "/nl/privacy",
      "x-default": "/privacy",
    },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyEn() {
  return <LegalPage doc={doc} locale="en" />;
}
