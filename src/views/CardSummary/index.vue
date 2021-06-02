<template>
  <div>
    <CardSummary route="/home" title="Hello Leslie"></CardSummary>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CardSummary from '@/components/CardSummary.vue'
@Component({ components: { CardSummary } })
export default class CardSummaryIndex extends Vue {}
</script>
