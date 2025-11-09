import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import GitHubLogo from '@/assets/github-mark.svg';
import { GITHUB_REPO_URL } from '@/config/constants';

export const AboutOpenSource: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Open source & hosting</CardTitle>
      <CardDescription>
        Yes, you'll be able to stalk the code too.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-3 text-sm">
      <p>
        The plan is to host this on{' '}
        <span className="font-medium">GitHub Pages</span> as a static site. That
        means:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Free hosting (more budget left for snacks & packs)</li>
        <li>Easy previews for new changes</li>
        <li>Anyone can peek at the code or even open PRs</li>
      </ul>

      <p>Once the repository is live, you'll find it here:</p>

      {/* Centered GitHub button */}
      <div className="flex justify-center">
        <Button asChild variant="outline" size="sm" className="gap-2">
          <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
            <GitHubLogo className="w-4 h-4 dark:fill-white fill-black" />
            View repo on GitHub
          </a>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        If this link 404s right now, it just means Spaikius hasn't pushed the
        code yet. Consider this a friendly reminder to future-me. 😅
      </p>
    </CardContent>
  </Card>
);
