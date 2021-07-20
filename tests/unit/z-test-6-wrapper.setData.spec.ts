import { shallowMount /**createLocalVue */ } from '@vue/test-utils'
import JestMountSlot from '@/components/JestMountSlot.vue'
// import Vuex from 'vuex'

/**
 * createLocalVue 返回一个 Vue 的类供你添加组件, 混入和安装插件而不会污染全局的 Vue 类
 * 为当前要测试的组件混入了 Vuex
 */
// const localVue = createLocalVue()
// localVue.use(Vuex)

describe('Emit demo', () => {
  it('Test `setData` before and after - 1', async () => {
    const wrapper = shallowMount(JestMountSlot, {
      mocks: {
        $route: { path: '/profile/view' },
      },
    })
    const vm = wrapper.vm as any
    expect(vm.$data.allowPaths).toStrictEqual([
      '/profile/view',
      '/profile/edit',
    ])
    await wrapper.setData({ allowPaths: ['/a/b/c', '/hello/world'] })
    expect(vm.$data.allowPaths).toStrictEqual(['/a/b/c', '/hello/world'])
  })

  it('Test `setData` before and after - 2', async () => {
    const wrapper = shallowMount(JestMountSlot, {
      mocks: {
        $route: { path: '/profile/view' },
      },
    })
    const vm = wrapper.vm as any
    expect(vm.isProfilePage).toBe(true)
    await wrapper.setData({ allowPaths: ['/a/b/c', '/hello/world'] })
    expect(vm.isProfilePage).toBe(false)
  })
})
