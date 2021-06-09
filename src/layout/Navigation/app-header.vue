<template>
  <v-app-bar :style="layoutStyle">
    <template>
      <v-btn class="mx-2" fab depressed @click="toggleDrawer">
        <v-icon dark> mdi-format-list-bulleted-square </v-icon>
      </v-btn>
      Application</template
    >
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { LayoutStyleType } from '@/types/layout.type'

@Component({ components: {} })
export default class AppHeader extends Vue {
  @Prop() layoutStyle!: LayoutStyleType

  toggleDrawer(): void {
    this.$emit('toggle')
  }
}
</script>