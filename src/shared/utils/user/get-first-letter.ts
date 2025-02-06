export function getFirstLetter(text: string | undefined): string | null {
  return text ? text[0].toUpperCase() : null
}
