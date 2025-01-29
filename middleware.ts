import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Function to check if the request is from Googlebot
function isGooglebot(req: NextRequest): boolean {
  const userAgent = req.headers.get("user-agent") || "";
  return /Googlebot|Googlebot-Image|Mediapartners-Google|APIs-Google/i.test(
    userAgent
  );
}

export default function middleware(req: NextRequest): NextResponse {
  // ✅ Allow Googlebot to access localized pages without redirection
  if (isGooglebot(req)) {
    return NextResponse.rewrite(new URL("/bs", req.url));
  }

  // ✅ Apply normal locale routing for other users
  return createMiddleware(routing)(req);
}

// ✅ Ensure middleware is applied correctly
export const config = {
  matcher: [
    "/", // Homepage
    "/(bs|en|de)/:path*", // Localized paths
    "/((?!_next|_vercel|.*\\..*).*)", // Exclude Next.js internal paths
  ],
};
