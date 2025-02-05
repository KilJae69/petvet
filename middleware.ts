import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";




export default function middleware(req: NextRequest): NextResponse {

 

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
