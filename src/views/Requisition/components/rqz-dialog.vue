<template>
  <v-dialog
    content-class="slider-overlay ma-0"
    v-model="isShow"
    :width="width"
    transition="slide-x-reverse-transition"
    persistent
    @click:outside="close"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-divider></v-divider>
    </v-card>
    <v-responsive class="slider-card">
      <slot> </slot>
    </v-responsive>
  </v-dialog>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class SliderComponent extends Vue {
  @Prop({ required: true }) private isShow!: boolean
  @Prop({ default: '80vw' }) private width!: string
  @Prop() close!: () => void
}
</script>
<style lang="scss">
.slider-overlay {
  position: fixed;
  height: 100%;
  right: 0;
  top: 0;
  background-color: #ffffff;
  max-height: 100% !important;
  border-radius: 0 !important;
  .slider-card {
    height: 100%;
  }
}
</style>
