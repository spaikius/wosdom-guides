import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types/nav';
import { RenderIcon } from '../RenderIcon';

type BottomNavProps = {
  items: NavItem[];
};

export const BottomNav: React.FC<BottomNavProps> = ({ items }) => {
  return (
    <nav className="md:hidden fixed inset-x-0 bottom-0 border-t bg-background/95 backdrop-blur z-40">
      <div className="flex items-stretch justify-around">
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
      activeOptions={{ exact: item.exact ?? false }}
      className={cn(
        'flex flex-col flex-1 items-center justify-center gap-1 py-2 text-[11px] text-muted-foreground transition-colors',
        'hover:bg-accent/50 hover:text-accent-foreground',
      )}
      activeProps={{
        className: 'bg-accent text-accent-foreground',
      }}
    >
      <RenderIcon icon={item.icon} className="w-5 h-5" />
    </Link>
  );
}
