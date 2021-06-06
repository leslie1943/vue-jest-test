<template>
  <v-card class="mx-auto" max-width="400" style="margin: 20px">
    <v-img
      class="white--text align-end"
      height="auto"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title
        >This is one of vuex usage: @Module,
        <v-chip color="error">ONLY @Module</v-chip>
      </v-card-title>
    </v-img>
    <v-alert color="success"
      >使用的时候不用标明命名空间(所属哪个module),直接从全局 $store 映射
      出去</v-alert
    >
    <v-card-title>
      ✅ @Action('addStudent2') addStudent2!: () => Promise
    </v-card-title>

    <v-card-text class="text--secondary">
      <div>studentList:{{ studentList }}</div>
    </v-card-text>

    <v-card-text class="text--primary">
      <div>这种形式的store需要在@/store/index文件中的modules注册</div>
    </v-card-text>

    <v-card-actions>
      <v-btn :loading="loading" color="primary" @click="handleAdd1"
        >Add 1</v-btn
      >
      <v-btn :loading="loading" @click="handleAdd2">Add 2 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import { AppState } from '@/store'
import { StudentProp } from '@/store/modules/student'
@Component
export default class PureStudent extends Vue {
  /**
   * 由于 student 是 @Module 修师的, 所以是全局的, 不支持 namespace
   */
  @Action('addStudent1') addStudent1!: () => Promise<void>
  @Action('addStudent2') addStudent2!: () => Promise<void>
  @State((state: AppState) => state.student?.list) studentList!: StudentProp[]
  @State((state: AppState) => state.student?.loading) loading!: boolean

  handleAdd1 = async (): Promise<void> => {
    await this.addStudent1()
    console.info('this.$store', this.$store)
  }

  handleAdd2 = async (): Promise<void> => {
    await this.addStudent2()
    console.info('this.$store', this.$store)
    /**
     * _actions:{
     *    addStudent1: [ƒ]
     *    addStudent2: [ƒ]
     *    person/getPerson: [ƒ]
     * }
     */

    /**
     * modulesNamespaceMap:
          passenger/: Module {runtime: true, _children: {…}, state: {…}, context: {…}, _rawModule: ƒ}
          person/: Module {runtime: false, _children: {…}, state: {…}, context: {…}, _rawModule: ƒ}
     */
  }
}
</script>

<style scoped lang="scss">
</style>
