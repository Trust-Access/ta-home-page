import { Button } from '@/components/atoms/ui/button';
import { Input } from '@/components/atoms/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/ui/select';
import { Users, Shield, Lock } from 'lucide-react';
import { getCurrentLocale, getTranslator } from '@/lib/i18n';

export default async function ServicesSection() {
  const t = await getTranslator(getCurrentLocale());
  return (
    <section id='services' className='py-20 md:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='text-center space-y-4 mb-16'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-600'>
            {t('services.intro')}
          </h2>
        </div>
        <div className='grid gap-16 lg:grid-cols-2 items-center'>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h3 className='text-3xl font-bold text-foreground'>
                {t('services.title')}
              </h3>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                {t('services.description')}
              </p>
            </div>
          </div>
          <div className='relative'>
            <div className='bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 rounded-3xl p-8 relative overflow-hidden'>
              {/* Mock Interface */}
              <div className='bg-card rounded-lg shadow-lg p-6 space-y-4'>
                <div className='flex items-center space-x-3 mb-6'>
                  <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
                    <Users className='w-4 h-4 text-white' />
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm text-muted-foreground'>{t('common.to')}</div>
                    <div className='font-medium'>admin@empresa.com.br</div>
                  </div>
                  <Button size='sm' variant='ghost'>
                    <span className='text-red-500'>×</span>
                  </Button>
                </div>
                <div className='flex items-center space-x-3 mb-6'>
                  <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'>
                    <Users className='w-4 h-4 text-white' />
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm text-muted-foreground'>{t('common.from')}</div>
                    <div className='font-medium'>contato@trustaccess.com.br</div>
                  </div>
                  <Button size='sm' variant='ghost'>
                    <span className='text-red-500'>×</span>
                  </Button>
                </div>
                <div className='bg-muted rounded-lg p-4 space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium text-blue-700'>{t('services.messageOptions')}</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-xs text-blue-600'>{t('common.protection')}</span>
                      <div className='w-8 h-4 bg-blue-500 rounded-full relative'>
                        <div className='w-3 h-3 bg-background rounded-full absolute right-0.5 top-0.5'></div>
                      </div>
                      <span className='text-xs font-medium text-blue-600'>{t('common.on')}</span>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                      <Shield className='w-4 h-4 text-blue-500' />
                      <span className='text-sm'>{t('services.disableForwarding')}</span>
                      <div className='ml-auto w-8 h-4 bg-blue-500 rounded-full relative'>
                        <div className='w-3 h-3 bg-background rounded-full absolute right-0.5 top-0.5'></div>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Users className='w-4 h-4 text-blue-500' />
                      <span className='text-sm'>{t('services.expirationDate')}</span>
                      <div className='ml-auto w-8 h-4 bg-blue-500 rounded-full relative'>
                        <div className='w-3 h-3 bg-background rounded-full absolute right-0.5 top-0.5'></div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center space-x-2 pt-2'>
                    <Input placeholder='1' className='w-16 h-8' />
                    <Select>
                      <SelectTrigger className='w-24 h-8'>
                        <SelectValue placeholder={t('common.week')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='week'>{t('common.week')}</SelectItem>
                        <SelectItem value='month'>{t('common.month')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='text-xs text-muted-foreground'>14/7/2024 @ 10:04 AM</div>
                  <div className='border-t pt-3 space-y-2'>
                    <div className='text-sm font-medium text-blue-700'>{t('services.attachmentOptions')}</div>
                    <div className='flex items-center space-x-2'>
                      <Lock className='w-4 h-4 text-blue-500' />
                      <span className='text-sm'>{t('common.watermark')}</span>
                      <div className='ml-auto w-8 h-4 bg-blue-500 rounded-full relative'>
                        <div className='w-3 h-3 bg-background rounded-full absolute right-0.5 top-0.5'></div>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Shield className='w-4 h-4 text-blue-500' />
                      <span className='text-sm'>{t('services.persistentProtection')}</span>
                      <div className='ml-auto w-8 h-4 bg-blue-500 rounded-full relative'>
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
