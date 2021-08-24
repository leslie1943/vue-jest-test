describe('jest.fn()', () => {
  it('test jest.fn simple methods', () => {
    const mock = jest.fn()
    const res = mock('foo')

    expect(res).toBeUndefined()
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith('foo')

    expect(mock).toBeCalled()
  })
})

export {}
