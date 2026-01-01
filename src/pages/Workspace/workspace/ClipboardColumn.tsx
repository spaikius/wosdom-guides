import type {
  DragEndEvent,
  SensorDescriptor,
  SensorOptions,
} from '@dnd-kit/core';
import { Plus } from 'lucide-react';
import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WorkspaceHeader } from '@/components/WorkspaceHeader';
import type { Clip } from '@/types/clipboard';
import { ClipboardList } from '../clipboard/components/ClipboardList';

type ClipboardColumnProps = {
  clips: Clip[];
  copiedId: string | null;
  sensors: SensorDescriptor<SensorOptions>[];
  onDragEnd: (event: DragEndEvent) => void;
  onCopy: (clip: Clip) => void;
  onEdit: (clip: Clip) => void;
  onDelete: (id: string) => void;
  onOpenCreate: () => void;
};

export const ClipboardColumn: React.FC<ClipboardColumnProps> = ({
  clips,
  copiedId,
  sensors,
  onDragEnd,
  onCopy,
  onEdit,
  onDelete,
  onOpenCreate,
}) => {
  return (
    <div className="space-y-5">
      <WorkspaceHeader
        title="Clipboard"
        action={
          <Button className="gap-2" onClick={onOpenCreate} size="sm">
            <Plus className="h-4 w-4" /> New clip
          </Button>
        }
      />

      {clips.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">No clips yet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Create your first clipboard item to start copying quickly.
            </p>
            <Button onClick={onOpenCreate} className="gap-2">
              <Plus className="h-4 w-4" /> Create a clip
            </Button>
          </CardContent>
        </Card>
      ) : (
        <ClipboardList
          clips={clips}
          copiedId={copiedId}
          sensors={sensors}
          onDragEnd={onDragEnd}
          onCopy={onCopy}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};
