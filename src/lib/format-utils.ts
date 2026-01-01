import { padN } from './string-utils';

export function formatHHMMSS(h: number, m: number, s: number) {
  return `${padN(h)}:${padN(m)}:${padN(s)}`;
}
