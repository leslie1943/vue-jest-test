<template>
  <div>
    <div class="pa-10">
      <v-btn color="primary" @click="toggle">Toggle</v-btn>
    </div>
    <v-divider></v-divider>
    <div>
      <CardSummary route="/home" title="Hello Leslie" :isShow="show" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CardSummary from '@/components/CardSummary.vue'
@Component({ components: { CardSummary } })
export default class CardSummaryIndex extends Vue {
  show = true

  toggle(): void {
    this.show = !this.show
  }
}
</script>
