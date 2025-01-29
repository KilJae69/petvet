import { servicesNew } from "@/constants/data";
import { locales } from "@/lib/locales";
import { NextResponse } from "next/server";

// Static pages to include
const staticPages = ["", "contact", "about", "services"];

async function fetchServiceSlugs() {
  return servicesNew.map((service) => service.slug);
}

export async function GET() {
  const serviceSlugs = await fetchServiceSlugs();
  const urls: string[] = [];

  // ✅ Ensure homepage versions are included
  locales.forEach((locale) => {
    urls.push(`https://veterinar-bihac.ba/${locale}/`); // ✅ Explicit homepage
  });

  // ✅ Ensure static pages are included for each locale
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      urls.push(`https://veterinar-bihac.ba/${locale}/${page}/`); // ✅ Add trailing slash
    });

    // ✅ Include dynamic service pages
    serviceSlugs.forEach((slug) => {
      urls.push(`https://veterinar-bihac.ba/${locale}/services/${slug}/`); // ✅ Add trailing slash
    });
  });

  // Build the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `<url><loc>${url}</loc></url>`).join("\n")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
