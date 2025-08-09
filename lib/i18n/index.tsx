'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'en' | 'es' | 'pt';

interface I18nContextProps {
  t: (key: string) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextProps>({
  t: (key: string) => key,
  locale: 'en',
  setLocale: () => {},
});

function getValue(dict: Record<string, unknown>, key: string): string | undefined {
  return key
    .split('.')
    .reduce(
      (acc: unknown, part) =>
        acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[part] : undefined,
      dict,
    ) as string | undefined;
}

const loaders: Record<Locale, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import('./en.json'),
  es: () => import('./es.json'),
  pt: () => import('./pt.json'),
};

export function I18nProvider({
  children,
  locale,
  setLocale,
}: {
  children: React.ReactNode;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  const [dictionary, setDictionary] = useState<Record<string, unknown>>({});

  useEffect(() => {
    loaders[locale]().then((module) => setDictionary(module.default));
    document.documentElement.lang = locale;
  }, [locale]);

  function t(key: string) {
    return getValue(dictionary, key) || key;
  }

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
