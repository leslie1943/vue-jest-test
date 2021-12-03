const uniqBy = (arr: any, predicate: any) => {
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
export { uniqBy }
