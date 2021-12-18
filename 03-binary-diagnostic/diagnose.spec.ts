import { epsilon, gamma } from './diagnose';
import { Bit } from './types';

describe('diagnose', () => {

    // Given
    const input: Bit[][] = [
        [ 0, 0, 1, 0, 0 ],
        [ 1, 1, 1, 1, 0 ],
        [ 1, 0, 1, 1, 0 ],
        [ 1, 0, 1, 1, 1 ],
        [ 1, 0, 1, 0, 1 ],
        [ 0, 1, 1, 1, 1 ],
        [ 0, 0, 1, 1, 1 ],
        [ 1, 1, 1, 0, 0 ],
        [ 1, 0, 0, 0, 0 ],
        [ 1, 1, 0, 0, 1 ],
        [ 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0 ],
    ];

    describe('gamma', () => {
        it('given the example in problems description, should return [1,0,1,1,0]', () => {

            // When
            const res = gamma(input);

            // Then
            expect(res).toEqual([ 1, 0, 1, 1, 0 ]);
        });

    });

    describe('epsilon', () => {
        it('given the example in problems description, should return [1,0,1,1,0]', () => {

            // When
            const res = epsilon(input);

            // Then
            expect(res).toEqual([ 0, 1, 0, 0, 1 ]);
        });

    });

});
