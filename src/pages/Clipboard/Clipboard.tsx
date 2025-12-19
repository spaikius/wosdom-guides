import type { DragEndEvent } from '@dnd-kit/core';
import { Plus } from 'lucide-react';
import type React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { ClipFormValues } from '@/types/clipboard';
import { ClipboardList } from './ClipboardList';
import { ClipDialog } from './ClipDialog';
import { useClipboardDndSensors } from './dnd';
import { useClipboardClips } from './useClipboardClips';
import { useClipDialogs } from './useClipDialogs';

export const Clipboard: React.FC = () => {
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
    <PageContainer>
      <div className="mx-auto w-full max-w-4xl space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">Clipboard</h1>
          </div>

          <Button className="gap-2" onClick={openCreate}>
            <Plus className="h-4 w-4" /> New clip
          </Button>
        </div>

        <Separator />

        {clips.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">No clips yet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Create your first clipboard item to start copying quickly.
              </p>
              <Button onClick={openCreate} className="gap-2">
                <Plus className="h-4 w-4" /> Create a clip
              </Button>
            </CardContent>
          </Card>
        ) : (
          <ClipboardList
            clips={clips}
            copiedId={copiedId}
            sensors={sensors}
            onDragEnd={handleDragEnd}
            onCopy={copy}
            onEdit={openEdit}
            onDelete={remove}
          />
        )}

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
      </div>
    </PageContainer>
  );
};
