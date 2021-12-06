/**
 * 需要强调的是,虽叫字符组(字符类),
 * 但只是其中一个字符.例如[abc],表示匹配一个字符,它可以是'a','b','c'之一.
 */

const regex1 = /a[123]b/g
const words1 = 'a1b a2b a3b a4b a5b'

const match1 = words1.match(regex1)
console.log('match1', match1) // [ 'a1b', 'a2b', 'a3b' ]

const regex2 = /V[1-6a-fG-N]/g
const words2_1 = '7kOP'
const words2_2_1 = 'V3bG '
const words2_2_2 = 'V3bG VbG, VM'
const match2_1 = words2_1.match(regex2)
const match2_2_1 = words2_2_1.match(regex2)
const match2_2_2 = words2_2_2.match(regex2)
console.log('match2_1', match2_1) //
console.log('match2_2', match2_2_1) // [ 'V3' ]
console.log('match2_2', match2_2_2) // [ 'V3', 'Vb', 'VM' ]

export {}
