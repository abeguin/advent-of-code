import { Bit } from './types';

const bitToDecimal = (bit: Bit, exp: number) => bit === 0 ? 0 : Math.pow(2, exp * bit);

export const bitsToNumber = (bits: Bit[]): number => {
    return bits.reverse()
        .map((bit, index) => bitToDecimal(bit, index))
        .reduce((p, c) => p + c);
};
