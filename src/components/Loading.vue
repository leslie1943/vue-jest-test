<template>
  <div v-show="showLoading" class="loading-box">
    {{ loadingText }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  showLoading = false
  loadingText = ''
  show(): void {
    this.showLoading = true
  }
  hide(): void {
    this.showLoading = false
  }
  get getLoadingText(): string {
    return this.showLoading ? 'loading show text' : ''
  }
}
</script>