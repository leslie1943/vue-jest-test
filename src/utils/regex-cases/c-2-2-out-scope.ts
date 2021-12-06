/**
 * 需要强调的是,虽叫字符组(字符类),
 * 但只是其中一个字符.例如[abc],表示匹配一个字符,它可以是'a','b','c'之一.
 */

const regex1 = /a[^123]b/g
const words1 = 'a1b a2b a3b a4b a5b'

const match1 = words1.match(regex1)
console.log('match1', match1) // [ 'a4b', 'a5b' ]

const regex2 = /V[^1-6a-fG-N]/g
const words2 = 'V23 Vbc VMZ'

const match2 = words2.match(regex2)
console.log('match2', match2) // [ 'a4b', 'a5b' ]

const words3 = 'V73 Vhc VOZ'
const match3 = words3.match(regex2)
console.log('match3', match3) // [ 'V7', 'Vh', 'VO' ]

export {}
