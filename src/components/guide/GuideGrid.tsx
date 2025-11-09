import type { GuideItem } from './GuideCard';
import { GuideCard } from './GuideCard';

type GuideGridProps = {
  items: GuideItem[];
};

export const GuideGrid: React.FC<GuideGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-2">
      {items.map((guide) => (
        <GuideCard key={guide.slug} guide={guide} />
      ))}
    </div>
  );
};
