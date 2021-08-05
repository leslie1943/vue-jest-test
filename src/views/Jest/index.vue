<template>
  <div>
    <h1>Jest demo home</h1>
    <v-divider />
    <JestInteraction />
    <v-divider />
    <JestAxios />
    <v-divider />
    <JestEmit />
    <v-divider />
    {{ 'Y' | YN }}
    {{ 'D' | YN }}
    {{ 'N' | YN }}
  </div>
</template>

<script lang="ts">
import JestInteraction from './components/jest-interaction.vue'
import JestAxios from './components/jest-axios.vue'
import JestEmit from './components/jest-emit.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'JestIndex',
  components: { JestInteraction, JestAxios, JestEmit },
  beforeRouteLeave(to, from, next) {
    if (to.path === '/home') {
      ;(this as any).showSuccess()
    } else {
      ;(this as any).showInfo()
    }
    next()
  },
  filters: {
    YN(val: 'Y' | 'N'): string {
      if (!val) return ''
      const options = {
        Y: 'Yes',
        N: 'No',
      }
      return options[val]
    },
  },
})
export default class JestIndex extends Vue {
  created(): void {
    console.info(this.$route)
    this.$bus.on('submit-request', this.submit)
  }

  submit(values: { name: string; age: number }): void {
    console.info('<<<<<submit>>>>>')
    console.info(values.name)
    console.info(values.age)
  }

  showSuccess(): void {
    this.$message.success('Hello trigger beforeRouteUpdate!')
  }

  showInfo(): void {
    this.$message.info('Hello trigger beforeRouteUpdate!')
  }
}
</script>

<style>
</style>