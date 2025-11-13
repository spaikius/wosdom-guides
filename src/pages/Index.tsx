import { Link } from '@tanstack/react-router';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config/routes';
import { BadgeStrip } from '@/components/content/BadgeStrip';
import { cn } from '@/lib/utils';
import { PageHero } from '@/components/content/PageHero';
import { PROJECT_NAME } from '@/config/constants';

export const Index: React.FC = () => {
  return (
    <PageContainer>
      <div className="relative">
        <PageHero
          size="lg"
          highlight={PROJECT_NAME}
          subtitle="WOS Alliance MiS · Knowledge hub"
          badge={
            <BadgeStrip>WOS Alliance MiS · Guides & Experiments</BadgeStrip>
          }
        />

        <div className="space-y-4 sm:space-y-6 pt-8">
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            A cozy, dark-themed home for all things{' '}
            <span className="font-medium">WOS Alliance MiS</span>. Browse
            guides, survive the frost, and maybe ship a few fewer bugs along the
            way.
          </p>
          
          <div className="flex justify-center pt-4 pb-2">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 shadow-sm"
            >
              <Link to={ROUTES.GUIDES}>Jump into Guides ❄️</Link>
            </Button>
          </div>
        </div>
      </div>

      <section
        className={cn(
          'rounded-2xl border border-border/60 bg-card/60',
          'backdrop-blur-xl shadow-sm',
          'px-4 py-3 md:px-6 md:py-4',
        )}
      >
        <div
          className={cn(
            'flex flex-col gap-3',
            'md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]',
            'md:items-center',
          )}
        >
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary/80" />
            <div className="space-y-0.5">
              <span className="font-medium text-foreground">
                Built for late-night MiS tinkering.
              </span>
              <p className="hidden sm:block text-[11px] md:text-xs text-muted-foreground/90">
                Guides and tools that don’t mind dark mode, caffeine, or
                refactors at 2am.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-2 text-[11px] md:text-xs text-muted-foreground">
            <BadgeStrip dotColor="bg-sky-400">React · Tailwind</BadgeStrip>
            <BadgeStrip dotColor="bg-purple-400">Mild chaos inside</BadgeStrip>
          </div>
        </div>
      </section>

      <footer className="pb-6 md:pb-8 text-center text-[11px] md:text-xs text-muted-foreground">
        Crafted with 💙 by <span className="font-medium">Spaikius</span>. Built
        with curiosity, caffeine, and the occasional refactor.
      </footer>
    </PageContainer>
  );
};
