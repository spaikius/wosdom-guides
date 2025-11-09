import { DEFAULT_THEME, isTheme } from "@/types/theme";
import { Theme } from "@/types/theme";
import { getStorageKey } from "./storage-utils";

const THEME_STORAGE_KEY = getStorageKey("theme");

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  if (theme === Theme.dark) root.classList.add(Theme.dark);
  else root.classList.remove(Theme.dark);
}

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(value) ? value : null;
}

export function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  if (window.matchMedia?.("(prefers-color-scheme: light)").matches)
    return Theme.light;
  return Theme.dark;
}

export function getInitialTheme(): Theme {
  const stored = getStoredTheme();
  return stored ?? getPreferredTheme();
}

export function persistTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}
