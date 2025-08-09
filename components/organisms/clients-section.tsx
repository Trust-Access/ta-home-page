import { Card, CardContent } from '@/components/atoms/ui/card';
import Image from 'next/image';
import { clientCases } from '@/data/client-cases';

export default function ClientsSection() {
  return (
    <section className='py-20 md:py-32 bg-white'>
      <div className='container max-w-screen-xl mx-auto px-4 md:px-6'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900'>
          Clientes reais. Sucessos reais. Comprovados.
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {clientCases.map(({ img, title, heading, desc }, idx) => (
            <Card key={idx} className='overflow-hidden shadow-md border border-gray-100'>
              <Image
                src={img}
                alt={title}
                width={500}
                height={300}
                className='w-full object-cover h-56'
                loading='lazy'
                placeholder='blur'
              />
              <CardContent className='p-6 space-y-4'>
                <div className='text-sm text-gray-500'>{title}</div>
                <h3 className='font-semibold text-lg text-gray-900'>{heading}</h3>
                <p className='text-sm text-gray-600'>{desc}</p>
                <span className='text-blue-600 text-xl'>→</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
