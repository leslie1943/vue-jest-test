import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('test component', () => {
  let conter = 1
  afterEach(async () => {
    console.info('conter', conter++)
  })

  it('dispatch an getAsync action', async () => {
    const wrapper = shallowMount(HelloWorld, { propsData: { msg: 'init message' } })
    expect(wrapper.vm.$data.name).toBe('')
    await wrapper.setData({ name: 'changed OK' })
    expect(wrapper.vm.$data.name).toBe('changed OK')
  })

  it('dispatch an getAsync action', async () => {
    const wrapper = shallowMount(HelloWorld, { propsData: { msg: 'init message' } })
    ;(wrapper.vm as any).setName('Given Leslie')
    expect(wrapper.vm.$data.name).toBe('Given Leslie')
  })
})

/**
 * afteEach 中, 在每个 具体 test case 中拿不到全局的 wrapper
 *
 */
