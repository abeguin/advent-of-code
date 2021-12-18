export class Submarine {
    #xPos: number = 0;
    #depth: number = 0;

    get result(): number {
        return this.#xPos * this.#depth;
    }

    forward(x: number): void {
        this.#xPos += x;
    }

    down(y: number): void {
        this.#depth += y;
    }

    up(y: number): void {
        this.#depth -= y;
    }

    toString(): string {
        return `horizontal position: ${this.#xPos}, depth: ${this.#depth}`;
    }
}
