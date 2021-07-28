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
  topLoading: boolean
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
      bus: GlobalBusModule,
    },
    mutations: {
      setToken(state: AppState, token: string) {
        state.token = token
      },
      setTopLoading(state: AppState, flag: boolean) {
        state.topLoading = flag
      },
    },
    actions: {},
    state: {
      errors: [],
      token: '',
      topLoading: false,
    },
  })

  return store
}

export default createStore({ isLogger: true, initialState: {} })
