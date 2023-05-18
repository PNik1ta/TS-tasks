export namespace NucleotideCount {
	export interface NucleotideCount {
		[nucleotide: string]: number;
	}

	export function nucleotideCounts(dna: string): NucleotideCount {
		const availableLetters = ['A', 'C', 'G', 'T'];
		const dnaLetters = dna.split('');

		const nucleotideCounts: NucleotideCount = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };

		dnaLetters.forEach((letter) => {
			if (!availableLetters.includes(letter)) {
				throw new Error('Invalid nucleotide in strand');
			}

			if (nucleotideCounts.hasOwnProperty(letter)) {
				nucleotideCounts[letter]++;
			} else {
				nucleotideCounts[letter] = 1;
			}
		});

		return nucleotideCounts;
	}
}