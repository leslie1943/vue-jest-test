test('test once', () => {
  const mockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockReturnValueOnce('first')
    .mockReturnValueOnce('second')

  // console.info('mockFn 1', mockFn()) // first
  // console.info('mockFn 2', mockFn()) // second
  // console.info('mockFn 3', mockFn()) // default
  // console.info('mockFn 4', mockFn()) // default
  // console.info('mockFn 5', mockFn()) // default

  expect(mockFn()).toBe('first')
  expect(mockFn()).toBe('second')
  expect(mockFn()).toBe('default')
  expect(mockFn()).toBe('default')
  expect(mockFn()).toBe('default')
})

/**
 * 链式调用,
 * 1: mockReturnValueOnce 返回的值依次 pop,
 * 2: 直到没有 mockReturnValueOnce
 * 3: pop mockReturnValue 返回的值
 * 最
 */
