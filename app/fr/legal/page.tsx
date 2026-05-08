import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { legalContent } from "@/lib/legal";

const doc = legalContent.fr.legal;

export const metadata: Metadata = {
  title: doc.title,
  description:
    "Mentions légales de Techity SRL, société de services IT managés basée à Bruxelles.",
  alternates: {
    canonical: "/fr/legal",
    languages: {
      en: "/legal",
      "fr-BE": "/fr/legal",
      "nl-BE": "/nl/legal",
      "x-default": "/legal",
    },
  },
  robots: { index: true, follow: true },
};

export default function LegalFr() {
  return <LegalPage doc={doc} locale="fr" />;
}
