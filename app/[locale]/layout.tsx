import { cookies } from "next/headers";
import RootLayoutBase from "../root-layout-base";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: paramLocale } = await params;
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = paramLocale || cookieLocale || "pt";
  return <RootLayoutBase locale={locale}>{children}</RootLayoutBase>;
}
