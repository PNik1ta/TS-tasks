export namespace SimpleCypher {
	const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

	const mod = (x: number, y: number): number => (x % y + y) % y;
	
	export class SimpleCipher {
		public readonly key: string;
	
		constructor(key?: string) {
			if (key === undefined) {
				key = this.generateKey();
			}
	
			else if (key.length === 0 || key.match(/[^a-z]/)) {
				throw new Error('Bad key');
			}
	
			this.key = key;
		}
	
		private dShift(key: string, input: string, direction: number): string {
			return [...input].reduce((output, ch, i) => {
				const offset = direction * ALPHA.indexOf(key[mod(i, key.length)]);
				output += ALPHA[mod(ALPHA.indexOf(ch) + offset, ALPHA.length)];
				return output;
			}, '');
		}
	
		private generateKey(): string {
			return Array(...Array(100)).map(() =>
				ALPHA[~~(Math.random() * ALPHA.length)])
				.join('');
		}
	
		encode(plaintext: string): string {
			return this.dShift(this.key, plaintext, 1);
		}
	
		decode(ciphertext: string): string {
			return this.dShift(this.key, ciphertext, -1);
		}
	}
}

