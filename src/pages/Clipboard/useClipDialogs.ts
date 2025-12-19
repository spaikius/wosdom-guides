import { useCallback, useState } from 'react';
import type { Clip } from '@/types/clipboard';

export function useClipDialogs() {
  const [createOpen, setCreateOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);
  const [editClip, setEditClip] = useState<Clip | null>(null);

  const openCreate = useCallback(() => setCreateOpen(true), []);
  const closeCreate = useCallback(() => setCreateOpen(false), []);

  const openEdit = useCallback((clip: Clip) => {
    setEditClip(clip);
    setEditOpen(true);
  }, []);

  const closeEdit = useCallback(() => {
    setEditOpen(false);
    setEditClip(null);
  }, []);

  const setEditOpenSafe = useCallback(
    (open: boolean) => {
      if (open) setEditOpen(true);
      else closeEdit();
    },
    [closeEdit],
  );

  return {
    createOpen,
    setCreateOpen,
    openCreate,
    closeCreate,

    editOpen,
    setEditOpen: setEditOpenSafe,
    editClip,
    openEdit,
    closeEdit,
  };
}
