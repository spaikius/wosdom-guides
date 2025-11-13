import * as React from 'react';
import { Link } from '@tanstack/react-router';
import type { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/config/routes';
import { cn } from '@/lib/utils';
import { RenderIcon } from '../RenderIcon';

export type GuideItem = {
  slug: string;
  title: string;
  icon?: LucideIcon | string;
  description?: string;
};

type GuideCardProps = {
  guide: GuideItem;
  className?: string;
};

const GuideIcon: React.FC<{ icon: LucideIcon | string }> = ({ icon }) => (
  <span
    className={cn(
      'flex items-center justify-center shrink-0',
      'text-3xl md:text-5xl leading-none'
    )}
  >
    <RenderIcon
      icon={icon}
      className="w-[1.5em] h-[1.5em] object-contain"
    />
  </span>
);


export const GuideCard: React.FC<GuideCardProps> = ({ guide, className }) => {
  const { slug, title, icon, description } = guide;

  return (
    <Link
      to={ROUTES.GUIDE}
      params={{ slug }}
      className={cn(
        'group block rounded-xl',
        'focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-primary/60',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-background'
      )}
      aria-label={title}
    >
      <Card
        className={cn(
          'relative h-full overflow-hidden border border-border/60 bg-card/80 backdrop-blur-sm shadow-sm',
          'transition-all duration-200',
          'hover:-translate-y-1 hover:shadow-xl',

          'before:pointer-events-none before:absolute before:inset-0 before:-z-10',
          'before:bg-linear-to-br before:from-primary/20 before:via-primary/5 before:to-transparent',
          'before:opacity-0 group-hover:before:opacity-100',
          className
        )}
      >
        <CardHeader className="flex flex-row items-center gap-4">
          {icon && <GuideIcon icon={icon} />}

          <div className="flex flex-1 flex-col gap-1 min-w-0">
            <CardTitle className="flex items-center justify-between gap-2 text-base md:text-lg font-semibold tracking-tight">
              <span className="truncate transition-colors group-hover:text-primary">
                {title}
              </span>
              <ChevronRight
                className={cn(
                  'h-4 w-4 shrink-0 text-muted-foreground',
                  'transition-transform duration-200',
                  'group-hover:translate-x-0.5 group-hover:text-primary'
                )}
                aria-hidden="true"
              />
            </CardTitle>

            {description && (
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
