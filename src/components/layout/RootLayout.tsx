import { Outlet } from '@tanstack/react-router';
import { AppShell } from './AppShell';
import { SidebarNav } from '@/components/layout/SidebarNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { useNav } from '@/hooks/useNav';

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
