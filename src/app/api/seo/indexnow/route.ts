import { NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/seo/indexnow";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_ARTICLES, WORKS_IDS, EXPERT_SLUGS, TECHNICAL_SLUGS } from "@/lib/blog-data";

function getAllCanonicalUrls(): string[] {
  const baseUrl = SITE_CONFIG.url;
  const urls: string[] = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/works`,
    `${baseUrl}/artic-research`,
    `${baseUrl}/who-we-are`,
    `${baseUrl}/blog`,
    `${baseUrl}/contact`,
    ...WORKS_IDS.map((id) => `${baseUrl}/works/${id}`),
    ...BLOG_ARTICLES.map((article) => `${baseUrl}/blog/${article.id}`),
    ...EXPERT_SLUGS.map((slug) => `${baseUrl}/who-we-are/expert/${slug}`),
    ...TECHNICAL_SLUGS.map((slug) => `${baseUrl}/who-we-are/technical/${slug}`),
  ];

  return Array.from(new Set(urls));
}

export async function POST(request: Request) {
  try {
    let urlsToSubmit: string[] = [];

    try {
      const body = await request.json();
      if (Array.isArray(body?.urls) && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      }
    } catch {
      // If empty body or no JSON sent, submit all canonical URLs
      urlsToSubmit = getAllCanonicalUrls();
    }

    if (urlsToSubmit.length === 0) {
      urlsToSubmit = getAllCanonicalUrls();
    }

    const result = await submitToIndexNow(urlsToSubmit);

    return NextResponse.json(
      {
        ...result,
        submittedCount: urlsToSubmit.length,
      },
      { status: result.success ? 200 : result.status || 500 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown IndexNow error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const allUrls = getAllCanonicalUrls();
  return NextResponse.json({
    status: "IndexNow endpoint ready",
    siteUrl: SITE_CONFIG.url,
    totalCanonicals: allUrls.length,
    instructions:
      "Send a POST request to this endpoint to push updated URLs to Bing, Yandex, Naver, and participating search engines via IndexNow.",
  });
}
