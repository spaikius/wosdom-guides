import * as React from 'react';
import { cn } from '@/lib/utils';

interface BadgeStripProps extends React.HTMLAttributes<HTMLDivElement> {
  dotColor?: string;
  children: React.ReactNode;
}

export const BadgeStrip: React.FC<BadgeStripProps> = ({
  dotColor = 'bg-emerald-400',
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full',
        'border border-border/60 bg-background/80',
        'px-3 py-1 text-xs text-muted-foreground',
        className,
      )}
      {...props}
    >
      <span className={cn('inline-flex h-2 w-2 rounded-full', dotColor)} />
      <span>{children}</span>
    </div>
  );
};
