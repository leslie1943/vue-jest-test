<template>
  <v-footer :style="layoutStyle" app>
    <v-row justify="center">@ Beyond</v-row>
  </v-footer>
</template>
    
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { LayoutStyleType } from '@/types/layout.type'

@Component({})
export default class AppFooter extends Vue {
  @Prop() layoutStyle!: LayoutStyleType
}
</script>
