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
export default class JestMountSlot extends Vue {
  allowPaths = ['/profile/view', '/profile/edit']

  get isProfilePage(): boolean {
    return this.allowPaths.includes(this.$route.path)
  }
}
</script>