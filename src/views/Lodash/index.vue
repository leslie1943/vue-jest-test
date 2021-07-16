<template>
  <div>
    <h1>Lodash</h1>
    <h4>{{ chunkNums }}</h4>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as _ from 'lodash'
@Component({ name: 'LodashIndex' })
export default class LodashIndex extends Vue {
  nums: number[] = []

  created(): void {
    for (let i = 1; i <= 100; i++) {
      this.nums.push(i)
    }
  }

  get chunkNums(): number[] {
    return _.chunk(this.nums, 20)
  }
}
</script>

<style>
</style>