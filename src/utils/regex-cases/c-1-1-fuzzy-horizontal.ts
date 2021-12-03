/**
 * 2.模糊匹配: 横向模糊匹配
 * 一个正则可匹配的字符串的长度不是固定的.
 * 实现的方式是使用量词: {m,n} => 连续出现最少m次, 最多n次
 * 比如 /ab{2,5}c表示匹配这样一个字符串:
 *  第一个字符是a, 接下来是2到5字符b,最后字符c
 */
const regex2 = /ab{2,5}c/g
const words2 = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
const test2 = regex2.test(words2)
const match2 = words2.match(regex2)
console.info(test2) // true
console.info(match2) // [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]

export {}
