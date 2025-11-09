import type { ROUTES } from '@/config/routes';

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
