<template>
  <div>
    <v-banner single-line @click:icon="show">
      <v-icon slot="icon" color="warning" size="36">
        mdi-wifi-strength-alert-outline
      </v-icon>
      Unable to verify your Internet connection

      <template v-slot:actions>
        <v-btn color="primary" text> Connection Settings </v-btn>
      </template>
    </v-banner>
    <v-overlay :absolute="absolute" :value="overlay">
      <v-btn color="success" @click="overlay = false"> Hide Overlay </v-btn>
    </v-overlay>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class BannerFirst extends Vue {
  private absolute = true
  private overlay = false

  show(): void {
    this.overlay = true
  }
}
</script>

<style>
</style>