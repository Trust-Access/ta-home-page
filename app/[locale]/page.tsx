import TrustAccessLanding from '../page';
import { redirect } from 'next/navigation';

const locales = ['en', 'es', 'pt'] as const;

type Params = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocalePage({ params }: Params) {
  if (!locales.includes(params.locale as typeof locales[number])) {
    redirect('/');
  }
  return <TrustAccessLanding />;
}
