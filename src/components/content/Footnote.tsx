import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FootnoteProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

export const Footnote: React.FC<FootnoteProps> = ({
  children,
  className,
  ...params
}) => {
  return (
    <p className={cn('text-xs text-muted-foreground', className)} {...params}>
      {children}
    </p>
  );
};
