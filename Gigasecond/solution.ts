export namespace Gigasecond {
	export class Gigasecond {
		gigaSecond: number = 1000000000000;
		chosenDate: Date;

		constructor(date: Date) {
			this.chosenDate = date;
		}

		public date(): Date {
			return new Date(this.chosenDate.getTime() + this.gigaSecond);
		}
	}
}