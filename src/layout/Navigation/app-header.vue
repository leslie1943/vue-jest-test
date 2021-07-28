<template>
  <v-app-bar :style="layoutStyle">
    <template>
      <v-btn class="mx-3" small dark fab icon @click="toggleDrawer">
        <v-icon dark> mdi-tune </v-icon>
      </v-btn>
      <span style="color: #fff">Application</span>
      <TopLoadingBar />
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { LayoutStyleType } from '@/types/layout.type'
import TopLoadingBar from '@/components/TopLoading/index.vue'

@Component({ components: { TopLoadingBar } })
export default class AppHeader extends Vue {
  @Prop() layoutStyle!: LayoutStyleType

  toggleDrawer(): void {
    this.$emit('toggle')
  }
}
</script>
