import { cn } from '@/lib/utils';

type PageHeroProps = {
  title?: string;
  highlight?: string;
  emoji?: string;
  subtitle?: string;
  badge?: React.ReactNode;
  align?: 'left' | 'center';
  size?: 'default' | 'lg';
  className?: string;
};

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  highlight,
  emoji,
  subtitle,
  badge,
  align = 'left',
  size = 'default',
  className,
}) => {
  const showTitle = Boolean(title);
  const showHighlight = Boolean(highlight);

  return (
    <header
      className={cn(
        'flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between w-full',
        className,
      )}
    >
      <div
        className={cn(
          'space-y-2',
          align === 'center' && 'text-center sm:text-left',
        )}
      >
        {(showTitle || showHighlight) && (
          <h1
            className={cn(
              'flex flex-wrap items-center font-bold tracking-tight gap-2',
              size === 'lg' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl',
              !showTitle && 'gap-0',
            )}
          >
            {showTitle && <span>{title}</span>}

            {showHighlight && (
              <span
                className={cn(
                  'bg-hero-highlight bg-clip-text text-transparent',
                  '[-webkit-text-fill-color:transparent]',
                )}
              >
                {highlight}
                {emoji ?? ''}
              </span>
            )}
          </h1>
        )}

        {subtitle && (
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      {badge && (
        <div className={cn('sm:ml-auto', 'flex justify-center sm:justify-end')}>
          {badge}
        </div>
      )}
    </header>
  );
};
