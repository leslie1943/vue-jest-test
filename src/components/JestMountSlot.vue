<template>
  <div>
    <div class="header-slot">
      <slot name="header"></slot>
    </div>

    <div class="default-slot">
      <slot />
    </div>

    <div class="footer-slot">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class JestMountSlot extends Vue {}
</script>