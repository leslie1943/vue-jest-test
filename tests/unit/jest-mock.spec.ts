import Message from '@/components/Message.vue'
import { mount } from '@vue/test-utils'
/**
 * mount 完整的渲染
 * shallowMount 渲染的子组件是假的,也就是只mount了这一层
 */
// https://vue-test-utils.vuejs.org/zh/api/options.html

describe('Message.vue', () => {
  it('add mocks', () => {
    // 💛💛💛💛 MOCK_FNs
    const message = {
      success: jest.fn(),
      warning: jest.fn(),
      error: jest.fn(),
      info: jest.fn(),
    }
    const wrapper = mount(Message, {
      // 🚀🚀🚀 add some property or methods to Vue dynamic
      mocks: {
        // 添加实例属性 $message, 包含4个组件中的方法
        // add instance property or methods to the instance
        $message: message,
      },
    })

    // find out the elements from component
    const successBtn = wrapper.find('#success')
    const warningBtn = wrapper.find('#warning')
    const errorBtn = wrapper.find('#error')
    const infoBtn = wrapper.find('#info')

    // find the element, then click
    successBtn.trigger('click') // click 1
    successBtn.trigger('click') // click 2
    // that means mock the "success": jest.fn() [which be defined in MOCK_FNs ] for 1 time
    expect(message.success).toHaveBeenCalledTimes(2) // 2

    warningBtn.trigger('click')
    expect(message.warning).toHaveBeenCalledTimes(1)

    errorBtn.trigger('click')
    expect(message.error).toHaveBeenCalledTimes(1)

    infoBtn.trigger('click')
    expect(message.info).toHaveBeenCalledTimes(1)
  })
})
