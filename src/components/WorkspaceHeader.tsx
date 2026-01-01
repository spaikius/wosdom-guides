import type React from 'react';
import { Separator } from '@/components/ui/separator';

type WorkspaceHeaderProps = {
  title: string;
  action?: React.ReactNode;
};

export const WorkspaceHeader: React.FC<WorkspaceHeaderProps> = ({
  title,
  action,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        </div>
        {action ? <div className="shrink-0">{action}</div> : <div />}
      </div>
      <Separator />
    </div>
  );
};
