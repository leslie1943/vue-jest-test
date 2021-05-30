import { shallowMount, Wrapper } from '@vue/test-utils'
import StateChange from '@/components/StateChange.vue'

// 在组件挂载之后撰写如下测试用例来测试组件

describe('StateChange', () => {
  let wrapper: Wrapper<StateChange>
  beforeEach(() => {
    wrapper = shallowMount(StateChange, {
      //   props: {
      //     msg: String,
      //   },
    })
  })

  it('change component data for different elements', () => {
    /**
     * Step-1:  Get elements by class
     * Step-2: Change state by different element event.
     * Step-3: test result after change
     */

    // Radio Button
    const radioInput = wrapper.find('input[type="radio"]')
    radioInput.setChecked()
    expect(wrapper.vm.$data.radio).toBe(true)

    // Select
    const options = wrapper.find('select').findAll('option')
    options.at(1).setSelected()
    expect(wrapper.vm.$data.select).toBe(2)

    // Input
    const textInput = wrapper.findAll('input[type="text"]')
    textInput.setValue('txt value')
    expect(wrapper.vm.$data.txt).toBe('txt value')
  })

  // set props with function
  it('setProps', async () => {
    wrapper.setProps({ msg: 'hello msg' })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$props.msg).toBe('hello msg') // 调用 $props
    expect((wrapper.vm as any).msg).toBe('hello msg') // 调用 vm 实例上的属性
  })

  it('setData', () => {
    wrapper.setData({ foo: 'football' })
    // wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.foo).toBe('football')
    expect((wrapper.vm as any).foo).toContain('foot')
  })
})
