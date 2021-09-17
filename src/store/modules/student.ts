import { Module, Mutation, Action } from 'vuex-module-decorators'
import BaseLoader from './common/BaseLoader'
import { getStudent } from '@/utils/person'

export type StudentProp = {
  name: string
  class: string
}

@Module
export default class Students extends BaseLoader {
  // 💛 STATE: should be public for accessiable
  public list: StudentProp[] = []

  get currentTime() {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDay()
    return year + '/' + month + '/' + day
  }

  // 💛 Mutation
  @Mutation
  UPDATELIST(user: StudentProp): void {
    this.list.push(user)
  }

  // 💛 Action - 1: Action 后面的括号里添加 commit, the return result is he USERINFO's parameters
  @Action({ commit: 'UPDATELIST' })
  async addStudent1(): Promise<StudentProp> {
    this.context.commit('setLoading', true)
    const data = await getStudent()
    this.context.commit('setLoading', false)
    return data
  }

  // 💛 Action - 2: 直接 this.context.commit 调用
  @Action
  async addStudent2(): Promise<void> {
    this.context.commit('setLoading', true)
    const data = await getStudent()
    this.context.commit('UPDATELIST', data)
    this.context.commit('setLoading', false)
  }
}
