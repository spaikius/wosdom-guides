import { BadgeStrip } from '@/components/content/BadgeStrip';
import { PageHero } from '@/components/content/PageHero';
import { PROJECT_NAME } from '@/config/constants';

export const AboutHeader: React.FC = () => (
  <header className="space-y-5">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <PageHero
        title="About"
        highlight={PROJECT_NAME}
        subtitle="Behind the frost · Why this exists"
        badge={
          <BadgeStrip className="mt-1 sm:mt-0">
            MiS Alliance · Campfire of knowledge
          </BadgeStrip>
        }
        size="lg"
      />
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
