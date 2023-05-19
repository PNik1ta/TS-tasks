export namespace Anagram {
	export class Anagram {
		private _word: string;

		constructor(input: string) {
			this._word = input.toLowerCase();
		}

		public matches(...potentials: string[]): string[] {
			const sorted = [...this._word].sort().join('');

			return potentials.filter(w => w.toLowerCase() !== this._word &&
				sorted === [...w.toLowerCase()].sort().join(''));
		}
	}
}