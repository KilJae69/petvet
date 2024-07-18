import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'bs'],
  // Used when no locale matches
  defaultLocale: 'bs',
});

export default function middleware(req: NextRequest): NextResponse {

console.log("middleware runs..");
  // Check if locale is set in the cookie and rewrite the URL accordingly
  const localeCookie = req.cookies.get('NEXT_LOCALE');
  const locale = localeCookie?.value; // Extract the value from the RequestCookie object

  if (!locale && !req.nextUrl.pathname.startsWith('/en') && !req.nextUrl.pathname.startsWith('/bs')) {
    // Redirect to the default locale if no locale is set in the cookie and the path does not start with a locale
    const url = req.nextUrl.clone();
    url.pathname = `/bs${req.nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(bs|en)/:path*'],
};
