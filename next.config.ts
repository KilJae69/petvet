import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/sitemap" },
      { source: "/robots.txt", destination: "/robots" },
    ];
  },
};

export default withNextIntl(nextConfig);
