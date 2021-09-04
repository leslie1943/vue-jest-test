import { shallowMount, Wrapper } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('test component', () => {
  let wrapper: Wrapper<HelloWorld>

  const initName = 'Init Name'

  beforeEach(async () => {
    wrapper = shallowMount(HelloWorld)
    await wrapper.setData({ name: initName })
  })

  it('dispatch an getAsync action', async () => {
    expect(wrapper.vm.$data.name).toBe(initName)
    await wrapper.setData({ name: 'changed OK' })
    expect(wrapper.vm.$data.name).toBe('changed OK')
  })

  it('dispatch an getAsync action', async () => {
    expect(wrapper.vm.$data.name).toBe(initName)
    ;(wrapper.vm as any).setName('Given Leslie')
    expect(wrapper.vm.$data.name).toBe('Given Leslie')
  })

  it('dispatch an getAsync action', async () => {
    expect(wrapper.vm.$data.name).toBe(initName)
  })
})
