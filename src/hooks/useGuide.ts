import { useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { rewriteImagePaths } from '@/lib/guides-utils';

type UseGuideResult = {
  html: string;
  isLoading: boolean;
  error?: Error;
};

export function useGuide(slug: string): UseGuideResult {
  const [html, setHtml] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      setError(undefined);

      try {
        const file = await import(`@guides/${slug}/guide.md?raw`);
        const markdown = rewriteImagePaths(file.default, slug);

        const parsed = (await marked.parse(markdown)) as string;
        const safe = DOMPurify.sanitize(parsed);

        if (!cancelled) setHtml(safe);
      } catch {
        if (!cancelled) {
          const fallback = `# Guide Not Found 😢\nThis guide doesn't exist (yet)!`;
          const parsed = (await marked.parse(fallback)) as string;
          const safe = DOMPurify.sanitize(parsed);
          setHtml(safe);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { html, isLoading, error };
}
