export namespace TwoFer {
	export function twoFer(name: string): string {
		if (!name) {
		  return 'One for you, one for me.';
		} else {
		  return `One for ${name}, one for me.`;
		}
	 }
}