<template>
  <div class="hello">
    <div style="margin: 20px 0">
      <strong
        >THIS PAGE DEMOSTRATE FOR `VUEX-CLASS` AND
        `VUEX-MODULE-DECORATORS`</strong
      >
    </div>
    <v-card class="mx-auto" max-width="1344">
      <v-card-text>
        <div>vuex-class demo</div>
        <p class="display-1 text--secondary">Small demo, Big Step</p>
        <div class="text--primary">
          <div>PageDataLoading: {{ pageDataLoading }}</div>
          <div>PageDataMan: {{ pageDataMan }}</div>
          <div>Errors: {{ errors }}</div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="teal accent-4"
          :loading="pageDataLoading"
          @click="getMan"
        >
          Get man Data
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-if="pageDataLoading"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0">
            <p class="display-1 text--primary">Loading</p>
            <p>Loading data from store's action and mutation</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="teal accent-4"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import { AppState } from '@/store'
import { MODULE_NAMES } from '@/store/modules/common/enum_modules'
import { Man } from '@/store/modules/person'

const namespace = MODULE_NAMES.PERSON

@Component
export default class Person extends Vue {
  // namespace: 指定 module
  // getPerson 是这个 module 下的 action
  // getMan 是映射到 组件上的方法
  @Action('getPerson', { namespace }) getMan!: () => Promise<void>

  // state是全局的 state, 可以调用到各个模块下的 state
  @State((state: AppState) => state.person.loading) pageDataLoading:
    | boolean
    | undefined

  @State((state: AppState) => state.person.man) pageDataMan: Man | undefined
  @State((state: AppState) => state.errors) errors: any

  handleGetMan = async (): Promise<void> => {
    await this.getMan()
  }
}
</script>

<style scoped lang="scss">
</style>
