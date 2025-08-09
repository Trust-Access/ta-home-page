export default function TrustSection() {
  return (
    <section className='py-16 bg-gradient-to-r from-teal-50 to-blue-50'>
      <div className='container px-4 md:px-6'>
        <div className='text-center space-y-8'>
          <p className='text-lg font-medium text-gray-700 uppercase tracking-wide'>
            Mais de{' '}
            <span className='font-bold text-2xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent'>
              500+ EMPRESAS
            </span>{' '}
            confiam na Trust Access para segurança e gestão de acesso.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60'>
            <div className='flex items-center justify-center'>
              <div className='text-2xl font-bold text-gray-500'>MINING</div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='text-2xl font-bold text-gray-500'>CLIENT</div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='text-2xl font-bold text-gray-500'>ULTIMATE</div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='text-2xl font-bold text-gray-500'>ENTERPRISE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
