import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import PersonModule from './modules/person'
import StudentModule from './modules/student'
import PassengerModule from './modules/passenger'
Vue.use(Vuex)

export type AppState = {
  person?: PersonModule
  errors: string[]
  token: string
  student?: StudentModule
  passenger?: PassengerModule
}

export const createStore = (options: {
  isLogger?: boolean
  initialState?: Partial<AppState>
}): Store<AppState> => {
  console.info(options)
  const store = new Vuex.Store({
    modules: {
      person: PersonModule,
      student: StudentModule,
    },
    mutations: {
      setToken(state: AppState, token: string) {
        state.token = token
      },
    },
    actions: {},
    state: {
      errors: [],
      token: '',
    },
  })

  return store
}

export default createStore({ isLogger: true, initialState: {} })
