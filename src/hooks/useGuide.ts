import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useCallback, useEffect, useState } from 'react';
import { rewriteImagePaths } from '@/lib/guides-utils';

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
      const file = await import(`@guides/${slug}/guide.md?raw`);
      const markdown = rewriteImagePaths(file.default, slug);
      const parsed = (await marked.parse(markdown)) as string;
      const safe = DOMPurify.sanitize(parsed);
      setHtml(safe);
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
