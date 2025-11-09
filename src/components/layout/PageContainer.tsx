import { cn } from '@/lib/utils';

interface PageContainerProps extends React.HTMLAttributes<HTMLElement> {
  maxWidth?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
  maxWidth = 'max-w-3xl',
  ...props
}) => {
  return (
    <section
      className={cn(
        'w-full',
        maxWidth,
        'mx-auto',
        'space-y-6',
        'pt-2',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
