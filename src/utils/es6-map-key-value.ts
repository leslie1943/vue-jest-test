const entityMap = new Map([
  ['ET', 'ET001'],
  ['FT', 'FT001'],
  ['GT', 'GT001'],
  ['HT', 'HT001'],
  ['IT', 'IT001'],
  ['JT', 'JT001'],
  ['KT', 'KT001'],
])

const hasKey = (key: string) => {
  const value = entityMap.has(key) ? entityMap.get(key) : key
  console.info('hasKey => key', key)
  console.info('hasKey => value', value)
}

const viewMap = () => {
  for (const [key, value] of entityMap.entries()) {
    console.info('viewMap => key', key)
    console.info('viewMap => value', value)
  }
}

export { hasKey, viewMap }
