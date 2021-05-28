import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import PersonModule from './modules/person'
Vue.use(Vuex)

export type AppState = {
  person: PersonModule
  errors: string[]
}

export const createStore = (options: {
  isLogger?: boolean
  initialState?: Partial<AppState>
}): Store<AppState> => {
  console.info(options)
  const store = new Vuex.Store({
    modules: {
      person: PersonModule,
    },
    mutations: {},
    actions: {},
    state: {
      errors: [],
    },
  })

  return store
}

export default createStore({ isLogger: true, initialState: {} })
