interface Person {
  name: string
  age: number
  school?: string
  work?: string
}
const people: Person[] = [
  {
    name: 'Joe',
    age: 12,
    school: 'ChangAn',
  },
  {
    name: 'Jack',
    age: 28,
    work: 'coder',
  },
  {
    name: 'alpha',
    age: 20,
  },
]

const findUnionSectionProperty = (data: Person[]) => {
  const allRawKeys: Array<string>[] = []
  data.forEach((item) => allRawKeys.push(Object.keys(item)))
  return [...new Set(allRawKeys.flat())]
}
const commonKeys = findUnionSectionProperty(people)
console.info('commonKeys', commonKeys)
export {}
