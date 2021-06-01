/**
 * 在安装了 Vue-Router 后
 * 我们就可以使用 router-link 和 router-view 等内置组件
 * 但是如果我们不做其他处理的话
 * 我们并不能把 router-link 当做一个组件
 * 进而根据 wrapper.findComponent() 方法去找到它

 * 在 Vue-Test-Utils 中
 * 我们可以使用 studs 存根 router-link
 * 然后使用 RouterLinkStub 控制 router-link 渲染
 * 
 * 在 Vue-Test-Utils中, 我们可以使用studs存根router-link, 然后使用RouterLinkStub控制router-link渲染
 * 
 * 找标签元素推荐使用 wrapper.find() 方法
 * 找组件元素推荐使用 wrapper.findComponent() 方法
 */

import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import RouterTest from '@/components/RouterTest.vue'

describe('Router link.vue', () => {
  it('render router-link', () => {
    const $route = {
      query: {},
    }
    const $router = {
      replace: jest.fn,
    }

    const wrapper = shallowMount(RouterTest, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route,
        $router,
      },
    })

    const router_link = wrapper.findComponent(RouterLinkStub)
    expect(router_link.props().to).toBe('/home')
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/home')
  })
})
