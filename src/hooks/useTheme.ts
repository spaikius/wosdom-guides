import { getStorageKey } from '@/lib/storage-utils';
import {
  applyTheme,
  getPreferredTheme,
  getStoredTheme,
} from '@/lib/theme-utils';
import { Theme } from '@/types/theme';
import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = getStorageKey('theme');

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const stored = getStoredTheme();
    const initial = stored ?? getPreferredTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    if (!theme) return;
    applyTheme(theme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === Theme.dark ? Theme.light : Theme.dark));
  }

  return { theme, toggleTheme };
}
