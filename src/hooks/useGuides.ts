import { useMemo } from 'react';
import { loadGuidesNav } from '@/lib/nav-utils';

export type GuideItem = {
  slug: string;
  title: string;
  icon?: string;
};

export type UseGuidesResult = {
  guides: GuideItem[];
};

export function useGuides(): UseGuidesResult {
  const guides = useMemo(() => {
    const navItems = loadGuidesNav();

    return navItems.map((g) => ({
      slug: g.params?.slug ?? '',
      title: g.label,
      icon: typeof g.icon === 'string' ? g.icon : '',
    }));
  }, []);

  return { guides };
}
