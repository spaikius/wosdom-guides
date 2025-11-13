import guides from '@guides/guides.json';
import type { GuideItem } from '@/types/guide';
import { ensureValidIcon } from './utils';

export function rewriteImagePaths(markdown: string, slug: string) {
  const base = import.meta.env.BASE_URL;

  return markdown.replace(
    /!\[(.*?)\]\(\.\/(.*?)\)/g,
    (_match, alt, filename) => {
      const imageUrl = `${base}guides/${slug}/${filename}`;
      return `![${alt}](${imageUrl})`;
    },
  );
}

export function loadGuides(): GuideItem[] {
  return guides.map((guide) => ({
    slug: guide.slug,
    title: guide.title,
    icon: ensureValidIcon(guide.icon),
    description: guide.description ?? undefined,
  }));
}
