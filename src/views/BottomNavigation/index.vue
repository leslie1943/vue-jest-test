<template>
  <div>
    <SwtichComponent />
    <BottomSheet />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SwtichComponent from '@/components/BottomNavigation/Switch.vue'
import BottomSheet from '@/components/BottomNavigation/Sheet.vue'
@Component({ components: { SwtichComponent, BottomSheet } })
export default class BottomNavigation extends Vue {}
</script>