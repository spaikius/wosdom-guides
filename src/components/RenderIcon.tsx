import type { LucideIcon } from "lucide-react";

interface RenderIconProps extends React.HTMLAttributes<SVGSVGElement> {
  icon?: LucideIcon | string;
}

export const RenderIcon: React.FC<RenderIconProps> = ({ icon, ...params }) => {
  const Icon = icon;
  if (!Icon) return undefined;
  if (typeof Icon === "string") return Icon;
  return <Icon {...params} />;
};
