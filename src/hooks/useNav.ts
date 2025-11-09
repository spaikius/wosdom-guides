import { useEffect, useState } from 'react';
import { getMainNav } from '@/config/nav';
import type { NavItem } from '@/types/nav';

type UseNavResult = {
  navItems: NavItem[];
  loading: boolean;
  error?: Error;
};

export function useNav(): UseNavResult {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    let cancelled = false;

    async function fetchNav() {
      try {
        const items = await getMainNav();
        if (!cancelled) {
          setNavItems(items);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err : new Error('Failed to load nav'),
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchNav();

    return () => {
      cancelled = true;
    };
  }, []);

  return { navItems, loading, error };
}
