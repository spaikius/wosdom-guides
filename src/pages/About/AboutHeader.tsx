import { Sparkles } from 'lucide-react';

export const AboutHeader: React.FC = () => (
  <header className="space-y-3">
    <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
      About WOSdom <Sparkles className="h-6 w-6 text-primary" />
    </h1>

    <p className="text-sm text-muted-foreground">
      Welcome, survivor! This frosty corner of the web was made for{' '}
      <span className="font-medium">MiS Alliance</span> members who can’t - or
      prefer not to - scroll through endless Discord chats just to find that one
      guide someone posted three snowstorms ago. Think of this as our little
      campfire of knowledge - without the frostbite.
    </p>
  </header>
);
