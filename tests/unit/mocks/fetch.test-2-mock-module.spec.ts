import events from '../__utils__/event'
import fetch from '../__utils__/fetch'

// mock whole fetch module
jest.mock('../__utils__/fetch')
/**
 * 如果注释掉这行代码, 会出现以下错误:
 * Matcher error: received value must be a mock or spy function
 */

test('Test fetch with jest.mock()', async () => {
  await events.getPostList()
  expect(fetch.fetchPostList).toBeCalled()
  expect(fetch.fetchPostList).toHaveBeenCalledTimes(1)
})
