import { createFileRoute } from '@tanstack/react-router';
import { Workspace } from '@/pages/Workspace/Workspace';

export const Route = createFileRoute('/workspace')({
  component: Workspace,
});
