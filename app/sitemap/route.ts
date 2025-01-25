import { servicesNew } from "@/constants/data";
import { locales } from "@/lib/locales";
import { NextResponse } from "next/server";

// Define supported locales


// Static pages to include
const staticPages = [
  "",
  "contact",
  "about",
  "services"
];

// Simulated dynamic slugs (Replace with actual data fetch logic)
async function fetchServiceSlugs() {
  // Example dynamic service slugs (replace this with a real database call)
  return servicesNew.map((service) => service.slug);
}

export async function GET() {
  const serviceSlugs = await fetchServiceSlugs();

  const urls: string[] = [];

  // Generate URLs for static pages with locales
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      urls.push(`https://veterinar-bihac.ba/${locale}/${page}`);
    });

    // Add dynamic service pages with locales
    serviceSlugs.forEach((slug) => {
      urls.push(`https://veterinar-bihac.ba/${locale}/services/${slug}`);
    });
  });

  // Build the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `<url><loc>${url}</loc></url>`).join("\n")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
