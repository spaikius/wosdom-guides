import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import { cn } from '@/lib/utils';

const bulletedListVariants = cva('list-inside', {
  variants: {
    variant: {
      disc: 'list-disc',
      decimal: 'list-decimal',
      none: 'list-none',
      custom: 'list-none',
    },
    spacing: {
      tight: 'space-y-0.5',
      normal: 'space-y-1',
      loose: 'space-y-2',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'disc',
    spacing: 'tight',
    size: 'sm',
  },
});

export interface BulletedListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof bulletedListVariants> {
  items: React.ReactNode[];
  bullet?: string;
}

export const BulletedList: React.FC<BulletedListProps> = ({
  items,
  variant,
  spacing,
  size,
  bullet,
  className,
  ...props
}) => {
  const isCustom = variant === 'custom' && bullet;

  return (
    <ul
      className={cn(
        bulletedListVariants({ variant, spacing, size }),
        className,
      )}
      {...props}
    >
      {items.map((item, i) => (
        /* biome-ignore lint/suspicious/noArrayIndexKey: Stable list; index key is fine here */
        <li key={i} className={cn(isCustom && 'relative pl-6')}>
          {isCustom && <span className="absolute left-0 top-0">{bullet}</span>}
          {item}
        </li>
      ))}
    </ul>
  );
};
