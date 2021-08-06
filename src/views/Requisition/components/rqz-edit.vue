<template>
  <div>
    <rqz-type />
    <rqz-man @man-change="handleManChange" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RqzType from './rqz-type.vue'
import RqzMan from './rqz-man.vue'
@Component({ components: { RqzType, RqzMan } })
export default class RequisitionEdit extends Vue {
  handleManChange(man: string): void {
    console.log(
      '🚀 ~ file: rqz-edit.vue ~ line 14 ~ RequisitionEdit ~ handleManChange ~ man',
      man
    )
  }
}
</script>
