<template>
  <div class="home">
    <v-btn @click="onClick">Get Person by first code</v-btn>
    <v-divider />
    <v-btn @click="onClick">Get Person by last code</v-btn>
    <v-divider />
    <v-divider />
    firstName: {{ firstName }}
    <v-divider />
    lastName: {{ lastName }}
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import PersonSelector from '@/mixins/PersonSelector.mixin'

@Component({})
export default class MixinIndex extends Mixins(PersonSelector) {
  firstCode = 1
  lastCode = 2
  firstName = ''
  lastName = ''
  onClick() {
    this.setCode(this.firstCode)
    this.firstName = this.getName()
    this.setCode(this.lastCode)
    this.lastName = this.getName()
  }
}
</script>
