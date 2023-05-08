export namespace Wordy {
	const mathOperations = {
		plus: (a: number, b: number) => a + b,
		minus: (a: number, b: number) => a - b,
		multiply: (a: number, b: number) => a * b,
		divide: (a: number, b: number) => a / b,
		raise: (a: number, b: number) => a ** b,
	};

	const checkIsOperation = (
		input: string
	): input is keyof typeof mathOperations => input in mathOperations;

	export const answer = (input: string): number | never => {
		if (!/^What is/.test(input)) throw 'Unknown operation';
		if (!/^What is .+\?$/.test(input)) throw 'Syntax error';

		const query = input
			.replace(/^What is (.+)\?$/, '$1')
			.replace(/multiplied by/g, 'multiply')
			.replace(/divided by/g, 'divide')
			.replace(/raised to the (\d+)th power/g, 'raise $1')
			.split(' ');

		let mathOperation = mathOperations.plus;
		let res = 0;
		let isMathOperationExpected = false;

		for (let q of query) {
			const isQNumber = !Number.isNaN(parseInt(q));
			const isQMathOp = checkIsOperation(q);

			if (isMathOperationExpected) {
				if (isQNumber) throw 'Syntax error';
				if (!isQMathOp) throw 'Unknown operation';
				mathOperation = mathOperations[q as keyof typeof mathOperations];
			} else if (!isMathOperationExpected) {
				if (isQMathOp) throw 'Syntax error';
				res = mathOperation(res, parseInt(q));
			}

			isMathOperationExpected = !isMathOperationExpected;
		}

		if (!isMathOperationExpected) {
			throw 'Syntax error';
		}
		
		return res;
	};
}