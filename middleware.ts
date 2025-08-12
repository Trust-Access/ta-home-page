import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "es", "pt"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const cookieLocale = request.cookies
    .get("NEXT_LOCALE")
    ?.value?.split("-")[0]
    ?.toLowerCase();
  const headerLocale = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0]
    ?.toLowerCase();

  const locale = cookieLocale || headerLocale;

  if (!locale || !SUPPORTED_LOCALES.includes(locale as SupportedLocale)) {
    if (pathname !== "/") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|en|es|pt).*)"],
};
