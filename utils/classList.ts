/**
 * Stands for "classList". Will make all classes into one single string separated by whitespaces.
 * @param classes array of css strings
 * @returns a string with all the classes separated by one whitespace
 */
export function cl(classes: string[]) {
  return classes.reduce((value, acc) => value + " " + acc, "");
}
