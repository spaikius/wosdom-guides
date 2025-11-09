import { Link } from '@tanstack/react-router';
import { BookOpenText, Sparkles } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config/routes';

export const Index: React.FC = () => {
  return (
    <PageContainer>
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
          WOSdom <Sparkles className="h-6 w-6 text-primary" />
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-prose">
          A cozy, dark-themed home for all things{' '}
          <span className="font-medium">WOS Alliance MIS</span>. Browse guides,
          survive the frost, and maybe ship a few fewer bugs along the way.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="gap-2">
          <Link to={ROUTES.GUIDES}>
            <BookOpenText className="h-4 w-4" />
            Browse Guides
          </Link>
        </Button>
        <span className="text-xs text-muted-foreground">
          Works great on mobile, tablet, and desktop ❄️
        </span>
      </div>

      <footer className="pt-4 text-xs text-muted-foreground">
        Built with 💙 by <span className="font-medium">Spaikius</span>. Powered
        by React, Tailwind, and mild chaos.
      </footer>
    </PageContainer>
  );
};
