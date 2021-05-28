<template>
  <div class="home">
    <HelloWorld msg="Jest" />
    <v-divider />
    <MessageList :messages="messages" />
    <v-divider />
    <Message />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import MessageList from '@/components/MessageList.vue'
import Message from '@/components/Username.vue'

@Component({
  components: {
    HelloWorld,
    MessageList,
    Message,
  },
})
export default class Home extends Vue {
  messages: string[] = ['Dora', 'Mark', 'Justin']
}
</script>
