import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types/nav';
import { RenderIcon } from '../RenderIcon';

type BottomNavProps = {
  items: NavItem[];
};

export const BottomNav: React.FC<BottomNavProps> = ({ items }) => {
  return (
    <nav className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-lg shadow-[0_-8px_20px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex max-w-xl items-stretch justify-around">
        {items.map((item) => (
          <BottomNavLink key={item.to} item={item} />
        ))}
      </div>
    </nav>
  );
};

function BottomNavLink({ item }: { item: NavItem }) {
  return (
    <Link
      to={item.to}
      params={item.params}
      activeOptions={{ exact: item.exact ?? false }}
      aria-label={item.label}
      className={cn(
        'flex flex-1 flex-col items-center justify-center gap-1 py-1.5',
        'text-[11px] text-muted-foreground transition-colors duration-150',
        'hover:bg-accent/40 hover:text-accent-foreground',
      )}
      activeProps={{
        className: cn(
          'bg-accent/40 text-primary hover:bg-accent/40 hover:text-primary',
        ),
      }}
    >
      <RenderIcon icon={item.icon} className="w-5 h-5" />
      <span className="truncate">{item.label}</span>
    </Link>
  );
}
