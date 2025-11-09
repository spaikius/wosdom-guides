// src/components/theme-toggle-button.tsx
import { Moon, Sun } from 'lucide-react';
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import '@/styles/theme-transitions.css';

type AnimationVariant = 'polygon';

export interface ThemeToggleButtonProps {
  theme?: 'light' | 'dark';
  showLabel?: boolean;
  variant?: AnimationVariant;
  className?: string;
  onClick?: () => void;
}

export const ThemeToggleButton = ({
  theme = 'light',
  showLabel = false,
  variant = 'polygon',
  className,
  onClick,
}: ThemeToggleButtonProps) => {
  const handleClick = useCallback(() => {
    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement('style');
    style.id = styleId;

    let css = '';

    if (variant === 'polygon') {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            animation: wipe-rtl 0.4s ease-out;
          }
        }
      `;
    }

    if (css) {
      style.textContent = css;
      document.head.appendChild(style);

      setTimeout(() => {
        const styleEl = document.getElementById(styleId);
        if (styleEl) {
          styleEl.remove();
        }
      }, 3000);
    }

    onClick?.();
  }, [onClick, variant]);

  return (
    <Button
      variant="outline"
      size={showLabel ? 'default' : 'icon'}
      onClick={handleClick}
      className={cn(
        'relative overflow-hidden transition-all',
        showLabel && 'gap-2',
        className,
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      {showLabel && (
        <span className="text-sm">{theme === 'light' ? 'Light' : 'Dark'}</span>
      )}
    </Button>
  );
};
