import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { QueryProvider } from "@/components/templates/query-provider";
import { ThemeProvider } from "@/components/templates/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Identity & Access Management`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} is a cybersecurity consultancy specialized in authentication, identity, and access management (IAM). Secure, automate, and scale access for your business.`,
  applicationName: siteConfig.name,
  generator: "Next.js",
  keywords: [
    "Identity and Access Management",
    "IAM",
    "Cybersecurity",
    "Authentication",
    "Governance",
    "MFA",
    "SSO",
    siteConfig.name,
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      es: "/es",
      pt: "/",
    },
  },
  openGraph: {
    title: `${siteConfig.name} | Identity & Access Management`,
    description:
      "Secure, automate, and scale identity and access for your organization.",
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
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Identity & Access Management`,
    description:
      "Secure, automate, and scale identity and access for your organization.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  category: "Technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

interface RootLayoutProps {
  children: React.ReactNode;
  locale?: string;
}

export function RootLayoutBase({
  children,
  locale = "pt",
}: RootLayoutProps) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/placeholder-logo.svg`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contato@trustaccess.com.br",
        contactType: "customer service",
      },
    ],
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: siteConfig.name,
  };
  return (
    <html lang={locale}>
      <head>
        <script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutBase>{children}</RootLayoutBase>;
}
