/**
 */
import { mount } from '@vue/test-utils'
import EventEmitOnChild from '@/components/EventEmitOnChild.vue'
import EventEmitOnParent from '@/views/EventEmitOn/index.vue'

describe('EventEmitOnParent.vue', () => {
  it(`displays 'Emitted!' when custom event is emitted`, async () => {
    const wrapper = mount(EventEmitOnParent)
    expect(wrapper.text()).toContain('Emit') // 页面渲染的仅仅是子组件的一个按钮
    /**
     * findComponent vs find
     * find()方法不仅可以传递我们熟知的标准选择器: 元素标签,类名等还可以传递一个组件,传递组件返回的是一个组件的包装器
     * findComponent(): 确定的组件
     */
    // 找到子组件并 $emit
    wrapper.findComponent(EventEmitOnChild).vm.$emit('custom') // ✅
    // wrapper.find(EventEmitOnChild).vm.$emit('custom') // ✅

    /**
     * -----------------------------
     * $nextTick(): 页面内容变动的时候需要使用.
     * -----------------------------
     */
    // 🚀🚀🚀 仍然是 emit 前的页面内容
    // console.info('wrapper.text()', wrapper.text())
    // 需要 组件的 nextTick 去刷新, 然后比较最新的内容
    await wrapper.vm.$nextTick()

    // 🚀🚀🚀 刷新后的页面内容
    console.info('wrapper.text()', wrapper.find('.after').text())

    // 测试是否 emit 成功
    expect(wrapper.find('.after').text()).toContain('After')
  })
})

describe('EventEmitOnChild.vue', () => {
  const mockEmit = jest.fn() //  ----- 💛💛 STEP - 0  💛💛: jest.fn 定义一个方法
  it(`Test EventEmitOnChild`, () => {
    const wrapper = mount(EventEmitOnChild, {
      mocks: {
        $emit: mockEmit, // ----- 💛💛 STEP - 1 💛💛 将模拟的 mockEmit 赋值给当前组件的 this.$emit属性  实际组件中: this.$emit('custom')
      },
    })
    ;(wrapper.vm as any).emitEvent() // 💛💛 STEP - 2 💛💛 触发组件定义的事件:  ==> 事件内部的 this.$emit 会被执行
    expect(mockEmit).toBeCalled() // 💛💛 STEP - 3 💛💛 this.$emit 在测试文件中指向 mockEmit  ==> 那么 mockEmit 就会被 call
  })
})
