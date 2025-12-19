import type { PaletteColor } from '@/types/util';

export const GITHUB_REPO_URL = 'https://github.com/spaikius/wosdom-guides';
export const WOW_START_YEAR = 2007;
export const DEFAULT_GUIDE_ICON = '📘';
export const PROJECT_NAME = 'WOSdom❄️';
export const PALETTE_COLORS = [
  '#ef4444', // red
  '#f97316', // orange
  '#eab308', // yellow
  '#22c55e', // green
  '#3b82f6', // blue
  '#6366f1', // indigo
  '#a855f7', // purple
  '#ec4899', // pink
  '#14b8a6', // teal
  '#06b6d4', // cyan
  '#84cc16', // lime
  '#64748b', // slate
] as const;
export const COLOR_TINT_CLASS = {
  '#ef4444': 'bg-red-500/15',
  '#f97316': 'bg-orange-500/15',
  '#eab308': 'bg-yellow-500/15',
  '#22c55e': 'bg-green-500/15',
  '#3b82f6': 'bg-blue-500/15',
  '#6366f1': 'bg-indigo-500/15',
  '#a855f7': 'bg-purple-500/15',
  '#ec4899': 'bg-pink-500/15',
  '#14b8a6': 'bg-teal-500/15',
  '#06b6d4': 'bg-cyan-500/15',
  '#84cc16': 'bg-lime-500/15',
  '#64748b': 'bg-slate-500/15',
} satisfies Record<PaletteColor, string>;
