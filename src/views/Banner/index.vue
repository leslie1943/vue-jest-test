<template>
  <div style="margin: 20px">
    <BannerFirst />
    <BannerEvent />
    <BannerSlot />
    <BannerIcon />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BannerFirst from '@/components/Banner/First.vue'
import BannerEvent from '@/components/Banner/Event.vue'
import BannerSlot from '@/components/Banner/Slot.vue'
import BannerIcon from '@/components/Banner/Icon.vue'
@Component({
  components: { BannerFirst, BannerEvent, BannerSlot, BannerIcon },
})
export default class BannerIndex extends Vue {}
</script>

<style>
</style>