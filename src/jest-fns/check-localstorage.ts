/* eslint-disable */
let sizeStore = 0
if ((window as Window).localStorage) {
  // 遍历所有存储
  for (const item in window.localStorage) {
    if (window.localStorage.hasOwnProperty(item)) {
      const size = window.localStorage.getItem(item)?.length
      console.info(item, size)
      sizeStore += size ?? 0
    }
  }
}
console.log('Total size:')
console.log((sizeStore / 1024 / 1024).toFixed(2) + 'M')
