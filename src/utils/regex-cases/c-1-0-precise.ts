/**
 * 1.精准匹配
 */
const regex1 = /hello/g
const words1 = 'hello world.'
const test1 = regex1.test(words1)
const match1 = words1.match(regex1)
console.info(test1) // true
console.info(match1) // [ 'hello' ]

export {}
