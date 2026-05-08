export type Locale = "en" | "fr" | "nl";

export type Translations = {
  nav: {
    home: string;
    services: string;
    whyUs: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    heading1: string;
    heading2: string;
    sub: string;
    cta: string;
    ledgerLocation: string;
    ledgerEmail: string;
  };
  ticker: {
    items: [string, string, string, string, string, string];
  };
  services: {
    eyebrow: string;
    count: string;
    heading1: string;
    heading2: string;
    items: Array<{ title: string; description: string }>;
  };
  whyUs: {
    eyebrow: string;
    count: string;
    heading1: string;
    heading2: string;
    pillars: Array<{ title: string; body: string }>;
  };
  contact: {
    eyebrow: string;
    countEmail: string;
    heading1: string;
    heading2: string;
    body: string;
    email: string;
    linkedin: string;
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
    rights: string;
  };
};

const en: Translations = {
  nav: {
    home: "Home",
    services: "Services",
    whyUs: "Why us",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Managed IT for small businesses",
    heading1: "IT you don’t have",
    heading2: "to think about.",
    sub: "Simple, fully managed IT for small businesses, backed by people who take the time to understand your business before recommending anything.",
    cta: "Let’s talk",
    ledgerLocation: "50.85°N / 4.35°E · Brussels",
    ledgerEmail: "hello@techity.io",
  },
  ticker: {
    items: [
      "Cloud Collaboration",
      "Data Networks",
      "IT Support & Monitoring",
      "Hardware & Software",
      "Backup & Restore",
      "Automation & Apps",
    ],
  },
  services: {
    eyebrow: "What we do",
    count: "06 services",
    heading1: "Everything you need.",
    heading2: "Nothing you don’t.",
    items: [
      {
        title: "Collaboration platforms",
        description:
          "Tenant setup, user management, migrations and licensing across the major collaboration suites. Fully managed, so your team always has the right tools without the admin overhead.",
      },
      {
        title: "Modern Workplace",
        description:
          "A complete, secure work environment for your team, on any device, from any location. We set it up, we keep it running.",
      },
      {
        title: "Network & Infrastructure",
        description:
          "Full Ubiquiti network deployments including WiFi, switching, physical access control and security cameras. Built right from day one.",
      },
      {
        title: "Immutable Backup",
        description:
          "Tamper-proof, automated backup for your collaboration data. Set once, monitored always. Your data is safe, even if the worst happens.",
      },
      {
        title: "Support & Monitoring",
        description:
          "Proactive monitoring catches issues before you notice them. When something does need attention, we’re fast, whether remote or on-site.",
      },
      {
        title: "Smart Automation",
        description:
          "Home Assistant deployments, custom integrations, and bespoke app development for businesses that want to go a step further.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Why Techity",
    count: "03 pillars",
    heading1: "IT that fits your business.",
    heading2: "Not the other way around.",
    pillars: [
      {
        title: "We listen before we recommend",
        body: "We take the time to understand your business, your team, and your actual needs before suggesting anything. No unnecessary tools, no bloated solutions, no upselling.",
      },
      {
        title: "Truly managed, start to finish",
        body: "From your collaboration platform to your network to your backups, everything is handled by us. One partner, one point of contact, zero IT headaches.",
      },
      {
        title: "Quality without compromise",
        body: "We hold ourselves to enterprise standards regardless of your company size. Being small doesn’t mean settling for second-rate. Our clients feel the difference.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    countEmail: "hello@techity.io",
    heading1: "Let’s",
    heading2: "talk.",
    body: "Ready to simplify your IT? Drop us a message and we’ll get back to you within one business day.",
    email: "hello@techity.io",
    linkedin: "LinkedIn ↗",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "How can we help?",
    sendButton: "Send message",
    sending: "Sending…",
    successTitle: "Message received.",
    successSub: "We’ll be in touch soon.",
    sendAnother: "Send another",
    errorMessage:
      "Something went wrong. Please try again or email us directly.",
  },
  footer: {
    rights: "All rights reserved",
  },
};

const fr: Translations = {
  nav: {
    home: "Accueil",
    services: "Services",
    whyUs: "Pourquoi nous",
    contact: "Contact",
  },
  hero: {
    eyebrow: "IT géré pour petites entreprises",
    heading1: "L’IT que vous n’avez pas",
    heading2: "à gérer.",
    sub: "IT entièrement géré pour les petites entreprises, par des gens qui prennent le temps de comprendre votre activité avant de recommander quoi que ce soit.",
    cta: "Parlons-en",
    ledgerLocation: "50,85°N / 4,35°E · Bruxelles",
    ledgerEmail: "hello@techity.io",
  },
  ticker: {
    items: [
      "Collaboration Cloud",
      "Réseaux de données",
      "Support & Monitoring IT",
      "Matériel & Logiciels",
      "Sauvegarde & Restauration",
      "Automatisation & Apps",
    ],
  },
  services: {
    eyebrow: "Ce que nous faisons",
    count: "06 services",
    heading1: "Tout ce qu’il vous faut.",
    heading2: "Rien de superflu.",
    items: [
      {
        title: "Plateformes collaboratives",
        description:
          "Configuration des tenants, gestion des utilisateurs, migrations et licences sur les principales suites collaboratives. Nous gérons tout pour que votre équipe dispose toujours des bons outils, sans surcharge administrative.",
      },
      {
        title: "Modern Workplace",
        description:
          "Un environnement de travail complet et sécurisé pour votre équipe, sur n’importe quel appareil, depuis n’importe où. Nous l’installons et le maintenons.",
      },
      {
        title: "Réseau & Infrastructure",
        description:
          "Déploiements réseau Ubiquiti complets : WiFi, switching, contrôle d’accès physique et caméras de sécurité. Bien fait dès le premier jour.",
      },
      {
        title: "Backup immuable",
        description:
          "Sauvegarde automatisée et inviolable de vos données de collaboration. Configurée une fois, surveillée en permanence. Vos données sont protégées, même en cas d’incident.",
      },
      {
        title: "Support & Monitoring",
        description:
          "Un monitoring proactif détecte les problèmes avant que vous ne les remarquiez. Quand une intervention est nécessaire, nous intervenons rapidement, que ce soit à distance ou sur site.",
      },
      {
        title: "Automatisation intelligente",
        description:
          "Déploiements Home Assistant, intégrations personnalisées et développement d’applications sur mesure pour les entreprises qui veulent aller plus loin.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Pourquoi Techity",
    count: "03 piliers",
    heading1: "Un IT qui s’adapte à votre entreprise.",
    heading2: "Pas l’inverse.",
    pillars: [
      {
        title: "Nous écoutons avant de recommander",
        body: "Nous prenons le temps de comprendre votre entreprise, votre équipe et vos besoins réels avant de suggérer quoi que ce soit. Pas d’outils inutiles, pas de solutions surdimensionnées.",
      },
      {
        title: "Entièrement géré, du début à la fin",
        body: "De votre plateforme collaborative à votre réseau en passant par vos sauvegardes, tout est géré par nous. Un seul partenaire, un seul interlocuteur, zéro casse-tête informatique.",
      },
      {
        title: "La qualité sans compromis",
        body: "Nous appliquons les mêmes exigences de qualité quelle que soit la taille de votre entreprise. Être petit ne veut pas dire se contenter du second choix. Nos clients sentent la différence.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    countEmail: "hello@techity.io",
    heading1: "Parlons",
    heading2: "un peu.",
    body: "Prêt à simplifier votre IT ? Envoyez-nous un message et nous vous répondrons dans un délai d’un jour ouvrable.",
    email: "hello@techity.io",
    linkedin: "LinkedIn ↗",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Votre email",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    sendButton: "Envoyer",
    sending: "Envoi en cours…",
    successTitle: "Message reçu.",
    successSub: "Nous vous répondrons bientôt.",
    sendAnother: "Envoyer un autre message",
    errorMessage:
      "Une erreur s’est produite. Veuillez réessayer ou nous envoyer un email directement.",
  },
  footer: {
    rights: "Tous droits réservés",
  },
};

const nl: Translations = {
  nav: {
    home: "Home",
    services: "Diensten",
    whyUs: "Waarom wij",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Beheerde IT voor kleine bedrijven",
    heading1: "IT waar u niet aan",
    heading2: "hoeft te denken.",
    sub: "Volledig beheerde IT voor kleine bedrijven, door mensen die de tijd nemen om uw bedrijf te begrijpen voordat ze iets aanbevelen.",
    cta: "Laten we praten",
    ledgerLocation: "50,85°N / 4,35°O · Brussel",
    ledgerEmail: "hello@techity.io",
  },
  ticker: {
    items: [
      "Cloud-samenwerking",
      "Datanetwerken",
      "IT-support & Monitoring",
      "Hardware & Software",
      "Back-up & Restore",
      "Automatisering & Apps",
    ],
  },
  services: {
    eyebrow: "Wat we doen",
    count: "06 diensten",
    heading1: "Alles wat u nodig heeft.",
    heading2: "Niets meer dan dat.",
    items: [
      {
        title: "Samenwerkingsplatformen",
        description:
          "Tenantinrichting, gebruikersbeheer, migraties en licenties voor de belangrijkste samenwerkingssuites. Volledig beheerd, zodat uw team altijd over de juiste tools beschikt, zonder administratieve last.",
      },
      {
        title: "Modern Workplace",
        description:
          "Een complete, veilige werkomgeving voor uw team, op elk apparaat, vanaf elke locatie. Wij zetten het op en houden het draaiende.",
      },
      {
        title: "Netwerk & Infrastructuur",
        description:
          "Volledige Ubiquiti-netwerkinzet inclusief WiFi, switching, fysieke toegangscontrole en beveiligingscamera’s. Vanaf dag één correct gebouwd.",
      },
      {
        title: "Onveranderlijke back-up",
        description:
          "Manipulatiebestendige, geautomatiseerde back-up van uw samenwerkingsgegevens. Eenmalig ingesteld, continu bewaakt. Uw data is veilig, ook in het ergste scenario.",
      },
      {
        title: "Support & Monitoring",
        description:
          "Proactieve monitoring spoort problemen op voordat u ze opmerkt. Als er toch iets nodig is, zijn we er snel bij, op afstand of ter plaatse.",
      },
      {
        title: "Slimme automatisering",
        description:
          "Home Assistant-implementaties, aangepaste integraties en op maat gemaakte applicaties voor bedrijven die een stap verder willen gaan.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Waarom Techity",
    count: "03 pijlers",
    heading1: "IT die past bij uw bedrijf.",
    heading2: "Niet andersom.",
    pillars: [
      {
        title: "Wij luisteren voor we adviseren",
        body: "We nemen de tijd om uw bedrijf, uw team en uw werkelijke behoeften te begrijpen voordat we iets voorstellen. Geen onnodige tools, geen opgeblazen oplossingen, geen upselling.",
      },
      {
        title: "Volledig beheerd, van start tot finish",
        body: "Van uw samenwerkingsplatform tot uw netwerk tot uw back-ups, alles wordt door ons afgehandeld. Één partner, één aanspreekpunt, nul IT-kopzorgen.",
      },
      {
        title: "Kwaliteit zonder compromissen",
        body: "We hanteren dezelfde kwaliteitsnormen als grote ondernemingen, ongeacht de grootte van uw bedrijf. Klein zijn betekent niet dat u genoegen moet nemen met minder. Onze klanten voelen het verschil.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    countEmail: "hello@techity.io",
    heading1: "Laten we",
    heading2: "praten.",
    body: "Klaar om uw IT te vereenvoudigen? Stuur ons een bericht en we reageren binnen één werkdag.",
    email: "hello@techity.io",
    linkedin: "LinkedIn ↗",
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
    rights: "Alle rechten voorbehouden",
  },
};

export const translations: Record<Locale, Translations> = { en, fr, nl };
