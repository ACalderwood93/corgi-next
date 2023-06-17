export function convertCamelCaseToSpaces(input: string): string {
  const result = input?.replace(/([a-z])([A-Z])/g, "$1 $2");
  if (!result) return input;
  return result.charAt(0).toUpperCase() + result.slice(1);
}
