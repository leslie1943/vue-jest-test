import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginLayout from '@/layout/LoginLayout.vue'
import LayoutMain from '@/layout/LayoutMain.vue'
import TOP_LOADING from '@/plugins/util-top-loading'
import { cypressRouter } from './cypress.router'
import { vuetifyRouter } from './vuetify.router'
import { practiceRouter } from './parctice.router'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location: RouteConfig) {
  return (originalPush.call(this, location) as any).catch((err: any) => err)
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: LayoutMain,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/hello-world',
        name: 'Hello-World',
        component: () =>
          import(/* webpackChunkName: "hello-world" */ '@/views/HelloWorld/index.vue'),
      },
      ...cypressRouter,
      ...vuetifyRouter,
      ...practiceRouter,
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "VDialog" */ '@/views/Login/index.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach(async (to, from, next) => {
  TOP_LOADING.start()
  next()
})

router.afterEach(() => {
  TOP_LOADING.done()
})

export default router
