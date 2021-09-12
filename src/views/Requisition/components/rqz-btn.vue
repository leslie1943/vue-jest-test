<template>
  <div>
    <v-btn color="primary">{{ label }}</v-btn>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class RequisitionBtn extends Vue {
  @Prop() label!: string
}
</script>
