import TrustAccessLanding from "../page";
import { redirect } from "next/navigation";

const locales = ["en", "es", "pt"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleParams {
  params: Promise<{ locale: string }>;
}

import { cookies } from "next/headers";

export default async function LocalePage({ params }: LocaleParams) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    redirect("/");
  }

  const cookieStore = await cookies();
  cookieStore.set("NEXT_LOCALE", locale);

  return <TrustAccessLanding />;
}
