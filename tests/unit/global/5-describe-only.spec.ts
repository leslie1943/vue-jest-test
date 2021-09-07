const myBeverage = {
  delicious: true,
  sour: false,
  price: 100,
}
describe.only('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy()
  })

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy()
  })
})

describe('my skip beverage', () => {
  test('skip test', () => {
    expect(myBeverage.price).toBe(200)
  })
})
