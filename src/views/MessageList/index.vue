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
  beforeRouteLeave(to, from, next) {
    console.info('Message list beforeRouteLeave >>>>>>>>> to', to)
    console.info('Message list beforeRouteLeave >>>>>>>>> from', from)
    if (to.path !== '/hello-world') {
      delete from.meta.position
    }
    next()
  },
})
export default class MessageListIndex extends Vue {
  messages: string[] = ['Dora', 'Mark', 'Justin']
}
</script>
