export namespace Bob {
	let onlyLettersRegex: RegExp = /[a-zA-Z]/;
	
	export function hey(message: string): string {
		if (message.toUpperCase() === message && message.trim().endsWith('?') && onlyLettersRegex.test(message)) {
			return "Calm down, I know what I'm doing!";
		} else if (message.toUpperCase() === message && onlyLettersRegex.test(message)) {
			return 'Whoa, chill out!';
		} else if (message.trim().endsWith('?')) {
			return 'Sure.';
		} else if (message.trim() === '') {
			return "Fine. Be that way!";
		} else {
			return 'Whatever.';
		}
	}

}