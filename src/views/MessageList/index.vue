<template>
  <div class="home">
    <MessageList :messages="messages" />
    <v-divider />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MessageList from '@/components/MessageList.vue'
import { Pet } from '@/types/advanced-readonly.types'

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
  mounted(): void {
    this.onReadOnly()
  }

  onReadOnly(): void {
    const pet: Readonly<Pet> = {
      cat: {
        name: 'tom',
        age: 2,
      },
      dog: {
        weight: 22,
        height: 22,
      },
    }
    console.log(
      '🚀 ~ file: index.vue ~ line 30 ~ MessageListIndex ~ mounted ~ pet',
      pet
    )
    // pet.cat = { name: 'jerry', age: 10 } // Cannot assign to 'cat' because it is a read-only property
    pet.cat.name = 'Jerry' // you can chagne
  }
}
</script>
