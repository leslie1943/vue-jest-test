<template>
  <div>
    <v-btn id="btn_add" @click="add">Add</v-btn>
    <v-btn id="btn_minus" @click="minus">Minus</v-btn>
    <div class="counter">{{ counter }}</div>

    <div>
      <nav>
        <a href="https://www.baidu.com" target="_blank">BaiDu</a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CypressCommandClick extends Vue {
  counter = 0

  add(): void {
    this.counter++
  }

  minus(): void {
    this.counter--
  }
}
</script>
<style lang="scss" scoped>
.counter {
  color: cadetblue;
}
</style>