import { Module, VuexModule } from 'vuex-module-decorators'

@Module
export default class User extends VuexModule {
  public userInfo = {
    first: 'Su',
    last: 'Zhen',
  }
  // 💛 Getter
  get fullName(): string {
    return this.userInfo.first + ' ' + this.userInfo.last
  }
}
