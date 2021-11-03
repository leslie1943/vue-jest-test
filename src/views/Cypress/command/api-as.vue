<template>
  <div>
    <div class="main-nav">
      <v-btn :disabled="tsFlag" @click="tsFlag = true">TypeScript</v-btn>
      <v-btn>Vue</v-btn>
      <v-btn>React</v-btn>
      <v-btn @click="nestFlag = true">NestJS</v-btn>
    </div>
    <div class="main-result">
      <v-chip v-if="tsFlag">TypeScript chip</v-chip>
      <v-chip v-if="nestFlag">NestJS chip</v-chip>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CypressCommandAs extends Vue {
  tsFlag = false
  nestFlag = false
}
</script>