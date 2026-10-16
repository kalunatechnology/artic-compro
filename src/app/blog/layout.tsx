import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artic Updates",
  description:
    "Read the latest insights, case studies, and updates from Artic Analytica. Explore data-driven stories on research, policy, and strategy.",
  keywords: [
    "Artic Updates",
    "artikel riset data",
    "studi kasus kebijakan publik",
    "wawasan data analytics",
    "ISO 9001 konsultan data",
    "kesalahan visualisasi data",
    "evaluasi kepuasan publik semarang",
    "data literacy indonesia",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Artic Updates | Artic Analytica",
    description:
      "Read the latest insights, case studies, and updates from Artic Analytica. Explore data-driven stories on research, policy, and strategy.",
    url: "/blog",
  },
  twitter: {
    title: "Artic Updates | Artic Analytica",
    description:
      "Read the latest insights, case studies, and updates from Artic Analytica. Explore data-driven stories on research, policy, and strategy.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
