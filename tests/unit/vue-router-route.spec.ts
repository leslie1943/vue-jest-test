/**
 * 当 Vue-Router 被安装到 Vue 后, 它会添加两个实例属性: $route 和 $router
 * 这两个属性一旦被添加则不允许重写:
 *  $route: 包含了当前匹配路由的信息, 其中包含路由参数中的任何动态字段.
 *  $router: 是当前路由实例, 它包含了可以控制当前路由的所有方法, 例如: push, replace和back等.
 *
 * 当我们的组件使用了$route实例属性
 * 则该属性将成为组件的依赖
 * 我们在之前已经介绍过
 * 处理依赖的一种可行的方式就是模拟
 * 假设我们有如下组件 @/components/RouterTest.vue
 */

import { shallowMount } from '@vue/test-utils'
import RouterTest from '@/components/RouterTest.vue'

describe('Route.vue', () => {
  let $route: any
  let $router: any
  beforeEach(() => {
    $route = {
      query: {},
    }
    $router = {
      replace: jest.fn(),
    }
  })

  // case: no query.id
  it('no passed $route.query.id', async () => {
    const wrapper = shallowMount(RouterTest, {
      // 🚀🚀🚀 add some property or methods to Vue dynamic
      mocks: {
        $router,
        $route,
      },
    })
    wrapper.setData({ show: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.noId').text()).toBe('need pass id')
    expect(wrapper.find('.noId').text()).toEqual('need pass id')
    expect(wrapper.text()).toContain('need pass id')
    expect(wrapper.find('.hasId').exists()).toBeFalsy() // 元素不存在
    expect(wrapper.find('.noId').exists()).toBeTruthy() // 元素存在
  })

  // has query.id case
  it('passed $route.query.id', async () => {
    $route.query.id = 123
    const wrapper = shallowMount(RouterTest, {
      mocks: {
        $route,
        $router,
      },
    })
    wrapper.setData({ show: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hasId').text()).toBe('get detail')
    expect(wrapper.find('.hasId').text()).toEqual('get detail')
    expect(wrapper.text()).toContain('get detail')
    expect(wrapper.find('.hasId').exists()).toBeTruthy() // 元素存在
    expect(wrapper.find('.noId').exists()).toBeFalsy() // 元素不存在
  })
})
