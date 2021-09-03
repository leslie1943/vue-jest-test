test('async test mockResolvedValue', async () => {
  const asyncMock = jest
    .fn()
    .mockResolvedValue('default')
    .mockResolvedValueOnce('first async call once')
    .mockResolvedValueOnce('second async call once')

  expect(await asyncMock()).toBe('first async call once')
  expect(await asyncMock()).toBe('second async call once')
  expect(await asyncMock()).toBe('default')
  expect(await asyncMock()).toBe('default')
  expect(await asyncMock()).toBe('default')
})

/**
 * 链式调用,
 * 1: mockReturnValueOnce 返回的值依次 pop,
 * 2: 直到没有 mockReturnValueOnce
 * 3: pop mockReturnValue 返回的值
 * 最
 */
