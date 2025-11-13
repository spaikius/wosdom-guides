import * as React from 'react';
import { Link } from '@tanstack/react-router';
import type { LucideIcon } from 'lucide-react';
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
        'hidden md:flex md:flex-col md:w-64',
        'border-r bg-background/90 backdrop-blur-xl',
        'sticky top-0 h-screen overflow-y-auto'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-border/60">
        <AppBrand layout="sidebar" />
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col px-3 py-4 gap-2">
        <div className="space-y-1">
          {topItems.map((item) => (
            <SideNavLink key={item.label} item={item} />
          ))}
        </div>

        {aboutItem && (
          <div className="mt-auto pt-4 border-t border-border/50">
            <SideNavLink item={aboutItem} subtle />
          </div>
        )}
      </nav>

      <footer className="text-center px-4 py-3 text-[11px] text-muted-foreground border-t border-border/60">
        Made with 💙 & mild chaos
      </footer>
    </aside>
  );
};

type SideNavLinkProps = {
  item: NavItem;
  subtle?: boolean;
};

const SideNavLink: React.FC<SideNavLinkProps> = ({
  item: { icon, label, to, exact, params, children },
  subtle,
}) => {
  const hasChildren = !!children?.length;

  return (
    <div className="space-y-1">
      <Link
        to={to}
        params={params}
        activeOptions={{ exact: exact ?? false }}
        className={cn(
          'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
          'text-muted-foreground transition-colors',
          subtle
            ? 'hover:bg-accent/40 hover:text-accent-foreground'
            : 'hover:bg-accent/60 hover:text-accent-foreground'
        )}
        activeProps={{
          className: cn(
            'bg-accent text-accent-foreground',
            'shadow-sm ring-1 ring-border/70',
            !subtle && 'hover:bg-accent hover:text-accent-foreground'
          ),
        }}
      >
        {icon && (
          <span
            className={cn(
              'flex h-8 w-8 items-center justify-center shrink-0',
              'rounded-xl bg-accent/10',
              'text-base'
            )}
          >
            <RenderIcon
              icon={icon as LucideIcon | string}
              className="w-[1.2em] h-[1.2em] object-contain"
            />
          </span>
        )}

        <span className="flex-1 truncate">{label}</span>
      </Link>

      {hasChildren && (
        <ul className="ml-3 mt-1 space-y-1 border-l border-border/40 pl-3">
          {children!.map((sub) => (
            <li key={sub.label}>
              <Link
                to={sub.to}
                params={sub.params}
                activeOptions={{ exact: sub.exact ?? false }}
                className={cn(
                  'group flex items-center gap-2 rounded-md px-2 py-1',
                  'text-ms text-muted-foreground transition-colors',
                  'hover:bg-accent/30 hover:text-accent-foreground'
                )}
                activeProps={{
                  className:
                    'bg-accent/70 text-accent-foreground font-medium',
                }}
              >
                {sub.icon && (
                  <RenderIcon
                    icon={sub.icon}
                    className="w-[1em] h-[1em] object-contain"
                  />
                )}
                <span className="truncate">{sub.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

