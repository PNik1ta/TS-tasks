export namespace Triangle {
	export class Triangle {
		sides: number[];

		constructor(...sides: number[]) {
			this.sides = Array.from(sides);
		}

		get isEquilateral() {
			return this.isTriangle && this.sides.every(num => num === this.sides[0]);
		}

		get isIsosceles() {
			return this.isTriangle && this.sides.some((num, index) => this.sides.slice(index + 1).includes(num));
		}

		get isScalene() {
			return this.isTriangle && this.sides.length === new Set(this.sides).size
		}

		get isTriangle() {
			const [a, b, c] = this.sides;
			return this.isTriangleInequalitySatisfied(a, b, c) && this.isTriangleInequalitySatisfied(b, c, a) && this.isTriangleInequalitySatisfied(a, c, b) && this.hasPositiveSides(this.sides);
		}

		isTriangleInequalitySatisfied(a: number, b: number, c: number): boolean {
			return a + b >= c;
		}

		hasPositiveSides(sides: number[]): boolean {
			return !sides.includes(0);
		}
	}
}