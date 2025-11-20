import { Skeleton } from '@/components/ui/skeleton';

export const GuideSkeleton: React.FC = () => (
  <article className="prose dark:prose-invert max-w-none">
    <div className="space-y-4">
      <Skeleton className="h-10 w-10/12" />
      {[1, 2, 3, 4].map((i) => (
        <div key={i}>
          <hr />
          <Skeleton className="h-8 w-2/3 mb-2" />
          <Skeleton className="h-6 w-full mb-1" />
          <Skeleton className="h-6 w-10/12 mb-1" />
          <Skeleton className="h-6 w-7/12" />
        </div>
      ))}
    </div>
  </article>
);
