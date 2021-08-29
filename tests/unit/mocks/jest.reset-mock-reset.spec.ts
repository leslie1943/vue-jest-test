describe('jest mock rest/restore api', () => {
  describe('when calling mockReset() on a test double with custom impl', () => {
    describe('if the test double is spy', () => {
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
  })
})
