export namespace Series {
	export class Series {
		private serie: string;

		constructor(series: string) {
			this.serie = series
		}

		private errorComprovation(cut: number): void | boolean {
			if (cut < 0) {
				throw new Error("slice length cannot be negative");
			} else if (cut === 0) {
				throw new Error("slice length cannot be zero");
			} else if (this.serie.trim() === '') {
				throw new Error("series cannot be empty");
			} else if (cut > this.serie.length) {
				throw new Error("slice length cannot be greater than series length");
			} else {
				return true;
			}
		}

		public slices(sliceLength: number) {
			let finalArg: Array<any> = [], iter = 0;

			if (this.errorComprovation(sliceLength)) {
				while (iter + sliceLength <= this.serie.length) {
					let set: Array<number> = [];
					for (let a = 0; a < sliceLength; a++) {
						set.push(parseInt(this.serie[iter + a]));
					}
					iter += 1;
					finalArg.push(set);
				}
			}
			return finalArg;
		}
	}

}