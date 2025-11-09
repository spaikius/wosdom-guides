import { Outlet } from '@tanstack/react-router';
import { AppShell } from './AppShell';

export const RootLayout: React.FC = () => {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
};
