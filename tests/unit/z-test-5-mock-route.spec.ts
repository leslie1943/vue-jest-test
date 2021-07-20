import { shallowMount /**createLocalVue */ } from '@vue/test-utils'
import JestMountSlot from '@/components/JestMountSlot.vue'
// import Vuex from 'vuex'

/**
 * createLocalVue 返回一个 Vue 的类供你添加组件, 混入和安装插件而不会污染全局的 Vue 类
 * 为当前要测试的组件混入了 Vuex
 */
// const localVue = createLocalVue()
// localVue.use(Vuex)

/**
 * 意有些插件会为全局的 Vue 构造函数添加只读属性,
 * 比如 Vue Router. 这使得我们无法在一个 localVue 构造函数上二次安装该插件,或伪造这些只读属性.
 */

describe('Emit demo', () => {
  it('Test route', () => {
    const wrapper = shallowMount(JestMountSlot, {
      mocks: {
        $route: { path: '/profile/view' },
      },
    })

    const vm = wrapper.vm as any
    expect(vm.isProfilePage).toBe(true)
  })

  it('Test route', () => {
    const wrapper = shallowMount(JestMountSlot, {
      mocks: {
        $route: { path: '/profile/xxxx' },
      },
    })
    const vm = wrapper.vm as any
    expect(vm.isProfilePage).toBe(false)
  })
})
