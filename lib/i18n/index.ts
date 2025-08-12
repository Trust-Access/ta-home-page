import 'server-only';
import { cookies } from 'next/headers';
import { Locale, SUPPORTED_LOCALES } from './config';

const dictionaries: Record<Locale, () => Promise<Record<string, unknown>>> = {
  en: () => import('./en.json').then((m) => m.default),
  es: () => import('./es.json').then((m) => m.default),
  pt: () => import('./pt.json').then((m) => m.default),
};

export async function getCurrentLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value as Locale | undefined;
  return cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)
    ? cookieLocale
    : 'pt';
}

function getValue(
  dict: Record<string, unknown>,
  key: string,
): string | undefined {
  return key
    .split('.')
    .reduce(
      (acc: unknown, part) =>
        acc && typeof acc === 'object'
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      dict,
    ) as string | undefined;
}

export async function getTranslator(locale: Locale) {
  const dict = await dictionaries[locale]();
  return (key: string) => getValue(dict, key) ?? key;
}
