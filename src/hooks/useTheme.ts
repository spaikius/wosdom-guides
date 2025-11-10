import { useCallback, useEffect, useState } from 'react';
import { applyTheme, getInitialTheme, persistTheme } from '@/lib/theme-utils';
import { Theme } from '@/types/theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === Theme.dark ? Theme.light : Theme.dark));
  }, []);

  return { theme, toggleTheme };
}
