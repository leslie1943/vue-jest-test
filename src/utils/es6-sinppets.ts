interface Data {
  test: {
    value: number
  }
}
const data: Data = {
  test: { value: 1 },
}
console.log('🚀 ~ file: es6-sinppets.ts ~ line 7 ~ data', data)
console.info(data?.test?.value)

export {}
