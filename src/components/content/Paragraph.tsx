import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  ...params
}) => {
  return (
    <p
      className={cn(
        'text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed',
        className,
      )}
      {...params}
    >
      {children}
    </p>
  );
};
