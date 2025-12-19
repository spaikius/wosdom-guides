import { Check } from 'lucide-react';
import type React from 'react';
import { PALETTE_COLORS } from '@/config/constants';
import { cn } from '@/lib/utils';

export type ColorValue = string | null;

export function ColorPalette({
  value = null,
  onChange,
  colors = PALETTE_COLORS,
  size = 28,
}: {
  value?: ColorValue;
  onChange: (color: ColorValue) => void;
  colors?: readonly string[];
  size?: number;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <ColorSwatch
        label="No color"
        selected={value === null}
        size={size}
        onClick={() => onChange(null)}
      >
        <NoColorSwatch />
      </ColorSwatch>

      {colors.map((color) => (
        <ColorSwatch
          key={color}
          label={color}
          selected={value === color}
          size={size}
          onClick={() => onChange(color)}
        >
          <div
            className="h-full w-full rounded-sm"
            style={{ backgroundColor: color }}
          />
        </ColorSwatch>
      ))}
    </div>
  );
}

function NoColorSwatch() {
  return (
    <div className="h-full w-full rounded-sm border border-dashed border-muted-foreground/60 bg-background" />
  );
}

function ColorSwatch({
  children,
  selected,
  size,
  label,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  size: number;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        'relative rounded-md border transition focus:outline-none focus:ring-2 focus:ring-ring',
        selected
          ? 'border-primary ring-2 ring-primary/40'
          : 'border-muted hover:border-foreground/50',
      )}
      style={{ width: size, height: size }}
    >
      {children}

      {selected && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Check className="h-3.5 w-3.5 text-white drop-shadow-[0_0_1px_rgba(0,0,0,0.8)]" />
        </span>
      )}
    </button>
  );
}
