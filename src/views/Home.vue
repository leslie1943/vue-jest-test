<template>
  <div class="home">
    <router-link to="/">Home</router-link>
    <v-divider :vertical="true" />
    <router-link to="/vuex-class">Vuex-class</router-link>
    <HelloWorld msg="Jest" />
    <v-divider />
    <MessageList :messages="messages" />
    <v-divider />
    <Message />
    <v-divider />
    <Quantity />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import MessageList from '@/components/MessageList.vue'
import Message from '@/components/Username.vue'
import Quantity from '@/components/Quantity.vue'

@Component({
  components: {
    HelloWorld,
    MessageList,
    Message,
    Quantity,
  },
})
export default class Home extends Vue {
  messages: string[] = ['Dora', 'Mark', 'Justin']
}
</script>
