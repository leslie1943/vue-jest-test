/**
 * @param arr
 * @param predicate
 */
const uniqBy = (arr: Array<any>, predicate: string) => {
  const cb = typeof predicate === 'function' ? predicate : (o: any) => o[predicate]
  return [
    ...arr
      .reduce((map: any, item: any) => {
        const key = item === null || item === undefined ? item : cb(item)
        map.has(key) || map.set(key, item)
        return map
      }, new Map())
      .values(),
  ]
}

const arr = [
  { name: 'leslie' },
  { name: 'leslie' },
  { name: 'moon' },
  { name: 'moon' },
  { name: 'micheal' },
  { name: 'micheal' },
]
const res = uniqBy(arr, 'name')
console.log('🚀 ~ file: uniqBy.ts ~ line 23 ~ res', res)
export { uniqBy }
