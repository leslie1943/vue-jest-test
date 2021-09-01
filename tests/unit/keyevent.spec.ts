import Quantity from '@/components/Quantity.vue'
import { shallowMount } from '@vue/test-utils'

describe('key event tests', () => {
  // assert
  it('Quantity is 0 by default', () => {
    const wrapper = shallowMount(Quantity)
    expect(wrapper.exists()).toBeTruthy()
  })

  // assert
  it('Quantity is 0 by default', () => {
    const wrapper = shallowMount(Quantity)
    expect(wrapper.vm.$data.count).toBe(0)
  })

  // assert
  it('Props test', async () => {
    const wrapper = shallowMount(Quantity, {
      propsData: {
        msg: 'suzhen',
        age: 20,
      },
    })
    expect(wrapper.props().age).toBe(20)
    expect(wrapper.props('msg')).toBe('suzhen')
    // await wrapper.find('#plus').trigger('onclick')
    // expect(wrapper.vm.$data.count).toBe(1)
  })

  // assert style
  it('Style test', async () => {
    // const wrapper = shallowMount(Quantity, {})
    // const eleStyle = wrapper.find('#h2').element.style
    // expect(eleStyle.color).toBe('tomato')
    // expect(eleStyle.textAlign).toBe('center')
  })
})
