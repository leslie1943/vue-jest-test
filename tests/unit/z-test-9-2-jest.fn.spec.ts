import JestInteraction from '@/views/Jest/components/jest-interaction.vue'
import { mount } from '@vue/test-utils'

describe('Test jest.fn ', () => {
  it('1: Test call jest.fn()', () => {
    const mockFn = jest.fn()
    const wrapper = mount(JestInteraction, {
      // wrapper.setMethods({increment: mockFn,})
      methods: { increment: mockFn },
    })
    wrapper.find('.incre').trigger('click')
    expect(mockFn).toBeCalled()
  })

  it('2: Test call jest.fn()', async () => {
    const mockFn = jest.fn()
    const wrapper = mount(JestInteraction, {
      // wrapper.setMethods({increment: mockFn,})
      methods: { increment: mockFn },
    })

    await (wrapper.vm as any).increment()
    expect(mockFn).toBeCalled()
  })

  it('3: Test call jest.fn()', async () => {
    const wrapper = mount(JestInteraction)
    const mockFn = jest.spyOn(wrapper.vm as any, 'increment')
    await (wrapper.vm as any).triggerIncremente()
    expect(mockFn).toBeCalled()
  })

  it('4: Test call jest.fn()', async () => {
    const wrapper = mount(JestInteraction)
    const mockFn = jest.spyOn(wrapper.vm as any, 'increment')
    await (wrapper.vm as any).increment()
    expect(mockFn).toBeCalled()
  })
})
