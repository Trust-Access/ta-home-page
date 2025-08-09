"use client";

import { Button } from '@/components/atoms/ui/button';
import Image from 'next/image';
import { BLUR_PLACEHOLDER } from '@/lib/blur';
import { useI18n } from '@/lib/i18n';

export default function AuditSection() {
  const { t } = useI18n();
  return (
    <section className='py-20 md:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-16 lg:grid-cols-2 items-center'>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h3 className='text-3xl font-bold text-foreground'>
                {t('audit.title')}
              </h3>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                {t('audit.description')}
              </p>
            </div>
          </div>
          <div className='relative'>
            <div className='bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 dark:from-purple-900 dark:via-pink-900 dark:to-purple-900 rounded-3xl p-8 relative overflow-hidden'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt={t('audit.imageAlt')}
                width={600}
                height={400}
                className='rounded-lg shadow-lg'
                loading='lazy'
                placeholder='blur'
                blurDataURL={BLUR_PLACEHOLDER}
              />
              {/* Mock Email Interface Overlay */}
              <div className='absolute top-8 right-8 bg-card rounded-lg shadow-xl p-4 w-72'>
                <div className='flex items-center space-x-2 mb-4'>
                  <div className='text-sm font-medium text-blue-600'>{t('common.to')}</div>
                  <div className='flex items-center space-x-2 bg-muted rounded-full px-3 py-1'>
                    <div className='w-6 h-6 bg-muted rounded-full'></div>
                    <span className='text-sm'>admin@empresa.com.br</span>
                    <Button size='sm' variant='ghost' className='h-4 w-4 p-0'>
                      <span className='text-muted-foreground'>×</span>
                    </Button>
                  </div>
                </div>
                <div className='flex items-center space-x-2 mb-6'>
                  <div className='text-sm font-medium text-muted-foreground'>{t('common.from')}</div>
                  <div className='flex items-center space-x-2 bg-muted rounded-full px-3 py-1'>
                    <div className='w-6 h-6 bg-green-500 rounded-full'></div>
                    <span className='text-sm'>contato@trustaccess.com.br</span>
                    <Button size='sm' variant='ghost' className='h-4 w-4 p-0'>
                      <span className='text-muted-foreground'>×</span>
                    </Button>
                  </div>
                </div>
                <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg p-4'>
                  <Image
                    src='/placeholder.svg?height=200&width=250'
                    alt={t('audit.emailAlt')}
                    width={250}
                    height={200}
                    className='rounded-lg w-full'
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL={BLUR_PLACEHOLDER}
                  />
                  <div className='mt-4 flex items-center justify-between'>
                    <span className='text-sm font-medium text-blue-700'>{t('common.protection')}</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-xs text-blue-600'>{t('common.on')}</span>
                      <div className='w-8 h-4 bg-blue-500 rounded-full relative'>
                        <div className='w-3 h-3 bg-background rounded-full absolute right-0.5 top-0.5'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
