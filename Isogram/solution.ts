export namespace Isogram {
	export function isIsogram(phrase: string): boolean {
		let phraseWithoutPunctuations = phrase.toLowerCase().replace(/[^a-zA-Z]/g, '');
		const uniqueLetters = Array.from(new Set(phraseWithoutPunctuations));
		return uniqueLetters.length === phraseWithoutPunctuations.length;
	}
}