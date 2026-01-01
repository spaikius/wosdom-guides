import { PlusIcon } from 'lucide-react';
import { CopyButton } from '@/components/CopyButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { padN } from '@/lib/string-utils';
import type { StorageKey } from '@/types/storage';
import { OFFSET_VALUES, useRallyBuilder } from '../hooks/useRallyBuilder';
import { RallyRowItem } from './RallyRowItem';

export type RallyBuilderProps = {
  storageKey: StorageKey;
};

export const RallyBuilder: React.FC<RallyBuilderProps> = ({ storageKey }) => {
  const {
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
  } = useRallyBuilder(storageKey);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      <Card className="shadow-sm">
        <CardContent className="space-y-2 px-4">
          {/* Config row */}
          <div className="grid gap-3 md:grid-cols-3">
            <div className="space-y-1">
              <Label className="text-xs">Title</Label>
              <Input
                value={state.title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Create Rallies!"
                className="h-8"
              />
            </div>

            {/* Live clock */}
            <div className="space-y-1">
              <Label className="text-xs">UTC-0 clock</Label>
              <div className="flex h-8 items-center rounded-md border bg-background px-3 font-mono text-sm">
                {nowHHMMSS}
              </div>
            </div>

            {/* Launch time offset slider */}
            <div className="space-y-1">
              <Label className="text-xs">
                Launch offset: {padN(state.launchOffsetSeconds)}
              </Label>

              <Slider
                className="mt-3"
                value={[launchOffsetIndex]}
                min={0}
                max={OFFSET_VALUES.length - 1}
                step={1}
                onValueChange={(v) => setLaunchOffsetByIndex(v[0] ?? 0)}
              />

              <div className="flex text-[10px] text-muted-foreground justify-between">
                {OFFSET_VALUES.map((v) => (
                  <span key={v} className="font-mono">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Separator className="mb-2" />

          {/* Rallies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Rallies</Label>

              <Button
                variant="outline"
                onClick={addRow}
                className="h-7 shrink-0"
              >
                <PlusIcon className="h-4 w-4" />
                Rally
              </Button>
            </div>

            <div className="space-y-1">
              {state.rows.length === 0 ? (
                <div className="rounded-lg border p-3 text-sm text-muted-foreground">
                  No Rallies
                </div>
              ) : (
                state.rows.map((row) => (
                  <RallyRowItem
                    key={row.id}
                    row={row}
                    time={rowTimes[row.id] ?? '00:00:00'}
                    draft={playerDrafts[row.id] ?? ''}
                    onDraftChange={(v) => setDraft(row.id, v)}
                    onAddPlayer={() => addPlayer(row.id)}
                    onRemovePlayer={(idx) => removePlayer(row.id, idx)}
                    onOffsetChange={(next) => updateRowOffset(row.id, next)}
                    onRemoveRow={() => removeRow(row.id)}
                  />
                ))
              )}
            </div>
          </div>

          <Separator className="mb-2" />

          {/* Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Preview</Label>
              <CopyButton
                onCopy={copy}
                isCopied={copied}
                className="h-7 shrink-0"
              />
            </div>

            <button
              type="button"
              onClick={copy}
              title="Click to copy"
              className="w-full text-left focus:outline-none focus:ring-2 focus:ring-ring rounded-lg"
            >
              <pre className="whitespace-pre-wrap rounded-lg bg-muted p-3 font-mono text-xs leading-relaxed hover:bg-muted/80">
                {generatedText}
              </pre>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
