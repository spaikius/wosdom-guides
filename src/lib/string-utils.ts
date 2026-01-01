export function padN(
  input: number | string,
  length: number = 2,
  fill: string = '0',
) {
  return String(input).padStart(length, fill);
}
