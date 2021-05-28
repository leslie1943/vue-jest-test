import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/vuex-class',
    name: 'Vuex-Class',
    component: () =>
      import(/* webpackChunkName: "vuex-class" */ '../components/Person.vue'),
  },
  {
    path: '/hello-world',
    name: 'Hello-World',
    component: () =>
      import(
        /* webpackChunkName: "hello-world" */ '@/views/HelloWorld/index.vue'
      ),
  },
  {
    path: '/message-list',
    name: 'Message-List',
    component: () =>
      import(
        /* webpackChunkName: "message-list" */ '@/views/MessageList/index.vue'
      ),
  },
  {
    path: '/user-name',
    name: 'User-Name',
    component: () =>
      import(/* webpackChunkName: "message" */ '@/views/UserName/index.vue'),
  },
  {
    path: '/quantity',
    name: 'Quantity',
    component: () =>
      import(/* webpackChunkName: "quantity" */ '../components/Quantity.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
