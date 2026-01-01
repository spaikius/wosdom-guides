import { Check, Copy } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CopyButtonProps = {
  onCopy: () => void;
  isCopied?: boolean;
  resetAfterMs?: number;
  title?: string;
  className?: string;
};

export const CopyButton: React.FC<CopyButtonProps> = ({
  onCopy,
  isCopied: isCopiedProp,
  resetAfterMs = 900,
  title = 'Copy',
  className,
}) => {
  const [internalCopied, setInternalCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const isControlled = isCopiedProp !== undefined;
  const isCopied = isControlled ? isCopiedProp : internalCopied;

  const triggerCopy = useCallback(() => {
    onCopy();

    if (!isControlled) {
      setInternalCopied(true);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setInternalCopied(false);
        timeoutRef.current = null;
      }, resetAfterMs);
    }
  }, [onCopy, isControlled, resetAfterMs]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Button
      size="sm"
      className={cn(
        'h-8 w-26 justify-center gap-2 px-3 transition-colors',
        isCopied
          ? 'bg-emerald-600 text-white hover:bg-emerald-600'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        className,
      )}
      onClick={(e) => {
        e.stopPropagation();
        triggerCopy();
      }}
      title={title}
    >
      {isCopied ? (
        <>
          <Check className="h-4 w-4" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy
        </>
      )}
    </Button>
  );
};
