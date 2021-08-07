<template>
  <div>
    <v-select
      v-model="man"
      :items="items"
      filled
      label="Filled style"
      @change="handleChange"
    ></v-select>

    <v-select
      v-model="hero"
      :items="heros"
      filled
      label="Filled style"
      @change="handleHero"
    ></v-select>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
@Component({})
export default class RequisitionMan extends Vue {
  items = ['Foo', 'Bar', 'Fizz', 'Buzz']
  heros = ['Spider', 'Iron', 'Super', 'Green']
  man = ''
  hero = ''
  @Emit('man-change')
  handleChange(): string | void {
    // return 'fix' // will rewrite default value: this.man
  }

  @Emit('hero-change')
  handleHero(): string {
    return this.hero
  }
}
</script>
