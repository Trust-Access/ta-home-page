import { z } from 'zod';

export const NavItemSchema = z.object({
  href: z.string(),
  label: z.string(),
});

export type NavItem = z.infer<typeof NavItemSchema>;

const navItemsData: NavItem[] = [
  { href: '#services', label: 'nav.services' },
  { href: '#solutions', label: 'nav.solutions' },
  { href: '#cases', label: 'nav.cases' },
  { href: '#portfolio', label: 'nav.portfolio' },
  { href: '#contact', label: 'nav.contact' },
];

export const navItemsSchema = z.array(NavItemSchema);
export const navItems = navItemsSchema.parse(navItemsData);
