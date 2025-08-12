"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type Locale = "en" | "es" | "pt";

interface I18nContextProps {
  t: (key: string) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextProps>({
  t: (key: string) => key,
  locale: "pt",
  setLocale: () => {},
});

function getValue(
  dict: Record<string, unknown>,
  key: string,
): string | undefined {
  return key
    .split(".")
    .reduce(
      (acc: unknown, part) =>
        acc && typeof acc === "object"
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      dict,
    ) as string | undefined;
}

const loaders: Record<
  Locale,
  () => Promise<{ default: Record<string, unknown> }>
> = {
  en: () => import("./en.json"),
  es: () => import("./es.json"),
  pt: () => import("./pt.json"),
};

const SUPPORTED_LOCALES: Locale[] = ["en", "es", "pt"];

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathLocale = pathname?.split("/")[1];
  const [locale, setLocale] = useState<Locale>(
    SUPPORTED_LOCALES.includes(pathLocale as Locale)
      ? (pathLocale as Locale)
      : "pt",
  );
  const [dictionary, setDictionary] = useState<Record<string, unknown>>({});

  useEffect(() => {
    const current = pathname?.split("/")[1];
    if (SUPPORTED_LOCALES.includes(current as Locale) && current !== locale) {
      setLocale(current as Locale);
    }
  }, [pathname, locale]);

  useEffect(() => {
    loaders[locale]().then((module) => setDictionary(module.default));
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
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
