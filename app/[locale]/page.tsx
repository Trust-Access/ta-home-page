import { redirect } from "next/navigation";
import HomePage from "../page";

const SUPPORTED_LOCALES = ["en", "es", "pt"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

interface LocaleParams {
  params: Promise<{ locale: string }>;
}

export default async function LocalePage({ params }: LocaleParams) {
  const { locale } = await params;

  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) {
    redirect("/");
  }
  return <HomePage />;
}
