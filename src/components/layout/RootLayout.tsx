import { Outlet } from '@tanstack/react-router';
import { BottomNav } from '@/components/layout/BottomNav';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { SidebarNav } from '@/components/layout/SidebarNav';
import { useNav } from '@/hooks/useNav';
import { AppShell } from './AppShell';

export const RootLayout: React.FC = () => {
  const { navItems } = useNav();

  return (
    <AppShell
      sidebar={<SidebarNav items={navItems} />}
      header={<MobileHeader />}
      bottomNav={<BottomNav items={navItems} />}
    >
      <Outlet />
    </AppShell>
  );
};
