import { BookOpenText, Home, Info } from 'lucide-react';
import { ROUTES } from '@/config/routes';
import { loadGuidesNav } from '@/lib/nav-utils';
import type { NavItem } from '@/types/nav';

export async function getMainNav(): Promise<NavItem[]> {
  const guides = await loadGuidesNav();

  return [
    {
      label: 'Home',
      to: ROUTES.HOME,
      icon: Home,
      exact: true,
    },
    {
      label: 'Guides',
      to: ROUTES.GUIDES,
      icon: BookOpenText,
      children: guides,
    },
    {
      label: 'About',
      to: ROUTES.ABOUT,
      icon: Info,
    },
  ];
}
