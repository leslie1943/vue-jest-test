test('Test jest.fn inner implementation', () => {
  const mockFn = jest.fn((x) => x + 1)
  expect(mockFn(42)).toBe(43)
})

test('Test jest.fn inner implementation', () => {
  const mockFnImp = jest.fn().mockImplementation((x) => {
    return x + 100
  })
  expect(mockFnImp(42)).toBe(142)
})
