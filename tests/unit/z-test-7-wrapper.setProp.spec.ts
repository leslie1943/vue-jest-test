import { shallowMount } from '@vue/test-utils'
import JestMountSlot from '@/components/JestMountSlot.vue'
// import TeamPersonType from '@/enums/teamPersonType.enum'

describe('wrapper.setProp', () => {
  it('Test propsData when mounted', () => {
    const wrapper = shallowMount(JestMountSlot, {
      propsData: { name: 'FIL' },
      mocks: { $route: { path: '/profile/view' } },
    })

    const vm = wrapper.vm as any
    expect(vm.isInternal).toBe(true)
  })

  it('Test setProps manually with await', async () => {
    const wrapper = shallowMount(JestMountSlot, {
      propsData: { name: 'FIL' },
      mocks: { $route: { path: '/profile/view' } },
    })
    await wrapper.setProps({ name: 'LESLIE' })
    const vm = wrapper.vm as any
    expect(vm.isInternal).toBe(false)
  })

  it('Test setProps manually with await vm.$nextTick ', async () => {
    const wrapper = shallowMount(JestMountSlot, {
      propsData: { name: 'LESLIE' },
      mocks: { $route: { path: '/profile/view' } },
    })
    const vm = wrapper.vm as any

    expect(vm.isInternal).toBe(false)

    wrapper.setProps({ name: 'FIL' })
    await vm.$nextTick()

    expect(vm.isInternal).toBe(true)
  })
})
