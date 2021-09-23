import { shallowMount } from '@vue/test-utils'
import HelloWorldIndex from '@/views/HelloWorld/index.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorldIndex)
    wrapper.vm.$data.home = 'home'
    wrapper.vm.$data.prefix = 'suzhen'
    wrapper.vm.$data.suffix = 'easy'

    expect((wrapper.vm as any).pageInfo).toStrictEqual({
      home: 'home',
      suffix: 'easy',
      prefix: 'suzhen',
    })
  })
})
