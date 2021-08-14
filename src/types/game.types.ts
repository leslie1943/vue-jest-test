type Career = {
  name: string
  nation: string
}

type Cast = {
  harm: string
  level: number
}

export type WoW = {
  career: Career
  cast: Cast
}

const partOfWow: Partial<WoW> = {
  career: {
    name: 'magic',
    nation: 'undead',
  },
}
console.log('🚀 ~ file: game.types.ts ~ line 17 ~ wow', partOfWow)
