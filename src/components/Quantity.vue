<template>
  <div>
    Count:<input type="text" @keydown.prevent="onKeyEvent" v-model="count" />
    <v-btn @click="add">+</v-btn>
    <div>{{ count }}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class Count extends Vue {
  count = 0
  onKeyEvent(e: KeyboardEvent): void {
    console.info(e.keyCode)
    this.count += 1
  }
  add(): void {
    this.count++
  }
  @Watch('count')
  changeCount(newValue: number): void {
    console.info('newValue', newValue)
  }
}
</script>