import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/config";
import { QueryProvider } from "@/components/templates/query-provider";
import { ThemeProvider } from "@/components/templates/theme-provider";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  locale?: string;
}

export default function RootLayoutBase({
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
