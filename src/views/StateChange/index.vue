<template>
  <StateChange />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import StateChange from '@/components/StateChange.vue'
@Component({ name: 'StateChangeIndex', components: { StateChange } })
export default class StateChangeIndex extends Vue {}
</script>