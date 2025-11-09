import { useParams, Link } from '@tanstack/react-router';
import { PageContainer } from '@/components/layout/PageContainer';
import { ROUTES } from '@/config/routes';
import { useGuide } from '@/hooks/useGuide';
import { Button } from '@/components/ui/button';
import { BookOpenText } from 'lucide-react';

export const Guide: React.FC = () => {
  const { slug } = useParams({ from: ROUTES.GUIDE });
  const { html } = useGuide(slug);

  return (
    <PageContainer>
      <article className="prose dark:prose-invert max-w-none">
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: HTML is sanitized with DOMPurify */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <div className="pt-6 flex justify-center">
        <Button asChild size="lg" className="gap-2">
          <Link to={ROUTES.GUIDES}>
            <BookOpenText className="h-4 w-4" />
            Back to Guides
          </Link>
        </Button>
      </div>
    </PageContainer>
  );
};
