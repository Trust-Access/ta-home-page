import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [primary, secondary] = testimonials;
  return (
    <section id='cases' className='py-20 md:py-32 bg-gray-50'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-12 lg:grid-cols-2'>
          <Card className='border-0 shadow-lg bg-white'>
            <CardContent className='p-8'>
              <div className='space-y-6'>
                <div className='text-2xl font-bold text-gray-400 tracking-wider'>
                  {primary.company}
                </div>
                <blockquote className='text-lg text-gray-700 leading-relaxed'>
                  {primary.quote}
                </blockquote>
                <div className='pt-4'>
                  <div className='font-semibold text-gray-900'>{primary.name}</div>
                  <div className='text-gray-600'>{primary.role}</div>
                  <div className='text-gray-500'>{primary.companyTag}</div>
                </div>
                <Link
                  href={primary.link}
                  className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
                >
                  {primary.linkText}
                </Link>
              </div>
            </CardContent>
          </Card>
          <div className='space-y-8'>
            <div className='relative'>
              {secondary.image && (
                <Image
                  src={secondary.image}
                  alt={secondary.imageAlt ?? ''}
                  width={500}
                  height={300}
                  className='rounded-lg shadow-lg w-full'
                />
              )}
            </div>
            <Card className='border-0 shadow-lg bg-white'>
              <CardContent className='p-6'>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-3'>
                    <div className='text-xl font-bold text-blue-600'>{secondary.company}</div>
                  </div>
                  {secondary.heading && (
                    <h4 className='text-lg font-semibold text-gray-900'>{secondary.heading}</h4>
                  )}
                  <blockquote className='text-gray-700'>{secondary.quote}</blockquote>
                  <div className='pt-2'>
                    <div className='font-semibold text-gray-900'>{secondary.name}</div>
                    <div className='text-gray-600'>{secondary.role}</div>
                    <div className='text-gray-500'>{secondary.companyTag}</div>
                  </div>
                  <Link
                    href={secondary.link}
                    className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
                  >
                    {secondary.linkText}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
