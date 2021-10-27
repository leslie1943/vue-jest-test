import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import AppVue from '@/App.vue'

describe('AppVue.vue', () => {
  const localVue = createLocalVue()
  let wrapper: Wrapper<AppVue>

  // localVue.prototype.的内容都是可以被 this. 调用的
  localVue.prototype.$runtimeConfig = {
    VUE_APP_NAME: `Leslie'App`,
    VUE_APP_VERSION: 1,
  }
  beforeEach(() => {
    // Set $bus prop to current component.
    wrapper = shallowMount(AppVue, {
      mocks: {
        $bus: { on: jest.fn(), once: jest.fn() },
      },
      stubs: ['router-view'],
      localVue,
    })
  })
  it('test', () => {
    expect(wrapper.vm.$data.appName).toBe(`Leslie'App`)
  })
})
