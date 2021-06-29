import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginLayout from '@/layout/LoginLayout.vue'
import LayoutMain from '@/layout/LayoutMain.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: LayoutMain,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/vuex-class',
        name: 'Vuex-Class',
        component: () => import(/* webpackChunkName: "vuex-class" */ '../components/Person.vue'),
      },
      {
        path: '/hello-world',
        name: 'Hello-World',
        component: () => import(/* webpackChunkName: "hello-world" */ '@/views/HelloWorld/index.vue'),
      },
      {
        path: '/message-list',
        name: 'Message-List',
        component: () => import(/* webpackChunkName: "message-list" */ '@/views/MessageList/index.vue'),
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
        component: () => import(/* webpackChunkName: "setTimeout" */ '@/views/SetTimeout/index.vue'),
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
        component: () => import(/* webpackChunkName: "state change" */ '@/views/StateChange/index.vue'),
      },
      {
        path: '/emit-on',
        name: 'EmitOn',
        component: () => import(/* webpackChunkName: "emit-on" */ '@/views/EventEmitOn/index.vue'),
      },
      {
        path: '/router-test',
        name: 'RouterTest',
        component: () => import(/* webpackChunkName: "router-test" */ '@/views/RouterTest/index.vue'),
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
        component: () => import(/* webpackChunkName: "UploadAvatar" */ '@/views/UploadAvatar/index.vue'),
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
        component: () => import(/* webpackChunkName: "BottomNavigation" */ '@/views/BottomNavigation/index.vue'),
      },

      {
        path: '/v-vuex-pure',
        name: 'VuexPureModule',
        component: () => import(/* webpackChunkName: "VuexPureModule" */ '@/views/VuexStore/VuexPure.vue'),
      },

      {
        path: '/v-vuex-namespace',
        name: 'VuexModuleNamespaced',
        component: () => import(/* webpackChunkName: "VuexModuleNamespaced" */ '@/views/VuexStore/VuexNamespace.vue'),
      },

      {
        path: '/v-vuex-dyancmic',
        name: 'VuexModuleDynamic',
        component: () => import(/* webpackChunkName: "VuexModuleDynamic" */ '@/views/VuexStore/VuexDynamic.vue'),
      },

      {
        path: '/v-dialog',
        name: 'VDialog',
        component: () => import(/* webpackChunkName: "VDialog" */ '@/views/Dialog/index.vue'),
      },
      {
        path: '/v-drawer',
        name: 'VDrawer',
        component: () => import(/* webpackChunkName: "VDrawer" */ '@/views/Drawer/index.vue'),
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

export default router
