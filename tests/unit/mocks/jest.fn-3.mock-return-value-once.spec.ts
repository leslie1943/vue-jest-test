test('Test jest.fn return static values', () => {
  const mockFn = jest
    .fn()
    .mockReturnValue('Hello world start')
    .mockReturnValueOnce(1943)
    .mockReturnValueOnce('x')
    .mockReturnValueOnce(true)
    .mockReturnValue('Hello world end')

  expect(mockFn()).toBe(1943)
})

/**
 * mockReturnValueOnce 只会执行第一次 Once的结果
 * 忽略 mockReturnValue的结果
 */
