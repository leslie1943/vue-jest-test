test('Test jest.fn return static values', () => {
  const mockFn = jest.fn().mockReturnValue('Leslie')
  expect(mockFn()).toBe('Leslie')
})
