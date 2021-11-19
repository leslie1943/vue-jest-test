<template>
  <div>
    <div>
      <v-btn color="primary" @click="handleFirst">First</v-btn>
    </div>
    <div class="res">
      {{ btnCount }}
    </div>

    <v-btn :style="{ color: color }" class="1" @click="changeColor">TEST</v-btn>
    <v-btn class="2">TEST</v-btn>
    <v-btn class="3">TEST</v-btn>
    <div>
      <ul>
        <li class="app1">apples</li>
        <li class="app2">apples</li>
        <li>oranges</li>
        <li>bananas</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CypressCommandContains extends Vue {
  btnCount = 0
  color = 'green'
  handleFirst() {
    this.btnCount++
  }
  changeColor() {
    this.color = 'orange'
  }
}
</script>
<style lang="scss" scoped>
</style>