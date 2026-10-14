import JsonLd from "@/components/seo/JsonLd";
import { BRAND } from "@/lib/seo/brand";

/**
 * Konfigurasi skema terstandarisasi untuk halaman-halaman utama Artic Analytica.
 * Mengacu pada SectionPageJsonLd yang digunakan di ekosistem Arsalynk.
 */
const SECTIONS = {
  about: {
    path: "/about",
    title: "About Artic",
    type: "AboutPage",
    description:
      "Mengenal profil, visi, dan pendekatan multidisiplin Artic Analytica dalam mentransformasi data menjadi keputusan strategis berdampak nyata.",
    ancestors: [] as { name: string; path: string }[],
  },
  works: {
    path: "/works",
    title: "Our Works",
    type: "CollectionPage",
    description:
      "Eksplorasi portofolio proyek riset persepsi publik, visualisasi data analitik, dan konsultasi strategis bersama instansi pemerintah serta korporasi.",
    ancestors: [] as { name: string; path: string }[],
  },
  "artic-research": {
    path: "/artic-research",
    title: "Artic Research",
    type: "ItemPage",
    description:
      "Layanan riset opini publik, survei kepuasan masyarakat, market intelligence, dan analisis kebutuhan audiens yang komprehensif.",
    ancestors: [] as { name: string; path: string }[],
  },
  "who-we-are": {
    path: "/who-we-are",
    title: "Who We Are",
    type: "AboutPage",
    description:
      "Profil para pakar kebijakan publik, analis data statistik, konsultan strategis, dan tim teknis profesional di balik Artic Analytica.",
    ancestors: [] as { name: string; path: string }[],
  },
  blog: {
    path: "/blog",
    title: "Artic Updates",
    type: "Blog",
    description:
      "Kumpulan artikel riset, studi kasus kebijakan publik, wawasan data analytics, dan publikasi tren terbaru dari analis Artic Analytica.",
    ancestors: [] as { name: string; path: string }[],
  },
  contact: {
    path: "/contact",
    title: "Contact Us",
    type: "ContactPage",
    description:
      "Konsultasikan kebutuhan riset data, evaluasi kebijakan, atau kemitraan strategis bersama tim ahli Artic Analytica.",
    ancestors: [] as { name: string; path: string }[],
  },
} as const;

export type SectionKey = keyof typeof SECTIONS;

export default function SectionPageJsonLd({ section }: { section: SectionKey }) {
  const page = SECTIONS[section];
  const url = `${BRAND.url}${page.path}`;
  const crumbs = [
    { name: "Home", path: "/" },
    ...page.ancestors,
    { name: page.title, path: page.path },
  ];

  return (
    <JsonLd
      id={`section-schema-${section}`}
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: crumbs.map(({ name, path }, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name,
              item: `${BRAND.url}${path === "/" ? "" : path}`,
            })),
          },
          {
            "@type": page.type,
            "@id": `${url}#webpage`,
            url,
            name: `${page.title} | ${BRAND.name}`,
            description: page.description,
            isPartOf: {
              "@id": `${BRAND.url}/#website`,
            },
            about: {
              "@id": `${BRAND.url}/#organization`,
            },
            breadcrumb: {
              "@id": `${url}#breadcrumb`,
            },
            inLanguage: "en-US",
          },
        ],
      }}
    />
  );
}

export { SectionPageJsonLd };
