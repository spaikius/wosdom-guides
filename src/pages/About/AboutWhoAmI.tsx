import { Footnote } from '@/components/content/Footnote';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { WOW_START_YEAR } from '@/config/constants';

type AboutWhoAmIProps = {
  wowYears: number;
};

export const AboutWhoAmI: React.FC<AboutWhoAmIProps> = ({ wowYears }) => (
  <Card className="border-border/70 bg-card/80 backdrop-blur-sm">
    <CardHeader>
      <CardTitle>Who's behind this?</CardTitle>
      <CardDescription>
        Short version: it's me - Spaikius, hi 👋
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-3 text-sm">
      <p>
        I'm <span className="font-semibold">Spaikius</span> - not a guide
        writer, just someone who enjoys overanalyzing games a little too much.
        I've also been playing{' '}
        <span className="font-medium">World of Warcraft</span> since around{' '}
        <span className="font-mono">{WOW_START_YEAR}</span> (
        <span className="font-semibold">{wowYears}+ years</span> of keybind
        regret and UI tweaking), so overthinking game systems is kind of my
        thing.
      </p>

      <p>
        Most of my "guides" start as messy Discord messages, screenshots, and
        late-night brain dumps. This site is just a cleaner, calmer place to
        park that knowledge so it doesn't get buried under alliance chat, memes,
        or my own short attention span.
      </p>

      <p>
        Think of it less as a formal guide hub and more as{' '}
        <span className="italic">Spaikius' notes</span> - strategies, reminders,
        quality-of-life tricks, and the occasional dev tangent. If it helps even
        one <span className="font-medium">MiS Alliance</span> member avoid
        confusion or a "wait, what are we doing here?" moment, it's doing its
        job.
      </p>

      <Footnote>
        And yes, if you noticed - <span className="font-medium">WOSdom</span> is
        a mix of <span className="font-medium">WOS</span> and{' '}
        <span className="font-medium">wisdom</span>. Clever, right? 😉
      </Footnote>
    </CardContent>
  </Card>
);
