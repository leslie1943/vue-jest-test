<template>
  <div>
    <v-btn @click="onCreate">Requisition</v-btn>
    <rqz-dialog :isShow.sync="show" :close="close">
      <template v-slot>
        <rqz-edit></rqz-edit>
      </template>
    </rqz-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RqzDialog from './components/rqz-dialog.vue'
import RqzEdit from './components/rqz-edit.vue'
import RqzType from './components/rqz-type.vue'
@Component({ components: { RqzDialog, RqzType, RqzEdit } })
export default class RequisitionHome extends Vue {
  show = false
  onCreate(): void {
    this.show = true
  }
  close(): void {
    this.show = false
  }
}
</script>
