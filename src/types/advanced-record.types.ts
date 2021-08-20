interface PageInfo {
  title: string
}

/**
 *  Record 使用场景
 *    定义一个对象的 key 和 value's type
 * {
 *    propName_1: Type | Interface,
 *    propName_2: Type | Interface,
 *    propName_3: Type | Interface,
 * }
 * {
 *    post: PageInfo,
 *    job: PageInfo,
 *    location: PageInfo,
 * }
 */

type Page = 'home' | 'about' | 'contact'

const nav: Record<Page, PageInfo> = {
  home: {
    title: 'home-title',
  },
  about: {
    title: 'about-title',
  },
  contact: {
    title: 'contact-title',
  },
}
console.log('🚀 ~ file: advanced-record.types.ts ~ line 8 ~ nav', nav)

/**
 * Record 后面的泛型<>: 对象的键和值的类型
 * 比如我们需要一个对象, 有ABC三个属性,属性的值必须是数字.
 */
type keys = 'a' | 'b' | 'c'
const keysValue: Record<keys, number> = {
  a: 1,
  b: 2,
  c: 3,
}
console.log('🚀 ~ file: advanced-record.types.ts ~ line 8 ~ nav', keysValue)
