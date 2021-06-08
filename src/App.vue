<template>
  <LayoutMain />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TopMenu from '@/components/common/TopMenu.vue'
import LayoutMain from '@/layout/LayoutMain.vue'

@Component({ components: { TopMenu, LayoutMain } })
export default class App extends Vue {}
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
  overflow-y: hidden;
  height: 100%;
}
::-webkit-scrollbar {
  width: 10px;
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