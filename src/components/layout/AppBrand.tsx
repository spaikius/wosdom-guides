import { Link } from '@tanstack/react-router';
import { PROJECT_NAME } from '@/config/constants';
import { ROUTES } from '@/config/routes';
import { cn } from '@/lib/utils';

type AppBrandProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export const AppBrand: React.FC<AppBrandProps> = ({
  title = PROJECT_NAME,
  subtitle = 'WOS Alliance MiS',
  className,
}) => {
  return (
    <Link
      to={ROUTES.HOME}
      className={cn(
        'flex flex-col no-underline hover:opacity-80 transition-opacity',
        className,
      )}
    >
      <span
        className={cn(
          'text-sm font-semibold tracking-tight',
          'bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent',
        )}
      >
        {title}
      </span>
      <span className="text-xs text-muted-foreground">{subtitle}</span>
    </Link>
  );
};
