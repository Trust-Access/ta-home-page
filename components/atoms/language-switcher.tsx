'use client';

import { Locale, useI18n } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { t, locale, setLocale } = useI18n();
  return (
    <select
      className='border rounded px-2 py-1 text-sm'
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
    >
      <option value='en'>{t('languages.en')}</option>
      <option value='es'>{t('languages.es')}</option>
      <option value='pt'>{t('languages.pt')}</option>
    </select>
  );
}
