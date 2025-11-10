import { Link } from '@tanstack/react-router';
import type React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types/nav';
import { RenderIcon } from '../RenderIcon';
import { AppBrand } from './AppBrand';

type SidebarNavProps = {
  items: NavItem[];
};

export const SidebarNav: React.FC<SidebarNavProps> = ({ items }) => {
  const topItems = items.filter((i) => i.label !== 'About');
  const aboutItem = items.find((i) => i.label === 'About');

  return (
    <aside
      className={cn(
        'hidden md:flex md:flex-col md:w-64 border-r bg-background/80 backdrop-blur',
        'sticky top-0 h-screen overflow-y-auto',
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <AppBrand layout="sidebar" />
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {topItems.map((item) => (
          <SideNavLink key={item.label} item={item} />
        ))}

        {/* Optional About at bottom */}
        {aboutItem && (
          <div className="mt-auto pt-4 border-t border-border/50">
            <SideNavLink key={aboutItem.label} item={aboutItem} />
          </div>
        )}
      </nav>

      <footer className="px-4 py-3 text-[11px] text-muted-foreground border-t">
        Made with 💙 & mild chaos
      </footer>
    </aside>
  );
};

type SideNavLinkProps = {
  item: NavItem;
};

const SideNavLink: React.FC<SideNavLinkProps> = ({
  item: { icon: Icon, label, to, exact, params, children },
}) => {
  const hasChildren = !!children?.length;

  return (
    <div>
      <Link
        to={to}
        params={params}
        activeOptions={{ exact: exact ?? false }}
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors',
          'hover:bg-accent/60 hover:text-accent-foreground',
        )}
        activeProps={{
          className:
            'bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground',
        }}
      >
        {Icon && <Icon className="w-4 h-4" />}
        <span>{label}</span>
      </Link>

      {hasChildren && (
        <ul className="ml-6 mt-1 space-y-1 border-l border-border/40 pl-3">
          {children.map((sub) => (
            <li key={sub.label}>
              <Link
                to={sub.to}
                params={sub.params}
                activeOptions={{ exact: sub.exact ?? false }}
                className={cn(
                  'flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-foreground transition-colors',
                  'py-1',
                )}
                activeProps={{
                  className: 'text-accent-foreground font-medium',
                }}
              >
                <RenderIcon icon={sub.icon} className="w-3 h-3" />
                <span>{sub.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
