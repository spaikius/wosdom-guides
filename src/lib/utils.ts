import { DEFAULT_GUIDE_ICON } from '@/config/constants';
import { ICONS } from '@/config/icons';
import type { ValueOf } from '@/types/util';
import { type ClassValue, clsx } from 'clsx';
import { icons } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmoji(value: string): boolean {
  return /\p{Extended_Pictographic}/u.test(value);
}

export function isUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export function isDefinedIcon(value: string): boolean {
  return value in ICONS;
}

export function ensureValidIcon(icon: string): string {
  const FALLBACK = DEFAULT_GUIDE_ICON;

  if (!icon) return FALLBACK;
  if (isDefinedIcon(icon)) return icon;
  if (isEmoji(icon)) return icon;
  if (isUrl(icon)) return icon;

  return FALLBACK;
}

export function getDefinedIcon(icon: string): ValueOf<typeof ICONS> {
  return ICONS[icon as keyof typeof ICONS] ?? ICONS[':DEFAULT:'];
}