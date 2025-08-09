import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Header = dynamic(() => import('@/components/header'));
const Hero = dynamic(() => import('@/components/hero'));
const TrustSection = dynamic(() => import('@/components/trust-section'));
const ServicesSection = dynamic(() => import('@/components/services-section'));
const ComplianceSection = dynamic(() => import('@/components/compliance-section'));
const AuditSection = dynamic(() => import('@/components/audit-section'));
const TestimonialsSection = dynamic(() => import('@/components/testimonials-section'));
const ClientsSection = dynamic(() => import('@/components/clients-section'));
const DemoForm = dynamic(() => import('@/components/demo-form'));
const Footer = dynamic(() => import('@/components/footer'));

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
