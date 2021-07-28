<template>
  <v-progress-linear
    rounded
    :active="topLoading"
    :indeterminate="topLoading"
    absolute
    bottom
    color="green"
  >
  </v-progress-linear>
</template>
<script lang="ts">
import { AppState } from '@/store'
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class TopLoadingBar extends Vue {
  @State((s: AppState) => s.topLoading) topLoading: boolean | undefined
}
</script>