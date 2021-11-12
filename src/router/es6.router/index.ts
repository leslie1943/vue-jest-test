interface RouterNormal {
  path: string
  name: string
  component: () => Promise<typeof import('*.vue')>
}
export const es6Router: RouterNormal[] = [
  {
    path: '/es6-map',
    name: 'es6-map',
    component: () => import(/* webpackChunkName: "es6-map" */ '@/views/ES6/map.vue'),
  },
]
