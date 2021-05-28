<template>
  <div>
    <v-text-field
      label="PRESS '⬆' '⬇' TO CHANGE THE COUNT, AND PRESS 'ESC' WOULD RESET"
      type="text"
      placeholder="ss"
      @keydown.prevent="onKeyEvent"
      v-model="count"
    />

    <h1 style="text-align: center; width: 100%; color: tomato">{{ count }}</h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class Count extends Vue {
  count = 0
  onKeyEvent(e: KeyboardEvent): void {
    console.info(e.keyCode)
    if (e.keyCode === 38) {
      this.count++
    }

    if (e.keyCode === 40) {
      this.count--
    }

    if (e.key === 'a') {
      this.count = 13
    }

    if (e.keyCode === 27) {
      this.count = 0
    }
  }

  @Watch('count')
  changeCount(newValue: number): void {
    console.info('newValue', newValue)
  }
}
</script>