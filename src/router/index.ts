import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginLayout from '@/layout/LoginLayout.vue'
import LayoutMain from '@/layout/LayoutMain.vue'
import TOP_LOADING from '@/plugins/util-top-loading'

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
        path: '/requisition',
        name: 'Requisition',
        component: () =>
          import(/* webpackChunkName: "requisition" */ '../views/Requisition/index.vue'),
      },
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
        path: '/snack-bar',
        name: 'SnackBar',

        component: () => import(/* webpackChunkName: "snack-bar" */ '../views/SnackBar/index.vue'),
      },
      {
        path: '/list-item',
        name: 'ListItem',
        component: () => import(/* webpackChunkName: "list-item" */ '../views/ListItem/index.vue'),
      },
      {
        path: '/v-select',
        name: 'v-select',
        component: () => import(/* webpackChunkName: "v-select" */ '../views/V-Select/index.vue'),
      },
      {
        path: '/tree-view',
        name: 'TreeView',
        component: () => import(/* webpackChunkName: "tree-view" */ '../views/TreeView/index.vue'),
      },
      {
        path: '/tree-view-detail',
        name: 'TreeView Detail',
        component: () =>
          import(/* webpackChunkName: "list-item" */ '../views/TreeViewDetail/index.vue'),
      },
      {
        path: '/vuex-class',
        name: 'Vuex-Class',
        component: () => import(/* webpackChunkName: "vuex-class" */ '../components/Person.vue'),
      },
      {
        path: '/hello-world',
        name: 'Hello-World',
        component: () =>
          import(/* webpackChunkName: "hello-world" */ '@/views/HelloWorld/index.vue'),
      },
      {
        path: '/message-list',
        name: 'Message-List',
        component: () =>
          import(/* webpackChunkName: "message-list" */ '@/views/MessageList/index.vue'),
      },
      {
        path: '/user-name',
        name: 'User-Name',
        component: () => import(/* webpackChunkName: "user-name" */ '@/views/UserName/index.vue'),
      },
      {
        path: '/quantity',
        name: 'Quantity',
        component: () => import(/* webpackChunkName: "quantity" */ '@/views/Quantity/index.vue'),
      },
      {
        path: '/loading',
        name: 'Loading',
        component: () => import(/* webpackChunkName: "loading" */ '@/views/Loading/index.vue'),
      },
      {
        path: '/set-time-out',
        name: 'SetTimeout',
        component: () =>
          import(/* webpackChunkName: "setTimeout" */ '@/views/SetTimeout/index.vue'),
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import(/* webpackChunkName: "message" */ '@/views/Message/index.vue'),
      },
      {
        path: '/depends',
        name: 'Depends',
        component: () => import(/* webpackChunkName: "depends" */ '@/views/Depends/index.vue'),
      },
      {
        path: '/state-change',
        name: 'StateChange',
        component: () =>
          import(/* webpackChunkName: "state change" */ '@/views/StateChange/index.vue'),
      },
      {
        path: '/emit-on',
        name: 'EmitOn',
        component: () => import(/* webpackChunkName: "emit-on" */ '@/views/EventEmitOn/index.vue'),
      },
      {
        path: '/router-test',
        name: 'RouterTest',
        component: () =>
          import(/* webpackChunkName: "router-test" */ '@/views/RouterTest/index.vue'),
      },
      {
        path: '/v-menu',
        name: 'Vuetify Menu',
        component: () => import(/* webpackChunkName: "v-menu" */ '@/views/V-Menu/index.vue'),
      },
      {
        path: '/v-alert',
        name: 'Vuetify Alert',
        component: () => import(/* webpackChunkName: "v-alert" */ '@/views/V-Alert/index.vue'),
      },
      {
        path: '/v-avatar',
        name: 'Vuetify Avatar',
        component: () => import(/* webpackChunkName: "v-alert" */ '@/views/V-Avatar/index.vue'),
      },
      {
        path: '/summary',
        name: 'Summary',
        component: () => import(/* webpackChunkName: "Summary" */ '@/views/CardSummary/index.vue'),
      },
      {
        path: '/card-enums',
        name: 'CardEnums',
        component: () => import(/* webpackChunkName: "CardEnums" */ '@/views/CardTypes/index.vue'),
      },
      {
        path: '/upload',
        name: 'UploadAvatar',
        component: () =>
          import(/* webpackChunkName: "UploadAvatar" */ '@/views/UploadAvatar/index.vue'),
      },
      {
        path: '/v-badge',
        name: 'Badge',
        component: () => import(/* webpackChunkName: "badge" */ '@/views/Badge/index.vue'),
      },
      {
        path: '/v-banner',
        name: 'Banner',
        component: () => import(/* webpackChunkName: "banner" */ '@/views/Banner/index.vue'),
      },
      {
        path: '/v-bottom-navigation',
        name: 'BottomNavigation',
        component: () =>
          import(/* webpackChunkName: "BottomNavigation" */ '@/views/BottomNavigation/index.vue'),
      },

      {
        path: '/v-vuex-pure',
        name: 'VuexPureModule',
        component: () =>
          import(/* webpackChunkName: "VuexPureModule" */ '@/views/VuexStore/VuexPure.vue'),
      },

      {
        path: '/v-vuex-namespace',
        name: 'VuexModuleNamespaced',
        component: () =>
          import(
            /* webpackChunkName: "VuexModuleNamespaced" */ '@/views/VuexStore/VuexNamespace.vue'
          ),
      },

      {
        path: '/v-vuex-dyancmic',
        name: 'VuexModuleDynamic',
        component: () =>
          import(/* webpackChunkName: "VuexModuleDynamic" */ '@/views/VuexStore/VuexDynamic.vue'),
      },

      {
        path: '/v-dialog',
        name: 'VDialog',
        component: () => import(/* webpackChunkName: "VDialog" */ '@/views/Dialog/index.vue'),
      },
      // test for FWC
      {
        path: '/v-drawer',
        name: 'VDrawer',
        component: () => import(/* webpackChunkName: "VDrawer" */ '@/views/Drawer/index.vue'),
      },
      {
        path: '/vue-extends',
        name: 'Vue-Extends',
        component: () =>
          import(/* webpackChunkName: "vue-extends" */ '@/views/VueExtends/index.vue'),
      },
      {
        path: '/vue-jest',
        name: 'Vue-jest',
        component: () => import(/* webpackChunkName: "Vue-jest" */ '@/views/Jest/index.vue'),
      },
      {
        path: '/text-slot',
        name: 'text-slot',
        component: () => import(/* webpackChunkName: "text-slot" */ '@/views/TextSlot/index.vue'),
      },
      {
        path: '/lodash',
        name: 'lodash',
        component: () => import(/* webpackChunkName: "lodash" */ '@/views/Lodash/index.vue'),
      },
    ],
  },

  // /v-bottom-navigation
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
