<template>
  <SetTimeout></SetTimeout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SetTimeout from '@/components/SetTimeout.vue'
@Component({ name: 'SetTimeoutIndex', components: { SetTimeout } })
export default class SetTimeoutIndex extends Vue {}
</script>