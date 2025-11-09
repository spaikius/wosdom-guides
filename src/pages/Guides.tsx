import { GuideGrid } from '@/components/guide/GuideGrid';
import { PageContainer } from '@/components/layout/PageContainer';
import { getGuideNavItems } from '@/lib/guides-utils';
import { BookOpenText } from 'lucide-react';

export const Guides: React.FC = () => {
  const guides = getGuideNavItems().map((g) => ({
    slug: g.params?.slug ?? '',
    title: g.label,
    icon: g.icon,
  }));

  return (
    <PageContainer>
      <header className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <BookOpenText className="w-6 h-6 text-primary" />
          Guides
        </h1>
        <p className="text-sm text-muted-foreground max-w-prose">
          Welcome to the <span className="font-medium">WOS Alliance MIS</span>{' '}
          guide hub! Browse community tips, survival notes, and strategy
          breakdowns — all in one place.
        </p>
      </header>

      <section className="space-y-3 pt-4">
        <GuideGrid items={guides} />

        <p className="text-xs text-muted-foreground text-center">
          More guides coming soon — the furnace is still warming up 🔥
        </p>
      </section>
    </PageContainer>
  );
};
