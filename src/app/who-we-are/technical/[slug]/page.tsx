import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ExpertProfileBannerSection } from "@/components/sections/expert-profile-banner-section";
import { ExpertProfileBioSection } from "@/components/sections/expert-profile-bio-section";
import { ExpertProfileWorksSection } from "@/components/sections/expert-profile-works-section";

const TECHNICAL_TEAM = [
  {
    slug: "rian-destianto",
    name: "Rian Destianto",
    role: "Chief Executive Officer & Lead Analyst",
    fields: ["MANAGING", "DATA ANALYST", "STRATEGY"],
    bio: [
      "Rian Destianto leads Artic Analytica as Chief Executive Officer with a strong focus on building a modern, insight-driven organization. With extensive experience in data research, analytics technology, and corporate strategy, he transforms complex data into clear, actionable direction for institutional and corporate clients.",
      "At Artic Analytica, Rian drives innovation in survey methodologies, statistical data processing, and real-time analytical dashboards. His leadership ensures that client solutions are technically rigorous, strategically relevant, and impactful for decision-making.",
    ],
    stats: { citation: [2, 0] as [number, number], hIndex: [4, 0] as [number, number], i10Index: [0, 0] as [number, number] },
    image: "/images/who-we-are/profile-expert.png",
  },
];

export function generateStaticParams() {
  return TECHNICAL_TEAM.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = TECHNICAL_TEAM.find((m) => m.slug === slug);
  if (!member) return {};

  const description = member.bio[0].length > 155
    ? member.bio[0].slice(0, 152) + "..."
    : member.bio[0];

  return {
    title: member.name,
    description,
    keywords: [
      member.name,
      member.role,
      ...member.fields,
      "CEO Artic Analytica",
      "konsultan data analytics",
    ],
    alternates: {
      canonical: `/who-we-are/technical/${member.slug}`,
    },
    openGraph: {
      title: `${member.name} — ${member.role} | Artic Analytica`,
      description,
      url: `/who-we-are/technical/${member.slug}`,
    },
    twitter: {
      title: `${member.name} — ${member.role} | Artic Analytica`,
      description,
    },
  };
}


import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND } from "@/lib/seo/brand";

export default async function TechnicalProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = TECHNICAL_TEAM.find((m) => m.slug === slug);
  if (!member) return notFound();

  const memberSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${BRAND.url}/who-we-are/technical/${member.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BRAND.url}/` },
          { "@type": "ListItem", position: 2, name: "Who We Are", item: `${BRAND.url}/who-we-are` },
          { "@type": "ListItem", position: 3, name: member.name, item: `${BRAND.url}/who-we-are/technical/${member.slug}` },
        ],
      },
      {
        "@type": "Person",
        "@id": `${BRAND.url}/who-we-are/technical/${member.slug}#person`,
        name: member.name,
        jobTitle: member.role,
        image: member.image ? `${BRAND.url}${member.image}` : undefined,
        description: member.bio.join(" "),
        worksFor: {
          "@id": `${BRAND.url}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <>
      <JsonLd id={`technical-schema-${member.slug}`} data={memberSchema} />
      <Navbar />
      <ExpertProfileBannerSection expert={member} variant="technical" />
      <ExpertProfileBioSection expert={member} />
      <ExpertProfileWorksSection />
      <Footer hideCta={true} />
    </>
  );
}
