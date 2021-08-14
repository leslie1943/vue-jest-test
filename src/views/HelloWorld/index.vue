<template>
  <div class="home">
    <HelloWorld msg="Jest" />

    <div>partial WOW 1 <HelloWorld :msg="partialWOW_1" /></div>
    <div>
      partial WOW 2
      <HelloWorld :msg="partialWOW_2" />
    </div>
    <div>full WOW <HelloWorld :msg="fullWOW" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import { WoW } from '@/types/game.types'
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

  partialWOW_1: Partial<WoW> = {
    career: { name: 'Leslie', nation: 'undead' },
  }
  partialWOW_2: Partial<WoW> = {
    cast: { harm: 'Blizard', level: 22 },
  }
  fullWOW: Partial<WoW> = {
    career: { name: 'Leslie', nation: 'undead' },
    cast: { harm: 'Blizard', level: 22 },
  }

  mounted(): void {
    console.log('🚀 ~ file: ~ partialWOW_1', this.partialWOW_1)
    console.log('🚀 ~ file: ~ partialWOW_2', this.partialWOW_2)
    console.log('🚀 ~ file: ~ fullWOW', this.fullWOW)
  }

  test(): void {
    console.info('Hello aaaaaa test')
  }
}
</script>
