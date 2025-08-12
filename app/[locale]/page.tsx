import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const supportedLocales = ["en", "es", "pt"];

interface LocaleParams {
  params: { locale: string };
}

export default function LocalePage({ params: { locale } }: LocaleParams) {
  if (!supportedLocales.includes(locale)) {
    redirect("/");
  }

  cookies().set("NEXT_LOCALE", locale);
  redirect("/");
}
