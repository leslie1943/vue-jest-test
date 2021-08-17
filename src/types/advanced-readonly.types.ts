type Dog = {
  height?: number
  weight: number
}

/**
 * 🚀🚀🚀 POINT 这里使用 Readonly 语法糖之后, 使用这个类型声明的对象的属性不能修改
 */
type Read_Only_Dog = Readonly<Dog>
type Partial_Of_Dog = Partial<Dog>

const dog_read_only: Read_Only_Dog = {
  height: 20,
  weight: 1,
}
console.log(
  '🚀 ~ file: advanced-readonly.types.ts ~ line 10 ~ pet1',
  dog_read_only
)
// pet1.height = 22 // Cannot assign to 'height' because it is a read-only property.ts(2540)

const pet_partial: Partial_Of_Dog = {
  height: 20,
  weight: 1,
}
pet_partial.height = 100
pet_partial.weight = 99

/**
 * 🚀🚀🚀 POINT--1 这里使用 Readonly 语法糖之后, 使用这个类型声明的对象的属性不能修改
 * 🚀🚀🚀 POINT--2: 此限制只会应用一层
 */
type Cat = { name: string; age: number }
export type Pet = { cat: Cat; dog: Dog }
type ReadOnly_Pet = Readonly<Pet>

const pet_read: ReadOnly_Pet = {
  cat: { name: 'Tom', age: 2 },
  dog: { weight: 2, height: 100 },
}
// 🚀🚀🚀 此限制只会应用一层
// pet_read.dog = {
//   weight: 12,
//   height: 1943,
// }
// 🚀🚀🚀 内层数据可以修改
pet_read.cat.age = 20
