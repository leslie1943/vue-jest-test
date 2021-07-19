import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import JestEmit from '@/views/Jest/components/jest-emit.vue'
import Vuex from 'vuex'

/**
 * createLocalVue 返回一个 Vue 的类供你添加组件, 混入和安装插件而不会污染全局的 Vue 类
 * 为当前要测试的组件混入了 Vuex
 */
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Emit demo', () => {
  let store: any
  let wrapper: Wrapper<JestEmit>

  beforeEach(() => {
    store = new Vuex.Store({ state: { bus: { busTimerData: [] } } })
    wrapper = shallowMount(JestEmit, { store, localVue })

    // Set $bus prop to current component.
    ;(wrapper.vm as any).$bus = { emit: jest.fn() }
  })

  it('Test Emit and emitted data ', async () => {
    // 为组件添加 Store
    await (wrapper.vm as any).onClick()

    expect(wrapper.emitted().foo?.length).toBe(1)
    expect(wrapper.emitted().foo).toStrictEqual([[]])

    expect(wrapper.emitted().bar?.length).toBe(1)
    expect(wrapper.emitted().bar).toStrictEqual([[123]])
  })

  it('Simualate trigger this.$bus.emit', async () => {
    // simulate performing: emit function on $bus
    const spy = jest.spyOn((wrapper.vm as any).$bus, 'emit')
    ;(wrapper.vm as any).onClick()
    expect(spy).toBeCalled()
  })

  it('Emit test vuex by localVue ', async () => {
    expect(wrapper.vm.$store.state.bus.busTimerData).toStrictEqual([])
  })
})
