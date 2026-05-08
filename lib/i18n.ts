export type Locale = "en" | "fr" | "nl";

export type Translations = {
  nav: {
    services: string;
    whyUs: string;
    partners: string;
    contact: string;
  };
  hero: {
    heading1: string;
    heading2: string;
    sub: string;
    cta: string;
    scroll: string;
  };
  services: {
    label: string;
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  whyUs: {
    label: string;
    heading1: string;
    heading2: string;
    pillars: Array<{ title: string; body: string }>;
  };
  partners: {
    label: string;
  };
  contact: {
    label: string;
    heading: string;
    body: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successTitle: string;
    successSub: string;
    sendAnother: string;
    errorMessage: string;
  };
  footer: {
    allRightsReserved: string;
  };
};

const en: Translations = {
  nav: {
    services: "Services",
    whyUs: "Why Us",
    partners: "Partners",
    contact: "Contact",
  },
  hero: {
    heading1: "IT you don't have",
    heading2: "to think about.",
    sub: "Simple, fully managed IT for small businesses — backed by people who take the time to understand yours before recommending anything.",
    cta: "Let's talk",
    scroll: "Scroll",
  },
  services: {
    label: "What we do",
    heading: "Our services",
    items: [
      {
        title: "Microsoft 365",
        description:
          "Tenant setup, user management, migrations and licensing — fully managed so your team always has the tools they need, without the admin overhead.",
      },
      {
        title: "Modern Workplace",
        description:
          "A complete, secure work environment for your team — on any device, from any location. We set it up, we keep it running.",
      },
      {
        title: "Network & Infrastructure",
        description:
          "Full Ubiquiti network deployments including WiFi, switching, physical access control and security cameras. Built right from day one.",
      },
      {
        title: "Immutable Backup",
        description:
          "Tamper-proof, automated backup for your Microsoft 365 data. Set once, monitored always — your data is safe even if the worst happens.",
      },
      {
        title: "IT Support & Monitoring",
        description:
          "Proactive monitoring catches issues before you notice them. When something does need attention, we're fast — remote or on-site.",
      },
      {
        title: "Smart Automation & Apps",
        description:
          "Home Assistant deployments, custom integrations, and bespoke app development for businesses that want to go a step further.",
      },
    ],
  },
  whyUs: {
    label: "Why Techity",
    heading1: "IT that fits your business.",
    heading2: "Not the other way around.",
    pillars: [
      {
        title: "We listen before we recommend",
        body: "We take the time to understand your business, your team, and your actual needs — before suggesting anything. No unnecessary tools, no bloated solutions, no upselling.",
      },
      {
        title: "Truly managed, start to finish",
        body: "From your Microsoft 365 tenant to your network to your backups — everything is handled by us. One partner, one point of contact, zero IT headaches.",
      },
      {
        title: "Quality without compromise",
        body: "We hold ourselves to enterprise standards regardless of your company size. Being small doesn't mean settling for second-rate. Our clients feel the difference.",
      },
    ],
  },
  partners: {
    label: "Our trusted partners",
  },
  contact: {
    label: "Contact",
    heading: "Let's talk.",
    body: "Ready to simplify your IT? Drop us a message and we'll get back to you within one business day.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "How can we help?",
    sendButton: "Send message",
    sending: "Sending…",
    successTitle: "Message received.",
    successSub: "We'll be in touch soon.",
    sendAnother: "Send another",
    errorMessage:
      "Something went wrong. Please try again or email us directly.",
  },
  footer: {
    allRightsReserved: "All rights reserved.",
  },
};

const fr: Translations = {
  nav: {
    services: "Services",
    whyUs: "Pourquoi nous",
    partners: "Partenaires",
    contact: "Contact",
  },
  hero: {
    heading1: "L'IT que vous n'avez pas",
    heading2: "à gérer.",
    sub: "IT entièrement géré pour les petites entreprises — par des gens qui prennent le temps de comprendre votre activité avant de recommander quoi que ce soit.",
    cta: "Parlons-en",
    scroll: "Défiler",
  },
  services: {
    label: "Ce que nous faisons",
    heading: "Nos services",
    items: [
      {
        title: "Microsoft 365",
        description:
          "Configuration du tenant, gestion des utilisateurs, migrations et licences — entièrement géré pour que votre équipe dispose toujours des bons outils, sans surcharge administrative.",
      },
      {
        title: "Modern Workplace",
        description:
          "Un environnement de travail complet et sécurisé pour votre équipe — sur n'importe quel appareil, depuis n'importe où. Nous l'installons et le maintenons.",
      },
      {
        title: "Réseau & Infrastructure",
        description:
          "Déploiements réseau Ubiquiti complets : WiFi, switching, contrôle d'accès physique et caméras de sécurité. Bien fait dès le premier jour.",
      },
      {
        title: "Backup immuable",
        description:
          "Sauvegarde automatisée et inviolable de vos données Microsoft 365. Configuré une fois, surveillé en permanence — vos données sont protégées même en cas d'incident.",
      },
      {
        title: "Support IT & Monitoring",
        description:
          "Un monitoring proactif détecte les problèmes avant que vous ne les remarquiez. Quand une intervention est nécessaire, nous intervenons rapidement — à distance ou sur site.",
      },
      {
        title: "Automatisation & Applications",
        description:
          "Déploiements Home Assistant, intégrations personnalisées et développement d'applications sur mesure pour les entreprises qui veulent aller plus loin.",
      },
    ],
  },
  whyUs: {
    label: "Pourquoi Techity",
    heading1: "Un IT qui s'adapte à votre entreprise.",
    heading2: "Pas l'inverse.",
    pillars: [
      {
        title: "Nous écoutons avant de recommander",
        body: "Nous prenons le temps de comprendre votre entreprise, votre équipe et vos besoins réels — avant de suggérer quoi que ce soit. Pas d'outils inutiles, pas de solutions surdimensionnées.",
      },
      {
        title: "Entièrement géré, du début à la fin",
        body: "De votre tenant Microsoft 365 à votre réseau en passant par vos sauvegardes — tout est géré par nous. Un seul partenaire, un seul interlocuteur, zéro casse-tête informatique.",
      },
      {
        title: "La qualité sans compromis",
        body: "Nous appliquons des standards enterprise quelle que soit la taille de votre entreprise. Être petite ne signifie pas se contenter du moins bien. Nos clients font la différence.",
      },
    ],
  },
  partners: {
    label: "Nos partenaires de confiance",
  },
  contact: {
    label: "Contact",
    heading: "Parlons-en.",
    body: "Prêt à simplifier votre IT ? Envoyez-nous un message et nous vous répondrons dans un délai d'un jour ouvrable.",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Votre email",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    sendButton: "Envoyer",
    sending: "Envoi en cours…",
    successTitle: "Message reçu.",
    successSub: "Nous vous répondrons bientôt.",
    sendAnother: "Envoyer un autre message",
    errorMessage:
      "Une erreur s'est produite. Veuillez réessayer ou nous envoyer un email directement.",
  },
  footer: {
    allRightsReserved: "Tous droits réservés.",
  },
};

const nl: Translations = {
  nav: {
    services: "Diensten",
    whyUs: "Waarom wij",
    partners: "Partners",
    contact: "Contact",
  },
  hero: {
    heading1: "IT waar u niet aan",
    heading2: "hoeft te denken.",
    sub: "Volledig beheerde IT voor kleine bedrijven — door mensen die de tijd nemen om uw bedrijf te begrijpen voor ze iets aanbevelen.",
    cta: "Laten we praten",
    scroll: "Scrollen",
  },
  services: {
    label: "Wat we doen",
    heading: "Onze diensten",
    items: [
      {
        title: "Microsoft 365",
        description:
          "Tenantinrichting, gebruikersbeheer, migraties en licenties — volledig beheerd zodat uw team altijd over de juiste tools beschikt, zonder administratieve last.",
      },
      {
        title: "Modern Workplace",
        description:
          "Een complete, veilige werkomgeving voor uw team — op elk apparaat, vanaf elke locatie. Wij zetten het op en houden het draaiende.",
      },
      {
        title: "Netwerk & Infrastructuur",
        description:
          "Volledige Ubiquiti-netwerkinzet inclusief WiFi, switching, fysieke toegangscontrole en beveiligingscamera's. Vanaf dag één correct gebouwd.",
      },
      {
        title: "Onveranderlijke back-up",
        description:
          "Manipulatiebestendige, geautomatiseerde back-up van uw Microsoft 365-gegevens. Eenmalig ingesteld, continu bewaakt — uw data is veilig, ook bij het ergste scenario.",
      },
      {
        title: "IT-support & Monitoring",
        description:
          "Proactieve monitoring spoort problemen op voordat u ze opmerkt. Als er toch iets nodig is, zijn we snel — op afstand of ter plaatse.",
      },
      {
        title: "Slimme automatisering & Apps",
        description:
          "Home Assistant-implementaties, aangepaste integraties en op maat gemaakte applicaties voor bedrijven die een stap verder willen gaan.",
      },
    ],
  },
  whyUs: {
    label: "Waarom Techity",
    heading1: "IT die past bij uw bedrijf.",
    heading2: "Niet andersom.",
    pillars: [
      {
        title: "Wij luisteren voor we adviseren",
        body: "We nemen de tijd om uw bedrijf, uw team en uw werkelijke behoeften te begrijpen — voor we iets voorstellen. Geen onnodige tools, geen opgeblazen oplossingen, geen upselling.",
      },
      {
        title: "Volledig beheerd, van start tot finish",
        body: "Van uw Microsoft 365-tenant tot uw netwerk tot uw back-ups — alles wordt door ons afgehandeld. Eén partner, één aanspreekpunt, nul IT-kopzorgen.",
      },
      {
        title: "Kwaliteit zonder compromissen",
        body: "We houden ons aan enterprise-standaarden, ongeacht de grootte van uw bedrijf. Klein zijn betekent niet genoegen nemen met minder. Onze klanten voelen het verschil.",
      },
    ],
  },
  partners: {
    label: "Onze vertrouwde partners",
  },
  contact: {
    label: "Contact",
    heading: "Laten we praten.",
    body: "Klaar om uw IT te vereenvoudigen? Stuur ons een bericht en we reageren binnen één werkdag.",
    namePlaceholder: "Uw naam",
    emailPlaceholder: "Uw e-mail",
    messagePlaceholder: "Hoe kunnen we helpen?",
    sendButton: "Versturen",
    sending: "Bezig met versturen…",
    successTitle: "Bericht ontvangen.",
    successSub: "We nemen binnenkort contact op.",
    sendAnother: "Nog een bericht sturen",
    errorMessage:
      "Er is iets misgegaan. Probeer het opnieuw of e-mail ons rechtstreeks.",
  },
  footer: {
    allRightsReserved: "Alle rechten voorbehouden.",
  },
};

export const translations: Record<Locale, Translations> = { en, fr, nl };
