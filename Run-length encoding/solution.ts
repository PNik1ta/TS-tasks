export namespace RunlengthEncoding {
	export function encode(input: string): string {
		return input.replace(/(.)\1+/g, (match, p1) => {
			return match.length + p1;
		});
	}

	export function decode(input: string): string {
		return input.replace(/(\d+)(.)/g, (_, p1, p2) => {
			return p2.repeat(Number(p1));
		});
	}

}