<template>
  <div>
    <h1>Jest demo home</h1>
    <v-divider />
    <JestInteraction />
    <v-divider />
    <JestAxios />
  </div>
</template>

<script>
import JestInteraction from "./components/jest-interaction.vue";
import JestAxios from "./components/jest-axios.vue";
import { Vue, Component } from "vue-property-decorator";
@Component({ name: 'JestIndex', components: { JestInteraction, JestAxios } })
export default class JestIndex extends Vue {
}
</script>

<style>
</style>