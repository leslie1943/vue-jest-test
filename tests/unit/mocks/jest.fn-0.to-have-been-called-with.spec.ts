type CallBack = (val: number) => void

// eslint-disable-next-line @typescript-eslint/ban-types
const doAdd = (a: number, b: number, callback: CallBack) => {
  callback(a + b)
}

test('jest.fn().toHaveBeenCalledWith', () => {
  const mockCallback = jest.fn()
  doAdd(1, 2, mockCallback)
  expect(mockCallback).toHaveBeenCalledWith(3)
})

export {}

/**
 *  jest.fn() 适合用来测试回调函数 callback
 */
