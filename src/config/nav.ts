import { BookOpenText, Home, Info } from 'lucide-react';
import { ROUTES } from '@/config/routes';
import { loadGuidesNav } from '@/lib/nav-utils';
import type { NavItem } from '@/types/nav';

export function getMainNav(): NavItem[] {
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
      children: loadGuidesNav(),
    },
    {
      label: 'About',
      to: ROUTES.ABOUT,
      icon: Info,
    },
  ];
}
