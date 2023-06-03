export namespace Transpose {
	export function transpose(rows: string[]): string[] {
		if (rows.length === 0) { return [] }

		for (let i = rows.length - 2; i >= 0; i--) {
			rows[i] = rows[i].padEnd(rows[i + 1].length)
		}
		const matrix = rows.map((r) => r.split(''));

		return matrix[0].map((_, i) => {
			return matrix.map((r) => r[i]).join('');
		});
	}
}