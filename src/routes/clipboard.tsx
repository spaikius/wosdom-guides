import { createFileRoute } from '@tanstack/react-router';
import { Clipboard } from '@/pages/Clipboard/Clipboard';

export const Route = createFileRoute('/clipboard')({
  component: Clipboard,
});
