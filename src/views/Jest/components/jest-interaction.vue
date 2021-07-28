<template>
  <v-container class="grey lighten-5">
    <v-btn color="primary" @click="add">Add up</v-btn>
    <v-btn class="incre" color="primary" @click="increment">increment</v-btn>
    <p>Total clicks:{{ count }}</p>
    <v-btn color="primary" @click="toHome">Add up</v-btn>
    <v-btn color="primary" @click="toEmit">emit</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({ name: 'JestTestInteraction', components: {} })
export default class JestTestInteraction extends Vue {
  count = 0
  msg = ''
  person = { name: 'leslie', age: 10 }

  add(): void {
    this.count++
  }

  toEmit(): void {
    this.$bus.emit('submit-request', this.person)
    this.count++
  }

  increment(): void {
    this.count++
  }

  triggerIncremente(): void {
    this.increment()
  }

  toHome(msg: string): void {
    this.msg = msg
    this.$set(this.person, 'name', msg)
  }

  showMsg(): void {
    this.$message.info('1234')
    this.$message.warning('1234')
    this.$message.success('1234')
    this.$message.error('1234')
  }

  getPerson(): void {
    this.getName()
  }

  getName(): void {
    console.info('getName')
  }
  getAge(): void {
    this.$message.success('1234')
  }

  test(): void {
    console.info('$test')
  }

  getCompanyName(): string {
    return 'Hello Wworld'
  }

  getMan(): void {
    this.getName()
    this.getAge()
    this.getCompanyName()
  }
}
</script>

<style>
</style>