interface RouterNormal {
  path: string
  name: string
  component: () => Promise<typeof import('*.vue')>
}
export const vuetifyRouter: RouterNormal[] = [
  {
    path: '/snack-bar',
    name: 'SnackBar',
    component: () => import(/* webpackChunkName: "snack-bar" */ '@/views/SnackBar/index.vue'),
  },
  {
    path: '/list-item',
    name: 'ListItem',
    component: () => import(/* webpackChunkName: "list-item" */ '@/views/ListItem/index.vue'),
  },
  {
    path: '/v-select',
    name: 'v-select',
    component: () => import(/* webpackChunkName: "v-select" */ '@/views/V-Select/index.vue'),
  },
  {
    path: '/tree-view',
    name: 'TreeView',
    component: () => import(/* webpackChunkName: "tree-view" */ '@/views/TreeView/index.vue'),
  },
  {
    path: '/tree-view-detail',
    name: 'TreeView Detail',
    component: () => import(/* webpackChunkName: "list-item" */ '@/views/TreeViewDetail/index.vue'),
  },
  {
    path: '/message-list',
    name: 'Message-List',
    component: () => import(/* webpackChunkName: "message-list" */ '@/views/MessageList/index.vue'),
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
    path: '/card-enums',
    name: 'CardEnums',
    component: () => import(/* webpackChunkName: "CardEnums" */ '@/views/CardTypes/index.vue'),
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
    path: '/requisition',
    name: 'Requisition',
    component: () => import(/* webpackChunkName: "requisition" */ '@/views/Requisition/index.vue'),
  },
]
