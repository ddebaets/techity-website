import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techity — IT Solutions for Growing Businesses",
  description:
    "Techity combines big-tech know-how with small-business agility. Cloud, networks, support, security and more for SMBs.",
  metadataBase: new URL("https://techity.io"),
  openGraph: {
    title: "Techity — IT Solutions for Growing Businesses",
    description:
      "We take the complexity out of technology so you can focus on growing your business.",
    siteName: "Techity",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
