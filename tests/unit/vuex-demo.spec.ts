/**
 * 在一个Vue应用程序中经常会使用到Vuex, 我们有下面这几种方式来测试Vuex:
 *  单独测试 store 中的每一个部分: 我们可以把store中的mutations, actions 和 getters单独划分, 分别进行测试
 *  组合测试 store 我们不拆分 store, 而是把它当做一个整体, 我们测试 store 实例, 进而希望它能按期望输出.
 *
 * 单独测试store中的每一部分的好处是:
 *  单元测试可以小而且聚焦, 当一个单元测试用例失败时, 我们能够十分确切的知道错在哪里.
 *  缺点是: 我们经常需要模拟Vuex的某些功能, 而越多的模拟意味着越偏离实际, 有时候很可能模拟错误而引入bug
 *
 *  组合测试store的好处是: 这种方法更加健壮, 因为我们不需要在重新编写, 模拟Vuex的功能.
 */

/**
 * mutations 和 getters 一样, 也是一个普通的函数
 * 它始终返回一个值.
 * 我们只需要断言 mutation函数 和  getter函数 的返回值即可
 */
import mutations from '@/store/mutations'
import getters from '@/store/getters'

describe('mutations', () => {
  it('test  mutations', () => {
    const token = '123456'
    const state = {
      token: '',
    }
    mutations.setToken(state, token)
    // console.info('after set state.token', state.token)
    expect(state.token).toBe(token)
  })

  it('test getters ', () => {
    const students = [
      { name: 'AAA', score: 59 },
      { name: 'BBB', score: 70 },
      { name: 'CCC', score: 10 },
    ]

    const state = {
      students,
    }
    const result = getters.passList(state)
    // console.info('result', result)
    expect(result).toEqual([students[1]])
  })
})
