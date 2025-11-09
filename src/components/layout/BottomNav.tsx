// src/layout/BottomNav.tsx
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
      <div className="flex items-center justify-around px-2 py-2">
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
        'flex flex-col items-center justify-center gap-1 px-3 py-1 text-[11px] text-muted-foreground',
        'transition-colors',
      )}
      activeProps={{
        className: 'text-accent-foreground',
      }}
    >
      <RenderIcon icon={item.icon} className="w-4 h-4" />
    </Link>
  );
}
