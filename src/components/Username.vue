<template>
  <div>
    <div class="info">
      {{ information }}
    </div>
    <v-text-field label="Enter your username" v-model="username" />
    <div v-if="error" class="error">
      Please enter a username with at least seven letters
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Message extends Vue {
  username = ''
  information = 'Hello Jest'

  get error(): boolean {
    return this.username.trim().length < 7
  }
}
</script>
