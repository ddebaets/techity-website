import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techity.io"),
  title: {
    default: "Techity, IT you don't have to think about.",
    template: "%s · Techity",
  },
  description:
    "Fully managed IT for small businesses in Brussels, collaboration platforms, network & infrastructure, immutable backup, automation. We listen first, then right-size the solution.",
  applicationName: "Techity",
  authors: [{ name: "Techity SRL" }],
  generator: "Next.js",
  keywords: [
    "managed IT services Brussels",
    "collaboration platforms management",
    "Ubiquiti UniFi installer Brussels",
    "small business IT support Belgium",
    "immutable backup",
    "modern workplace",
    "Brussels IT consultant",
    "Belgium MSP",
    "Home Assistant integrator Brussels",
    "Watermael-Boitsfort IT",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "fr-BE": "/fr",
      "nl-BE": "/nl",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Techity",
    title: "Techity, IT you don't have to think about.",
    description:
      "Fully managed IT for small businesses in Brussels. We listen, right-size the solution, and keep your costs lean.",
    url: "https://techity.io",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Techity, IT you don't have to think about.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techity, IT you don't have to think about.",
    description:
      "Fully managed IT for small businesses in Brussels. We listen, right-size the solution, and keep your costs lean.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons are auto-discovered from app/icon.png, app/apple-icon.png, and
  // public/favicon.ico — no manual <link> config needed.
  verification: {
    // Plug Google Search Console + Bing verification tokens here when received
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
};

// LocalBusiness schema — richer than Organization for local SEO. Pins us to a
// specific street address so Google can match the site to the Google Business
// Profile and rank us for "managed IT Brussels", "MSP Watermael-Boitsfort",
// and similar local queries.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://techity.io/#business",
  name: "Techity",
  legalName: "Techity SRL",
  url: "https://techity.io",
  logo: "https://techity.io/logo-navy.png",
  image: "https://techity.io/opengraph-image",
  description:
    "Fully managed IT for small businesses in Brussels — collaboration platforms, networks, infrastructure, backup and automation.",
  email: "hello@techity.io",
  vatID: "BE0768662246",
  taxID: "BE0768662246",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue Alfred Solvay 8",
    addressLocality: "Watermael-Boitsfort",
    postalCode: "1170",
    addressRegion: "Brussels-Capital",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8033,
    longitude: 4.4146,
  },
  areaServed: [
    { "@type": "Country", name: "Belgium" },
    { "@type": "AdministrativeArea", name: "European Union" },
  ],
  founder: { "@type": "Person", name: "David De Baets" },
  knowsLanguage: ["en", "fr", "nl"],
  sameAs: ["https://www.linkedin.com/company/techity"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Managed IT services",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Collaboration platforms management" },
      { "@type": "OfferCatalog", name: "Modern Workplace" },
      { "@type": "OfferCatalog", name: "Network & Infrastructure (Ubiquiti)" },
      { "@type": "OfferCatalog", name: "Immutable Backup" },
      { "@type": "OfferCatalog", name: "Support & Monitoring" },
      { "@type": "OfferCatalog", name: "Smart Automation & Apps" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiSrc =
    process.env.NEXT_PUBLIC_UMAMI_SRC || "https://cloud.umami.is/script.js";

  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full">
        {children}
        {/* Umami Analytics — cookieless, GDPR-friendly. Only loads if the
            NEXT_PUBLIC_UMAMI_WEBSITE_ID env var is set in Vercel. */}
        {umamiId && (
          <Script
            src={umamiSrc}
            data-website-id={umamiId}
            strategy="afterInteractive"
            defer
          />
        )}
      </body>
    </html>
  );
}
