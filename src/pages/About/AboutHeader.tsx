import { BadgeStrip } from '@/components/content/BadgeStrip';

export const AboutHeader: React.FC = () => (
  <header className="space-y-5">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-2">
          <span>About</span>
          <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
             WOSdom❄️
          </span>
        </h1>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Behind the frost · Why this exists
        </p>
      </div>

      <BadgeStrip className="mt-1 sm:mt-0">
        MiS Alliance · Campfire of knowledge
      </BadgeStrip>
    </div>

    <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
      Welcome, survivor! This frosty corner of the web was made for{' '}
      <span className="font-medium">MiS Alliance</span> members who can't - or
      prefer not to - scroll through endless Discord chats just to find that one
      guide someone posted three snowstorms ago. Think of this as our little
      campfire of knowledge - without the frostbite.
    </p>
  </header>
);
