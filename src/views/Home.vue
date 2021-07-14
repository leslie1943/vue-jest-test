<template>
  <div class="home" v-loading="loading">
    <h1>JUST DO IT</h1>
    <v-divider class="my-4 info"></v-divider>
    <v-btn color="primary" @click="emitBus">emit vue bus to change store state</v-btn>
    <v-divider class="my-4 info"></v-divider>
    <h2>Global bus timer records: {{ busTimerData }}</h2>
    <img
      width="16"
      height="16"
      alt="star"
      src="data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { AppState } from '@/store'
@Component
export default class Home extends Vue {
  @State((state: AppState) => state.bus?.loading) loading!: boolean | undefined
  @State((state: AppState) => state.bus?.busTimerData) busTimerData!: string[]
  created(): void {
    console.log('🚀 ~ file: Home.vue ~ line 19 ~ Home ~ created ~ created', 'created')
    this.$bus.emit('app-bus-home')
  }

  emitBus(): void {
    this.$bus.emit('app-bus-home')
  }
}
</script>
