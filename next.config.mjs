/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'pt',
    // Disable automatic locale detection to prevent redirects to unsupported routes.
    localeDetection: false,
  },
};

export default nextConfig;
