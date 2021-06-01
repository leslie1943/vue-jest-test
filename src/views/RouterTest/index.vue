<template>
  <RouterTest />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RouterTest from '@/components/RouterTest.vue'
@Component({ name: 'RouterTestIndex', components: { RouterTest } })
export default class RouterTestIndex extends Vue {}
</script>