// Centralized legal content for /privacy, /legal, /cookies in EN/FR/NL.
// Kept out of the main i18n.ts because it's prose-heavy and only loaded for
// the legal sub-routes — keeps the home-page bundle lean.

import type { Locale } from "./i18n";

// Canonical company facts. If any of these change (new VAT, address move,
// directors), update here — every legal page reads from this single source.
export const COMPANY = {
  legalName: "Techity SRL",
  street: "Avenue Alfred Solvay 8",
  postalCode: "1170",
  city: "Watermael-Boitsfort",
  country: "Belgium",
  bce: "BE 0768662246",
  vat: "BE0768662246",
  director: "David De Baets",
  email: "hello@techity.io",
  hosting: "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (EU edge: Frankfurt)",
};

export type LegalSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  title: string;
  eyebrow: string;
  intro?: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export type LegalSlug = "privacy" | "legal" | "cookies";

const lastUpdated = "May 2026";

const en: Record<LegalSlug, LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Privacy",
    lastUpdated,
    intro:
      "We respect your privacy and only collect what we strictly need to answer your inquiry and run this website. Below is the plain-English version.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          `${COMPANY.legalName}, ${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}, ${COMPANY.country}. Company number ${COMPANY.bce}, VAT ${COMPANY.vat}. Acting as data controller for the personal data described here.`,
          `For any privacy-related request, write to ${COMPANY.email}.`,
        ],
      },
      {
        heading: "What we collect and why",
        list: [
          "Contact form data (name, email address, message): processed solely to respond to your inquiry. Legal basis: legitimate interest in answering the request you initiated.",
          "Server access metadata (IP address, user-agent, requested URL): logged automatically by our hosting provider for security, abuse prevention and basic diagnostics. Legal basis: legitimate interest.",
        ],
      },
      {
        heading: "Sub-processors",
        paragraphs: [
          "We share data only with the providers strictly required to operate the site:",
        ],
        list: [
          "Vercel Inc. — hosting and content delivery (EU edge: Frankfurt).",
          "Resend, Inc. — sending the contact-form email to us.",
          "Umami Software — privacy-friendly, cookieless analytics (only enabled if active; no IP or personal identifier is stored).",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "Contact-form emails are kept for up to 12 months unless an active business relationship justifies a longer retention. Server access logs are kept for up to 30 days.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the GDPR, you have the right to access, rectify, delete, restrict, port and object to the processing of your personal data, and to withdraw consent at any time. You can also lodge a complaint with the Belgian Data Protection Authority (Autorité de protection des données / Gegevensbeschermingsautoriteit, autoriteprotectiondonnees.be).",
        ],
      },
      {
        heading: "International transfers",
        paragraphs: [
          "Vercel and Resend are US-headquartered. Where data leaves the EU/EEA, transfers are covered by Standard Contractual Clauses or equivalent safeguards.",
        ],
      },
      {
        heading: "Updates",
        paragraphs: [
          "We may update this policy when our practices change. The date below indicates the latest revision.",
        ],
      },
    ],
  },
  legal: {
    title: "Legal Notice",
    eyebrow: "Legal",
    lastUpdated,
    sections: [
      {
        heading: "Publisher",
        paragraphs: [
          `${COMPANY.legalName}`,
          `${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}, ${COMPANY.country}`,
          `Company number: ${COMPANY.bce}`,
          `VAT: ${COMPANY.vat}`,
          `Director and publication manager: ${COMPANY.director}`,
          `Contact: ${COMPANY.email}`,
        ],
      },
      {
        heading: "Hosting",
        paragraphs: [`${COMPANY.hosting}`],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "All content on this site (text, code, logos, design, images) is the property of Techity SRL or used with permission. You may not reproduce, distribute or modify it without prior written consent.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "We do our best to keep the information on this site accurate and up to date but cannot guarantee that it is error-free. Use of the site is at your own risk.",
        ],
      },
      {
        heading: "Applicable law",
        paragraphs: [
          "This site and its terms are governed by Belgian law. Any dispute will be brought before the courts of Brussels.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Notice",
    eyebrow: "Cookies",
    lastUpdated,
    intro:
      "Short version: this site does not set tracking cookies, and analytics — when enabled — runs without cookies.",
    sections: [
      {
        heading: "What we use",
        list: [
          "Strictly necessary cookies set by our hosting provider (Vercel) for routing, load balancing and security. These are exempt from consent under the EU ePrivacy framework.",
          "Umami analytics, when enabled, is cookieless and stores no personal identifier. It records aggregate page views and referrer data.",
        ],
      },
      {
        heading: "What we do not use",
        list: [
          "No advertising or marketing cookies.",
          "No third-party tracking pixels.",
          "No cross-site profiling.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can control cookies in your browser settings at any time. Blocking strictly necessary cookies may break parts of the site.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "If we ever introduce non-essential cookies, this notice will be updated and a consent banner will be added before the cookies are set.",
        ],
      },
    ],
  },
};

const fr: Record<LegalSlug, LegalDoc> = {
  privacy: {
    title: "Politique de confidentialité",
    eyebrow: "Confidentialité",
    lastUpdated: "Mai 2026",
    intro:
      "Nous respectons votre vie privée et ne collectons que ce qui est strictement nécessaire pour répondre à votre demande et exploiter ce site. Voici la version claire.",
    sections: [
      {
        heading: "Qui nous sommes",
        paragraphs: [
          `${COMPANY.legalName}, ${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}, ${COMPANY.country}. Numéro d’entreprise ${COMPANY.bce}, TVA ${COMPANY.vat}. Responsable du traitement des données personnelles décrites ici.`,
          `Pour toute demande relative à la vie privée, écrivez-nous à ${COMPANY.email}.`,
        ],
      },
      {
        heading: "Ce que nous collectons et pourquoi",
        list: [
          "Données du formulaire de contact (nom, adresse email, message) : traitées uniquement pour répondre à votre demande. Base légale : intérêt légitime à répondre à la demande que vous avez initiée.",
          "Métadonnées d’accès serveur (adresse IP, user-agent, URL demandée) : enregistrées automatiquement par notre hébergeur à des fins de sécurité, de prévention d’abus et de diagnostic. Base légale : intérêt légitime.",
        ],
      },
      {
        heading: "Sous-traitants",
        paragraphs: [
          "Nous ne partageons les données qu’avec les prestataires strictement nécessaires au fonctionnement du site :",
        ],
        list: [
          "Vercel Inc. — hébergement et diffusion de contenu (edge UE : Francfort).",
          "Resend, Inc. — envoi de l’email du formulaire de contact.",
          "Umami Software — analyse d’audience respectueuse de la vie privée, sans cookies (activée uniquement si configurée ; aucune IP ni identifiant personnel n’est conservé).",
        ],
      },
      {
        heading: "Durée de conservation",
        paragraphs: [
          "Les emails du formulaire de contact sont conservés jusqu’à 12 mois, sauf relation commerciale active justifiant une durée supérieure. Les journaux d’accès serveur sont conservés jusqu’à 30 jours.",
        ],
      },
      {
        heading: "Vos droits",
        paragraphs: [
          "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, de suppression, de limitation, de portabilité et d’opposition au traitement de vos données personnelles, ainsi que du droit de retirer votre consentement à tout moment. Vous pouvez également introduire une réclamation auprès de l’Autorité belge de protection des données (autoriteprotectiondonnees.be).",
        ],
      },
      {
        heading: "Transferts internationaux",
        paragraphs: [
          "Vercel et Resend ont leur siège aux États-Unis. Lorsque des données quittent l’UE/EEE, les transferts sont encadrés par les Clauses Contractuelles Types ou des garanties équivalentes.",
        ],
      },
      {
        heading: "Mises à jour",
        paragraphs: [
          "Nous pouvons mettre à jour cette politique en cas d’évolution de nos pratiques. La date ci-dessous indique la dernière révision.",
        ],
      },
    ],
  },
  legal: {
    title: "Mentions légales",
    eyebrow: "Mentions légales",
    lastUpdated: "Mai 2026",
    sections: [
      {
        heading: "Éditeur",
        paragraphs: [
          `${COMPANY.legalName}`,
          `${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}, ${COMPANY.country}`,
          `Numéro d’entreprise : ${COMPANY.bce}`,
          `TVA : ${COMPANY.vat}`,
          `Directeur et responsable de publication : ${COMPANY.director}`,
          `Contact : ${COMPANY.email}`,
        ],
      },
      {
        heading: "Hébergement",
        paragraphs: [`${COMPANY.hosting}`],
      },
      {
        heading: "Propriété intellectuelle",
        paragraphs: [
          "L’ensemble du contenu de ce site (textes, code, logos, design, images) est la propriété de Techity SRL ou utilisé avec autorisation. Toute reproduction, distribution ou modification sans accord écrit préalable est interdite.",
        ],
      },
      {
        heading: "Responsabilité",
        paragraphs: [
          "Nous nous efforçons de tenir les informations de ce site exactes et à jour, sans pouvoir garantir l’absence d’erreur. L’utilisation du site se fait à vos propres risques.",
        ],
      },
      {
        heading: "Droit applicable",
        paragraphs: [
          "Ce site et ses conditions sont régis par le droit belge. Tout litige sera porté devant les tribunaux de Bruxelles.",
        ],
      },
    ],
  },
  cookies: {
    title: "Politique des cookies",
    eyebrow: "Cookies",
    lastUpdated: "Mai 2026",
    intro:
      "En résumé : ce site ne dépose pas de cookies de suivi, et l’analyse d’audience, lorsqu’elle est activée, fonctionne sans cookies.",
    sections: [
      {
        heading: "Ce que nous utilisons",
        list: [
          "Cookies strictement nécessaires déposés par notre hébergeur (Vercel) pour le routage, la répartition de charge et la sécurité. Ils sont exemptés de consentement selon le cadre ePrivacy de l’UE.",
          "L’analyse d’audience Umami, lorsqu’elle est activée, fonctionne sans cookies et ne stocke aucun identifiant personnel. Elle enregistre des pages vues agrégées et des données de provenance.",
        ],
      },
      {
        heading: "Ce que nous n’utilisons pas",
        list: [
          "Pas de cookies publicitaires ou marketing.",
          "Pas de pixels de suivi tiers.",
          "Pas de profilage inter-sites.",
        ],
      },
      {
        heading: "Gérer les cookies",
        paragraphs: [
          "Vous pouvez à tout moment contrôler les cookies dans les paramètres de votre navigateur. Bloquer les cookies strictement nécessaires peut casser certaines parties du site.",
        ],
      },
      {
        heading: "Modifications",
        paragraphs: [
          "Si nous introduisons un jour des cookies non essentiels, cette politique sera mise à jour et une bannière de consentement sera ajoutée avant tout dépôt.",
        ],
      },
    ],
  },
};

const nl: Record<LegalSlug, LegalDoc> = {
  privacy: {
    title: "Privacybeleid",
    eyebrow: "Privacy",
    lastUpdated: "Mei 2026",
    intro:
      "We respecteren uw privacy en verzamelen alleen wat strikt noodzakelijk is om uw vraag te beantwoorden en deze website te laten draaien. Hieronder de leesbare versie.",
    sections: [
      {
        heading: "Wie we zijn",
        paragraphs: [
          `${COMPANY.legalName}, ${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}, ${COMPANY.country}. Ondernemingsnummer ${COMPANY.bce}, btw ${COMPANY.vat}. Verwerkingsverantwoordelijke voor de hier beschreven persoonsgegevens.`,
          `Voor elke privacygerelateerde vraag kunt u ons schrijven op ${COMPANY.email}.`,
        ],
      },
      {
        heading: "Wat we verzamelen en waarom",
        list: [
          "Gegevens uit het contactformulier (naam, e-mailadres, bericht): uitsluitend verwerkt om uw vraag te beantwoorden. Rechtsgrond: gerechtvaardigd belang om in te gaan op het verzoek dat u zelf hebt geïnitieerd.",
          "Server-toegangsmetadata (IP-adres, user-agent, opgevraagde URL): automatisch geregistreerd door onze hostingprovider voor beveiliging, misbruikpreventie en basisdiagnose. Rechtsgrond: gerechtvaardigd belang.",
        ],
      },
      {
        heading: "Subverwerkers",
        paragraphs: [
          "We delen gegevens enkel met de providers die strikt nodig zijn om de site te laten draaien:",
        ],
        list: [
          "Vercel Inc. — hosting en content delivery (EU-edge: Frankfurt).",
          "Resend, Inc. — versturen van de e-mail van het contactformulier.",
          "Umami Software — privacyvriendelijke, cookieloze webanalyse (alleen actief indien geconfigureerd; geen IP of persoonlijke identificator wordt opgeslagen).",
        ],
      },
      {
        heading: "Bewaartermijn",
        paragraphs: [
          "E-mails van het contactformulier worden tot 12 maanden bewaard, tenzij een actieve zakelijke relatie een langere bewaartermijn rechtvaardigt. Server-logs worden tot 30 dagen bewaard.",
        ],
      },
      {
        heading: "Uw rechten",
        paragraphs: [
          "Onder de AVG hebt u het recht op inzage, rectificatie, wissing, beperking, overdraagbaarheid en bezwaar tegen de verwerking van uw persoonsgegevens, en het recht om uw toestemming op elk moment in te trekken. U kunt ook een klacht indienen bij de Belgische Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be).",
        ],
      },
      {
        heading: "Internationale doorgiftes",
        paragraphs: [
          "Vercel en Resend hebben hun hoofdzetel in de VS. Wanneer gegevens de EU/EER verlaten, gebeurt dat onder Standaardcontractbepalingen of gelijkwaardige waarborgen.",
        ],
      },
      {
        heading: "Wijzigingen",
        paragraphs: [
          "Bij wijzigingen in onze werkwijze kunnen we dit beleid aanpassen. De datum hieronder geeft de laatste herziening aan.",
        ],
      },
    ],
  },
  legal: {
    title: "Wettelijke vermeldingen",
    eyebrow: "Juridisch",
    lastUpdated: "Mei 2026",
    sections: [
      {
        heading: "Uitgever",
        paragraphs: [
          `${COMPANY.legalName}`,
          `${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}, ${COMPANY.country}`,
          `Ondernemingsnummer: ${COMPANY.bce}`,
          `Btw: ${COMPANY.vat}`,
          `Bestuurder en verantwoordelijke uitgever: ${COMPANY.director}`,
          `Contact: ${COMPANY.email}`,
        ],
      },
      {
        heading: "Hosting",
        paragraphs: [`${COMPANY.hosting}`],
      },
      {
        heading: "Intellectuele eigendom",
        paragraphs: [
          "Alle inhoud op deze site (tekst, code, logo’s, design, afbeeldingen) is eigendom van Techity SRL of gebruikt met toestemming. Reproductie, verspreiding of wijziging zonder voorafgaande schriftelijke toestemming is niet toegestaan.",
        ],
      },
      {
        heading: "Aansprakelijkheid",
        paragraphs: [
          "We doen ons best om de informatie op deze site juist en actueel te houden, maar kunnen niet garanderen dat ze foutloos is. Het gebruik van de site is op eigen risico.",
        ],
      },
      {
        heading: "Toepasselijk recht",
        paragraphs: [
          "Deze site en de bijbehorende voorwaarden vallen onder het Belgisch recht. Geschillen worden voorgelegd aan de rechtbanken van Brussel.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookiebeleid",
    eyebrow: "Cookies",
    lastUpdated: "Mei 2026",
    intro:
      "Kort: deze site plaatst geen tracking-cookies, en webanalyse — wanneer ingeschakeld — werkt zonder cookies.",
    sections: [
      {
        heading: "Wat we gebruiken",
        list: [
          "Strikt noodzakelijke cookies die door onze hostingprovider (Vercel) worden geplaatst voor routering, load balancing en beveiliging. Die zijn vrijgesteld van toestemming volgens het EU-ePrivacy-kader.",
          "Umami-analyse, indien ingeschakeld, werkt zonder cookies en bewaart geen persoonlijke identificator. Het registreert geaggregeerde paginaweergaven en verwijzingsgegevens.",
        ],
      },
      {
        heading: "Wat we niet gebruiken",
        list: [
          "Geen advertentie- of marketingcookies.",
          "Geen externe tracking-pixels.",
          "Geen profilering tussen sites.",
        ],
      },
      {
        heading: "Cookies beheren",
        paragraphs: [
          "U kunt cookies te allen tijde beheren via uw browserinstellingen. Het blokkeren van strikt noodzakelijke cookies kan delen van de site verstoren.",
        ],
      },
      {
        heading: "Wijzigingen",
        paragraphs: [
          "Mochten we ooit niet-essentiële cookies introduceren, dan wordt dit beleid bijgewerkt en wordt vóór elke plaatsing een toestemmingsbanner toegevoegd.",
        ],
      },
    ],
  },
};

export const legalContent: Record<Locale, Record<LegalSlug, LegalDoc>> = {
  en,
  fr,
  nl,
};
