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
]