import { BRAND } from "@/lib/seo/brand";
import { SERVICES } from "@/lib/constants";

/**
 * 6 Pilar Utama Navigasi Sitelinks Artic Analytica (Target 6-Pack Sitelinks Google SERP)
 * Deskripsi ditulis ringkas (110–140 karakter) agar Google dapat menampilkannya
 * secara utuh sebagai snippet 2-baris di bawah judul sitelink tanpa terpotong (...).
 * Mengacu pada arsitektur SEO Arsalynk & Kaluna.
 */
export const SITE_NAVIGATION_ITEMS = [
  {
    name: "About Artic",
    href: "/about",
    description:
      "Mengenal profil, visi, dan pendekatan multidisiplin Artic Analytica dalam mentransformasi data menjadi keputusan strategis berdampak nyata.",
  },
  {
    name: "Our Works",
    href: "/works",
    description:
      "Eksplorasi portofolio proyek riset persepsi publik, visualisasi data, dan konsultasi strategis bersama instansi pemerintah serta korporasi.",
  },
  {
    name: "Artic Research",
    href: "/artic-research",
    description:
      "Layanan riset opini publik, survei kepuasan masyarakat, market intelligence, dan analisis kebutuhan audiens yang mendalam dan terukur.",
  },
  {
    name: "Who We Are",
    href: "/who-we-are",
    description:
      "Profil para pakar kebijakan publik, analis data statistik, konsultan strategis, dan tim teknis profesional di balik Artic Analytica.",
  },
  {
    name: "Artic Updates",
    href: "/blog",
    description:
      "Kumpulan artikel riset, studi kasus kebijakan publik, wawasan data analytics, dan publikasi tren terbaru dari analis Artic Analytica.",
  },
  {
    name: "Contact Us",
    href: "/contact",
    description:
      "Konsultasikan kebutuhan riset data, evaluasi kebijakan, atau kemitraan strategis bersama tim ahli Artic Analytica di Semarang dan Jakarta.",
  },
] as const;

export type NavigationItem = (typeof SITE_NAVIGATION_ITEMS)[number];

export type BreadcrumbItem = {
  name: string;
  path?: string;
  url?: string;
  href?: string;
};

/**
 * Membangun Schema BreadcrumbList terstandar untuk Google Search Console & SERP.
 * Home otomatis disertakan di urutan pertama (position 1) jika belum ada.
 */
export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const hasHome = items[0]?.name.toLowerCase() === "home" || items[0]?.path === "/" || items[0]?.href === "/";
  const allItems: BreadcrumbItem[] = hasHome
    ? items
    : [{ name: "Home", path: "/" }, ...items];

  return {
    "@type": "BreadcrumbList",
    "@id": `${BRAND.url}#breadcrumb`,
    itemListElement: allItems.map((item, index) => {
      const path = item.path ?? item.href ?? "";
      const targetUrl = item.url
        ? item.url
        : path.startsWith("http")
        ? path
        : `${BRAND.url}${path === "/" ? "" : path}`;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: targetUrl,
      };
    }),
  };
}

/**
 * Membangun Schema SiteNavigationElement khusus untuk memandu Googlebot
 * membentuk tampilan 6-Pack Sitelinks secara terstruktur dan teratur.
 */
export function buildSiteNavigationElementJsonLd() {
  return SITE_NAVIGATION_ITEMS.map((item) => ({
    "@type": "SiteNavigationElement",
    "@id": `${BRAND.url}${item.href}#navigation`,
    name: item.name,
    url: `${BRAND.url}${item.href}`,
    description: item.description,
  }));
}

/**
 * Membangun Schema Organization & Corporation root entity dengan stable @id
 */
export function buildOrganizationJsonLd() {
  return {
    "@type": ["Organization", "Corporation"],
    "@id": `${BRAND.url}/#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    alternateName: BRAND.alternateNames,
    url: BRAND.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${BRAND.url}/#logo`,
      url: BRAND.logo,
      caption: BRAND.name,
    },
    image: BRAND.heroImage,
    description:
      "Artic Analytica adalah firma riset dan konsultasi strategis multidisiplin yang membantu pemerintah, korporasi, dan organisasi mengambil keputusan berbasis data terukur.",
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.streetAddress,
      addressLocality: BRAND.address.addressLocality,
      addressRegion: BRAND.address.addressRegion,
      postalCode: BRAND.address.postalCode,
      addressCountry: BRAND.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND.geo.latitude,
      longitude: BRAND.geo.longitude,
    },
    sameAs: [
      BRAND.social.instagram,
      BRAND.social.linkedin,
      BRAND.social.twitter,
      BRAND.social.facebook,
      BRAND.social.youtube,
      BRAND.social.tiktok,
    ].filter(Boolean),
    knowsAbout: BRAND.knowsAbout,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BRAND.phone,
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: ["Indonesian", "English"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Artic Analytica Research & Consulting Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${BRAND.url}/#service-${service.id}`,
          name: service.title,
          description: service.description,
          provider: { "@id": `${BRAND.url}/#organization` },
        },
      })),
    },
  };
}

/**
 * Membangun Schema WebSite lengkap dengan publisher & deklarasi hasPart sitelinks.
 */
export function buildWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${BRAND.url}/#website`,
    url: `${BRAND.url}/`,
    name: BRAND.name,
    alternateName: BRAND.alternateNames,
    description:
      "Website resmi Artic Analytica — Solusi riset, data intelligence, evaluasi kebijakan publik, dan konsultasi strategi keputusan terukur.",
    publisher: {
      "@id": `${BRAND.url}/#organization`,
    },
    inLanguage: "en-US",
    hasPart: SITE_NAVIGATION_ITEMS.map((item) => ({
      "@type": "WebPage",
      "@id": `${BRAND.url}${item.href}#webpage`,
      name: item.name,
      url: `${BRAND.url}${item.href}`,
      description: item.description,
    })),
  };
}
