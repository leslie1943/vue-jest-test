/**
 * 3.模糊匹配: 纵向模糊匹配
 * 一个正则匹配的字符串,具体到某一位字符时,它可以不是某个确定的字符,可以有多种可能.
 * 其实现的方式是使用字符组: [abc], 表示该字符可以是字符'a','b','c'
 */
const regexPos = /a[123]b/g
const regexNeg = /a[^123]b/g

const words1 = 'a0b a1b a2b a3b a4b'

// Positive
const testPos = regexPos.test(words1)
console.log('testPos', testPos)
const matchPos = words1.match(regexPos)
console.log('matchPos', matchPos) // [ 'a1b', 'a2b', 'a3b' ]

// Negative
const testNeg = regexPos.test(words1)
console.log('testNeg', testNeg)
const matchNeg = words1.match(regexNeg)
console.log('matchNeg', matchNeg) // [ 'a0b', 'a4b' ]

export {}
