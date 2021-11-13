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

const findInterSectionProperty = (data: Person[]) => {
  const commonProperties: string[] = []
  const allRawKeys: Array<string>[] = []

  data.forEach((item) => allRawKeys.push(Object.keys(item)))
  const flattenUniqueKeys = [...new Set(allRawKeys.flat())]

  flattenUniqueKeys.forEach((key) => {
    if (allRawKeys.every((item) => item.includes(key))) {
      commonProperties.push(key)
    }
  })
  return commonProperties
}

const commonKeys = findInterSectionProperty(people)
console.info('commonKeys', commonKeys)

export {}
