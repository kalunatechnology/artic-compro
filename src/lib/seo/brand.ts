import { SITE_CONFIG } from "@/lib/constants";

/**
 * Entity-First Brand Identity untuk Artic Analytica.
 * Mengikuti standar Knowledge Graph & Organization Schema (schema.org)
 * sebagaimana diterapkan pada ekosistem Arsalynk dan Kaluna.
 */
export const BRAND = {
  name: SITE_CONFIG.name,
  legalName: "PT Sinergi Muda Arsa",
  tagline: SITE_CONFIG.tagline,
  url: SITE_CONFIG.url,
  alternateNames: [
    "Artic",
    "Artic Analytica",
    "Artic Analytica Research",
    "PT Sinergi Muda Arsa",
    "articanalytica.com",
  ],
  phone: "+62-811-2889-2244",
  email: "corporate.articanalytica@gmail.com",
  founder: "Rian Destianto",
  foundingDate: "2024",
  areaServed: ["ID", "Global"],
  logo: `${SITE_CONFIG.url}/assets/Logo.svg`,
  logoWhite: `${SITE_CONFIG.url}/assets/Logo White.svg`,
  favicon: `${SITE_CONFIG.url}/assets/Favicon_blue.svg`,
  heroImage: `${SITE_CONFIG.url}/og-image.jpg`,
  social: {
    instagram: "https://www.instagram.com/artic.analytica/",
    linkedin: "https://linkedin.com/company/articanalytica",
    twitter: "https://twitter.com/articanalytica",
    facebook: "https://facebook.com/articanalytica",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
  address: {
    streetAddress: "MG Setos 3rd Floor, Jl. Inspeksi, Kembangsari, Semarang Tengah",
    addressLocality: "Semarang",
    addressRegion: "Jawa Tengah",
    postalCode: "50133",
    addressCountry: "ID",
  },
  geo: {
    latitude: -6.9806,
    longitude: 110.4227,
  },
  knowsAbout: [
    "Data Research & Analytics",
    "Socio-Political Intelligence",
    "Public Policy Advisory & Evaluation",
    "Citizen Satisfaction Survey (IKM)",
    "Survei Kepuasan Masyarakat (IKM PermenPANRB)",
    "Evaluasi Kinerja Pemerintah Daerah (RPJMD, LPPD, LKPJ)",
    "Riset Opini Publik & Survei Persepsi Publik",
    "Market Research & Consumer Perception",
    "Strategic Decision Consulting",
    "Data Visualization & Business Intelligence",
    "Executive Capacity Building & Training",
    "Kajian Akademis Kebijakan Publik",
  ],
} as const;

export type BrandIdentity = typeof BRAND;
