import { Link, useParams } from '@tanstack/react-router';
import { BookOpenText } from 'lucide-react';
import { ErrorState } from '@/components/ErrorState';
import { PageContainer } from '@/components/layout/PageContainer';
import { GuideSkeleton } from '@/components/skeletons/GuideSkeleton';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config/routes';
import { useGuide } from '@/hooks/useGuide';

export const Guide: React.FC = () => {
  const { slug } = useParams({ from: ROUTES.GUIDE });
  const { html, isLoading, error, refetch } = useGuide(slug);

  return (
    <PageContainer>
      {error ? (
        <ErrorState onRetry={refetch} />
      ) : isLoading ? (
        <GuideSkeleton />
      ) : (
        <article className="prose dark:prose-invert max-w-none">
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: HTML is sanitized with DOMPurify */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      )}

      <div className="pb-6 flex justify-center">
        <Button variant="outline" asChild size="lg" className="gap-2">
          <Link to={ROUTES.GUIDES}>
            <BookOpenText className="h-4 w-4" />
            Back to Guides
          </Link>
        </Button>
      </div>
    </PageContainer>
  );
};
