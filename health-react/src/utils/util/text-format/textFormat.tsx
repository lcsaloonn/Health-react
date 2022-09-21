export function truncateText(str: string, lengthMax: number) {
  return str.length > lengthMax ? str.slice(0, lengthMax - 1) + "..." : str;
}
