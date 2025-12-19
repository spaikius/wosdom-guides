import type { PALETTE_COLORS } from '@/config/constants';

export type ValueOf<T> = T[keyof T];
export type PaletteColor = (typeof PALETTE_COLORS)[number];
