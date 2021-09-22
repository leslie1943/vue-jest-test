<template>
  <div v-loading="loading">
    <GlobalUserCompare />
    <v-data-table
      :headers="headers"
      :items="userList"
      :items-per-page="50"
      class="elevation-1"
      :fixed-header="true"
      height="80vh"
    ></v-data-table>
  </div>
</template>
<script lang="ts">
import { AppState } from '@/store'
import { UserType } from '@/utils/gen-user'
import { Vue, Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import GlobalUserCompare from './compare.vue'

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const imageFreeSrc = require('@/assets/performance/70w-freeze.png')

@Component({ name: 'GlobalUserIndex', components: { GlobalUserCompare } })
export default class GlobalUserIndex extends Vue {
  @Action('getUserList') getUSerList!: () => Promise<void>
  @State((state: AppState) => state.user?.userList) userList!: UserType[]
  loading = false
  // imageFreeSrc = imageFreeSrc
  userItems: UserType[] = []

  showFree = true
  showOrigin = true
  headers = [
    { text: 'Name', align: 'start', value: 'name' },
    { text: 'CorpId', value: 'corpId' },
    { text: 'Employee Id', value: 'employeeId' },
  ]
  async mounted() {
    this.loading = true
    await this.getUSerList()
    // this.userItems = this.userList
    this.loading = false
  }

  handleOrigin() {
    this.showFree = true
    this.showOrigin = false
  }

  handleFreeze() {
    this.showFree = false
    this.showOrigin = true
  }
}
</script>