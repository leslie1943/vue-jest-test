import store from '@/store'

type TOP_LOADING_EVENTS = {
  start: () => void
  done: () => void
}

const TOP_LOADING: TOP_LOADING_EVENTS = {
  start() {
    store.commit('setTopLoading', true)
  },
  done() {
    setTimeout(() => {
      store.commit('setTopLoading', false)
    }, 10000)
  },
}

export default TOP_LOADING
