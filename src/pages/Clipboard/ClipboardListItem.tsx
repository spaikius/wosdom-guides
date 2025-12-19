import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Check, Copy, GripVertical, Pencil, Trash2 } from 'lucide-react';
import type React from 'react';

import { Button } from '@/components/ui/button';
import { getTintClass } from '@/lib/style-utils';
import { cn } from '@/lib/utils';
import type { Clip } from '@/types/clipboard';

export function ClipboardListItem({
  clip,
  isCopied,
  onCopy,
  onEdit,
  onDelete,
}: {
  clip: Clip;
  isCopied: boolean;
  onCopy: (clip: Clip) => void;
  onEdit: (clip: Clip) => void;
  onDelete: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: clip.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.7 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'group relative flex items-center gap-3 px-3 py-2 transition-colors',
        getTintClass(clip.color),
        'after:pointer-events-none after:absolute after:inset-0 after:content-[""]',
        'after:bg-muted/40 after:opacity-0 after:transition-opacity',
        'hover:after:opacity-100 focus-within:after:opacity-100',
      )}
    >
      {/* Drag handle */}
      <button
        type="button"
        className={cn(
          'shrink-0 rounded p-1 text-muted-foreground/70 transition',
          'cursor-grab active:cursor-grabbing',
          'hover:bg-muted hover:text-muted-foreground',
        )}
        onClick={(e) => e.stopPropagation()}
        aria-label="Drag to reorder"
        title="Drag to reorder"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="h-4 w-4" />
      </button>

      {/* Main click area */}
      <button
        type="button"
        onClick={() => onCopy(clip)}
        className={cn(
          'min-w-0 flex-1 text-left rounded-md px-1 py-1',
          'focus:outline-none focus:ring-2 focus:ring-ring',
        )}
        title="Click to copy"
      >
        <div className="truncate text-sm font-medium">
          {clip.title || 'Untitled'}
        </div>

        <div className="mt-0.5 truncate text-xs text-muted-foreground">
          {clip.content}
        </div>
      </button>

      {/* Right side actions */}
      <div className="relative flex shrink-0 items-center gap-2">
        {/* Edit/Delete appear on hover but do NOT shift layout: absolute overlay */}
        <div className="relative h-8 w-[72px]">
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-end gap-1 transition',
              'opacity-0 pointer-events-none',
              'group-hover:opacity-100 group-hover:pointer-events-auto',
              'group-focus-within:opacity-100 group-focus-within:pointer-events-auto',
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(clip);
              }}
              aria-label="Edit clip"
              title="Edit"
            >
              <Pencil className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(clip.id);
              }}
              aria-label="Delete clip"
              title="Delete"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Copy button */}
        <Button
          size="sm"
          className={cn(
            'h-8 w-[104px] justify-center gap-2 px-3 transition-colors',
            isCopied
              ? 'bg-emerald-600 text-white hover:bg-emerald-600'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          )}
          onClick={(e) => {
            e.stopPropagation();
            onCopy(clip);
          }}
          title="Copy"
        >
          {isCopied ? (
            <>
              <Check className="h-4 w-4" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" /> Copy
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
