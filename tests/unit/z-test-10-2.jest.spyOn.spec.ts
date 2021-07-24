import JestInteraction from '@/views/Jest/components/jest-interaction.vue'
import { mount } from '@vue/test-utils'

describe('Test jest.spyOn ', () => {
  it('1: Test spyOn for toBeCalled / toBeCalledTimes', async () => {
    const wrapper = mount(JestInteraction)
    // mock 组件内的 getName 方法
    const mockGetName = jest.spyOn(wrapper.vm as any, 'getName')
    // 当调用 getPerson 的时候, 组件内部会调用 this.getName()
    await (wrapper.vm as any).getPerson()
    // 此时 步骤一中的 mock 的方法 也被断言为执行
    expect(mockGetName).toBeCalled()
    expect(mockGetName).toBeCalledTimes(1)
  })

  it('2: Test spyOn for toBeCalledTimes = 0', async () => {
    const wrapper = mount(JestInteraction)
    const mockGeetAge = jest.spyOn(wrapper.vm as any, 'getAge')
    // ❌ 不能 spyOn vm 中不存在的方法
    // const mockgetNothing = jest.spyOn(wrapper.vm as any, 'getNothing')
    await (wrapper.vm as any).getPerson()
    // 调用 getPerson的时候并没有调用 getAge, 所以 通过 spyOn mock 的方法不会执行
    expect(mockGeetAge).toBeCalledTimes(0)
  })

  it('3: Test spyOn for mockReturnValue - 3', async () => {
    const wrapper = mount(JestInteraction)
    // 通过 spyOn mock => getCompanyName 方法 并确认返回值为 'LESLIE'
    jest.spyOn(wrapper.vm as any, 'getCompanyName').mockReturnValue('LESLIE')
    // 无论组件内部的返回值 返回的是什么都会被忽略, 因为上述方法已经确认 返回 LESLIE
    const res = await (wrapper.vm as any).getCompanyName()
    expect(res).toBe('LESLIE')
  })

  it('4: Test spyOn + jest.fn for mockReturnValue - 3', async () => {
    const message = {
      success: jest.fn(),
    }
    const wrapper = mount(JestInteraction, {
      mocks: {
        $message: message,
      },
    })
    // 模拟组件内的方法 getAge
    const mockGetAge = jest.spyOn(wrapper.vm as any, 'getAge')
    // 触发组件内的 方法
    await (wrapper.vm as any).getAge()
    // 模拟的被调用
    expect(mockGetAge).toBeCalled()
    expect(message.success).toBeCalled()
  })
})
