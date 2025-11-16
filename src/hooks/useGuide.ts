import { useCallback, useEffect, useState } from 'react';
import { loadGuide } from '@/lib/guides-utils';

type UseGuideResult = {
  html: string;
  isLoading: boolean;
  error?: Error;
  refetch: () => Promise<void>;
};

export function useGuide(slug: string): UseGuideResult {
  const [html, setHtml] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const guide = await loadGuide(slug);
      setHtml(guide);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load guide'));
      setHtml('');
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    void load();
  }, [load]);

  return { html, isLoading, error, refetch: load };
}
