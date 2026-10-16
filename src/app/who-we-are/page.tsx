import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhoWeAreHeroSection } from "@/components/sections/who-we-are-hero-section";
import { WhoWeAreExpertiseSection } from "@/components/sections/who-we-are-expertise-section";
import { WhoWeAreCeoSection } from "@/components/sections/who-we-are-ceo-section";
import { WhoWeAreTeamSection } from "@/components/sections/who-we-are-team-section";
import { WhoWeAreExpertSectionResponsive } from "@/components/sections/who-we-are-expert-section-responsive";
import SectionPageJsonLd from "@/components/seo/SectionPageJsonLd";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Meet the team behind Artic Analytica — experts in political science, public policy, data analysis, and management driving data-informed decisions.",
  keywords: [
    "Who We Are Artic Analytica",
    "tim pakar Artic Analytica",
    "pakar kebijakan publik indonesia",
    "pakar ilmu pemerintahan UNDIP",
    "analis data statistik semarang",
    "Drs Yuwanto PhD",
    "Huntal Hutapea MSi MEd",
    "Rian Destianto CEO",
    "konsultan evaluasi RPJMD LPPD",
  ],
  alternates: {
    canonical: "/who-we-are",
  },
  openGraph: {
    title: "Who We Are | Artic Analytica",
    description:
      "Meet the team behind Artic Analytica — experts in political science, public policy, data analysis, and management driving data-informed decisions.",
    url: "/who-we-are",
  },
  twitter: {
    title: "Who We Are | Artic Analytica",
    description:
      "Meet the team behind Artic Analytica — experts in political science, public policy, data analysis, and management driving data-informed decisions.",
  },
};

export default function WhoWeArePage() {
  return (
    <>
      <SectionPageJsonLd section="who-we-are" />
      <Navbar />
      <WhoWeAreHeroSection />
      <WhoWeAreExpertiseSection />
      <WhoWeAreCeoSection />
      <WhoWeAreTeamSection />
      <WhoWeAreExpertSectionResponsive />
      <Footer />
    </>
  );
}
