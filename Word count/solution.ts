export namespace WordCount {
	export function count(sentence: string): Map<string, number> {
		const words = sentence.toLowerCase().match(/(\w+'\w+)|(\w+\??)/g) as string[];

		return words.reduce((counter: Map<string, number>, word: string) => {
			const wordCount = counter.get(word);

			if (!wordCount) {
				counter.set(word, 1);
			} else {
				counter.set(word, wordCount + 1);
			}
			
			return counter;
		}, new Map<string, number>())
	}
}