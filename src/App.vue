<template>
  <v-app>
    <v-app-bar app color="primary" dark> <TopMenu /> </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TopMenu from '@/components/common/TopMenu.vue'
@Component({ components: { TopMenu } })
export default class App extends Vue {}
</script>
