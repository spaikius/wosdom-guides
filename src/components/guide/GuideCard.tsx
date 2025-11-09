import { Link } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/config/routes";
import type { LucideIcon } from "lucide-react";
import { RenderIcon } from "../RenderIcon";

export type GuideItem = {
  slug: string;
  title: string;
  icon?: LucideIcon | string;
};

type GuideCardProps = {
  guide: GuideItem;
  className?: string;
};

export const GuideCard: React.FC<GuideCardProps> = ({ guide, className }) => {
  return (
    <Link
      to={ROUTES.GUIDE}
      params={{ slug: guide.slug }}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg"
    >
      <Card
        className={cn(
          "group relative h-full transition-all duration-200 cursor-pointer border-border/70 bg-card/80 backdrop-blur-sm",
          "hover:-translate-y-1 hover:shadow-lg",
          className
        )}
      >
        <CardHeader className="flex flex-col items-start">
          <CardTitle className="flex items-center gap-3 text-lg md:text-xl font-semibold">
            {guide.icon && (
              <span className="text-2xl md:text-4xl leading-none">
                <RenderIcon icon={guide.icon} />
              </span>
            )}
            <span className="group-hover:text-primary transition-colors">
              {guide.title}
            </span>
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
};
