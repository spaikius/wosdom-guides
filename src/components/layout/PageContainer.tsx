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
        'w-full mx-auto space-y-8 md:space-y-10 pt-4 md:pt-6',
        maxWidth,
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
