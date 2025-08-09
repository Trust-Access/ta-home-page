"use client";

import { Button } from '@/components/atoms/ui/button';
import { Checkbox } from '@/components/atoms/ui/checkbox';
import Image from 'next/image';
import { BLUR_PLACEHOLDER } from '@/lib/blur';
import { useI18n } from '@/lib/i18n';

export default function ComplianceSection() {
  const { t } = useI18n();
  return (
    <section className='py-20 md:py-32 bg-background'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-16 lg:grid-cols-2 items-center'>
          <div className='relative'>
            <div className='bg-gradient-to-br from-teal-100 via-blue-100 to-cyan-100 dark:from-teal-900 dark:via-blue-900 dark:to-cyan-900 rounded-3xl p-8 relative overflow-hidden'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt={t('compliance.imageAlt')}
                width={600}
                height={400}
                className='rounded-lg shadow-lg'
                loading='lazy'
                placeholder='blur'
                blurDataURL={BLUR_PLACEHOLDER}
              />
              {/* Mock File Interface Overlay */}
              <div className='absolute top-12 right-8 bg-card rounded-lg shadow-xl p-4 w-64'>
                <div className='flex items-center space-x-2 mb-3'>
                  <div className='w-6 h-6 bg-red-500 rounded flex items-center justify-center'>
                    <span className='text-white text-xs'>PDF</span>
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-medium'>{t('compliance.reportTitle')}</div>
                    <div className='text-xs text-muted-foreground'>Empresa.pdf.tdf</div>
                  </div>
                  <Button size='sm' variant='ghost'>
                    <span className='text-muted-foreground'>×</span>
                  </Button>
                </div>
                <div className='space-y-2 text-xs'>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>{t('compliance.open')}</span>
                    <span>{t('compliance.openedByMe')}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>{t('compliance.created')}</span>
                    <span>{t('compliance.createdWith')}</span>
                  </div>
                </div>
                <div className='mt-4 pt-3 border-t'>
                  <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                      <Checkbox checked />
                      <span className='text-xs'>{t('compliance.disableResharing')}</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Checkbox checked />
                      <span className='text-xs'>{t('common.watermark')}</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Checkbox checked />
                      <span className='text-xs'>{t('compliance.expirationNote')}</span>
                    </div>
                  </div>
                  <div className='text-xs text-muted-foreground mt-2'>16 de fevereiro, 2023 1:45 PM</div>
                  <div className='mt-3 pt-2 border-t'>
                    <div className='flex items-center space-x-1 text-red-600 text-xs'>
                      <span className='w-2 h-2 bg-red-500 rounded-full'></span>
                      <span>{t('compliance.revokeAccess')}</span>
                    </div>
                    <div className='mt-2 text-xs font-medium'>{t('compliance.allowedUsers')}</div>
                    <div className='space-y-1 mt-1'>
                      <div className='flex items-center space-x-2'>
                        <div className='w-4 h-4 bg-muted rounded-full'></div>
                        <span className='text-xs'>admin@empresa.com.br</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <div className='w-4 h-4 bg-muted rounded-full'></div>
                        <span className='text-xs'>user@empresa.com.br</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
                        <span className='text-xs'>contato@trustaccess.com.br</span>
                        <span className='text-xs text-blue-600'>{t('compliance.accessed')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h3 className='text-3xl font-bold text-foreground'>{t('compliance.title')}</h3>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                {t('compliance.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
