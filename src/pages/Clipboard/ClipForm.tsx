import { useEffect, useMemo, useRef, useState } from 'react';
import { ColorPalette } from '@/components/ColorPalette';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { Clip, ClipFormValues } from '@/types/clipboard';
import { MAX_CHARS } from './useClipboardClips';

const emptyForm: ClipFormValues = { title: '', content: '', color: null };

export function ClipForm({
  mode,
  initial,
  onSubmit,
  onCancel,
}: {
  mode: 'create' | 'edit';
  initial?: Clip;
  onSubmit: (values: ClipFormValues) => void;
  onCancel: () => void;
}) {
  const titleRef = useRef<HTMLInputElement | null>(null);

  const initialValues = useMemo<ClipFormValues>(() => {
    if (!initial) return emptyForm;
    return {
      title: initial.title ?? '',
      content: initial.content ?? '',
      color: initial.color ?? null,
    };
  }, [initial]);

  const [form, setForm] = useState<ClipFormValues>(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [initialValues]);

  useEffect(() => {
    const t = window.setTimeout(() => titleRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, []);

  function setField<K extends keyof ClipFormValues>(
    key: K,
    value: ClipFormValues[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const trimmedTitle = form.title.trim();
  const trimmedContent = form.content.trim();
  const canSave = trimmedContent.length > 0;

  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="clip-title">Title</Label>
        <Input
          id="clip-title"
          ref={titleRef}
          value={form.title}
          onChange={(e) => setField('title', e.target.value)}
          placeholder="e.g. Common reply"
          className="h-9"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-end justify-between">
          <Label htmlFor="clip-content">Content</Label>
          <span className="text-xs text-muted-foreground">
            {form.content.length}/{MAX_CHARS}
          </span>
        </div>
        <Textarea
          id="clip-content"
          value={form.content}
          onChange={(e) => setField('content', e.target.value)}
          placeholder="What should be copied?"
          className="min-h-[110px]"
          maxLength={MAX_CHARS}
        />
      </div>

      {/* Color */}
      <div className="space-y-2">
        <Label>Color</Label>
        <ColorPalette
          value={form.color}
          onChange={(c) => setField('color', c)}
        />
      </div>

      <DialogFooter className="gap-2 sm:gap-0">
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          onClick={() =>
            onSubmit({
              title: trimmedTitle || 'Untitled',
              content: form.content.slice(0, MAX_CHARS),
              color: form.color,
            })
          }
          disabled={!canSave}
        >
          {mode === 'create' ? 'Create' : 'Save'}
        </Button>
      </DialogFooter>
    </div>
  );
}
