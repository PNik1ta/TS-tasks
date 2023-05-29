export namespace PythagoreanTriplet {
	type Options = {
		minFactor?: number;
		maxFactor?: number;
		sum: number;
	};

	class Triplet {
		constructor(private a: number, private b: number, private c: number) { };
		
		toArray(): [number, number, number] {
			return [this.a, this.b, this.c];
		}
	}

	export function triplets({
		sum,
		maxFactor = Math.ceil(sum / 2) - 1,
		minFactor = 1,
	}: Options): Triplet[] {
		const res: Triplet[] = [];
		for (let a = maxFactor; a > minFactor + 1; a--) {
			for (let b = a - 1; b > minFactor + 1; b--) {
				const c = sum - a - b;
				if (c <= maxFactor && c >= minFactor && a * a + b * b === c * c) {
					res.push(new Triplet(a, b, c));
				}
			}
		}
		return res;
	}
}