export class Submarine {
    #xPos: number = 0;
    #depth: number = 0;
    #aim: number = 0;

    get result(): number {
        return this.#xPos * this.#depth;
    }

    forward(x: number): void {
        this.#xPos += x;
        this.#depth += this.#aim * x;
    }

    down(y: number): void {
        this.#aim += y;
    }

    up(y: number): void {
        this.#aim -= y;
    }

    toString(): string {
        return `horizontal position: ${this.#xPos}, depth: ${this.#depth}, aim: ${this.#aim}`;
    }
}
