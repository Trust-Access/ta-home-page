"use client";

import { Locale, useI18n } from "@/lib/i18n";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/atoms/ui/select";

export default function LanguageSwitcher() {
  const { t, locale, setLocale } = useI18n();
  const languages: { value: Locale; label: string; flag: string }[] = [
    { value: "en", label: t("languages.en"), flag: "🇺🇸" },
    { value: "es", label: t("languages.es"), flag: "🇪🇸" },
    { value: "pt", label: t("languages.pt"), flag: "🇧🇷" },
  ];

  return (
    <Select value={locale} onValueChange={(v) => setLocale(v as Locale)}>
      <SelectTrigger className="w-[120px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang.value}
            value={lang.value}
            aria-label={lang.label}
          >
            <span className="flex items-center gap-2">
              <span aria-hidden="true">{lang.flag}</span>
              {lang.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
