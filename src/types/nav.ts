import type { LucideIcon } from 'lucide-react';
import type { AppRoute } from './route';

export type NavItem = {
  label: string;
  to: AppRoute;
  icon?: LucideIcon | string;
  exact?: boolean;
  params?: Record<string, string>;
  children?: NavItem[];
};
