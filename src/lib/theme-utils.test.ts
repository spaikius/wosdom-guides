import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('./storage-utils', () => ({
  getStorageKey: (key: string) => `test-${key}`,
}));

import { DEFAULT_THEME, Theme } from '@/types/theme';
import {
  applyTheme,
  getInitialTheme,
  getPreferredTheme,
  getStoredTheme,
  persistTheme,
} from './theme-utils';

const THEME_STORAGE_KEY = 'test-theme'; // from our getStorageKey mock

function mockMatchMedia(matches: boolean | null) {
  if (matches === null) {
    // simulate "no matchMedia support"
    (window as any).matchMedia = undefined;
    return;
  }

  (window as any).matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
  }));
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.className = '';
  document.documentElement.removeAttribute('data-theme');
  vi.restoreAllMocks();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('applyTheme', () => {
  it('sets data-theme on the documentElement', () => {
    applyTheme(Theme.dark);
    expect(document.documentElement.dataset.theme).toBe(Theme.dark);

    applyTheme(Theme.light);
    expect(document.documentElement.dataset.theme).toBe(Theme.light);
  });

  it('adds dark class when theme is dark, removes it when theme is light', () => {
    applyTheme(Theme.dark);
    expect(document.documentElement.classList.contains(Theme.dark)).toBe(true);

    applyTheme(Theme.light);
    expect(document.documentElement.classList.contains(Theme.dark)).toBe(false);
  });
});

describe('getStoredTheme', () => {
  it('returns null when window is undefined (SSR-safe)', () => {
    const originalWindow = globalThis.window;
    delete (globalThis as any).window;

    const result = getStoredTheme();

    expect(result).toBeNull();

    (globalThis as any).window = originalWindow;
  });

  it('returns stored theme when valid', () => {
    localStorage.setItem(THEME_STORAGE_KEY, Theme.dark);
    expect(getStoredTheme()).toBe(Theme.dark);

    localStorage.setItem(THEME_STORAGE_KEY, Theme.light);
    expect(getStoredTheme()).toBe(Theme.light);
  });

  it('returns null when stored value is not a valid theme', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'not-a-theme');
    expect(getStoredTheme()).toBeNull();
  });

  it('returns null when nothing stored', () => {
    expect(getStoredTheme()).toBeNull();
  });
});

describe('getPreferredTheme', () => {
  it('returns DEFAULT_THEME when window is undefined (SSR)', () => {
    const originalWindow = globalThis.window;
    delete (globalThis as any).window;

    const result = getPreferredTheme();
    expect(result).toBe(DEFAULT_THEME);

    (globalThis as any).window = originalWindow;
  });

  it('returns light when matchMedia prefers light', () => {
    mockMatchMedia(true);
    expect(getPreferredTheme()).toBe(Theme.light);
  });

  it('returns dark when matchMedia does not match light', () => {
    mockMatchMedia(false);
    expect(getPreferredTheme()).toBe(Theme.dark);
  });

  it('returns dark when matchMedia is not available', () => {
    mockMatchMedia(null);
    expect(getPreferredTheme()).toBe(Theme.dark);
  });
});

describe('getInitialTheme', () => {
  it('returns stored theme if present', () => {
    localStorage.setItem(THEME_STORAGE_KEY, Theme.dark);
    mockMatchMedia(true); // would prefer light, but stored should win

    const result = getInitialTheme();
    expect(result).toBe(Theme.dark);
  });

  it('falls back to preferred theme when no stored theme', () => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    mockMatchMedia(true); // prefers light

    const result = getInitialTheme();
    expect(result).toBe(Theme.light);
  });
});

describe('persistTheme', () => {
  it('stores theme in localStorage', () => {
    persistTheme(Theme.light);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe(Theme.light);

    persistTheme(Theme.dark);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe(Theme.dark);
  });

  it('is a no-op when window is undefined (SSR-safe)', () => {
    const originalWindow = globalThis.window;
    delete (globalThis as any).window;

    persistTheme(Theme.dark);

    // localStorage from jsdom still exists, but persistTheme should early-return
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();

    // restore
    (globalThis as any).window = originalWindow;
  });
});
