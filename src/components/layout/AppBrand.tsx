import { Link } from '@tanstack/react-router';
import { ROUTES } from '@/config/routes';
import { cn } from '@/lib/utils';

type AppBrandProps = {
  layout?: 'sidebar' | 'mobile';
  className?: string;
};

export const AppBrand: React.FC<AppBrandProps> = ({ layout = 'sidebar', className }) => {
  const title = layout === 'mobile' ? 'WOSdom Guides' : 'WOSdom';
  const subtitle = 'WOS Alliance MIS';

  return (
    <Link
      to={ROUTES.HOME}
      className={cn(
        'flex flex-col no-underline hover:opacity-80 transition-opacity',
        className,
      )}
    >
      <span className="text-sm font-semibold tracking-tight">{title}</span>
      <span className="text-xs text-muted-foreground">{subtitle}</span>
    </Link>
  );
};
