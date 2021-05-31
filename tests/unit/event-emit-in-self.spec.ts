/**
 * 自定义事件
 * 在一个Vue应用程序中,
 * 自定义事件比原生DOM事件更加强大,因为自定义事件可以和父组件通信.
 * Vue中自定义事件系统有两个部分
 *    监听自定义事件的父组件和发射事件的组件本身
 *    这意味着同样是一个自定义事件, 当它处于不同的角色时它的定位是不一样的
 *    🚀🚀 对于发射事件的组件(子组件)本身来说, 发射事件是组件的输出 
 *        🎃🎃🎃🎃🎃 这个测试用例的场景就是子组件本身 🎃🎃🎃🎃🎃
 *    
 *    🚀🚀 对于监听自定义事件的组件(父组件)来说, 发射的事件是组件的输入 
 *        🎃🎃🎃🎃🎃 event-emit-to-parent.spec.ts 🎃🎃🎃🎃🎃

 * 在 Vue-Test-Utils 中
 * 一个组件它发射的事件可以通过 wrapper.emitted() 获取
 * 它的返回值是一个对象
 * 其中事件名作为对象的键名
 * 对应的参数作为键的值
 * wrapper.vm.$emit("change", 100)
 * wrapper.vm.$emit("update:visible", false)
 * 父组件接收的值
    {
      'change': [[100]],
      'update:visible': [[false]]  
    }
 */
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('emit event case', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'Hello' },
    })
    expect((wrapper.vm as any).msg).toBe('Hello')
    expect(wrapper.vm.$props.msg).toBe('Hello')

    wrapper.vm.$emit('change', 10)
    wrapper.vm.$emit('update:visible', false)

    const emitted = wrapper.emitted()
    /**
     *  change: [ [ 10 ] ],
        'update:visible': [ [ false ] ]
     */
    //   testMatch: **/tests/unit/**/*.spec.[jt]s?(x), **/__tests__/*.[jt]s?(x) - 15 matches

    expect(emitted['change']).toBeTruthy()
    expect(emitted['change']?.[0]).toEqual([10])

    expect(emitted['update:visible']).toBeTruthy()
    expect(emitted['update:visible']?.[0]).toEqual([false])
  })
})
