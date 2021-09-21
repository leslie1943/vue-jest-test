<template>
  <div v-loading="loading">
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
@Component({ name: 'GlobalUserIndex' })
export default class GlobalUserIndex extends Vue {
  @Action('getUserList') getUSerList!: () => Promise<void>
  @State((state: AppState) => state.user?.userList) userList!: UserType[]
  loading = false
  userItems: UserType[] = []
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
}
</script>