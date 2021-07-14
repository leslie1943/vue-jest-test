<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TopMenu from '@/components/common/TopMenu.vue'
import LayoutMain from '@/layout/LayoutMain.vue'
import { Action } from 'vuex-class'

@Component({ components: { TopMenu, LayoutMain } })
export default class App extends Vue {
  // dynamic 的 module 可以使用 namespace的形式.
  @Action('changeBusTimer', { namespace: 'bus' }) changeBusTimer!: () => Promise<void>
  created(): void {
    this.$bus.on('app-bus-home', this.addAppBus)
    this.$bus.once('app-bus-home', this.addAppBusOnce)
  }
  addAppBus(): void {
    this.changeBusTimer()
    // VueBUsStoreModule.changeBusTimer()
  }
  addAppBusOnce(): void {
    this.changeBusTimer()
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