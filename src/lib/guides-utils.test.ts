import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { describe, expect, it, type Mock, vi } from 'vitest';
import {
  loadGuide,
  loadGuides,
  rewriteImagePaths,
  wrapImagesWithLightBox,
} from './guides-utils';
import { ensureValidIcon } from './utils';

vi.mock('@guides/guides.json', () => ({
  default: [
    {
      slug: 'first-guide',
      title: 'First Guide',
      icon: 'icon-one',
      description: 'First description',
    },
    {
      slug: 'second-guide',
      title: 'Second Guide',
      icon: 'icon-two',
      // no description -> should become undefined
    },
  ],
}));

vi.mock('./utils', () => ({
  ensureValidIcon: vi.fn((icon: string) => `valid-${icon}`),
}));

vi.mock('dompurify', () => ({
  default: {
    sanitize: vi.fn((html: string) => `<sanitized>${html}</sanitized>`),
  },
}));

vi.mock('marked', () => ({
  marked: {
    parse: vi.fn(async (markdown: string) => `<p>${markdown}</p>`),
  },
}));

describe('loadGuides', () => {
  it('maps guides.json into GuideItem[] and normalizes description + icon', () => {
    const result = loadGuides();

    expect(result).toEqual([
      {
        slug: 'first-guide',
        title: 'First Guide',
        icon: 'valid-icon-one',
        description: 'First description',
      },
      {
        slug: 'second-guide',
        title: 'Second Guide',
        icon: 'valid-icon-two',
        // description should be undefined when not present
        description: undefined,
      },
    ]);

    expect(ensureValidIcon).toHaveBeenCalledTimes(2);
    expect(ensureValidIcon).toHaveBeenCalledWith('icon-one');
    expect(ensureValidIcon).toHaveBeenCalledWith('icon-two');
  });
});

describe('rewriteImagePaths', () => {
  it('rewrites relative image paths to use /guides/{slug}/filename', () => {
    const markdown = [
      'Some text before.',
      '![Image One](./img1.png)',
      'More text.',
      '![Second](./nested/img2.jpg)',
    ].join('\n');

    const slug = 'test-guide';

    const result = rewriteImagePaths(markdown, slug);

    // Does not assert BASE_URL, just the important part
    expect(result).toContain('guides/test-guide/img1.png');
    expect(result).toContain('guides/test-guide/nested/img2.jpg');

    // Alt text preserved
    expect(result).toContain('![Image One]');
    expect(result).toContain('![Second]');
  });

  it('leaves non-relative images untouched', () => {
    const markdown = [
      '![Absolute](https://example.com/image.png)',
      '![Root](./local.png)',
    ].join('\n');

    const slug = 'test-guide';

    const result = rewriteImagePaths(markdown, slug);

    expect(result).toContain('https://example.com/image.png');
    expect(result).toContain('guides/test-guide/local.png');
  });
});

describe('wrapImagesWithLightBox', () => {
  it('wraps all img tags in a button.lightbox-trigger with data-full', () => {
    const html = `
      <p>Before</p>
      <img src="/guides/foo/img1.png" alt="One">
      <p>Middle</p>
      <img src="/guides/foo/img2.png" alt="Two">
      <p>After</p>
    `;

    const resultHtml = wrapImagesWithLightBox(html);

    const container = document.createElement('div');
    container.innerHTML = resultHtml;

    const buttons = container.querySelectorAll('button.lightbox-trigger');
    expect(buttons.length).toBe(2);

    const [firstButton, secondButton] = Array.from(buttons);

    expect(firstButton.getAttribute('data-full')).toMatch(
      /\/guides\/foo\/img1\.png$/,
    );
    expect(secondButton.getAttribute('data-full')).toMatch(
      /\/guides\/foo\/img2\.png$/,
    );

    const firstImg = firstButton.querySelector('img');
    const secondImg = secondButton.querySelector('img');

    expect(firstImg).not.toBeNull();
    expect(secondImg).not.toBeNull();
    expect(firstImg?.getAttribute('src')).toBe('/guides/foo/img1.png');
    expect(secondImg?.getAttribute('src')).toBe('/guides/foo/img2.png');
  });

  it('returns original html when there are no images', () => {
    const html = '<p>No images here</p>';
    const resultHtml = wrapImagesWithLightBox(html);
    expect(resultHtml).toContain('No images here');
  });
});

describe('loadGuide', () => {
  it('loads, rewrites, parses, sanitizes, and wraps guide HTML', async () => {
    const html = await loadGuide('test-guide');

    // Ensure marked.parse was called with markdown that has rewritten paths
    const parseMock = marked.parse as unknown as Mock;
    expect(parseMock).toHaveBeenCalledTimes(1);
    const [markdownPassedToParse] = parseMock.mock.calls[0];

    expect(markdownPassedToParse).toContain('guides/test-guide/image.png');

    // Ensure DOMPurify.sanitize was called
    const sanitizeMock = DOMPurify.sanitize as unknown as Mock;
    expect(sanitizeMock).toHaveBeenCalledTimes(1);

    // Final HTML should contain the rewritten path somewhere
    expect(html).toContain('guides/test-guide/image.png');
  });
});
