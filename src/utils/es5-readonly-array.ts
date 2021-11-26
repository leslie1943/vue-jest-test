const a: number[] = [1, 2, 3, 4, 5]
const roa: ReadonlyArray<number> = a
console.info('roa', roa)
// roa[0] = 'a' // Index signature in type 'readonly number[]' only permits reading.ts(2542)
