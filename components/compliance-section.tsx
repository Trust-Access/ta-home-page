import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

export default function ComplianceSection() {
  return (
    <section className='py-20 md:py-32 bg-gray-50'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-16 lg:grid-cols-2 items-center'>
          <div className='relative'>
            <div className='bg-gradient-to-br from-teal-100 via-blue-100 to-cyan-100 rounded-3xl p-8 relative overflow-hidden'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='Professional working on compliance'
                width={600}
                height={400}
                className='rounded-lg shadow-lg'
              />
              {/* Mock File Interface Overlay */}
              <div className='absolute top-12 right-8 bg-white rounded-lg shadow-xl p-4 w-64'>
                <div className='flex items-center space-x-2 mb-3'>
                  <div className='w-6 h-6 bg-red-500 rounded flex items-center justify-center'>
                    <span className='text-white text-xs'>PDF</span>
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-medium'>Relatório Trimestral</div>
                    <div className='text-xs text-gray-500'>Empresa.pdf.tdf</div>
                  </div>
                  <Button size='sm' variant='ghost'>
                    <span className='text-gray-400'>×</span>
                  </Button>
                </div>
                <div className='space-y-2 text-xs'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Aberto</span>
                    <span>5:05 PM por mim</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Criado</span>
                    <span>5:05 PM com Trust Access para Drive</span>
                  </div>
                </div>
                <div className='mt-4 pt-3 border-t'>
                  <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                      <Checkbox checked />
                      <span className='text-xs'>Desabilitar re-compartilhamento</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Checkbox checked />
                      <span className='text-xs'>Marca d'água</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Checkbox checked />
                      <span className='text-xs'>Data de expiração (clique para redefinir)</span>
                    </div>
                  </div>
                  <div className='text-xs text-gray-500 mt-2'>16 de fevereiro, 2023 1:45 PM</div>
                  <div className='mt-3 pt-2 border-t'>
                    <div className='flex items-center space-x-1 text-red-600 text-xs'>
                      <span className='w-2 h-2 bg-red-500 rounded-full'></span>
                      <span>Revogar Acesso de todos os Convidados</span>
                    </div>
                    <div className='mt-2 text-xs font-medium'>Usuários Permitidos (3)</div>
                    <div className='space-y-1 mt-1'>
                      <div className='flex items-center space-x-2'>
                        <div className='w-4 h-4 bg-gray-300 rounded-full'></div>
                        <span className='text-xs'>admin@empresa.com.br</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <div className='w-4 h-4 bg-gray-300 rounded-full'></div>
                        <span className='text-xs'>user@empresa.com.br</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
                        <span className='text-xs'>contato@trustaccess.com.br</span>
                        <span className='text-xs text-blue-600'>Acessado 12 minutos atrás</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h3 className='text-3xl font-bold text-gray-900'>Fortalecer Conformidade</h3>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Seja você do setor financeiro, manufatura, educação ou saúde, a criptografia e controles de acesso da Trust Access suportam até mesmo as regulamentações mais rigorosas, incluindo LGPD, GDPR, ISO 27001, SOC 2, e muitas outras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
