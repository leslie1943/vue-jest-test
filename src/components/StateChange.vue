<template>
  <div>
    <input v-model="radio" type="radio" :value="true" />
    <select v-model="select">
      <option :value="1">选项一</option>
      <option :value="2">选项而</option>
    </select>
    <input v-model="txt" type="text" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class StateChange extends Vue {
  @Prop() private msg?: string
  foo = ''
  radio = false
  select = ''
  txt = ''
}
</script>