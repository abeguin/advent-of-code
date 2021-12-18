import { prepareData } from './prepareData';

describe('prepareData', () => {
    it('should transform a list of string in number', () => {
        // Given
        const input = `1
         2
         3
         4`;

        // When
        const res = prepareData(input);

        // Then
        expect(res).toEqual([ 1, 2, 3, 4 ]);
    });


    it('when input cannot be converted to number, should be filtered', () => {
        // Given
        const input = `1
        x
        3
        4
        
        `;

        // When
        const res = prepareData(input);

        // Then
        expect(res).toEqual([ 1, 3, 4 ]);
    })
});
