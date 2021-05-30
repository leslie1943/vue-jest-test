import { shallowMount } from '@vue/test-utils'
import JestMountData from '@/components/JestMountData.vue'

/**
 * data: 在挂载阶段提供的data中的属性, 会被合并,覆盖到当前组件的data中
 */

describe('JestMountData.vue', () => {
  /**
   * data(){return {}} 的形式去挂载, 和 mixin 类似
   */
  it('mount data', () => {
    const wrapper = shallowMount(JestMountData, {
      data() {
        return {
          foo: 'foo overide',
          baz: 'new baz',
        }
      },
    })
    expect(wrapper.vm.$data.foo).toBe('foo overide')
    expect(wrapper.vm.$data.bar).toBe('bar')
    expect(wrapper.vm.$data.baz).toBe('new baz')
  })
})
