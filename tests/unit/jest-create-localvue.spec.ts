/**
 * 挂载第三方应用
 * 有时候我们在开发Vue应用的时候,
 * 会经常用到第三方插件,
 * 例如：Vue-Router、Vuex 以及 element-ui等等.
 * 那么,
 * 如何在一个测试用例中优雅的安装这些第三方应用呢
 * 可以使用createLocalVue()方法创建一个本地的Vue实例,
 * 用来替换全局的Vue,
 * 随后在挂载组件的时候传递这个本地Vue,
 */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(ElementUI)

describe('Create local vue', () => {
  it('use local vue', () => {
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: {
        msg: 'Hello',
      },
    })
    console.info(wrapper)
  })
})
