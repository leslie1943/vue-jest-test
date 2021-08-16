<template>
  <div class="home">
    <HelloWorld msg="Jest" />

    <div>partial WOW 1 <HelloWorld :msg="partialPet_1" /></div>
    <div>
      partial WOW 2
      <HelloWorld :msg="partialPet_2" />
    </div>
    <div>full WOW <HelloWorld :msg="fullWOW" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import { Pet } from '@/types/advanced-partial.types'
import { Params } from '@/types/advanced-tagged-union.types'
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

  partialPet_1: Partial<Pet> = {
    // cat: { name: 'Tom',  }, // Property 'age' is missing in type '{ name: string; }' but required in type 'Cat'.Vetur(2741)
    cat: { name: 'Tom', age: 22 },
  }
  partialPet_2: Partial<Pet> = {
    dog: { weight: 11, height: 20 },
  }
  fullWOW: Partial<Pet> = {
    cat: { name: 'Tom', age: 2 },
    dog: { weight: 11, height: 20 },
  }

  mounted(): void {
    console.log('🚀 ~ file: ~ partialPet_1', this.partialPet_1)
    console.log('🚀 ~ file: ~ partialPet_2', this.partialPet_2)
    console.log('🚀 ~ file: ~ fullWOW', this.fullWOW)
    this.taggedUnion('foo', 123)
    this.taggedUnion('foo', '123')
    // this.taggedUnion('foo', true)

    // taggedUnionMore<"foo">(type: "foo", value: string): void
    this.taggedUnionMore('foo', '123')
  }

  test(): void {
    console.info('Hello aaaaaa test')
  }

  taggedUnion<TParams extends Params>(
    type: TParams['type'],
    value: TParams['value']
  ): void {
    console.log(
      '🚀 ~ file: advanced-tagged-union.types.ts ~ line 17 ~ type',
      type
    )
    console.log(
      '🚀 ~ file: advanced-tagged-union.types.ts ~ line 17 ~ value',
      value
    )
  }

  taggedUnionMore<TType extends Params['type']>(
    type: TType,
    value: Extract<Params, { type: TType }>['value']
  ): void {
    console.log(
      '🚀 ~ file: advanced-tagged-union.types.ts ~ line 17 ~ type',
      type
    )
    console.log(
      '🚀 ~ file: advanced-tagged-union.types.ts ~ line 17 ~ value',
      value
    )
  }
}
</script>
