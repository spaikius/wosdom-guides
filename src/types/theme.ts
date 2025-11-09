export const Theme = {
  light: 'light',
  dark: 'dark',
} as const;
export type Theme = keyof typeof Theme;

export const DEFAULT_THEME: Theme = Theme.dark;

export const isTheme = (val: unknown): val is Theme =>
  typeof val === 'string' && val in Theme;
