import { useEffect, useState } from 'react';
import '@/styles/lightbox.css';

export function Lightbox() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.lightbox-trigger') as HTMLButtonElement;
      if (!btn) return;

      e.preventDefault();
      setSrc(btn.dataset.full ?? null);
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  if (!src) return null;

  return (
    <button
      type="button"
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={() => setSrc(null)}
    >
      <img src={src} className="max-w-full max-h-full" alt="" />
    </button>
  );
}
