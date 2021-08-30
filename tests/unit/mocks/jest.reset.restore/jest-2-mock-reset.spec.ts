/**
 * mockRest for jest.fn
 */
describe('if the test target  is "not" a spy', () => {
  test('jest replaces the impl. to a new undefined-returning jest.fn()', () => {
    const api = jest.fn(() => 'non-spy mocked')

    expect(api()).toStrictEqual('non-spy mocked')
    expect(api).toHaveBeenCalledTimes(1)

    api.mockReset()

    expect(api()).toStrictEqual(undefined)
    expect(api).toHaveBeenCalledTimes(1)
  })
})
