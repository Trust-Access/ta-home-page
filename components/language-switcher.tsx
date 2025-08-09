'use client';

import { Locale, useI18n } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  return (
    <select
      className='border rounded px-2 py-1 text-sm'
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
    >
      <option value='en'>EN</option>
      <option value='es'>ES</option>
      <option value='pt'>PT</option>
    </select>
  );
}
