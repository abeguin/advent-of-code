/**
 * Transform a string with a number per line into an array of number
 * @param input
 */
export const transform = (input: string): number[] => input.split('\n')
    .map((l: string) => parseInt(l))
    .filter(n => !isNaN(n));

/**
 * Sum 3 consecutive numbers and return the array of sums
 * @param input
 */
export const sum3 = (input: number[]): number[] => input
    .map((v, index, array) => {
        if (array[index + 2]) {
            return v + array[index + 1] + array[index + 2];
        }
        return -1;
    })
    .filter(v => v > 0);

/**
 * Transform the input string in an array of number
 * @param input
 */
export const prepareData = (input: string): number[] => transform(input);

/**
 * Transform the input string in an array of sum of 3 consecutive numbers
 * @param input
 */
export const prepareDataForPart2 = (input: string): number[] => sum3(transform(input));
