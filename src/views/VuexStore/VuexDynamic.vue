<template>
  <v-card class="mx-auto" max-width="40%" style="margin: 20px">
    <v-img
      class="white--text align-end"
      height="auto"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title
        >This is one of vuex usage: @Module,
        <v-chip color="error"
          >@Module({name: 'passenger',dynamic: true, store})</v-chip
        >
      </v-card-title>
    </v-img>

    <v-card-text class="text--secondary">
      <v-alert border="top" color="red lighten-2" dark>
        但是不能注册到 @/store/index的 modules中,否则
      </v-alert>
      <v-alert text prominent type="error" icon="mdi-cloud-alert">
        Uncaught Error: Store not provided in decorator options when using
        dynamic option
      </v-alert>
      <v-alert type="success">
        使用的时候注意: @Module({name: 'passenger',dynamic: true, store}): name:
        必须要填写
      </v-alert>
    </v-card-text>

    <v-card-text class="text--secondary">
      <div>This is an about {{ userNumber }} users</div>
    </v-card-text>

    <v-card-text class="text--primary">
      <div>这种形式的store不需要在@/store/index文件中的modules注册</div>
    </v-card-text>

    <v-card-text class="text--primary">
      <div>这种形式的store: 可以使用 namespace的形式 使用方法</div>
    </v-card-text>

    <v-card-text class="text--primary">
      <div>
        这种形式的store: 也可以使用 import 整个模块 的形式使用 XXXModule.fn()
      </div>
    </v-card-text>

    <v-card-text class="text--primary">
      {{ loginInfo }}
    </v-card-text>

    <v-card-text class="text--primary">
      username: {{ username }} <br />
      password: {{ password }}
    </v-card-text>

    <v-card-actions>
      <v-btn :loading="pageDataLoading" color="primary" @click="onAddOne"
        >Add 1</v-btn
      >
      <v-btn :loading="pageDataLoading" color="error" @click="handleAdd2"
        >Add 2
      </v-btn>
      <v-btn :loading="pageDataLoading" color="orange" @click="setCompany"
        >Set company</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PassengerStoreModule, PassengerUser } from '@/store/modules/passenger'
import { Action, State } from 'vuex-class'
import { AppState } from '@/store'
const namespace = 'passenger'

@Component
export default class VuexDynamicPassenger extends Vue {
  loginInfo: PassengerUser[] = []
  userNumber = 0
  username = ''
  password = ''
  @State((state: AppState) => state.passenger?.loading) pageDataLoading:
    | boolean
    | undefined

  // dynamic 的 module 可以使用 namespace的形式.
  @Action('addOne', { namespace }) addOne!: () => Promise<void>

  onAddOne(): void {
    this.addOne()
    this.refreshPage()
  }

  handleAdd2(): void {
    // dynamic 的 module 也可以使用 import 的形式使用
    PassengerStoreModule.addTwo()
    this.refreshPage()
  }

  async setCompany(): Promise<void> {
    await PassengerStoreModule.setCompany()
    this.refreshPage()
  }

  refreshPage(): void {
    this.$nextTick(() => {
      setTimeout(() => {
        this.loginInfo = PassengerStoreModule.loginInfo
        this.userNumber = PassengerStoreModule.userNumber
        this.username = PassengerStoreModule.username
        this.password = PassengerStoreModule.password

        console.info('this.$store', this.$store)
      }, 0)
    })
  }
}
</script>
