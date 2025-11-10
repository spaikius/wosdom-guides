import { useMemo } from 'react';
import { getMainNav } from '@/config/nav';
import type { NavItem } from '@/types/nav';

type UseNavResult = {
  navItems: NavItem[];
};

export function useNav(): UseNavResult {
  const navItems = useMemo(() => getMainNav(), []);
  return { navItems };
}
