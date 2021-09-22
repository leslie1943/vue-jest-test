<template>
  <v-row class="mb-10">
    <v-col cols="6">
      <div class="mt-10"></div>
      <v-divider></v-divider>
      <v-card class="mx-auto" max-width="50vw" v-if="showFree">
        <v-img class="white--text align-end" src="../../assets/performance/70w-freeze.png">
          <v-card-title>After freeze</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0"> 7000,00 rows data </v-card-subtitle>
        <v-card-actions>
          <v-btn color="orange" @click="handleFreeze"> Show Origin Performance. </v-btn>
          <v-btn @click="showBoth" color="primary">Show Both</v-btn>
        </v-card-actions>
      </v-card></v-col
    >
    <v-col cols="6">
      <div class="mt-10"></div>
      <v-divider></v-divider>
      <v-card class="mx-auto" max-width="50vw" v-if="showOrigin">
        <v-img class="white--text align-end" src="../../assets/performance/70w-original.png">
          <v-card-title>Original </v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0"> 7000,00 rows data </v-card-subtitle>
        <v-card-actions>
          <v-btn color="green" @click="handleOrigin"> Show Freeze Performance. </v-btn>
          <v-btn @click="showBoth" color="primary">Show Both</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class GlobalUserCompare extends Vue {
  showFree = true
  showOrigin = true
  handleOrigin() {
    this.showFree = true
    this.showOrigin = !this.showFree
  }
  handleFreeze() {
    this.showFree = false
    this.showOrigin = true
  }

  showBoth() {
    this.showFree = true
    this.showOrigin = true
  }
}
</script>