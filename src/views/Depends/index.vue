<template>
  <Depends />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Depends from '@/components/Depends.vue'
@Component({ name: 'DependsIndex', components: { Depends } })
export default class DependsIndex extends Vue {}
</script>