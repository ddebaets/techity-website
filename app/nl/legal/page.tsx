import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalContent } from "@/lib/legal";

const doc = legalContent.nl.legal;

export const metadata: Metadata = {
  title: doc.title,
  description:
    "Wettelijke vermeldingen van Techity SRL, een in Brussel gevestigd bedrijf voor beheerde IT-diensten.",
  alternates: {
    canonical: "/nl/legal",
    languages: {
      en: "/legal",
      "fr-BE": "/fr/legal",
      "nl-BE": "/nl/legal",
      "x-default": "/legal",
    },
  },
  robots: { index: true, follow: true },
};

export default function LegalNl() {
  return <LegalPage doc={doc} locale="nl" />;
}
