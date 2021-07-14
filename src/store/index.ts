import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import PersonModule from './modules/person'
import StudentModule from './modules/student'
import PassengerModule from './modules/passenger'
import GlobalBusModule from './modules/gobal-bus'
Vue.use(Vuex)

export type AppState = {
  person?: PersonModule
  errors: string[]
  token: string
  student?: StudentModule
  passenger?: PassengerModule
  bus?: GlobalBusModule
}

export const createStore = (options: { isLogger?: boolean; initialState?: Partial<AppState> }): Store<AppState> => {
  console.info(options)
  const store = new Vuex.Store({
    modules: {
      person: PersonModule,
      student: StudentModule,
      bus: GlobalBusModule,
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
