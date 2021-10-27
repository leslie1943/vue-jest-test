import { shallowMount, Wrapper } from '@vue/test-utils'
import AppVue from '@/App.vue'

describe('AppVue.vue', () => {
  let wrapper: Wrapper<AppVue>
  beforeEach(() => {
    wrapper = shallowMount(AppVue, {
      // mocks 内的内容都是可以被 this.调用的
      mocks: {
        $bus: { on: jest.fn(), once: jest.fn() },
        $runtimeConfig: {
          VUE_APP_NAME: `Leslie'App`,
          VUE_APP_VERSION: 1,
        },
      },
      stubs: ['router-view'],
    })
  })
  it('test', () => {
    expect(wrapper.vm.$data.appName).toBe(`Leslie'App`)
  })
})
