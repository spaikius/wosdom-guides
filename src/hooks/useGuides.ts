import { useEffect, useState } from 'react';
import { loadGuidesNav } from '@/lib/nav-utils';

export type GuideItem = {
  slug: string;
  title: string;
  icon?: string;
};

type UseGuidesResult = {
  guides: GuideItem[];
  isLoading: boolean;
  error?: Error;
};

export function useGuides(): UseGuidesResult {
  const [guides, setGuides] = useState<GuideItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const navItems = await loadGuidesNav();
        if (cancelled) return;

        const mapped = navItems.map((g) => ({
          slug: g.params?.slug ?? '',
          title: g.label,
          icon: typeof g.icon === 'string' ? g.icon : '',
        }));

        setGuides(mapped);
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err : new Error('Failed to load guides'),
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { guides, isLoading, error };
}
