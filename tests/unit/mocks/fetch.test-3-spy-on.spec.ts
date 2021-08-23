import events from '../__utils__/event'
import fetch from '../__utils__/fetch'

/**
 * 对比 fetch.test-2-mock-module.spec.ts 内 mock 整个模块的方式
 * 更为简洁的是 使用 spyOn 来 mock 模块内的方法
 * 要 spyOn 的方法 是 在要被测试的文件内调用的:
 *  1. 在 `events` 里调用 `getPostList`
 *  2. getPostList 里使用了 fetch.fetchPostList 方法
 */

test('Test fetch with jest.spyOn()', async () => {
  const spyFn = jest.spyOn(fetch, 'fetchPostList')
  await events.getPostList()
  expect(spyFn).toBeCalled()
  expect(spyFn).toHaveBeenCalledTimes(1)
})

/**
 * PLEASE_README
 * 重要的结论:
 *    ✅✅ 在 jest 中想捕获函数的调用情况, 则该函数必须被 mock 或者 spyOn
 *    ✅✅ 使用模拟整个模块的方式, 模块内的方法是不会被 jest 实际执行的
 *    ✅✅ 而使用 jest.spyOn 的方式, 模块 spy 的函数是会执行的
 */
