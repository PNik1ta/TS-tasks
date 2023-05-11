export namespace ETL {
	export function transform(input: { [key: string]: string[] }): { [key: string]: number } {
		let output: { [key: string]: number } = {};
		for (const [key, values] of Object.entries(input))
			for (const value of values)
				output[value.toLowerCase()] = Number.parseInt(key)
		return output;
	};
}