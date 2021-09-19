describe('Test mockFn.mock.instances with mockImplementation', () => {
  it('Test mockFn', () => {
    const mockFn = jest
      .fn()
      .mockImplementation((name: string, age: number) => ({ name: name, age: age }))

    const a = new mockFn('leslie', 1)
    const b = new mockFn('dora', 2)
    const c = new mockFn('mark', 3)

    expect(a).toEqual({ name: 'leslie', age: 1 })
    expect(b).toEqual({ name: 'dora', age: 2 })
    expect(c).toEqual({ name: 'mark', age: 3 })
  })
})

describe('Test mockFn.mock.instances without mockImplementation', () => {
  it('Test mockFn', () => {
    const mockFn = jest.fn()

    const a = new mockFn()
    const b = new mockFn()

    expect(mockFn.mock.instances[0]).toEqual(a)
    expect(mockFn.mock.instances[1]).toEqual(b)
  })
})
