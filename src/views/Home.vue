<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <MessageList :messages="messages" />
    <Message />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import MessageList from '@/components/MessageList.vue' // @ is an alias to /src
import Message from '@/components/Message.vue' // @ is an alias to /src

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
