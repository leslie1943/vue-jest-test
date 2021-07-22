<template>
  <div>
    <rqz-type />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RqzType from './rqz-type.vue'
@Component({ components: { RqzType } })
export default class RequisitionEdit extends Vue {}
</script>
