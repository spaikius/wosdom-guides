import { BadgeStrip } from '@/components/content/BadgeStrip';
import { PageHero } from '@/components/content/PageHero';
import { Paragraph } from '@/components/content/Paragraph';
import { PROJECT_NAME } from '@/config/constants';

export const AboutHeader: React.FC = () => (
  <>
    <PageHero
      title="About"
      highlight={PROJECT_NAME}
      subtitle="Behind the frost · Why this exists"
      badge={
        <BadgeStrip className="hidden md:flex">
          MiS Alliance · Campfire of knowledge
        </BadgeStrip>
      }
      size="lg"
    />

    <Paragraph>
      Welcome, survivor! This frosty corner of the web was made for{' '}
      <span className="font-medium">MiS Alliance</span> members who can't - or
      prefer not to - scroll through endless Discord chats just to find that one
      guide someone posted three snowstorms ago. Think of this as our little
      campfire of knowledge - without the frostbite.
    </Paragraph>
  </>
);
