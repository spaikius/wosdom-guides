import { Home, BookOpenText, Info } from "lucide-react";
import type { NavItem } from "@/types/nav";
import { ROUTES } from "@/config/routes";

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    to: ROUTES.HOME,
    icon: Home,
    exact: true,
  },
  {
    label: "Guides",
    to: ROUTES.GUIDES,
    icon: BookOpenText,
    children: [
      {
        label: "Sunfire Castle (SvS)",
        to: ROUTES.GUIDE,
        params: { slug: "base" },
        icon: "🏰",
      },
      {
        label: "Canyon Clash",
        to: ROUTES.GUIDE,
        params: { slug: "heroes" },
        icon: "🏜️",
      },
    ],
  },
  {
    label: "About",
    to: ROUTES.ABOUT,
    icon: Info,
  },
];
