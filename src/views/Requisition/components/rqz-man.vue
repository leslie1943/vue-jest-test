<template>
  <div>
    <v-select
      v-model="man"
      :items="items"
      filled
      label="Filled style"
      @change="handleChange"
    ></v-select>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
@Component({})
export default class RequisitionMan extends Vue {
  items = ['Foo', 'Bar', 'Fizz', 'Buzz']
  man = ''
  @Emit('man-change')
  handleChange(): string {
    return this.man
  }
}
</script>
