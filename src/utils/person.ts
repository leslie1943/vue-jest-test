import { StudentProp } from '@/store/modules/student'

// 定义异步执行方法
export const getPerson = (): Promise<{ name: string; age: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'suzhen',
        age: 19,
      })
    }, 2000)
  })
}

export const getUser = (): Promise<{ username: string; password: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: 'suzhen',
        password: '111111',
      })
    }, 1000)
  })
}

export const getStudent = (): Promise<StudentProp> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'suzhen', class: '2-11' })
    }, 2000)
  })
}

export const getPassenger = (
  name: string,
  password: string
): Promise<{ name: string; password: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, password })
    }, 2000)
  })
}
