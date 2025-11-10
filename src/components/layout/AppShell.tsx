import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AppShellProps = {
  children: ReactNode;
  sidebar?: ReactNode;
  header?: ReactNode;
  bottomNav?: ReactNode;
  className?: string;
};

export const AppShell: React.FC<AppShellProps> = ({
  children,
  sidebar,
  header,
  bottomNav,
  className,
}) => {
  return (
    <div className={cn('min-h-screen bg-background text-foreground', className)}>
      <div className="flex md:flex-row flex-col">
        {/* Sidebar (desktop) */}
        {sidebar}

        {/* Main area */}
        <div className="flex flex-1 flex-col md:h-screen">
          {/* Top bar on mobile */}
          {header}

          {/* Content */}
          <main className="flex-1 min-h-0 px-4 md:px-8 py-4 md:py-8 pb-16 md:pb-8 overflow-y-auto">
            {children}
          </main>

          {/* Bottom nav for mobile */}
          {bottomNav}
        </div>
      </div>
    </div>
  );
};
