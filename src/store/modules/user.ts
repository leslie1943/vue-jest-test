import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { UserType, getUsers } from '../../utils/gen-user'
@Module
export default class User extends VuexModule {
  public userInfo = {
    first: 'Su',
    last: 'Zhen',
  }
  public userList: UserType[] = []
  // 💛 Getter
  get fullName(): string {
    return this.userInfo.first + ' ' + this.userInfo.last
  }

  @Mutation
  updateUserList(userList: UserType[]): void {
    this.userList = userList
  }

  @Action
  async getUserList(): Promise<void> {
    const data = await getUsers()
    this.context.commit('updateUserList', Object.freeze(data))
    // this.context.commit('updateUserList', data)
  }
}
