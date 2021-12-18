/**
 * Transform the input string in a table of number
 * @param input
 */
export const prepareData = (input: string): number[] => input.split('\n')
    .map((l: string) => parseInt(l))
    .filter(n => !isNaN(n));
