/**
 */

import { shallowMount } from '@vue/test-utils'
import RouterTest from '@/components/RouterTest.vue'

describe('Route.vue', () => {
  let $route: any
  let $router: any
  beforeEach(() => {
    $route = {
      query: {},
      path: 'http://github.com',
    }
    $router = {
      replace: jest.fn(),
    }
  })

  // case: no query.id
  it('replace home when no id', async () => {
    //  $route.query.id = 123
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const wrapper = shallowMount(RouterTest, {
      mocks: {
        $route,
        $router,
      },
      stubs: ['router-link'],
    })
    expect($router.replace).toHaveBeenCalled()
  })
  it('inject global attributes to Vue instance', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const wrapper = shallowMount(RouterTest, {
      mocks: {
        $router,
        $route,
      },
    })
    expect(wrapper.vm.$route.path).toBe('http://github.com')
  })

  // 传递 参数
  it('pass id', async () => {
    $route.query.id = 1943
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const wrapper = shallowMount(RouterTest, {
      mocks: {
        $route,
        $router,
      },
      stubs: ['router-link'],
    })
    expect(wrapper.vm.$route.query.id).toBe(1943)
  })
})
