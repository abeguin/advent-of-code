import { prepareData, stringToBits } from './prepareData';
import { Bit } from './types';

describe('prepareData', () => {
    it('should transform a list of bits into a matrix of Bit', () => {
        // Given
        const input = `10101
        00001
        11111
        10110
        `;

        // When
        const res: Bit[][] = prepareData(input);

        // Then
        expect(res).toEqual([
            [ 1, 0, 1, 0, 1 ],
            [ 0, 0, 0, 0, 1 ],
            [ 1, 1, 1, 1, 1 ],
            [ 1, 0, 1, 1, 0 ],
        ]);
    });
});

describe('stringToBits', () => {
    it('should transform a string of bits into an array of Bit', () => {
        // Given
        const input = '101011';

        // When
        const res = stringToBits(input);

        // Then
        expect(res).toEqual([ 1, 0, 1, 0, 1, 1 ]);
    });

});
