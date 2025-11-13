import { useMemo } from 'react';
import type { GuideItem } from '@/types/guide';
import { loadGuides } from '@/lib/guides-utils';

export type UseGuidesResult = {
  guides: GuideItem[];
};

export function useGuides(): UseGuidesResult {
  const guides = useMemo(() => {
    return loadGuides();
  }, []);

  return { guides };
}
