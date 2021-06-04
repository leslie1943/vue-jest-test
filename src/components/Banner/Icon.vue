<template>
  <div>
    <v-banner two-line>
      <v-avatar slot="icon" color="deep-purple accent-4" size="40">
        <v-icon icon="mdi-lock" color="white"> mdi-lock </v-icon>
      </v-avatar>

      Three line text string example with two actions. One to two lines is
      preferable. Three lines should be considered the maximum string length on
      desktop in order to keep messages short and actionable.

      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4"> Cancel </v-btn>
        <v-btn text color="deep-purple accent-4"> Confirm </v-btn>
      </template>
    </v-banner>

    <v-banner>
      <v-avatar slot="icon" color="deep-purple accent-4" size="40">
        <v-icon icon="mdi-lock" color="white"> mdi-lock </v-icon>
      </v-avatar>

      Three line text string example with two actions. One to two lines is
      preferable. Three lines should be considered the maximum string length on
      desktop in order to keep messages short and actionable.

      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4"> Cancel </v-btn>
        <v-btn text color="deep-purple accent-4"> Confirm </v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class BannerIcon extends Vue {
  private v0 = true

  dismiss(): void {
    this.v0 = false
  }
}
</script>

<style>
</style>