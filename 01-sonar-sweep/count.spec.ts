import { countLargerThanPrevious } from './count';

describe('count', () => {
    it('given the example, it should count 7 measurements larger than the previous', () => {
        // Given
        const input = [ 199, 200, 208, 210, 200, 207, 240, 269, 260, 263 ];

        // When
        const res = countLargerThanPrevious(input);

        // Then
        expect(res).toEqual(7);
    });

    it('With the first 20 numbers from input, should count 14', () => {
        // Given
        const input = [ 180, 152, 159, 171, 178, 169, 212, 213, 214, 222,
                        228, 215, 228, 240, 248, 220, 224, 201, 212, 218 ];

        // When
        const res = countLargerThanPrevious(input);

        // Then
        expect(res).toEqual(14);
    });

    it('With the first 40 numbers from input, should count 14', () => {
        // Given
        const input = [
            180, 152, 159, 171, 178, 169, 212, 213, 214, 222,
            228, 215, 228, 240, 248, 220, 224, 201, 212, 218,
            217, 225, 218, 255, 256, 260, 261, 262, 263, 254,
            255, 261, 270, 248, 252, 258, 259, 243, 242, 240
        ];

        // When
        const res = countLargerThanPrevious(input);

        // Then
        expect(res).toEqual(27);
    });
});
