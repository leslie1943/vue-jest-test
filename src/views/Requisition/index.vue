<template>
  <div>
    <!-- can not trigger click event if no native decorator -->
    <!-- In vue component, all elements need to attach in root node -->
    <!-- have to add .native to handle event -->
    <rqz-btn @click.native="onCreate" label="Trigger with .native"></rqz-btn>
    <div class="mt-10"></div>
    <rqz-btn @click="onCreate" label="Trigger without .native"></rqz-btn>
    <rqz-dialog :isShow.sync="show" :close="close" @click="handleOutClick">
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
import RqzBtn from './components/rqz-btn.vue'

import { IDBSetEntity, IDBSetAssocaites } from '@/idb'
@Component({ components: { RqzDialog, RqzType, RqzEdit, RqzBtn } })
export default class RequisitionHome extends Vue {
  show = false
  onCreate(): void {
    this.show = true
  }
  close(): void {
    this.show = false
  }

  handleOutClick(): void {
    console.info('rqz-dialog ')
  }

  async created() {
    await IDBSetEntity()
    await IDBSetAssocaites()
  }
}
</script>
