import { cn, getDefinedIcon, isDefinedIcon, isEmoji, isUrl } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface RenderIconProps extends React.HTMLAttributes<SVGSVGElement> {
  icon?: LucideIcon | string;
}

export const RenderIcon: React.FC<RenderIconProps> = ({
  icon,
  className,
  style,
  ...svgProps
}) => {
  if (!icon) return null;

  if (typeof icon !== 'string') {
    const Icon = icon;
    return <Icon className={className} style={style} {...svgProps} />;
  }

  if (isDefinedIcon(icon)) {
    const iconSrc = getDefinedIcon(icon);
    return <img src={iconSrc} className={className} style={style} alt="" />;
  }

if (isEmoji(icon)) {
  return (
    <span
      className={cn(
        className,
        "inline-flex items-center justify-center leading-none"
      )}
      style={style}
      aria-hidden="true"
    >
      <span className="text-[1em] leading-none">{icon}</span>
    </span>
  );
}

  if (isUrl(icon)) {
    return <img src={icon} className={className} style={style} alt="" />;
  }

  return null;
};
