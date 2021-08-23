import { processProducts, products } from '../repositories/make-products'

describe('1: jset.fn() mock only', () => {
  it('Test jset.fn().calls', () => {
    const mockFn = jest.fn()
    const mockLog = jest.fn()
    processProducts(products, mockFn, mockLog)
    /**
     * 🚀🚀🚀 mockFn.mock.calls 🚀🚀🚀: ====> 方法调用时候的参数
        [
            [ { name: 'TV', id: 1, category: 'A' } ],
            [ { name: 'Mobile', id: 2, category: 'B' } ]
        ]
     */
    expect(mockFn.mock.calls).toBeTruthy()
    expect(mockFn.mock.calls.length).toBe(2)

    // 由于 mockFn 只是一个 jest.fn() 没有 implementation
    // 所以 jest.fn().mock.results
    /**
        [
            { type: 'return', value: undefined },
            { type: 'return', value: undefined }
        ]
     */
  })
})

describe('2: jset.fn() mock with mockImplementation ', () => {
  it('Test jset.fn().results', () => {
    const mockFn = jest.fn().mockImplementation((item) => item)
    const mockLog = jest.fn().mockReturnValue('log output')
    processProducts(products, mockFn, mockLog)
    /**
     * 🚀🚀🚀 mockFn.mock.results 🚀🚀🚀: ====> 方法调用时候的返回结果
        [
            { type: 'return', value: { name: 'TV', id: 1, category: 'A' } },
            { type: 'return', value: { name: 'Mobile', id: 2, category: 'B' } }
        ]
     */
    expect(mockFn.mock.results).toBeTruthy()
    expect(mockFn.mock.results.length).toBe(2)
  })
})

describe('3: jset.fn() mockReturnValue  ', () => {
  it('test mock mockReturnValue', () => {
    const mockFn = jest.fn().mockImplementation((item) => item)
    const mockLog = jest.fn().mockReturnValue('log output')
    processProducts(products, mockFn, mockLog)

    // mockLog.mock.calls
    expect(mockLog.mock.calls).toEqual([[], []])
    expect(mockLog.mock.calls).toBeTruthy()
    expect(mockFn.mock.calls.length).toBe(2)

    // mockLog.mock.results
    expect(mockLog.mock.results).toEqual([
      { type: 'return', value: 'log output' },
      { type: 'return', value: 'log output' },
    ])
    expect(mockLog.mock.results).toBeTruthy()
    expect(mockFn.mock.results.length).toBe(2)
  })
})

describe('4: jset.fn() getMockName', () => {
  it('test jest.fn().getMockName', () => {
    const mockFn = jest.fn().mockImplementation((item) => item)
    const mockLog = jest.fn().mockReturnValue('log output')
    processProducts(products, mockFn, mockLog)
    console.log('mockLog.getMockName', mockLog.getMockName())
    const mockName = mockLog.getMockName()
    expect(mockName).toBe('jest.fn()')
  })
})
