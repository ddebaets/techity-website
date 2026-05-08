import type { Metadata } from "next";
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
    default: "Techity — IT you don't have to think about.",
    template: "%s · Techity",
  },
  description:
    "Fully managed IT for small businesses in Brussels — Microsoft 365, network & infrastructure, immutable backup, automation. We listen first, then right-size the solution.",
  applicationName: "Techity",
  authors: [{ name: "Techity" }],
  generator: "Next.js",
  keywords: [
    "managed IT services Brussels",
    "Microsoft 365 management",
    "Ubiquiti UniFi installer",
    "small business IT support",
    "M365 immutable backup",
    "modern workplace",
    "Brussels IT consultant",
    "Belgium MSP",
    "Home Assistant",
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
    title: "Techity — IT you don't have to think about.",
    description:
      "Fully managed IT for small businesses in Brussels. We listen, right-size the solution, and keep your costs lean.",
    url: "https://techity.io",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Techity — IT you don't have to think about.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techity — IT you don't have to think about.",
    description:
      "Fully managed IT for small businesses in Brussels. We listen, right-size the solution, and keep your costs lean.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Techity",
  url: "https://techity.io",
  logo: "https://techity.io/logo-navy.png",
  description:
    "Fully managed IT for small businesses — Microsoft 365, networks, infrastructure, backup and automation. Brussels-based.",
  email: "hello@techity.io",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brussels",
    addressCountry: "BE",
  },
  areaServed: ["BE", "EU"],
  sameAs: ["https://www.linkedin.com/company/techity"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
