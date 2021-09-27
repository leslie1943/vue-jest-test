import StaticClass from './__utils__/StaticClass'

describe('2021-09-26', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('test static methods', () => {
    const spyFnA = jest.spyOn(StaticClass as any, 'fnA').mockReturnValueOnce(false)
    const spyFnB = jest.spyOn(StaticClass as any, 'fnB').mockReturnValueOnce(true)
    const spyFnC = jest.spyOn(StaticClass as any, 'fnC').mockReturnValueOnce(false)
    const spyFnD = jest.spyOn(StaticClass as any, 'fnD').mockReturnValueOnce(true)

    const actual = StaticClass.mainFun('leslie', 18)
    expect(actual).toBeFalsy()

    expect(spyFnA).toBeCalledWith('leslie', 18)
    expect(spyFnB).toBeCalledWith('leslie', 18)
    expect(spyFnC).toBeCalledWith('leslie', 18)
    expect(spyFnD).toBeCalledWith('leslie')
  })
})
