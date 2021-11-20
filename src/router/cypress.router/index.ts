interface RouterNormal {
  path: string
  name: string
  component: () => Promise<typeof import('*.vue')>
}
export const cypressRouter: RouterNormal[] = [
  {
    path: '/cypress-command-and',
    name: 'cypress-command-and',
    component: () =>
      import(/* webpackChunkName: "cypress-command-and" */ '@/views/Cypress/command/api-and.vue'),
  },
  {
    path: '/cypress-command-as',
    name: 'cypress-command-as',
    component: () =>
      import(/* webpackChunkName: "cypress-command-as" */ '@/views/Cypress/command/api-as.vue'),
  },
  {
    path: '/cypress-command-blur',
    name: 'cypress-command-blur',
    component: () =>
      import(/* webpackChunkName: "cypress-command-blur" */ '@/views/Cypress/command/api-blur.vue'),
  },
  {
    path: '/cypress-command-check',
    name: 'cypress-command-check',
    component: () =>
      import(
        /* webpackChunkName: "cypress-command-check" */ '@/views/Cypress/command/api-check.vue'
      ),
  },
  {
    path: '/cypress-command-children',
    name: 'cypress-command-children',
    component: () =>
      import(
        /* webpackChunkName: "cypress-command-children" */ '@/views/Cypress/command/api-children.vue'
      ),
  },
  {
    path: '/cypress-command-clear',
    name: 'cypress-command-clear',
    component: () =>
      import(
        /* webpackChunkName: "cypress-command-clear" */ '@/views/Cypress/command/api-clear.vue'
      ),
  },
  {
    path: '/cypress-command-clear-cookie',
    name: 'cypress-command-clear-cookie',
    component: () =>
      import(
        /* webpackChunkName: "cypress-command-clear-cookie" */ '@/views/Cypress/command/api-clear-cookie.vue'
      ),
  },
  {
    path: '/cypress-command-clearLocalStorage',
    name: 'cypress-command-clearLocalStorage',
    component: () =>
      import(
        /* webpackChunkName: "cypress-command-clearLocalStorage" */ '@/views/Cypress/command/api-clear-localstorage.vue'
      ),
  },
  {
    path: '/cypress-command-click',
    name: 'cypress-command-click',
    component: () =>
      import(
        /* webpackChunkName: "cypress-command-click" */ '@/views/Cypress/command/api-click.vue'
      ),
  },
  {
    path: '/cypress-command-clock',
    name: 'cypress-command-clock',
    component: () =>
      import(
        /* webpackChunkName: "cypress-command-clock" */ '@/views/Cypress/command/api-clock.vue'
      ),
  },
  {
    path: '/cypress-command-contains',
    name: 'cypress-command-contains',
    component: () =>
      import(
        /* webpackChunkName: "cypress-command-contains" */ '@/views/Cypress/command/api-contains.vue'
      ),
  },
  {
    path: '/cypress-command-debug',
    name: 'cypress-command-debug',
    component: () =>
      import(
        /* webpackChunkName: "cypress-command-debug" */ '@/views/Cypress/command/api-debug.vue'
      ),
  },
]
