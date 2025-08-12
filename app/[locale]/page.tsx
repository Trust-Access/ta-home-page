import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HomePage from "../page";

const supportedLocales = ["en", "es", "pt"];

interface LocaleParams {
  params: Promise<{ locale: string }>;
}

export default async function LocalePage({ params }: LocaleParams) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale)) {
    redirect("/");
  }

  const cookieStore = await cookies();
  cookieStore.set("NEXT_LOCALE", locale);

  return <HomePage />;
}
