<template>
  <div>
    <div class="message">
      {{ message }}
    </div>
    Enter your username: <intput v-model="username" />
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
}
</script>
