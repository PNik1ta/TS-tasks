export namespace Luhn {
	export function valid(digitString: string): boolean {
		const digitRegex = /^\d+$/;
		digitString = digitString.replace(/\s/g, '');

		if (digitString.length <= 1 || !digitRegex.test(digitString)) {
			return false;
		}

		const numbers: string[] = digitString.split('');

		for (let i = numbers.length - 2; i >= 0; i -= 2) {
			let currentNumber = +numbers[i];	
			let result: number = 0;

			if (currentNumber * 2 > 9) {
				result = currentNumber * 2 - 9;
			} else {
				result = currentNumber * 2;
			}

			numbers[i] = result.toString();
		}
		
		let total: number = numbers.reduce((prev, curr) => {
			return +prev + +curr;
		}, 0);

		return total % 10 === 0;
	}
}