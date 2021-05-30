<template>
  <div class="hello">
    {{ timeText }}<br />
    {{ percent }}
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class SetTimeout extends Vue {
  timer: any = null
  percent = 0
  timeText = ''

  start(): void {
    this.percent = 0
    this.timer = setInterval(() => {
      this.percent++
      if (this.percent >= 100) {
        this.finish()
      }
    }, 100)
  }

  finish(): void {
    this.percent = 100
    clearInterval(this.timer)
  }

  mounted(): void {
    setTimeout(() => {
      this.timeText = 'setTimeout text'
    }, 1000)
  }
}
</script>