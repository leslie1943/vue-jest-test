class Calculator {
  add(a: number, b: number): number {
    return a + b
  }
}

/**
 * these test cases can not change order
 */

describe('calculator add', () => {
  const calculator = new Calculator()
  const mockAdd = jest.spyOn(calculator, 'add').mockReturnValue(5)

  it('mock the add method', () => {
    expect(calculator.add(1, 2)).toBe(5)
  })

  it(`because we didn't clear mock, the call times is 2`, () => {
    expect(calculator.add(1, 2)).toBe(5)
    expect(mockAdd).toHaveBeenCalledTimes(2)
  })

  it('after clear, now call times should be 1', () => {
    jest.clearAllMocks()
    expect(calculator.add(1, 2)).toBe(5)
    expect(mockAdd).toHaveBeenCalledTimes(1)
  })

  it('we reset mock, it means the mock has no return, the value would be undefined', () => {
    jest.resetAllMocks()
    expect(calculator.add(1, 2)).toBe(undefined)
  })

  it('we restore the mock to original method, so it should work as normal add', () => {
    jest.restoreAllMocks()
    expect(calculator.add(1, 2)).toBe(3)
  })
})
