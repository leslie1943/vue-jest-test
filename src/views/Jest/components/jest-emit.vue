<template>
  <v-container class="grey lighten-5">
    <div>Global bus timer records: {{ busTimerData }}</div>
    <v-divider />
    <v-btn color="primary" @click="onClick">this.$bus.emit('app-bus-home') be registed in Home Page</v-btn>
  </v-container>
</template>

<script lang="ts">
import { AppState } from '@/store'
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
@Component({ name: 'JestEmit', components: {} })
export default class JestEmit extends Vue {
  @State((state: AppState) => state.bus?.busTimerData) busTimerData!: string[]

  onClick(): void {
    this.$emit('foo')
    this.$emit('bar', 123)
    this.$bus.emit('app-bus-home')
  }
}
</script>

<style>
</style>