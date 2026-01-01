import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  type SensorDescriptor,
  type SensorOptions,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { Card } from '@/components/ui/card';
import type { Clip } from '@/types/clipboard';
import { ClipboardListItem } from './ClipboardListItem';

export function ClipboardList({
  clips,
  copiedId,
  sensors,
  onDragEnd,
  onCopy,
  onEdit,
  onDelete,
}: {
  clips: Clip[];
  copiedId: string | null;
  sensors: SensorDescriptor<SensorOptions>[];
  onDragEnd: (event: DragEndEvent) => void;
  onCopy: (clip: Clip) => void;
  onEdit: (clip: Clip) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <Card className="overflow-hidden">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={clips.map((c) => c.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="divide-y">
            {clips.map((clip) => (
              <ClipboardListItem
                key={clip.id}
                clip={clip}
                isCopied={copiedId === clip.id}
                onCopy={onCopy}
                onEdit={() => onEdit(clip)}
                onDelete={onDelete}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </Card>
  );
}
