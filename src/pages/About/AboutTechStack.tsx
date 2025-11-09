import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <ul className="list-disc list-inside space-y-1">
        <li>React + TypeScript</li>
        <li>Vite for fast dev & builds</li>
        <li>TanStack Router for routing</li>
        <li>Tailwind CSS + shadcn v2 for UI</li>
        <li>Biome and friends to keep the code from going fully feral</li>
      </ul>
      <p>
        Everything is designed to be simple, fast, and easy to deploy as a
        static site — perfect for hosting guides with minimal server drama and
        maximum time left for raids and keys.
      </p>
      <p className="text-xs text-muted-foreground">
        In dev terms: this is basically a glorified <code>README.md</code>{" "}
        viewer with extra sparkle. ✨
      </p>
    </CardContent>
  </Card>
);
