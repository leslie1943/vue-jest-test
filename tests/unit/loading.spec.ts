import Loading from '@/components/Loading.vue'
import { shallowMount, Wrapper } from '@vue/test-utils'

describe('Loading.vue', () => {
  let wrapper: Wrapper<Loading>
  /**
   * ððð
   * beforeEach():
   * å®æ¯Jestçé©å­å½æ°,
   * ä¼å¨æ§è¡æ¯ä¸ä¸ªæµè¯ç¨ä¾ä¹åè°ç¨,
   * å¨è¿ä¸ªé©å­å½æ°ä¸­æä»¬éæ°æè½½ç»ä»¶,
   * é¿åå¤ä¸ªæµè¯ç¨ä¾äºç¸å½±å
   */
  beforeEach(() => {
    wrapper = shallowMount(Loading)
  })

  /**
   * ððð
   * isVisible(): å¤æ­ä¸ä¸ªåç´ æ¯å¦å¯è§. v-show + isVisible()
   * exists(): å¤æ­ä¸ä¸ªåç´ æ¯å¦å­å¨. v-if + exists()
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
     * ððð
     * setData(): æå¨ä¿®æ¹ç»ä»¶ä¸­ç data å¼, ä¸ Vue.$set() ç±»ä¼¼
     * ä½æ¯è¦æ³¨æçæ¯:
     * setData()æ¹æ³æ¯å¼æ­¥ç, éè¦éå $nextTick() ä¸èµ·ä½¿ç¨
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
