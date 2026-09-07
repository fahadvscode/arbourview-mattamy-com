import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const LASTMOD = "2026-09-06T00:00:00.000Z";

const PATHS: { path: string; changefreq: string; priority: string }[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/floor-plans", changefreq: "weekly", priority: "0.9" },
  { path: "/pricing", changefreq: "weekly", priority: "0.9" },
  { path: "/location", changefreq: "monthly", priority: "0.8" },
  { path: "/gallery", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "weekly", priority: "0.8" },
  { path: "/register", changefreq: "monthly", priority: "0.9" },
  { path: "/blog/mattamy-homes-widelot-builder-guide", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Content-Disposition": "inline",
  "Cache-Control": "no-store, no-cache, must-revalidate",
};

function originFromRequest(request: Request): string {
  const hostHeader = request.headers.get("x-forwarded-host") || request.headers.get("host") || "arbourviewmattamy.com";
  const host = hostHeader.split(":")[0];
  if (host === "www.arbourviewmattamy.com") return "https://www.arbourviewmattamy.com";
  return "https://arbourviewmattamy.com";
}

function buildXml(origin: string): string {
  const urls = PATHS.map((item) => {
    const loc = item.path === "/" ? `${origin}/` : `${origin}${item.path}`;
    return `<url>
<loc>${loc}</loc>
<lastmod>${LASTMOD}</lastmod>
<changefreq>${item.changefreq}</changefreq>
<priority>${item.priority}</priority>
</url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function GET(request: Request) {
  return new NextResponse(buildXml(originFromRequest(request)), {
    status: 200,
    headers: XML_HEADERS,
  });
}

export function HEAD() {
  return new NextResponse(null, { status: 200, headers: XML_HEADERS });
}
