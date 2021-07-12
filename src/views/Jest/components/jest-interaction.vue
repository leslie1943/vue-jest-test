<template>
  <v-container class="grey lighten-5">
    <v-btn color="primary" @click="add">Add up</v-btn>
    <p>Total clicks:{{ count }}</p>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({ name: 'JestTestInteraction', components: {} })
export default class JestTestInteraction extends Vue {
  count = 0
  add(): void {
    this.count++
  }
}
</script>

<style>
</style>