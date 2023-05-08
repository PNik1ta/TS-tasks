export namespace RNATranscription {
	export function toRna(dna: string): string {
		let letters = [...dna];
		let rna: string = '';
		for (let letter of letters) {
			if (returnRnaLetter(letter) === '') {
				throw new Error("Invalid input DNA.");
			}
			rna += returnRnaLetter(letter);
		}
		return rna;
	}
	
	function returnRnaLetter(dnaLetter: string): string {
		switch (dnaLetter) {
			case 'G':
				return 'C';
			case 'C':
				return 'G';
			case 'T':
				return 'A';
			case 'A':
				return 'U';
			default:
				return '';
		}
	}
}