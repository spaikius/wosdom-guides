import { useCopyToClipboard, useLocalStorage } from '@uidotdev/usehooks';
import { useCallback, useMemo, useState } from 'react';
import { useUtcNow } from '@/hooks/useUtcNow';
import { formatHHMMSS } from '@/lib/format-utils';
import { clamp } from '@/lib/math-utils';
import { getStorageKey } from '@/lib/storage-utils';
import { addSecondsToTime, getNextFullMinuteUTC } from '@/lib/time-utils';
import { uid } from '@/lib/uid-utils';
import type { RallyBuilderState, RallyRow } from '@/types/rallyBuilder';
import type { StorageKey } from '@/types/storage';

export const OFFSET_VALUES = [0, 10, 20, 30, 40, 50] as const;
type OffsetValue = (typeof OFFSET_VALUES)[number];
const OFFSET_TO_INDEX_MAP: Record<OffsetValue, number> = Object.fromEntries(
  OFFSET_VALUES.map((v, i) => [v, i]),
) as Record<OffsetValue, number>;

function createEmptyState(): RallyBuilderState {
  return {
    title: 'Create Rallies!',
    launchOffsetSeconds: 0,
    rows: [],
  };
}

export function offsetToIndex(offset: number): number {
  return OFFSET_TO_INDEX_MAP[offset as OffsetValue] ?? 0;
}

type UseRallyBuilderReturn = {
  // state
  state: RallyBuilderState;
  playerDrafts: Record<string, string>;
  copied: boolean;

  // clock UI
  nowHHMMSS: string;

  // derived
  launchOffsetIndex: number;
  rowTimes: Record<string, string>;
  generatedText: string;

  // actions
  setTitle: (title: string) => void;
  setLaunchOffsetByIndex: (idx: number) => void;
  setDraft: (rowId: string, draft: string) => void;

  addRow: () => void;
  removeRow: (rowId: string) => void;
  updateRowOffset: (rowId: string, next: number) => void;

  addPlayer: (rowId: string) => void;
  removePlayer: (rowId: string, idx: number) => void;

  copy: () => void;
};

export function useRallyBuilder(storageKey: StorageKey): UseRallyBuilderReturn {
  const [, copyToClipboard] = useCopyToClipboard();

  // IMPORTANT: pass initializer function so empty object isn't created each render
  const [state, setState] = useLocalStorage<RallyBuilderState>(
    getStorageKey(storageKey),
    createEmptyState(),
  );

  const [playerDrafts, setPlayerDrafts] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const now = useUtcNow();

  const nowUTC = useMemo(
    () => ({
      hh: now.getUTCHours(),
      mm: now.getUTCMinutes(),
      ss: now.getUTCSeconds(),
    }),
    [now],
  );

  const baseUTC = useMemo(() => getNextFullMinuteUTC(now), [now]);

  const nowHHMMSS = useMemo(
    () => formatHHMMSS(nowUTC.hh, nowUTC.mm, nowUTC.ss),
    [nowUTC.hh, nowUTC.mm, nowUTC.ss],
  );

  const setTitle = useCallback(
    (title: string) => {
      setState((prev) => ({ ...prev, title }));
    },
    [setState],
  );

  const updateRow = useCallback(
    (rowId: string, patch: Partial<RallyRow>) => {
      setState((prev) => ({
        ...prev,
        rows: prev.rows.map((r) => (r.id === rowId ? { ...r, ...patch } : r)),
      }));
    },
    [setState],
  );

  const updateRowOffset = useCallback(
    (rowId: string, next: number) => updateRow(rowId, { offsetSec: next }),
    [updateRow],
  );

  const addRow = useCallback(() => {
    setState((prev) => {
      const last = prev.rows[prev.rows.length - 1];
      const nextOffset = last ? last.offsetSec + 1 : 0;
      return {
        ...prev,
        rows: [
          ...prev.rows,
          { id: uid(), offsetSec: nextOffset, adjustSec: 0, players: [] },
        ],
      };
    });
  }, [setState]);

  const removeRow = useCallback(
    (rowId: string) => {
      setState((prev) => ({
        ...prev,
        rows: prev.rows.filter((r) => r.id !== rowId),
      }));

      setPlayerDrafts((prev) => {
        const next = { ...prev };
        delete next[rowId];
        return next;
      });
    },
    [setState],
  );

  const setDraft = useCallback((rowId: string, draft: string) => {
    setPlayerDrafts((prev) => ({ ...prev, [rowId]: draft }));
  }, []);

  const addPlayer = useCallback(
    (rowId: string) => {
      setPlayerDrafts((prevDrafts) => {
        const draft = (prevDrafts[rowId] ?? '').trim();
        if (!draft) return prevDrafts;

        setState((prev) => ({
          ...prev,
          rows: prev.rows.map((r) =>
            r.id === rowId ? { ...r, players: [...r.players, draft] } : r,
          ),
        }));

        return { ...prevDrafts, [rowId]: '' };
      });
    },
    [setState],
  );

  const removePlayer = useCallback(
    (rowId: string, idx: number) => {
      setState((prev) => ({
        ...prev,
        rows: prev.rows.map((r) =>
          r.id === rowId
            ? { ...r, players: r.players.filter((_, i) => i !== idx) }
            : r,
        ),
      }));
    },
    [setState],
  );

  const setLaunchOffsetByIndex = useCallback(
    (idx: number) => {
      setState((prev) => ({
        ...prev,
        launchOffsetSeconds: OFFSET_VALUES[clamp(idx, 0, 5)],
      }));
    },
    [setState],
  );

  const launchOffsetIndex = useMemo(
    () => offsetToIndex(state.launchOffsetSeconds),
    [state.launchOffsetSeconds],
  );

  const rowTimes = useMemo(() => {
    const out: Record<string, string> = {};
    for (const row of state.rows) {
      const delta =
        state.launchOffsetSeconds + row.offsetSec + (row.adjustSec ?? 0);

      const t = addSecondsToTime(baseUTC.hh, baseUTC.mm, baseUTC.ss, delta);
      out[row.id] = formatHHMMSS(t.hh, t.mm, t.ss);
    }
    return out;
  }, [
    state.rows,
    state.launchOffsetSeconds,
    baseUTC.hh,
    baseUTC.mm,
    baseUTC.ss,
  ]);

  const generatedText = useMemo(() => {
    const title = state.title.trim() || 'Create Rallies!';
    const lines: string[] = [title];

    for (const row of state.rows) {
      const time = rowTimes[row.id] ?? '00:00:00';
      const players = row.players.join(' / ').trim();
      lines.push(`${time} - ${players}`);
    }

    return lines.join('\n');
  }, [state.title, state.rows, rowTimes]);

  const copy = useCallback(() => {
    copyToClipboard(generatedText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 900);
  }, [copyToClipboard, generatedText]);

  return {
    state,
    playerDrafts,
    copied,

    nowHHMMSS,

    launchOffsetIndex,
    rowTimes,
    generatedText,

    setTitle,
    setLaunchOffsetByIndex,
    setDraft,

    addRow,
    removeRow,
    updateRowOffset,

    addPlayer,
    removePlayer,

    copy,
  };
}
