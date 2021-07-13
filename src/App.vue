<template>
  <!-- <LayoutMain /> -->
  <div>
    <div>this.$bus.on >>>>>>> {{ appBusData }}</div>
    <div>this.$bus.once >>>>>>> {{ appBusDataOnce }}</div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TopMenu from '@/components/common/TopMenu.vue'
import LayoutMain from '@/layout/LayoutMain.vue'

@Component({ components: { TopMenu, LayoutMain } })
export default class App extends Vue {
  appBusData: string[] = []
  appBusDataOnce: string[] = []
  created(): void {
    this.$bus.on('app-bus-home', this.addAppBus)
    this.$bus.once('app-bus-home', this.addAppBusOnce)
  }
  addAppBus(): void {
    this.appBusData.push(new Date().getTime().toString())
  }
  addAppBusOnce(): void {
    this.appBusDataOnce.push(new Date().getTime().toString())
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

body,
html {
  background-color: whitesmoke;
  font-family: Helvetica, sans-serif;
  margin: 0;
  overflow-y: scroll;
  height: 100%;
}
::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  width: #888;
}

::-webkit-scrollbar-thumb:hover {
  width: #555;
}
</style>