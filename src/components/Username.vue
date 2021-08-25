<template>
  <div>
    <div class="info">
      {{ information }}
    </div>
    <v-text-field label="Enter your username" v-model="username" />
    <div v-if="error" class="error">Please enter a username with at least seven letters</div>
    <div id="fixed" style="color: red">Fixed info</div>
    <div>
      <!-- <v-select :items="items" label="Standard"></v-select> -->
    </div>
    <div>
      aValue:{{ aValue }}
      <v-autocomplete
        v-model="aValue"
        :items="items"
        outlined
        label="Outlined"
        @change="handleChange"
        @input="handleInput"
      ></v-autocomplete>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Message extends Vue {
  username = ''
  information = 'Hello Jest'
  items = ['Foo', 'Bar', 'Fizz', 'Buzz']
  aValue = ''

  get error(): boolean {
    return this.username.trim().length < 7 ?? false
  }

  handleChange(val: string): void {
    console.info('val', val)
  }
  handleInput(val: string): void {
    console.info('val', val)
  }
}
</script>
