import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "es", "pt"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
const DEFAULT_LOCALE: SupportedLocale = "pt";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split("/")[1];

  if (SUPPORTED_LOCALES.includes(pathLocale as SupportedLocale)) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", pathLocale);
    return response;
  }

  const cookieLocale = request.cookies
    .get("NEXT_LOCALE")
    ?.value?.split("-")[0]
    ?.toLowerCase();
  const headerLocale = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0]
    ?.toLowerCase();

  let locale: SupportedLocale = DEFAULT_LOCALE;
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as SupportedLocale)) {
    locale = cookieLocale as SupportedLocale;
  } else if (
    headerLocale &&
    SUPPORTED_LOCALES.includes(headerLocale as SupportedLocale)
  ) {
    locale = headerLocale as SupportedLocale;
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
