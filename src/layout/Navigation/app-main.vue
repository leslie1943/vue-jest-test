<template>
  <v-main :style="layoutStyle">
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>
    
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { LayoutStyleType } from '@/types/layout.type'

@Component({})
export default class AppMain extends Vue {
  @Prop() layoutStyle!: LayoutStyleType
}
</script>