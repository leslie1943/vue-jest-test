<template>
  <div>
    <v-btn @click="emitEvent">Emit to show parent</v-btn>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({ name: 'EventEmitOn' })
export default class EventEmitOn extends Vue {
  emitEvent(): void {
    this.$emit('custom')
  }
}
</script>