export namespace RobotName {
	export class Robot {
		private _name: string;
		public static _reservedNames: Set<string>;

		constructor() {
			Robot._reservedNames = new Set();
			this._name = this.generateName();
		}

		public get name(): string {
			return this._name;
		}

		generateName(): string {
			let randomName: string = '';
			do {
				randomName = this.randomName();
			} while (Robot._reservedNames.has(randomName))
			Robot._reservedNames.add(randomName);
			return randomName;
		}

		randomName(): string {
			let name = '';
			for (let i = 0; i < 2; i++) {
				name += generateRandomLetter();
			}
			for (let i = 0; i < 3; i++) {
				name += generateRandomNumber();
			}
			return name;
		}

		public resetName(): void {
			this._name = this.generateName();
		}
		
		public static releaseNames(): void {
			this._reservedNames.clear();
		}
	}

	function generateRandomLetter(): string {
		const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		return alphabet[Math.floor(Math.random() * alphabet.length)];
	}

	function generateRandomNumber(): number {
		return Math.floor(Math.random() * 10);
	}
}