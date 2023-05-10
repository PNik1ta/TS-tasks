export namespace AtbashCypher {
	const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

	export function encode(plainText: string): string {
		let words = plainText.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").split('');
		let decodedString = '';

		let counter = 1;

		words.map(word => {
			if (alphabet.includes(word)) {
				decodedString += alphabet[alphabet.length - alphabet.indexOf(word) - 1];
			} else {
				decodedString += word;
			}

			if (counter === 5) {
				decodedString += ' ';
				counter = 0;
			}

			counter++;
		});

		return decodedString.trim();
	}

	export function decode(cipherText: string): string {
		const words = cipherText.replace(/\s/g, '').split('');
		
		let encodedString = '';

		words.map(word => {
			
			if (alphabet.includes(word)) {
				encodedString += alphabet[alphabet.length - alphabet.indexOf(word) - 1];
			} else {
				encodedString += word;
			}
		});

		return encodedString;
	}
}