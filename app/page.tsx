import Header from '@/components/header';
import Hero from '@/components/hero';
import TrustSection from '@/components/trust-section';
import ServicesSection from '@/components/services-section';
import ComplianceSection from '@/components/compliance-section';
import AuditSection from '@/components/audit-section';
import TestimonialsSection from '@/components/testimonials-section';
import ClientsSection from '@/components/clients-section';
import DemoForm from '@/components/demo-form';
import Footer from '@/components/footer';

export default function TrustAccessLanding() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ComplianceSection />
      <AuditSection />
      <TestimonialsSection />
      <ClientsSection />
      <DemoForm />
      <Footer />
    </div>
  );
}
