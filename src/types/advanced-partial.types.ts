type Cat = {
  name: string
  age: number
}

type Dog = {
  height?: number
  weight: number
}

export type Pet = {
  cat?: Cat
  dog?: Dog
}

/**
 * 🚀🚀🚀 POINT--1: 虽然 cat 和 dog 都是 Pet的可选 属性, 但这里使用 Required 语法糖之后, 都变成了必须属性
 * 🚀🚀🚀 POINT--2: 此限制只会应用一层
 */
const pet: Partial<Pet> = {
  cat: {
    name: 'magic',
    age: 10,
  },
}
console.log('🚀 ~ file: game.types.ts ~ line 17 ~ wow', pet)
