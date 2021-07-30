/* eslint-disable */
let sizeStore = 0
if (window.localStorage) {
  // 遍历所有存储
  for (item in window.localStorage) {
    if (window.localStorage.hasOwnProperty(item)) {
      const size = window.localStorage.getItem(item).length
      console.info(item, size)
      sizeStore += size
    }
  }
}
console.log('Total size:')
console.log((sizeStore / 1024 / 1024).toFixed(2) + 'M')
