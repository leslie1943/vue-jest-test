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
 * πππ POINT--1: θ½ηΆ cat ε dog ι½ζ― Petηε―ι ε±ζ§, δ½θΏιδ½Ώη¨ Required θ―­ζ³η³δΉε, ι½εζδΊεΏι‘»ε±ζ§
 * πππ POINT--2: ζ­€ιεΆεͺδΌεΊη¨δΈε±
 */
const pet: Partial<Pet> = {
  cat: {
    name: 'magic',
    age: 10,
  },
}
console.log('π ~ file: game.types.ts ~ line 17 ~ wow', pet)
