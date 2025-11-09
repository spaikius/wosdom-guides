import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { BottomNav } from '@/components/layout/BottomNav';
import { SidebarNav } from '@/components/layout/SidebarNav';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ROUTES } from '@/config/routes';
import { useNav } from '@/hooks/useNav';

type AppShellProps = {
  children: ReactNode;
};

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const { navItems } = useNav();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex md:flex-row flex-col">
        <SidebarNav items={navItems} />

        {/* Main area */}
        <div className="flex-1 flex flex-col min-h-screen md:min-h-0">
          {/* Top bar on mobile */}
          <header className="md:hidden border-b bg-background/80 backdrop-blur">
            <div className="flex items-center justify-between px-4 py-3">
              <Link
                to={ROUTES.HOME}
                className="flex flex-col no-underline hover:opacity-80 transition-opacity"
              >
                <span className="text-sm font-semibold tracking-tight">
                  WOSdom Guides
                </span>
                <span className="text-xs text-muted-foreground">
                  WOS Alliance MIS
                </span>
              </Link>

              <ThemeToggle />
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 min-h-0 px-4 md:px-8 py-4 md:py-8 pb-16 md:pb-8 overflow-y-auto">
            {children}
          </main>

          {/* Bottom nav for mobile */}
          <BottomNav items={navItems} />
        </div>
      </div>
    </div>
  );
};
