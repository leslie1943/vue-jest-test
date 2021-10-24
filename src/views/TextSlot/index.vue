<template>
  <v-container>
    <v-text-field
      label="Name"
      outlined
      v-model="baseInfo.name"
      maxlength="50"
      @input="validateName"
    >
      <icon-suffix slot="append" :hasBeenUsed="hasBeenUsed" label="Entity name"></icon-suffix>
    </v-text-field>
  </v-container>
</template>
<script lang="ts">
import IconSuffix from './components/icon-suffix.vue'
import { Vue, Component } from 'vue-property-decorator'
import { Debounce } from 'lodash-decorators'
import personService from '@/utils/person'

type PersonItem = {
  id: number
  name: string
}

@Component({ name: 'TextSlotIndex', components: { IconSuffix } })
export default class TextSlotIndex extends Vue {
  hasBeenUsed: null | boolean = null
  baseInfo = {
    name: '',
  }

  people: null | { name: string; age: number } = null

  persons: PersonItem[] = [
    { id: 1, name: 'leslie' },
    { id: 2, name: 'dora' },
    { id: 3, name: 'mark' },
  ]

  // @Bind()
  @Debounce(500)
  validateName(): void {
    this.hasBeenUsed = null
    if (this.baseInfo.name.trim().length > 0) {
      this.hasBeenUsed = this.persons.some(
        (item) => item.name.toUpperCase() === this.baseInfo.name.trim().toUpperCase()
      )
    }
  }

  async getDataNormal() {
    const data = await personService.getPerson()
    this.people = data
  }
  @Debounce(500)
  async getDataDebounced() {
    const data = await personService.getPerson()
    this.people = data
  }
}
</script>