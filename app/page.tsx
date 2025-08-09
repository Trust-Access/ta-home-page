import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Header = dynamic(() => import('@/components/header'), { suspense: true });
const Hero = dynamic(() => import('@/components/hero'), { suspense: true });
const TrustSection = dynamic(() => import('@/components/trust-section'), { suspense: true });
const ServicesSection = dynamic(() => import('@/components/services-section'), { suspense: true });
const ComplianceSection = dynamic(() => import('@/components/compliance-section'), { suspense: true });
const AuditSection = dynamic(() => import('@/components/audit-section'), { suspense: true });
const TestimonialsSection = dynamic(() => import('@/components/testimonials-section'), { suspense: true });
const ClientsSection = dynamic(() => import('@/components/clients-section'), { suspense: true });
const DemoForm = dynamic(() => import('@/components/demo-form'), { suspense: true });
const Footer = dynamic(() => import('@/components/footer'), { suspense: true });

export default function TrustAccessLanding() {
  return (
    <div className='min-h-screen bg-white'>
      <Suspense fallback={<Skeleton className='h-16 w-full' />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Skeleton className='h-[400px] w-full' />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Skeleton className='h-[400px] w-full' />}>
        <TrustSection />
      </Suspense>
      <Suspense fallback={<Skeleton className='h-[400px] w-full' />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<Skeleton className='h-[400px] w-full' />}>
        <ComplianceSection />
      </Suspense>
      <Suspense fallback={<Skeleton className='h-[400px] w-full' />}>
        <AuditSection />
      </Suspense>
      <Suspense fallback={<Skeleton className='h-[400px] w-full' />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<Skeleton className='h-[400px] w-full' />}>
        <ClientsSection />
      </Suspense>
      <Suspense fallback={<Skeleton className='h-[400px] w-full' />}>
        <DemoForm />
      </Suspense>
      <Suspense fallback={<Skeleton className='h-64 w-full' />}>
        <Footer />
      </Suspense>
    </div>
  );
}
