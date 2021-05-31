// import { AppState } from '@/store'

type State = {
  token: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setToken = (state: State, token: string): void => {
  // console.info('state in mutation file', state)
  state.token = token
  // console.info('state in mutation file', state)
}

export default {
  setToken,
}
