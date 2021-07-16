import { mount, shallowMount } from '@vue/test-utils'
import JestEmit from '@/views/Jest/components/jest-emit.vue'

describe('Emit demo', () => {
  it('Emit ', async () => {
    const wrapper = shallowMount(JestEmit)
    ;(wrapper.vm as any).$bus = { emit: jest.fn() }
    ;(wrapper.vm as any).onClick()

    expect(wrapper.emitted().foo?.length).toBe(1)
    expect(wrapper.emitted().foo).toStrictEqual([[]])

    expect(wrapper.emitted().bar?.length).toBe(1)
    expect(wrapper.emitted().bar).toStrictEqual([[123]])
  })

  it('Emit demo and given $bus', async () => {
    const wrapper = mount(JestEmit)
    // Set $bus prop to current component.
    ;(wrapper.vm as any).$bus = { emit: jest.fn() }
    // simulate performing: emit function on $bus
    const spy = jest.spyOn((wrapper.vm as any).$bus, 'emit')
    ;(wrapper.vm as any).onClick()
    expect(spy).toBeCalled()
  })
})
