import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className='relative py-20 md:py-32 overflow-hidden'>
      {/* Geometric Background Pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-100'>
        <div className='absolute inset-0 opacity-30'>
          <svg className='w-full h-full' viewBox='0 0 1200 800' fill='none'>
            <defs>
              <pattern id='hexagons' x='0' y='0' width='100' height='87' patternUnits='userSpaceOnUse'>
                <polygon
                  points='50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#hexagons)' className='text-teal-300' />
          </svg>
        </div>
      </div>
      <div className='container relative px-4 md:px-6'>
        <div className='max-w-4xl'>
          <div className='space-y-8'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900'>
              IAM e Segurança como Serviço para{' '}
              <span className='bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent'>
                Operações Seguras
              </span>
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>
              Capacitamos empresas com soluções completas de IAM e CIAM, unindo autenticação, governança e segurança de aplicações e APIs. Garantimos controle de acesso eficiente, com foco em proteção e boa experiência do usuário.
            </p>
            <p className='text-lg text-gray-700 max-w-3xl leading-relaxed'>
              Oferecemos integrações, automação de onboarding/offboarding, suporte técnico e treinamentos. Operações mais seguras, ágeis e alinhadas com as exigências atuais de segurança digital.
            </p>
            <div className='pt-4'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-lg px-8 py-6 rounded-full'
              >
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
