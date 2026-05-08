import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalContent } from "@/lib/legal";

const doc = legalContent.en.legal;

export const metadata: Metadata = {
  title: doc.title,
  description:
    "Legal notice for Techity SRL — registered Brussels-based managed-IT business.",
  alternates: {
    canonical: "/legal",
    languages: {
      en: "/legal",
      "fr-BE": "/fr/legal",
      "nl-BE": "/nl/legal",
      "x-default": "/legal",
    },
  },
  robots: { index: true, follow: true },
};

export default function LegalEn() {
  return <LegalPage doc={doc} locale="en" />;
}
