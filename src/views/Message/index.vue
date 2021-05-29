<template>
  <div class="home">
    <Message />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Message from '@/components/Message.vue'

@Component({ name: 'MessageIndex', components: { Message } })
export default class MessageIndex extends Vue {}
</script>