import { getPerson } from '@/utils/person'
import { Module, Action, Mutation } from 'vuex-module-decorators'
import BaseLoader from './common/BaseLoader'

export type Man = {
  name: string
  age: number
}

@Module({ namespaced: true })
export default class Person extends BaseLoader {
  man: Man | null = null

  @Mutation
  private setPerson(man: Man) {
    this.man = man
  }

  @Action
  public async getPerson(): Promise<void> {
    this.context.commit('setLoading', true)
    const data = await getPerson()
    this.context.commit('setPerson', data)
    this.context.commit('setLoading', false)
  }
}
