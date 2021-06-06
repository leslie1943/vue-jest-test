<template>
  <v-card class="mx-auto" max-width="400" style="margin: 20px">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title
        >This is one of vuex usage: @Module,
        <v-chip color="error">@Module({ namespaced: true })</v-chip>
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      pageDataLoading:{{ pageDataLoading }}</v-card-subtitle
    >

    <v-card-text class="text--secondary">
      <div>pageDataMan:{{ pageDataMan }}</div>
    </v-card-text>

    <v-card-text class="text--primary">
      <v-alert color="success"
        >这种形式的store需要在@/store/index文件中的modules注册</v-alert
      >
      <v-chip color="error"
        >使用的时候一定要标明命名空间(所属哪个module)</v-chip
      >
      <v-alert color="success">
        @Action('getPerson', { namespace:'person' }) getMan!: () => Promise<void
      /></v-alert>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" :loading="pageDataLoading" @click="handleGetMan"
        >get man</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import { AppState } from '@/store'
import { MODULE_NAMES } from '@/store/modules/common/enum_modules'
import { Man } from '@/store/modules/person'

const namespace = MODULE_NAMES.PERSON

@Component
export default class NamespacedPerson extends Vue {
  // namespace: 指定 module
  // getPerson 是这个 module 下的 action
  // getMan 是映射到 组件上的方法
  @Action('getPerson', { namespace }) getMan!: () => Promise<void>
  // @Action('getPerson', { namespace }) getMan2!: () => Promise<void>

  // state是全局的 state, 可以调用到各个模块下的 state
  @State((state: AppState) => state.person?.loading) pageDataLoading:
    | boolean
    | undefined

  @State((state: AppState) => state.person?.man) pageDataMan: Man | undefined
  @State((state: AppState) => state.errors) errors: any

  handleGetMan = async (): Promise<void> => {
    await this.getMan()
    console.info('this.$store', this.$store)
  }
}
</script>

<style scoped lang="scss">
</style>
