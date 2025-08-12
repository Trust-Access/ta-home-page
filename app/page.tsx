import Header from '@/components/organisms/header';
import Hero from '@/components/organisms/hero';
import TrustSection from '@/components/organisms/trust-section';
import ServicesSection from '@/components/organisms/services-section';
import ComplianceSection from '@/components/organisms/compliance-section';
import AuditSection from '@/components/organisms/audit-section';
import TestimonialsSection from '@/components/organisms/testimonials-section';
import ClientsSection from '@/components/organisms/clients-section';
import DemoForm from '@/components/molecules/demo-form';
import Footer from '@/components/organisms/footer';

export default function TrustAccessLanding() {
  return (
    <div className='min-h-screen bg-background'>
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
