type Lesson = {
  id: number
  title: string
}

// 定义异步执行方法
export const getLessons = (): Promise<Array<Lesson>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: '深入理解ES6' },
        { id: 2, title: 'JavaScript高级程序设计' },
        { id: 3, title: 'CSS揭秘' },
        { id: 4, title: '深入浅出Vue.js' },
      ])
    }, 2000)
  })
}
// 省略 type 定义
export const getClass = (): Promise<Array<{ id: number; title: string }>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: '深入理解ES6' },
        { id: 2, title: 'JavaScript高级程序设计' },
        { id: 3, title: 'CSS揭秘' },
        { id: 4, title: '深入浅出Vue.js' },
      ])
    }, 2000)
  })
}
