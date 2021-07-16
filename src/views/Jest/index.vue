<template>
  <div>
    <h1>Jest demo home</h1>
    <v-divider />
    <JestInteraction />
    <v-divider />
    <JestAxios />
    <v-divider />
    <JestEmit />
  </div>
</template>

<script lang="ts">
import JestInteraction from './components/jest-interaction.vue'
import JestAxios from './components/jest-axios.vue'
import JestEmit from './components/jest-emit.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({ name: 'JestIndex', components: { JestInteraction, JestAxios, JestEmit } })
export default class JestIndex extends Vue {}
</script>

<style>
</style>