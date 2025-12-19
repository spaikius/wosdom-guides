import type React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Clip, ClipFormValues } from '@/types/clipboard';
import { ClipForm } from './ClipForm';
import { MAX_CHARS } from './useClipboardClips';

export function ClipDialog({
  mode,
  open,
  onOpenChange,
  initial,
  onSubmit,
  description,
}: {
  mode: 'create' | 'edit';
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initial?: Clip;
  onSubmit: (values: ClipFormValues) => void;
  description?: React.ReactNode;
}) {
  const title = mode === 'create' ? 'Create clip' : 'Edit clip';

  const defaultDescription =
    mode === 'create' ? (
      <>Click a clip in the list to copy it to your clipboard.</>
    ) : (
      <>Max {MAX_CHARS} characters. Changes persist to local storage.</>
    );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description ?? defaultDescription}
          </DialogDescription>
        </DialogHeader>

        <ClipForm
          mode={mode}
          initial={initial}
          onSubmit={onSubmit}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
