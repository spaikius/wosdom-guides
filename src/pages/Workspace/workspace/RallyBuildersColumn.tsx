import type React from 'react';
import { WorkspaceHeader } from '@/components/WorkspaceHeader';
import type { StorageKey } from '@/types/storage';
import { RallyBuilder } from '../rally-builder/components/RallyBuilder';

type RallyBuildersColumnProps = {
  storageKeys: StorageKey[];
};

export const RallyBuildersColumn: React.FC<RallyBuildersColumnProps> = ({
  storageKeys,
}) => {
  return (
    <div className="space-y-5">
      <WorkspaceHeader title="Rally Builder" />

      <div className="space-y-5">
        {storageKeys.map((key) => (
          <RallyBuilder key={key} storageKey={key} />
        ))}
      </div>
    </div>
  );
};
