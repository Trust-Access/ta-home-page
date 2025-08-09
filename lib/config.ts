import { z } from 'zod';

export const SiteConfigSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  ogImage: z.string().url(),
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;

export const siteConfig: SiteConfig = SiteConfigSchema.parse({
  name: 'Trust Access',
  url: 'https://www.trustaccess.com.br',
  ogImage: 'https://www.trustaccess.com.br/og-image.jpg',
});
