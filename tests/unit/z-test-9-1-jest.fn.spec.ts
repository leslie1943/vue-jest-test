// import fetch from './__utils__/fetch'
import JestInteraction from '@/views/Jest/components/jest-interaction.vue'
import { shallowMount, mount } from '@vue/test-utils'

describe('Test jest.fn ', () => {
  it('1: Test call jest.fn()', () => {
    const mockFn = jest.fn()
    const result = mockFn(1, 2, 3, 4)
    expect(result).toBeUndefined()
    expect(mockFn).toBeCalled()
    expect(mockFn).toBeCalledTimes(1)
    expect(mockFn).toBeCalledWith(1, 2, 3, 4)
  })

  it('2: Test jest.fn() return default value', () => {
    const mockFn = jest.fn().mockReturnValue('default')
    expect(mockFn()).toBe('default')
  })

  it('3: Test jest.fn() internal implementation', () => {
    const mockFn = jest.fn((a, b) => {
      return a + b
    })
    expect(mockFn(10, 10)).toBe(20)
  })

  it('4: Test jest.fn() return Promise', async () => {
    const mockFn = jest.fn().mockResolvedValue('promise default')
    const result = await mockFn()
    // 断言 mockFn 通过 await 关键字执行后返回值为 promise default
    expect(result).toBe('promise default')
    // 断言mockFn调用后返回的是Promise对象
    expect(Object.prototype.toString.call(mockFn())).toBe('[object Promise]')
  })

  // it('5: Test callback value', async () => {
  //   const mockFn = jest.fn().mockResolvedValue('Fetch OK')
  //   const res = await fetch.fetchPostList(mockFn)
  //   // 断言 mockFn be invoked
  //   expect(mockFn).toBeCalled()
  //   expect(res).toBe('Fetch OK')
  // })

  it('6: Test for Vue - 1', async () => {
    const wrapper = shallowMount(JestInteraction, {})
    await (wrapper.vm as any).toHome('hello')
    expect(wrapper.vm.$data.msg).toBe('hello')
  })

  it('7: Test for Vue - 2', async () => {
    const setFn = jest.fn()
    const wrapper = shallowMount(JestInteraction, {
      mocks: {
        $set: setFn,
      },
    })
    await (wrapper.vm as any).toHome('Hello World')
    expect(wrapper.vm.$data.msg).toBe('Hello World')
    expect(wrapper.vm.$set).toBeCalled()
    expect(setFn).toBeCalled()
  })

  it('8: Test for Vue - 3', async () => {
    const message = {
      success: jest.fn(),
      warning: jest.fn(),
      error: jest.fn(),
      info: jest.fn(),
    }
    const wrapper = shallowMount(JestInteraction, {
      mocks: {
        $message: message,
      },
    })
    ;(wrapper.vm as any).showMsg()
    expect(message.success).toBeCalled()
    expect(message.warning).toBeCalled()
    expect(message.error).toBeCalled()
    expect(message.info).toBeCalled()
  })

  it('9: Test for Vue - 4', async () => {
    // const getNameMock = jest.fn()
    const wrapper = mount(JestInteraction)
    // mock 组件内的 getName 方法
    const mockGetName = jest.spyOn(wrapper.vm as any, 'getName')
    // const mockGeetAge = jest.spyOn(wrapper.vm as any, 'getAge')
    // 当调用 getPerson 的时候, 组件内部会调用 this.getName()
    ;(wrapper.vm as any).getPerson()
    // 此时 步骤一中的 mock 的方法 也被断言为执行
    expect(mockGetName).toBeCalled()
    // expect(mockGeetAge).toBeCalled()
  })
})

/**
 * 1:::::: jest.fn 定义一个方法 mockFn
 * 2:::::: 将模拟的 mockFn 赋值给当前组件的 测试文件的
 *    { mocks:
 *      { $emit:mockFn }
 *    }
 *    实际组件中: this.$emit('custom')
 * 3:::::: 触发组件自定义的事件:  ==> 事件内部的 this.$emit 会被执行
 * 4:::::: this.$emit 在测试文件中指向 mockFn  ==> 那么 mockFn 就会被 执行
 */
