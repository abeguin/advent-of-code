import { Submarine } from './submarine';

describe('Submarine', () => {
    it('should start with position 0,0', () => {
        // When
        const sub = new Submarine();

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 0, depth: 0`);
    });


    it('when xPos = 2 and depth = 5, should return 10', () => {
        // Given
        const sub = new Submarine();

        // WHen
        sub.down(5);
        sub.forward(2);

        // Then
        expect(sub.result).toEqual(10);
    });

    it('when forward 2, should add 2 to xPos', () => {
        // Given
        const sub = new Submarine();

        // WHen
        sub.forward(2);

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 2, depth: 0`);
    });

    it('when down 2, should add 2 to depth', () => {
        // Given
        const sub = new Submarine();

        // WHen
        sub.down(2);

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 0, depth: 2`);
    });

    it('when up 2, should decrease depth by 2', () => {
        // Given
        const sub = new Submarine();

        // WHen
        sub.up(2);

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 0, depth: -2`);
    });
});
