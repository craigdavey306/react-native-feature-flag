export function toTitleCase(str: string): string {
  if (!str) return '';

  return str
    .toLocaleLowerCase()
    .split(/\s/)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export function replaceDelimiter(
  str: string,
  currentDelimiter: string,
  newDelimiter: string,
): string {
  return str.replace(currentDelimiter, newDelimiter);
}
