<template>
  <div>
    <EventEmitOnChild @custom="onCustom" />
    <p class="after" v-if="emitted">After Emittion</p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import EventEmitOnChild from '@/components/EventEmitOnChild.vue'
@Component({ name: 'EventEmitOnIndex', components: { EventEmitOnChild } })
export default class EventEmitOnIndex extends Vue {
  emitted = false

  onCustom(): void {
    this.emitted = true
  }
}
</script>