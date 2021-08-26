<template>
  <v-row>
    <v-col cols="6">
      <v-select
        v-model="select"
        :hint="`${select.state}, ${select.abbr}`"
        :items="items"
        item-text="state"
        item-value="abbr"
        label="Select"
        persistent-hint
        item-disabled="disabled"
        item-color="green"
        return-object
        single-line
        outlined
        dense
        disable-lookup
      ></v-select>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class VSelectUI extends Vue {
  select = { state: 'Georgia', abbr: 'GA' }
  items = [
    { state: 'Florida', abbr: 'FL', disabled: false },
    { state: 'Georgia', abbr: 'GA', disabled: true, desc: 'Not allow' },
    { state: 'Nebraska', abbr: 'NE', disabled: false },
    { state: 'California', abbr: 'CA', disabled: true, desc: 'Not allow' },
    { state: 'New York', abbr: 'NY', disabled: false },
    { state: 'Texas', abbr: 'tx', disabled: true, desc: 'Not allow' },
  ]
}
</script>