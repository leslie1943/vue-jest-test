import TextSlot from '@/views/TextSlot/index.vue'
import { mount, Wrapper } from '@vue/test-utils'
import personAPI from '@/utils/person'

/**
 * ⭐⭐⭐ Important Point ⭐⭐⭐
 * do not verify method 'getDataDebounced' whether be debounced or not,
 * because debounced is a method of third party module, we are sure of that is correct.
 * so just verify method 'getDataDebounced' can be invoked correct together with its internal api.
 */
jest.mock('lodash/debounce', () => jest.fn((fn) => fn))

describe('Test debounce', () => {
  it('Mounted', () => {
    const wrapper = mount(TextSlot)
    expect(wrapper.html()).toBeTruthy()
  })

  // it('Mounted', async () => {
  //   const wrapper = mount(TextSlot)
  //   wrapper.setData({ baseInfo: { name: 'leslie' } })
  //   wrapper.setData({ persons: [{ name: 'leslie' }] })
  //   await (wrapper.vm as any).validateName()
  //   expect(wrapper.vm.$data.hasBeenUsed).toBe(true)
  // })

  // Test normal method
  it('Test normal method', async () => {
    const wrapper = mount(TextSlot)
    const vm = wrapper.vm
    const mockGet = jest.spyOn(personAPI, 'getPerson').mockResolvedValue({ name: 'v', age: 1 })
    await (wrapper.vm as any).getDataNormal()
    expect(mockGet).toBeCalled()
    expect(vm.$data.people).toEqual({ name: 'v', age: 1 })
  })

  // Test debounced method
  it('Test debounced method Debounce', async () => {
    const wrapper: Wrapper<TextSlot> = mount(TextSlot)
    const vm = wrapper.vm
    const mockGet = jest
      .spyOn(personAPI, 'getPerson')
      .mockResolvedValue({ name: 'leslie1944', age: 20211 })
    await (vm as any).getDataDebounced()
    expect(mockGet).toBeCalled()
    expect(wrapper.vm.$data.people).toEqual({ name: 'leslie1944', age: 20211 })
  })
})
