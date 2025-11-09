import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/layout/PageContainer";
import { useParams } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/guides/$slug")({
  component: GuidePage,
});

function GuidePage() {
  const { slug } = useParams({ from: "/guides/$slug" });

  return (
    <PageContainer>
      <header className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          {formatSlug(slug)}
        </h1>
        <p className="text-sm text-muted-foreground">
          (This is where the guide for <code>{slug}</code> will be displayed.)
        </p>
      </header>

      <div className="pt-4 text-sm text-muted-foreground">
        <p>
          Markdown rendering isn’t wired up yet — but once it is, this page will
          display content from a corresponding <code>{slug}.md</code> file.
        </p>
      </div>
    </PageContainer>
  );
}

function formatSlug(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
