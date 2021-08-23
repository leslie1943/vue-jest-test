import fetch from '../__utils__/fetch'

describe('Test fetch module', () => {
  it('callback in  callback should be invoked', async () => {
    expect.assertions(1)

    // 测试接口fetchPostList是否被调用,只需要捕获到传入的callback能够被正常调用即可
    const mockCallback = jest.fn()
    await fetch.fetchPostList(mockCallback)

    expect(mockCallback).toBeCalled()
  })
})
