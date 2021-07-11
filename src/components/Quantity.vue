<template>
  <div>
    <v-text-field label="PRESS '⬆' '⬇' TO CHANGE THE COUNT, AND PRESS 'ESC' WOULD RESET" type="text" placeholder="ss" @keydown.prevent="onKeyEvent" v-model="count" id="res" />

    <v-divider />
    <v-btn id="plus" @click="increment">Increment</v-btn>

    <h1 id="h2" style="text-align: center; width: 100%; color: tomato">
      {{ count }}
    </h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
@Component
export default class Count extends Vue {
  @Prop() private msg!: string
  @Prop() private age!: number
  count = 0
  statusText = ''

  // eslint-disable-next-line
  increment($event?: any): void {
    // console.info('$event', $event.count)
    this.count++
  }

  decrement(): void {
    this.count--
  }

  clear(): void {
    this.count = 0
  }

  onKeyEvent(e: KeyboardEvent): void {
    console.info('e', e)
    if (e.keyCode === 38) {
      this.increment()
    }
    if (e.keyCode === 40) {
      this.decrement()
    }

    if (e.key === 'a') {
      this.count = 13
    }

    if (e.keyCode === 27) {
      this.clear()
    }
  }

  @Watch('count')
  changeCount(newValue: number): void {
    console.info('newValue', newValue)
    this.statusText = newValue.toString()
  }
}
</script>