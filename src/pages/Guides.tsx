import { BookOpenText } from 'lucide-react';
import { Footnote } from '@/components/content/Footnote';
import { GuideGrid } from '@/components/guide/GuideGrid';
import { PageContainer } from '@/components/layout/PageContainer';
import { useGuides } from '@/hooks/useGuides';

export const Guides: React.FC = () => {
  const { guides } = useGuides();

  return (
    <PageContainer className="space-y-6 md:space-y-8">
      <header className="space-y-4 border-b border-border/60 pb-4 md:pb-6 mb-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BookOpenText className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Guides
                </span>
              </h1>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                WOS Alliance MIS · Knowledge hub
              </p>
            </div>
          </div>

          {guides?.length ? (
            <div className="hidden md:flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>{guides.length} guide{guides.length !== 1 ? 's' : ''} available</span>
            </div>
          ) : null}
        </div>

        <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
          Welcome to the <span className="font-medium">WOS Alliance MIS</span> guide hub.
          Explore community wisdom, survival notes, and strategy breakdowns - all
          curated to help you stay one step ahead.
        </p>
      </header>

      <section className="space-y-4 md:space-y-5">
        
          <GuideGrid items={guides} />
        

        <Footnote className="text-center text-xs md:text-sm text-muted-foreground">
          More guides are being forged in the furnace - check back soon 🔥
        </Footnote>
      </section>
    </PageContainer>
  );
};
