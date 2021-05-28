import { VuexModule, Mutation } from 'vuex-module-decorators'

export default abstract class Loader extends VuexModule {
  loading = false

  @Mutation
  private setLoading(loading: boolean) {
    this.loading = loading
  }
}
