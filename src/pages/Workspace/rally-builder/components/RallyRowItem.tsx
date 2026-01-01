import { MinusIcon, PlusIcon, Trash2Icon, XIcon } from 'lucide-react';
import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { RallyRow } from '@/types/rallyBuilder';

export type RallyRowItemProps = {
  row: RallyRow;
  time: string;
  draft: string;
  onDraftChange: (v: string) => void;
  onAddPlayer: () => void;
  onRemovePlayer: (idx: number) => void;
  onOffsetChange: (next: number) => void;
  onRemoveRow: () => void;
};

export const RallyRowItem = memo(function RallyRowItem({
  row,
  time,
  draft,
  onDraftChange,
  onAddPlayer,
  onRemovePlayer,
  onOffsetChange,
  onRemoveRow,
}: RallyRowItemProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border bg-background p-2 sm:flex-row sm:items-center">
      <div className="w-12 shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
        {time}
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => onOffsetChange(row.offsetSec - 1)}
          aria-label="Decrease offset"
        >
          <MinusIcon className="h-4 w-4" />
        </Button>

        <Input
          className="h-7 w-10 px-1 text-center font-mono text-xs"
          value={row.offsetSec}
          onChange={(e) => onOffsetChange(Number(e.target.value || 0))}
        />

        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => onOffsetChange(row.offsetSec + 1)}
          aria-label="Increase offset"
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
        {row.players.length === 0 ? (
          <span className="text-xs text-muted-foreground">No players</span>
        ) : (
          row.players.map((p, idx) => (
            <Badge
              key={p}
              variant="secondary"
              className="h-6 gap-1 rounded-md px-2 text-xs"
            >
              <span className="max-w-20 truncate">{p}</span>
              <button
                type="button"
                onClick={() => onRemovePlayer(idx)}
                className="rounded-sm p-0.5 hover:bg-muted"
                aria-label={`Remove ${p}`}
              >
                <XIcon className="h-3 w-3" />
              </button>
            </Badge>
          ))
        )}

        <Input
          value={draft}
          onChange={(e) => onDraftChange(e.target.value)}
          placeholder="+ player"
          className="h-6 w-28 px-2 text-xs"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onAddPlayer();
            }
          }}
        />
      </div>

      <Button
        variant="outline"
        size="icon"
        className="h-7 w-7 shrink-0"
        onClick={onRemoveRow}
        aria-label="Remove line"
      >
        <Trash2Icon className="h-4 w-4" />
      </Button>
    </div>
  );
});
