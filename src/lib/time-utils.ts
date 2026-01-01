export function addSecondsToTime(
  h: number,
  m: number,
  s: number,
  delta: number,
) {
  let total = h * 3600 + m * 60 + s + delta;
  total = ((total % 86400) + 86400) % 86400;

  const hh = Math.floor(total / 3600);
  const mm = Math.floor((total % 3600) / 60);
  const ss = total % 60;

  return { hh, mm, ss };
}

export function getNextFullMinuteUTC(d: Date) {
  const hh = d.getUTCHours();
  const mm = d.getUTCMinutes();
  const ss = d.getUTCSeconds();

  const totalNow = hh * 3600 + mm * 60 + ss;
  const totalBase = Math.ceil(totalNow / 60) * 60;

  const bh = Math.floor((totalBase % 86400) / 3600);
  const bm = Math.floor((totalBase % 3600) / 60);
  const bs = totalBase % 60;

  return { hh: bh, mm: bm, ss: bs };
}
