import { Submarine } from './submarine';

describe('Submarine', () => {
    it('should start with position 0,0', () => {
        // When
        const sub = new Submarine();

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 0, depth: 0, aim: 0`);
    });


    it('forward 5 adds 5 to your horizontal position, a total of 5', () => {
        // Given
        const sub = new Submarine();

        // When
        sub.forward(5);

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 5, depth: 0, aim: 0`);
    });

    it('down 5 adds 5 to your aim, resulting in a value of 5', () => {
        // Given
        const sub = new Submarine();

        // When
        sub.forward(5);
        sub.down(5);

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 5, depth: 0, aim: 5`);
    });

    it('forward 8 adds 8 to your horizontal position, a total of 13', () => {
        // Given
        const sub = new Submarine();

        // When
        sub.forward(5);
        sub.down(5);
        sub.forward(8);

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 13, depth: ${5*8}, aim: 5`);
    });

    it('up 3 decreases your aim by 3', () => {
        // Given
        const sub = new Submarine();

        // When
        sub.forward(5);
        sub.down(5);
        sub.forward(8);
        sub.up(3);

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 13, depth: ${5*8}, aim: 2`);
    });

    it('down 8 adds 8 to your aim, resulting in a value of 10', () => {
        // Given
        const sub = new Submarine();

        // When
        sub.forward(5);
        sub.down(5);
        sub.forward(8);
        sub.up(3);
        sub.down(8);

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 13, depth: ${5*8}, aim: 10`);
    });

    it('forward 2 adds 2 to your horizontal position, a total of 15. Because your aim is 10, your depth increases by 2*10=20 to a total of 60.', () => {
        // Given
        const sub = new Submarine();

        // When
        sub.forward(5);
        sub.down(5);
        sub.forward(8);
        sub.up(3);
        sub.down(8);
        sub.forward(2);

        // Then
        expect(sub.toString()).toEqual(`horizontal position: 15, depth: ${(5*8)+(2*10)}, aim: 10`);
    });

    it('after all moves, result should be 15x60= 900', () => {
        // Given
        const sub = new Submarine();

        // When
        sub.forward(5);
        sub.down(5);
        sub.forward(8);
        sub.up(3);
        sub.down(8);
        sub.forward(2);

        // Then
        expect(sub.result).toEqual(900);
    });
});
