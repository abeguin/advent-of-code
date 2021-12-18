import { Bit } from './types';

const compute = (input: Bit[][], condition: (n: number) => boolean): Bit[] => {
    const numberOfBits = input[0].length;
    const gamma: Bit[] = [];
    for (let i = 0; i < numberOfBits; i++) {
        const column = input.map(bits => bits[i]);
        const sum: number = column.reduce((p: number, c: number) => p + c, 0);
        const mostCommon: Bit = condition(sum) ? 1 : 0;
        gamma.push(mostCommon);
    }
    return gamma;
};

export const gamma = (input: Bit[][]): Bit[] => compute(input, (sum: number) => sum > input.length / 2);
export const epsilon = (input: Bit[][]): Bit[] => compute(input, (sum: number) => sum < input.length / 2);
