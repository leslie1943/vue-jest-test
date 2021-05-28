<template>
  <div class="home">
    <MessageList :messages="messages" />
    <v-divider />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MessageList from '@/components/MessageList.vue'

@Component({
  components: {
    MessageList,
  },
})
export default class MessageListIndex extends Vue {
  messages: string[] = ['Dora', 'Mark', 'Justin']
}
</script>
