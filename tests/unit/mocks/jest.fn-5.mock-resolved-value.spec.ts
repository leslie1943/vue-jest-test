test('Test jest.fn mockResolvedValue', async () => {
  const person = { name: 'leslie', age: 22 }
  const mockFn = jest.fn().mockResolvedValue(person)
  const result = await mockFn()
  expect(result).toEqual(person)

  expect(Object.prototype.toString.call(mockFn())).toBe('[object Promise]')
})
