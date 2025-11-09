import { useParams } from '@tanstack/react-router';
import { PageContainer } from '@/components/layout/PageContainer';
import { ROUTES } from '@/config/routes';
import { useGuide } from '@/hooks/useGuide';

export const Guide: React.FC = () => {
  const { slug } = useParams({ from: ROUTES.GUIDE });
  const { html } = useGuide(slug);

  return (
    <PageContainer>
      <article className="prose dark:prose-invert max-w-none">
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: HTML is sanitized with DOMPurify */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </PageContainer>
  );
};
