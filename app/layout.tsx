import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/config';
import { QueryProvider } from '@/components/query-provider';
import { I18nProvider } from '@/lib/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Identity & Access Management`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} is a cybersecurity consultancy specialized in authentication, identity, and access management (IAM). Secure, automate, and scale access for your business.`,
  applicationName: siteConfig.name,
  generator: 'Next.js',
  keywords: [
    'Identity and Access Management',
    'IAM',
    'Cybersecurity',
    'Authentication',
    'Governance',
    'MFA',
    'SSO',
    siteConfig.name,
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | Identity & Access Management`,
    description:
      'Secure, automate, and scale identity and access for your organization.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Identity & Access Management`,
    description:
      'Secure, automate, and scale identity and access for your organization.',
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
  category: 'Technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt'>
      <body className={inter.className}>
        <I18nProvider>
          <QueryProvider>{children}</QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
