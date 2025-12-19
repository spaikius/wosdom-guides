import { arrayMove } from '@dnd-kit/sortable';
import { useCopyToClipboard, useLocalStorage } from '@uidotdev/usehooks';
import { useCallback, useState } from 'react';

import { getStorageKey } from '@/lib/storage-utils';
import type { Clip, ClipFormValues } from '@/types/clipboard';

const STORAGE_KEY = getStorageKey('clipboard');
export const MAX_CHARS = 256;

function uid(): string {
  return crypto.randomUUID();
}

export function useClipboardClips() {
  const [clips, setClips] = useLocalStorage<Clip[]>(STORAGE_KEY, []);
  const [, copyToClipboard] = useCopyToClipboard();

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = useCallback(
    async (clip: Clip) => {
      try {
        await copyToClipboard(clip.content);
        setCopiedId(clip.id);
        window.setTimeout(() => {
          setCopiedId((cur) => (cur === clip.id ? null : cur));
        }, 900);
      } catch {
        // ignore
      }
    },
    [copyToClipboard],
  );

  const create = useCallback(
    (values: ClipFormValues) => {
      const now = Date.now();
      const next: Clip = {
        id: uid(),
        title: values.title,
        content: values.content.slice(0, MAX_CHARS),
        updatedAt: now,
        color: values.color,
      };
      setClips((prev) => [next, ...prev]);
    },
    [setClips],
  );

  const update = useCallback(
    (id: string, values: ClipFormValues) => {
      const now = Date.now();
      setClips((prev) =>
        prev.map((c) =>
          c.id === id
            ? {
                ...c,
                title: values.title,
                content: values.content.slice(0, MAX_CHARS),
                updatedAt: now,
                color: values.color,
              }
            : c,
        ),
      );
    },
    [setClips],
  );

  const remove = useCallback(
    (id: string) => setClips((prev) => prev.filter((c) => c.id !== id)),
    [setClips],
  );

  const moveById = useCallback(
    (activeId: string, overId: string) => {
      setClips((prev) => {
        const oldIndex = prev.findIndex((c) => c.id === activeId);
        const newIndex = prev.findIndex((c) => c.id === overId);
        if (oldIndex === -1 || newIndex === -1) return prev;
        return arrayMove(prev, oldIndex, newIndex);
      });
    },
    [setClips],
  );

  return { clips, copiedId, copy, create, update, remove, moveById };
}
