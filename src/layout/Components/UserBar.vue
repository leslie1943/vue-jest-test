<template>
  <v-list-item two-line style="max-height: 64px">
    <v-list-item-avatar>
      <img src="https://docs.nestjs.cn/_media/icon.svg" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>NestJs@TypeOrm</v-list-item-title>
      <!-- <v-list-item-subtitle>Vue@Vite</v-list-item-subtitle> -->
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class UserBar extends Vue {}
</script>

<style scoped lang="scss">
</style>
