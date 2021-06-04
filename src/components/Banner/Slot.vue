<template>
  <div>
    <v-checkbox v-model="v0" label="Visible"></v-checkbox>
    <v-banner v-model="v0" single-line transition="slide-y-transition">
      No Internet connection
      <template v-slot:actions="{ dismiss }">
        <v-btn text color="primary" @click="dismiss"> Dismiss </v-btn>
        <v-btn text color="primary"> Retry </v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class BannerSlot extends Vue {
  private v0 = true

  dismiss(): void {
    this.v0 = false
  }
}
</script>

<style>
</style>