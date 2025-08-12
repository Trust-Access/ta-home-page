import { getCurrentLocale, getTranslator } from '@/lib/i18n';

export default async function TrustSection() {
  const locale = await getCurrentLocale();
  const t = await getTranslator(locale);
  return (
    <section className='py-16 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900'>
      <div className='container px-4 md:px-6'>
        <div className='text-center space-y-8'>
          <p className='text-lg font-medium text-muted-foreground uppercase tracking-wide'>
            {t('trust.before')}{' '}
            <span className='font-bold text-2xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent'>
              {t('trust.highlight')}
            </span>{' '}
            {t('trust.after')}
          </p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60'>
            <div className='flex items-center justify-center'>
              <div className='text-2xl font-bold text-muted-foreground'>MINING</div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='text-2xl font-bold text-muted-foreground'>CLIENT</div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='text-2xl font-bold text-muted-foreground'>ULTIMATE</div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='text-2xl font-bold text-muted-foreground'>ENTERPRISE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
