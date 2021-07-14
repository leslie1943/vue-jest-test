import { Module, Mutation, Action } from 'vuex-module-decorators'
// import store from '../index'
import BaseLoader from './common/BaseLoader'

@Module({ namespaced: true })
export default class VueBUsStore extends BaseLoader {
  public busTimerData: string[] = []

  // 💛 Mutation
  @Mutation
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  SET_BUS_DATA(data: any): void {
    this.busTimerData.push(data)
    console.log('🚀 ~ file: global-bus.ts ~ line 20 ~ VueBUsStore ~ SET_BUS_DATA ~ busTimerData', this.busTimerData)
  }

  // 💛 Action - 2: 直接 this.context.commit 调用
  @Action
  async changeBusTimer(): Promise<void> {
    this.context.commit('setLoading', true)
    setTimeout(() => {
      const timer = new Date().getTime() + ''
      this.context.commit('SET_BUS_DATA', timer)
      this.context.commit('setLoading', false)
    }, 1000)
  }
}

// 使用 getModule: 对类型安全的访问
// export const VueBUsStoreModule = getModule(VueBUsStore)
