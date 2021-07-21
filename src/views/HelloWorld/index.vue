<template>
  <div class="home">
    <HelloWorld msg="Jest" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
@Component({
  components: {
    HelloWorld,
  },
  beforeRouteEnter(to, from, next) {
    console.info('Hello World beforeRouteEnter.from', from)
    if (from.meta.position && from.path === '/message-list') {
      next((vm) => {
        const _this = vm as any
        _this.test()
      })
    } else {
      next()
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.path === '/message-list') {
      to.meta.position = this.$data.filterData
    }

    next()
  },
})
export default class HelloWorldIndex extends Vue {
  filterData = {
    name: 'su',
    type: 12,
    address: '111',
  }

  test(): void {
    console.info('Hello aaaaaa test')
  }
}
</script>
