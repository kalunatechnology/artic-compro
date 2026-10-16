import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
  buildSiteNavigationElementJsonLd,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Artic Analytica",
    "PT Sinergi Muda Arsa",
    "firma riset data indonesia",
    "konsultan riset dan strategi",
    "survei kepuasan masyarakat",
    "indeks kepuasan masyarakat IKM",
    "evaluasi kebijakan publik",
    "kajian RPJMD LPPD LKPJ",
    "riset opini publik semarang",
    "konsultan data analytics jakarta",
    "public policy advisory",
    "data consulting indonesia",
    "strategy consulting",
    "government consulting",
    "business intelligence semarang",
    "market research and consumer perception",
    "data visualization dashboard",
    "BRIDA semarang",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    capable: true,
    title: "Artic Analytica",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    alternateLocale: ["id_ID"],
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
    site: SITE_CONFIG.twitter,
    creator: SITE_CONFIG.twitter,
  },
  icons: {
    icon: "/assets/Favicon_blue.svg",
    apple: [
      { url: "/assets/Favicon_blue.svg" },
      { url: "/assets/Favicon_blue.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootSchema = {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationJsonLd(),
      buildWebSiteJsonLd(),
      ...buildSiteNavigationElementJsonLd(),
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd id="root-entity-graph" data={rootSchema} />
        {children}
      </body>
    </html>
  );
}
