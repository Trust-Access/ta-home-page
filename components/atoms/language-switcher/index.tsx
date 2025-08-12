"use client";

import { Locale } from "@/lib/i18n/config";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/atoms/ui/select";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  locale: Locale;
  languages: { value: Locale; label: string; flag: string }[];
}

export default function LanguageSwitcher({
  className,
  locale,
  languages,
}: LanguageSwitcherProps) {
  const router = useRouter();

  return (
    <Select
      value={locale}
      onValueChange={(v) => {
        router.push(`/${v}`);
      }}
    >
      <SelectTrigger className={cn("w-full md:w-[120px]", className)}>
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
