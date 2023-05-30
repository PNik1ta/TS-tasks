export namespace ArmstrongNumbers {
	export function isArmstrongNumber(num: number | bigint): boolean {
		num = BigInt(num);
		const nums = String(num).split('');
		const len = BigInt(nums.length);
		return num === nums.reduce((acc, val) => acc + (BigInt(val) ** len), 0n);
	}
}