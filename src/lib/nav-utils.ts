import { ROUTES } from '@/config/routes';
import type { NavItem } from '@/types/nav';
import guides from '@guides/guides.json';

export function findNavItemByLabel(
  items: NavItem[],
  label: string,
): NavItem | undefined {
  for (const item of items) {
    if (item.label === label) return item;
    if (item.children) {
      const found = findNavItemByLabel(item.children, label);
      if (found) return found;
    }
  }
  return undefined;
}

export function loadGuidesNav(): NavItem[] {
  return guides.map((guide) => ({
    label: guide.label,
    to: ROUTES.GUIDE,
    params: { slug: guide.slug },
    icon: guide.emoji,
  }));
}
