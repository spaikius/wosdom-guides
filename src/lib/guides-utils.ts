import type { NavItem } from "@/types/nav";
import { findNavItemByLabel } from "./nav-utils";
import { MAIN_NAV_ITEMS } from "@/config/nav";

export function getGuideNavItems(): NavItem[] {
  const guidesSection = findNavItemByLabel(MAIN_NAV_ITEMS, "Guides");
  return guidesSection?.children ?? [];
}
