/**
 * This is useful when you want to mock functions in certain test cases 
    and restore the original implementation in others.

  Beware that mockFn.mockRestore only works when mock was created with jest.spyOn. 
  Thus you have to take care of restoration yourself when manually assigning jest.fn().

  The restoreMocks configuration option is available to restore mocks automatically between tests.
 */
describe(`when calling mockRestore() on a test module with custom impl.if the test target is "not" a spy`, () => {
  test('jest restore the impl. to a new undefined-returning jest.fn()', () => {
    const api = jest.fn(() => 'non-spy mocked')

    expect(api()).toStrictEqual('non-spy mocked')
    expect(api).toHaveBeenCalledTimes(1)

    // do mockRestore, then no return value
    api.mockRestore()

    expect(api()).toStrictEqual(undefined)
    expect(api).toHaveBeenCalledTimes(1)
  })
})

describe(`when calling mockRestore() on a test module with custom impl.if the test target is a spy`, () => {
  test('jest restore the original impl. of the spy', () => {
    const module = { api: () => 'acutal' }

    jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked')

    expect(module.api()).toStrictEqual('spy mocked')
    expect(module.api).toHaveBeenCalledTimes(1)
    expect(module.api).toHaveProperty('toString') // YES
    expect(module.api).toHaveProperty('mock') // YES

    // do mockRestore
    ;(module.api as any).mockRestore()

    // 对于 spyOn的function, restore 之后 恢复到之前原有的实现. 且mock方法没有
    expect(module.api()).toStrictEqual('acutal')
    expect(module.api).not.toHaveProperty('mock') // No
    expect(module.api).toHaveProperty('toString') // YES
  })
})
