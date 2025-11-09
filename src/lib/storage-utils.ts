import { STORAGE_KEYS, STORAGE_PREFIX } from "@/config/storage-keys";
import type { StorageKey } from "@/types/storage";

export function getStorageKey<K extends StorageKey>(
  key: K
): `${typeof STORAGE_PREFIX}:${(typeof STORAGE_KEYS)[K]}` {
  return `${STORAGE_PREFIX}:${STORAGE_KEYS[key]}` as const;
}

export function getAppStorageKeys(): string[] {
  const prefix = `${STORAGE_PREFIX}:`;
  return Object.keys(localStorage).filter((key) => key.startsWith(prefix));
}

export function clearAppStorage(): void {
  getAppStorageKeys().forEach((key) => localStorage.removeItem(key));
}
