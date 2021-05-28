import Loading from '@/components/Loading.vue'
import { shallowMount, Wrapper } from '@vue/test-utils'

describe('Loading.vue', () => {
  let wrapper: Wrapper<Loading>
  /**
   * 🚀🚀🚀
   * beforeEach():
   * 它是Jest的钩子函数,
   * 会在执行每一个测试用例之前调用,
   * 在这个钩子函数中我们重新挂载组件,
   * 避免多个测试用例互相影响
   */
  beforeEach(() => {
    wrapper = shallowMount(Loading)
  })

  /**
   * 🚀🚀🚀
   * isVisible(): 判断一个元素是否可见. v-show + isVisible()
   * exists(): 判断一个元素是否存在. v-if + exists()
   */
  it('show func case', async () => {
    // test data: loadingText
    expect(wrapper.vm.$data.loadingText).toBe('')
    // test data: showLoading
    expect(wrapper.vm.$data.showLoading).toBe(false)
    // test component is visible
    expect(wrapper.isVisible()).toBe(false)

    /**
     * after function show run:
     */
    ;(wrapper.vm as any).show()
    await wrapper.vm.$nextTick()
    // test data: loadingText
    expect(wrapper.vm.$data.showLoading).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
  })

  it('hide func case', async () => {
    /**
     * 🚀🚀🚀
     * setData(): 手动修改组件中的 data 值, 与 Vue.$set() 类似
     * 但是要注意的是:
     * setData()方法是异步的, 需要配合 $nextTick() 一起使用
     */
    wrapper.setData({
      showLoading: true,
    })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$data.showLoading).toBe(true)
    expect(wrapper.isVisible()).toBe(true)

    /**
     * after function hide run:
     */
    ;(wrapper.vm as any).hide()
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$data.showLoading).toBe(false)
    expect(wrapper.isVisible()).toBe(false)
  })
})
