import { getUser, getPassenger } from '@/utils/person'
import {
  Module,
  Mutation,
  Action,
  getModule,
  MutationAction,
} from 'vuex-module-decorators'
import store from '../index'
import BaseLoader from './common/BaseLoader'

export type PassengerUser = {
  name: string
  password: string
}

@Module({
  name: 'passenger',
  dynamic: true,
  namespaced: true,
  store,
})
export default class PassengerStore extends BaseLoader {
  // 💛 STATE: should be public for accessiable
  public loginInfo: PassengerUser[] = []

  // 💛 mutation-action State
  public username = ''
  public password = ''

  // 💛 Getter:
  get userNumber(): number {
    return this.loginInfo.length
  }

  // 💛 Mutation
  @Mutation
  USERINFO(user: PassengerUser): void {
    this.loginInfo.push(user)
  }

  // 💛 Action - 1: Action 后面的括号里添加 commit, the return result is he USERINFO's parameters
  @Action({ commit: 'USERINFO' })
  async addOne(): Promise<PassengerUser> {
    this.context.commit('setLoading', true)
    const user = await getPassenger('suzhen', 'father')
    this.context.commit('setLoading', false)
    return user
  }

  // 💛 Action - 2: 直接 this.context.commit 调用
  @Action
  async addTwo(): Promise<void> {
    this.context.commit('setLoading', true)
    const user = await getPassenger('moon', 'son')
    this.context.commit('USERINFO', user)
    this.context.commit('setLoading', false)
  }

  // 💛 MutationAction: this 里没有 context
  @MutationAction({ mutate: ['username', 'password'] })
  async setCompany(): Promise<{ username: string; password: string }> {
    ;(this as any).commit('setLoading', true)
    const data: {
      username: string
      password: string
    } = await getUser()
    ;(this as any).commit('setLoading', false)
    return data
  }
}

// 使用 getModule: 对类型安全的访问
export const PassengerStoreModule = getModule(PassengerStore)
