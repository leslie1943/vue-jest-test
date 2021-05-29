import Message from '@/components/Message.vue'
import { shallowMount } from '@vue/test-utils'

describe('Message.vue', () => {
  it('add mocks', () => {
    const message = {
      success: jest.fn(),
      warning: jest.fn(),
      error: jest.fn(),
      info: jest.fn(),
    }
    const wrapper = shallowMount(Message, {
      // 🚀🚀🚀 给 vue 添加一些 实例属性 或者 实例方法
      mocks: {
        // 添加实例属性 $message, 包含4个组件中的方法
        $message: message,
      },
    })

    const successBtn = wrapper.find('#success')
    const warningBtn = wrapper.find('#warning')
    const errorBtn = wrapper.find('#error')
    const infoBtn = wrapper.find('#info')

    successBtn.trigger('click')
    expect(message.success).toHaveBeenCalledTimes(1)

    warningBtn.trigger('click')
    expect(message.warning).toHaveBeenCalledTimes(1)

    errorBtn.trigger('click')
    expect(message.error).toHaveBeenCalledTimes(1)

    infoBtn.trigger('click')
    expect(message.info).toHaveBeenCalledTimes(1)
  })
})
