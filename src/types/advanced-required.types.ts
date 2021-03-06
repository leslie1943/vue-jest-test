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
 * ððð POINT--1: è½ç¶ cat å dog é½æ¯ Petçå¯é å±æ§, ä½è¿éä½¿ç¨ Required è¯­æ³ç³ä¹å, é½åæäºå¿é¡»å±æ§
 * ððð POINT--2: æ­¤éå¶åªä¼åºç¨ä¸å±
 */
const pet: Required<Pet> = {
  // cat åæäºå¿é¡»
  cat: {
    name: 'tom',
    age: 22,
  },
  // dog åæäºå¿é¡»
  dog: {
    //åªéå¶åªä¼åºç¨ä¸å±,æä»¥ height å¨ Dog ä¸­çä¿®é¥°ä¸å,ä¾ç¶æ¯å¯éå±æ§
    weight: 200,
  },
}
console.log('ð ~ file: game.types.ts ~ line 17 ~ wow', pet)
