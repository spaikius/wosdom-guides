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
