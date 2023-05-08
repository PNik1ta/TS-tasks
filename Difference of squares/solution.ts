export namespace DifferenceOfSquares {
	export class Squares {
		readonly numbers: number[];

		constructor(count: number) {
			this.numbers = Array.from({ length: count }, (_, i) => i + 1);
		}

		get sumOfSquares(): number {
			return this.numbers.reduce((prev, next) => {
				return prev + next * next;
			});
		}

		get squareOfSum(): number {
			let sum = this.numbers.reduce((prev, next) => {
				return prev + next;
			});
			return sum * sum;
		}

		get difference(): number {
			return Math.abs(this.sumOfSquares - this.squareOfSum);
		}
	}
}