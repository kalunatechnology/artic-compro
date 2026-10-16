import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { OurClientSection } from "@/components/sections/clients-section";
import { InsightSection } from "@/components/sections/insight-section";
import { HighlightSection } from "@/components/sections/highlight-section";
import { HowWeWorkSection } from "@/components/sections/how-we-work-section";
import { VideoCardSection } from "@/components/sections/video-card-section";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { BRAND } from "@/lib/seo/brand";
import { SITE_NAVIGATION_ITEMS } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description:
    "Artic Analytica helps governments, businesses, and organizations make smarter decisions through research, data analysis, and strategy consulting.",
  keywords: [
    "Artic Analytica",
    "Where Data Meets Strategy",
    "PT Sinergi Muda Arsa",
    "firma riset data semarang",
    "konsultan strategi kebijakan publik",
    "survei kepuasan masyarakat",
    "data consulting indonesia",
    "political and government research",
    "market intelligence",
    "data visualization indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "Artic Analytica helps governments, businesses, and organizations make smarter decisions through research, data analysis, and strategy consulting.",
    url: "/",
    type: "website",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "Artic Analytica helps governments, businesses, and organizations make smarter decisions through research, data analysis, and strategy consulting.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        id="home-webpage-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${BRAND.url}/#webpage`,
          name: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
          description: SITE_CONFIG.description,
          url: `${BRAND.url}/`,
          isPartOf: {
            "@id": `${BRAND.url}/#website`,
          },
          about: {
            "@id": `${BRAND.url}/#organization`,
          },
          inLanguage: "en-US",
        }}
      />
      <Navbar />
      <main>
        {/* Accessible Semantic Sitelinks Navigation (Crawlable by Googlebot without altering visual UI) */}
        <section aria-labelledby="artic-brand-overview" className="sr-only">
          <div>
            <h2 id="artic-brand-overview">
              Artic Analytica — Where Data Meets Strategy
            </h2>
            <p>
              Artic Analytica adalah firma riset dan konsultasi strategis multidisiplin yang membantu pemerintah, korporasi, dan organisasi mengambil keputusan berbasis data terukur dan berdampak nyata.
            </p>
            <nav aria-label="Explore Artic Analytica Sitelinks">
              {SITE_NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  itemProp="url"
                  itemScope
                  itemType="https://schema.org/SiteNavigationElement"
                >
                  <span itemProp="name">{item.name}</span>
                  <p itemProp="description">{item.description}</p>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <HeroSection />
        <ServicesSection />
        <HighlightSection />
        <PortfolioSection />
        <HowWeWorkSection />
        <VideoCardSection />
        <AboutSection />
        <TestimonialsSection />
        <OurClientSection />
        <InsightSection />
      </main>
      <Footer />
    </>
  );
}
