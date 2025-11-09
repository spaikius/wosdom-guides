import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
      <h1 className="text-4xl font-bold">WOSdom ✨</h1>
      <Button size="lg">Shadcn v2 looks great 🚀</Button>
      <ThemeToggle />
    </div>
  );
}
