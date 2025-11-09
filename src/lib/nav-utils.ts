import type { NavItem } from "@/types/nav";

export function findNavItemByLabel(
  items: NavItem[],
  label: string
): NavItem | undefined {
  for (const item of items) {
    if (item.label === label) return item;
    if (item.children) {
      const found = findNavItemByLabel(item.children, label);
      if (found) return found;
    }
  }
  return undefined;
}
