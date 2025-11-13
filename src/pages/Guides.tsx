import { BadgeStrip } from '@/components/content/BadgeStrip';
import { Footnote } from '@/components/content/Footnote';
import { PageHero } from '@/components/content/PageHero';
import { GuideGrid } from '@/components/guide/GuideGrid';
import { PageContainer } from '@/components/layout/PageContainer';
import { useGuides } from '@/hooks/useGuides';

export const Guides: React.FC = () => {
  const { guides } = useGuides();

  return (
    <PageContainer>
      <div className="space-y-4 border-b border-border/60 pb-4 md:pb-6 mb-4">
        <div className="flex items-center justify-between gap-4">
          <PageHero
            size="lg"
            highlight="Guides"
            subtitle="WOS Alliance MiS · Knowledge hub"
            badge={
              <BadgeStrip className="hidden md:flex">
                {guides.length} guide{guides.length !== 1 ? 's' : ''} available
              </BadgeStrip>
            }
          />
        </div>

        <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
          Welcome to the <span className="font-medium">WOS Alliance MiS</span>{' '}
          guide hub. Explore community wisdom, survival notes, and strategy
          breakdowns - all curated to help you stay one step ahead.
        </p>
      </div>

      <section className="space-y-4 md:space-y-5">
        <GuideGrid items={guides} />

        <Footnote className="text-center text-xs md:text-sm text-muted-foreground">
          More guides are being forged in the furnace - check back soon 🔥
        </Footnote>
      </section>
    </PageContainer>
  );
};
