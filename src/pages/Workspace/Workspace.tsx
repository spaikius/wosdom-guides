import type { DragEndEvent } from '@dnd-kit/core';
import type { ClipFormValues } from '@/types/clipboard';
import { ClipDialog } from './clipboard/components/ClipDialog';
import { useClipboardDndSensors } from './clipboard/dnd/dnd';
import { useClipboardClips } from './clipboard/hooks/useClipboardClips';
import { useClipDialogs } from './clipboard/hooks/useClipDialogs';
import { ClipboardColumn } from './workspace/ClipboardColumn';
import { RallyBuildersColumn } from './workspace/RallyBuildersColumn';
import { WorkspaceLayout } from './workspace/WorkspaceLayout';

export const Workspace: React.FC = () => {
  const { clips, copiedId, copy, create, update, remove, moveById } =
    useClipboardClips();

  const sensors = useClipboardDndSensors();

  const {
    createOpen,
    setCreateOpen,
    openCreate,
    editOpen,
    setEditOpen,
    editClip,
    openEdit,
    closeEdit,
  } = useClipDialogs();

  function handleCreate(values: ClipFormValues) {
    create(values);
    setCreateOpen(false);
  }

  function handleEdit(values: ClipFormValues) {
    if (!editClip) return;
    update(editClip.id, values);
    closeEdit();
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    moveById(String(active.id), String(over.id));
  }

  return (
    <>
      <WorkspaceLayout
        left={
          <ClipboardColumn
            clips={clips}
            copiedId={copiedId}
            sensors={sensors}
            onDragEnd={handleDragEnd}
            onCopy={copy}
            onEdit={openEdit}
            onDelete={remove}
            onOpenCreate={openCreate}
          />
        }
        right={
          <RallyBuildersColumn
            storageKeys={[
              'clipboard-rally-builder-1',
              'clipboard-rally-builder-2',
              'clipboard-rally-builder-3',
            ]}
          />
        }
      />
      <ClipDialog
        mode="create"
        open={createOpen}
        onOpenChange={setCreateOpen}
        onSubmit={handleCreate}
      />

      <ClipDialog
        mode="edit"
        open={editOpen}
        onOpenChange={setEditOpen}
        initial={editClip ?? undefined}
        onSubmit={handleEdit}
      />
    </>
  );
};
