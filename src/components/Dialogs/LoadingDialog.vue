<template>
  <div class="text-center" style="padding: 20px">
    <v-btn
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="purple darken-2"
      @click.stop="dialog = true"
    >
      Start loading
    </v-btn>
    <v-dialog v-model="dialog" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Loading...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-1"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component({})
export default class LoadingDialog extends Vue {
  dialog = false

  @Watch('dialog')
  setDialog(val: boolean): void {
    if (!val) {
      return
    } else {
      setTimeout(() => {
        this.dialog = false
      }, 2000)
    }
  }
}
</script>