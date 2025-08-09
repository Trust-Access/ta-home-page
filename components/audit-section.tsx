import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AuditSection() {
  return (
    <section className='py-20 md:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-16 lg:grid-cols-2 items-center'>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h3 className='text-3xl font-bold text-gray-900'>
                Auditar e Controlar o Fluxo de Dados Dentro e Fora da Sua Organização
              </h3>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Proteja dados em movimento, seja um e-mail de entrada ou uma mensagem de saída, ou uma página de sistema interno. Com a Trust Access, você pode alterar ou revogar permissões de acesso a qualquer momento.
              </p>
            </div>
          </div>
          <div className='relative'>
            <div className='bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 rounded-3xl p-8 relative overflow-hidden'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='Data audit and control'
                width={600}
                height={400}
                className='rounded-lg shadow-lg'
              />
              {/* Mock Email Interface Overlay */}
              <div className='absolute top-8 right-8 bg-white rounded-lg shadow-xl p-4 w-72'>
                <div className='flex items-center space-x-2 mb-4'>
                  <div className='text-sm font-medium text-blue-600'>Para</div>
                  <div className='flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1'>
                    <div className='w-6 h-6 bg-gray-400 rounded-full'></div>
                    <span className='text-sm'>admin@empresa.com.br</span>
                    <Button size='sm' variant='ghost' className='h-4 w-4 p-0'>
                      <span className='text-gray-400'>×</span>
                    </Button>
                  </div>
                </div>
                <div className='flex items-center space-x-2 mb-6'>
                  <div className='text-sm font-medium text-gray-600'>De</div>
                  <div className='flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1'>
                    <div className='w-6 h-6 bg-green-500 rounded-full'></div>
                    <span className='text-sm'>contato@trustaccess.com.br</span>
                    <Button size='sm' variant='ghost' className='h-4 w-4 p-0'>
                      <span className='text-gray-400'>×</span>
                    </Button>
                  </div>
                </div>
                <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4'>
                  <Image
                    src='/placeholder.svg?height=200&width=250'
                    alt='Email content preview'
                    width={250}
                    height={200}
                    className='rounded-lg w-full'
                  />
                  <div className='mt-4 flex items-center justify-between'>
                    <span className='text-sm font-medium text-blue-700'>Proteção</span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-xs text-blue-600'>ON</span>
                      <div className='w-8 h-4 bg-blue-500 rounded-full relative'>
                        <div className='w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5'></div>
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
