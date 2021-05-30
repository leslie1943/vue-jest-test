/**
 * 原生 DOM 事件
 * 通常而言原生DOM事件主要作为单元测试的输入,
 * 常见的原生DOM事件有:
 *  单击一个元素触发click事件
 *  光标悬浮在元素上会触发mouseenter事件
 *  在键盘按下任意键会触发keyup/keydown事件以及提交一个表单会触发submit事件等等.
 * 在Vue-Test-Utils中,
 * 每个包装器都有一个trigger方法,
 * 用于在包装元素上分发一个合成事件. 所谓合成事件指的是在JavaScript中创建的事件,
 * 它的处理方式与浏览器分发事件的处理方式相同,
 * 区别在于原生事件通过EventLoop异步调用事件处理程序,
 * 而合成事件则是同步调用事件处理程序.
 * rigger方法可用于模拟几乎任何原生DOM事件,
 * 例如click
 *  keydown或mouseenter等. 假设我们有这样一个需求,
 * 点击元素一下实现数字自增:
 *
 */
import { mount } from '@vue/test-utils'
import Quantity from '@/components/Quantity.vue'

describe('Quantity.vue', () => {
  it('test native click event', async () => {
    const wrapper = mount(Quantity)

    expect(wrapper.vm.$data.count).toBe(0)

    const btn = wrapper.find('#plus')
    btn.trigger('click', { count: 10 }) // 原生事件 1
    expect(wrapper.vm.$data.count).toBe(1)

    // vue funs
    ;(wrapper.vm as any).increment({ count: 0 }) // vue function: 2
    ;(wrapper.vm as any).increment({ count: 0 }) // vue function: 3
    ;(wrapper.vm as any).increment({ count: 0 }) // vue function: 4
    ;(wrapper.vm as any).increment({ count: 0 }) // vue function: 5
    expect(wrapper.vm.$data.count).toBe(5)

    // template render
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain(5)
  })

  it('increment and clear', async () => {
    const wrapper = mount(Quantity)
    expect(wrapper.vm.$data.count).toBe(0)
    // increment 10 times
    for (let i = 0; i < 10; i++) {
      ;(wrapper.vm as any).increment({ count: 0 })
    }
    // count should be 10
    expect(wrapper.vm.$data.count).toBe(10)

    // run clear event
    ;(wrapper.vm as any).clear()

    // count should be 0
    expect(wrapper.vm.$data.count).toBe(0)
  })

  it('key event', async () => {
    const wrapper = mount(Quantity)
    const inputRes = wrapper.find('#res')
    inputRes.trigger('keydown') // TODO:
    // expect(wrapper.vm.$data.count).toBe(1)
  })
})
