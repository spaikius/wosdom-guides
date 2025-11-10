import GitHubLogo from '@/assets/github-mark.svg';
import { BulletedList } from '@/components/content/BulletedList';
import { Footnote } from '@/components/content/Footnote';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GITHUB_REPO_URL } from '@/config/constants';

export const AboutOpenSource: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Open source & hosting</CardTitle>
      <CardDescription>
        Yes, you'll be able to stalk the code too. 🕵️‍♂️
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-3 text-sm">
      <p>
        The plan is to host this on{' '}
        <span className="font-medium">GitHub Pages</span> as a static site. That
        means:
      </p>

      <BulletedList
        items={[
          'Free hosting (more budget left for snacks & packs)',
          'Easy previews for new changes',
          'Anyone can peek at the code or even open PRs',
        ]}
      />

      <p>Once the repository is live, you'll find it here:</p>

      <div className="flex justify-center">
        <Button asChild variant="outline" size="sm" className="gap-2">
          <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
            <GitHubLogo className="w-4 h-4 dark:fill-white fill-black" />
            View repo on GitHub
          </a>
        </Button>
      </div>

      <Footnote className="text-center">
        The code's open - bugs and all. Enjoy the archaeology. 🧙‍♂️
      </Footnote>
    </CardContent>
  </Card>
);
