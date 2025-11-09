import type { ReactNode } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SidebarNav } from '@/components/layout/SidebarNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { MAIN_NAV_ITEMS } from '@/config/nav';

type AppShellProps = {
  children: ReactNode;
};

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex md:flex-row flex-col">
        <SidebarNav items={MAIN_NAV_ITEMS} />

        {/* Main area */}
        <div className="flex-1 flex flex-col min-h-screen md:min-h-0">
          {/* Top bar on mobile */}
          <header className="md:hidden border-b bg-background/80 backdrop-blur">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight">
                  WOSdom Guides
                </span>
                <span className="text-xs text-muted-foreground">
                  WOS Alliance MIS
                </span>
              </div>
              <ThemeToggle />
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 min-h-0 px-4 md:px-8 py-4 md:py-8 pb-16 md:pb-8 overflow-y-auto">
            {children}
          </main>

          {/* Bottom nav for mobile */}
          <BottomNav items={MAIN_NAV_ITEMS} />
        </div>
      </div>
    </div>
  );
};
