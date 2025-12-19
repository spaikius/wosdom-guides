import { COLOR_TINT_CLASS } from '@/config/constants';

function isPaletteColor(color: string): color is keyof typeof COLOR_TINT_CLASS {
  return Object.hasOwn(COLOR_TINT_CLASS, color);
}

export function getTintClass(
  color: string | null | undefined,
  fallback = 'bg-transparent',
): string {
  if (!color) return fallback;
  return isPaletteColor(color) ? COLOR_TINT_CLASS[color] : fallback;
}
