import { ThemeToggle } from '@/components/ThemeToggle';
import { AppBrand } from './AppBrand';

export const MobileHeader: React.FC = () => {
  return (
    <header className="md:hidden border-b bg-background/80 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3">
        <AppBrand />
        <ThemeToggle />
      </div>
    </header>
  );
};
