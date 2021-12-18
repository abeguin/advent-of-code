import { Bit } from './types';
import { bitsToNumber } from './bits';

describe('bitsToNumber', () => {
    it('when [0, 1, 0, 1, 0] it should return 18', () => {
        // Given
        const input: Bit[] = [ 0, 1, 0, 1, 0 ];

        // When
        const res = bitsToNumber(input);

        // Ten
        expect(res).toEqual(10);
    });
});
