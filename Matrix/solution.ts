export namespace Matrix {
	export class Matrix {
		readonly rows: number[][];
		readonly columns: number[][];

		constructor(text: string) {
			this.rows = text.split('\n').map((row: string) => {
				return row.split(/\s+/).map(Number);
			});
			
			this.columns = this.rows[0].map((_: number, i: number) => {
				return this.rows.map((rows: number[]) => rows[i]);
			});
		}
	}
}