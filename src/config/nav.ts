import { Home, BookOpenText, Info, FileText } from "lucide-react";
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
        label: "Base Building",
        to: ROUTES.GUIDE,
        params: { slug: "base" },
        icon: "🐀",
      },
      {
        label: "Heroes",
        to: ROUTES.GUIDE,
        params: { slug: "heroes" },
        icon: FileText,
      },
      {
        label: "Events",
        to: ROUTES.GUIDE,
        params: { slug: "events" },
        icon: FileText,
      },
    ],
  },
  {
    label: "About",
    to: ROUTES.ABOUT,
    icon: Info,
  },
];
