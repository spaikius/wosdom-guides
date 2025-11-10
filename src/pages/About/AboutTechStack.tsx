import { BulletedList } from '@/components/content/BulletedList';
import { Footnote } from '@/components/content/Footnote';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const AboutTechStack: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>What is this built with?</CardTitle>
      <CardDescription>
        For the curious (and the fellow nerds) 💻
      </CardDescription>
    </CardHeader>
    <CardContent className="text-sm space-y-2">
      <p>This project is powered by a pretty modern, lightweight stack:</p>
      <BulletedList
        items={[
          'React + TypeScript',
          'Vite for fast dev & builds',
          'TanStack Router for routing',
          'Tailwind CSS + shadcn v2 for UI',
          'Biome and friends to keep the code from going fully feral',
        ]}
      />

      <p>
        Everything is designed to be simple, fast, and easy to deploy as a
        static site - perfect for hosting guides with minimal server drama and
        maximum time left for raids and keys.
      </p>
      <Footnote>
        In dev terms: this is basically a glorified <code>README.md</code>{' '}
        viewer with extra sparkle. ✨
      </Footnote>
    </CardContent>
  </Card>
);
