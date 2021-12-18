/**
 * Transform a string with a number per line into an array of number
 * @param input
 */
import { Bit } from './types';

export const stringToBits = (line: string): Bit[] => {
    let bits: Bit[] = [];
    for (const char of line.split('')) {
        const bit = parseInt(char, 10) as Bit;
        bits = [ ...bits, bit ];
    }
    return bits;
};

export const prepareData = (input: string): Bit[][] => input.split('\n')
    .map(line => line.trim())
    .filter(line => !!line.length)
    .map(line => stringToBits(line));
