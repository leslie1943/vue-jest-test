/**
 * mockRest for jest.spyOn
 */
describe('if the test target is spy', () => {
  test('jest replaces the impl. to a new undefined-returning jest.fn()', () => {
    const module = { api: () => 'autual' }
    jest.spyOn(module, 'api').mockImplementation(() => 'spy mocked')

    expect(module.api()).toStrictEqual('spy mocked')
    expect(module.api).toHaveBeenCalledTimes(1)
    ;(module.api as any).mockReset()

    expect(module.api()).toStrictEqual(undefined)
    expect(module.api).toHaveBeenCalledTimes(1)
  })
})
