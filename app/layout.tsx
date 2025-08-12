import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import RootLayoutBase from "./root-layout-base";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <RootLayoutBase>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      {children}
    </RootLayoutBase>
  );
}
