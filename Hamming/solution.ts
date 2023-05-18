export namespace Hamming {
	export function compute(left: string, right: string): number | never {
		if (left.length !== right.length) {
			throw new Error('DNA strands must be of equal length.');
		}

		let hammingCount = 0;

		const leftWords: string[] = left.split('');
		const rightWords: string[] = right.split('');

		leftWords.map((leftWord: string, i: number) => {
			if (leftWord !== rightWords[i]) {
				hammingCount++;
			}
		});

		return hammingCount;
	}
}