import { useMemo } from 'react';
import { loadGuides } from '@/lib/guides-utils';
import type { GuideItem } from '@/types/guide';

export type UseGuidesResult = {
  guides: GuideItem[];
};

export function useGuides(): UseGuidesResult {
  const guides = useMemo(() => {
    return loadGuides();
  }, []);

  return { guides };
}
