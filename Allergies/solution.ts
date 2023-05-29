export namespace Allergies {
	export class Allergies {
		private _allergenIndex: number;
		private _allergies: Map<string, number>;

		constructor(allergenIndex: number) {
			this._allergenIndex = allergenIndex;
			this._allergies = this.initializeAllergies();
		}

		private initializeAllergies(): Map<string, number> {
			return new Map<string, number>([
				["eggs", 1],
				["peanuts", 2],
				["shellfish", 4],
				["strawberries", 8],
				["tomatoes", 16],
				["chocolate", 32],
				["pollen", 64],
				["cats", 128],
			])
		}

		public list(): string[] {
			const listOfAllergies: string[] = [];
			let allergieIndex = this._allergenIndex;
			const allergiesArray = Array.from(this._allergies.entries());

			while (allergieIndex >= 256) {
				allergieIndex -= 256;
			}

			for (let i = allergiesArray.length - 1; i >= 0; i--) {
				const [key, value] = allergiesArray[i];
				if (allergieIndex >= value) {
					allergieIndex -= value;
					listOfAllergies.push(key);
				}
			}
			listOfAllergies.reverse();
			return listOfAllergies;
		}

		public allergicTo(allergen: string): boolean {
			let allergenNumber = this._allergies.get(allergen);

			if (!allergenNumber) {
				throw new Error("Not such allergen");
			}

			return this._allergenIndex >= allergenNumber;
		}
	}
}