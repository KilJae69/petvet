import { NextResponse } from "next/server";

export function GET() {
  const robots = `
    User-agent: *
    Allow: /

    # ✅ Explicitly allow localized pages
    Allow: /bs/
    Allow: /en/
    Allow: /de/

    Sitemap: https://veterinar-bihac.ba/sitemap.xml
  `;

  return new NextResponse(robots, {
    headers: { "Content-Type": "text/plain" },
  });
}
