<template>
  <v-container class="grey lighten-5">
    <v-btn color="primary" @click="fetchResults">{{ value }}</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from '@/axios/index'
@Component({ name: 'JestTestInteraction', components: {} })
export default class JestTestInteraction extends Vue {
  value = ''
  async fetchResults(): Promise<void> {
    const response = await axios.get()
    this.value = response.data
  }
}
</script>

<style>
</style>