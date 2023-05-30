export namespace SumOfMultiples {
	export function sum(items: number[], level: number): number {
		return [...Array(level).keys()]
        .filter(i => items.some(factor => i % factor === 0))
        .reduce((sumMulti, i) => sumMulti + i, 0)
	}
}