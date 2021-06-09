<template>
  <v-list-item two-line style="max-height: 64px">
    <v-list-item-avatar>
      <img
        src="https://img2.baidu.com/it/u=2505345948,1585977908&fm=26&fmt=auto&gp=0.jpg"
      />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>Steven Gerrard</v-list-item-title>
      <v-list-item-subtitle>Liverpool@Anfield</v-list-item-subtitle>
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
