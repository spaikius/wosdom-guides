import { useTheme } from '@/hooks/useTheme';
import { useThemeTransition } from '@/hooks/useThemeTransition';
import { ThemeToggleButton } from './ThemeToggleButton';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { startTransition } = useThemeTransition();

  const handleClick = () => {
    startTransition(() => {
      toggleTheme();
    });
  };

  return (
    <ThemeToggleButton
      theme={theme}
      variant="polygon"
      showLabel={false}
      onClick={handleClick}
    />
  );
}
