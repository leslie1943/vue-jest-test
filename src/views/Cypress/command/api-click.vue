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

    <v-row>
      <v-col v-for="i in 3" :key="i" :cols="4">
        <v-img
          @click="imageClick(i)"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-col>
    </v-row>
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

  imageClick(id: number) {
    console.info('image', id)
  }
}
</script>
<style lang="scss" scoped>
.counter {
  color: cadetblue;
}
</style>