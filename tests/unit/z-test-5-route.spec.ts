import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import JestMountSlot from '@/components/JestMountSlot.vue'
import Vuex from 'vuex'

/**
 * createLocalVue 返回一个 Vue 的类供你添加组件, 混入和安装插件而不会污染全局的 Vue 类
 * 为当前要测试的组件混入了 Vuex
 */
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Emit demo', () => {
  it('Test route', () => {
    const wrapper: Wrapper<JestMountSlot> = shallowMount(JestMountSlot, {
      mocks: {
        $route: { path: '/profile/view' },
      },
    })
    const vm = wrapper.vm as any
    expect(vm.isProfilePage).toBe(true)
  })

  it('Test route', () => {
    const wrapper: Wrapper<JestMountSlot> = shallowMount(JestMountSlot, {
      mocks: {
        $route: { path: '/profile/xxxx' },
      },
    })
    const vm = wrapper.vm as any
    expect(vm.isProfilePage).toBe(false)
  })
})
