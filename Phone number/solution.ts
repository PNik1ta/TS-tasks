export namespace PhoneNumber {
	type PhoneNumber = string;

	export function clean(phone: string): PhoneNumber {
		let number: PhoneNumber = '';

		for (let i = 0; i < phone.length; i++) {
			const char = phone[i];
			const charCode = char.charCodeAt(0);
			if (charCode >= 48 && charCode <= 57) {
				number += char;
			} else if ([' ', '-', '(', ')', '.', '+'].includes(char)) {
				// silently clean up
			} else if (charCode >= 97) {
				throw new Error('Letters not permitted')
			} else {
				throw new Error('Punctuations not permitted');
			}
		}

		if (number.length === 11 && !number.startsWith('1')) {
			throw new Error('11 digits must start with 1');
		}

		if (number.length > 11) {
			throw new Error('More than 11 digits');
		}

		if (number.length > 10 && number.startsWith('1')) {
			number = number.substr(1);
		}

		if (number.length !== 10) {
			throw new Error('Incorrect number of digits');
		}

		if (number.startsWith('0')) {
			throw new Error('Area code cannot start with zero');
		}

		if (number.startsWith('1')) {
			throw new Error('Area code cannot start with one');
		}

		if (number[3] === '0') {
			throw new Error('Exchange code cannot start with zero');
		}

		if (number[3] === '1') {
			throw new Error('Exchange code cannot start with one');
		}

		return number;
	}

}