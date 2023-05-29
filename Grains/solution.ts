export namespace Grains {
	export const square = (square: number): BigInt => {
		if (square > 64 || square < 0) {
			throw new Error();
		}
		return BigInt(2) ** BigInt(square - 1);
	}

	export const total = (): BigInt => {
		let total: bigint = BigInt(0);

		for (let i = 0; i < 64; i++) {
			total = total + BigInt(2) ** BigInt(i);
		}
		return total;
	}

}