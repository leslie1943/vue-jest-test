type Cat = {
  name: string
  age: number
}

type Dog = {
  height?: number
  weight: number
}

export type Pet = {
  cat: Cat
  dog: Dog
}

export type PickDog = Pick<Pet, 'dog'>
export type PickCat = Pick<Pet, 'cat'>

const pickDog: PickDog = {
  dog: {
    height: 2,
    weight: 3,
  },
}
console.log('🚀 ~ file: advanced-pick.types.ts ~ line 19 ~ homepet', pickDog)

const pickCat: PickCat = {
  cat: {
    name: 's',
    age: 3,
  },
}
console.log('🚀 ~ file: advanced-pick.types.ts ~ line 19 ~ homepet', pickCat)
