import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import { cn } from '@/lib/utils';

const bulletedListVariants = cva('list-inside', {
  variants: {
    variant: {
      disc: 'list-disc',
      decimal: 'list-decimal',
      none: 'list-none',
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
}

export const BulletedList: React.FC<BulletedListProps> = ({
  items,
  variant,
  spacing,
  size,
  className,
  ...props
}: BulletedListProps) => {
  return (
    <ul
      className={cn(
        bulletedListVariants({ variant, spacing, size }),
        className,
      )}
      {...props}
    >
      {items.map((item, i) => (
        /* biome-ignore lint/suspicious/noArrayIndexKey: Index is good enough in this context */
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};
