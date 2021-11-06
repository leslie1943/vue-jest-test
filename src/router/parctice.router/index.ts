interface RouterNormal {
  path: string
  name: string
  component: () => Promise<typeof import('*.vue')>
}
export const practiceRouter: RouterNormal[] = [
  {
    path: '/global-user',
    name: 'Global User',
    component: () => import(/* webpackChunkName: "global user" */ '@/views/GlobalUser/index.vue'),
  },
  {
    path: '/vuex-class',
    name: 'Vuex-Class',
    component: () => import(/* webpackChunkName: "vuex-class" */ '@/components/Person.vue'),
  },
  {
    path: '/mixin',
    name: 'mixin',
    component: () => import(/* webpackChunkName: "mixin" */ '@/views/Mixin/index.vue'),
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
    path: '/upload',
    name: 'UploadAvatar',
    component: () =>
      import(/* webpackChunkName: "UploadAvatar" */ '@/views/UploadAvatar/index.vue'),
  },
  {
    path: '/v-vuex-pure',
    name: 'VuexPureModule',
    component: () =>
      import(/* webpackChunkName: "VuexPureModule" */ '@/views/VuexStore/VuexPure.vue'),
  },
  {
    path: '/summary',
    name: 'Summary',
    component: () => import(/* webpackChunkName: "Summary" */ '@/views/CardSummary/index.vue'),
  },
  {
    path: '/v-vuex-namespace',
    name: 'VuexModuleNamespaced',
    component: () =>
      import(/* webpackChunkName: "VuexModuleNamespaced" */ '@/views/VuexStore/VuexNamespace.vue'),
  },

  {
    path: '/v-vuex-dyancmic',
    name: 'VuexModuleDynamic',
    component: () =>
      import(/* webpackChunkName: "VuexModuleDynamic" */ '@/views/VuexStore/VuexDynamic.vue'),
  },
  {
    path: '/vue-extends',
    name: 'Vue-Extends',
    component: () => import(/* webpackChunkName: "vue-extends" */ '@/views/VueExtends/index.vue'),
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
]
