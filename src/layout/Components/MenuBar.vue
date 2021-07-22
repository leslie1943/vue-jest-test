<template>
  <v-list dense>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      link
      @click="onClickMenu(item)"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SidebarMenu } from '@/types/menu.type'
@Component({})
export default class UserBar extends Vue {
  items: SidebarMenu[] = [
    { title: 'Requisition', path: '/requisition', icon: 'mdi-home-city' },
    { title: 'Home', path: '/', icon: 'mdi-home-city' },
    {
      title: 'Hello-World',
      path: '/hello-world',
      icon: 'mdi-account-box-multiple',
    },
    { title: 'Message-List', path: '/message-list', icon: 'mdi-cards-club' },
    { title: 'User-Name', path: '/user-name', icon: 'mdi-cart' },
    { title: 'Quantity', path: '/quantity', icon: 'mdi-charity' },
    { title: 'Vuex-Class', path: '/vuex-class', icon: 'mdi-chart-bar-stacked' },
    { title: 'Loading', path: '/loading', icon: 'mdi-chart-tree' },
    { title: 'SetTimeout', path: '/set-time-out', icon: 'mdi-chemical-weapon' },
    { title: 'Message', path: '/message', icon: 'mdi-chess-king' },
    { title: 'Depends', path: '/depends', icon: 'mdi-chili-hot' },
    { title: 'About', path: '/about', icon: 'mdi-flask-outline' },

    { title: 'StateChange', path: '/state-change', icon: 'mdi-horse-variant' },
    { title: 'EmitOn', path: '/emit-on', icon: 'mdi-hexagon-multiple' },
    {
      title: 'RouterTest',
      path: '/router-test',
      icon: 'mdi-image-filter-vintage',
    },
    { title: 'Vuetify Menu', path: '/v-menu', icon: 'mdi-island' },

    { title: 'Vuetify Alert', path: '/v-alert', icon: 'mdi-keyboard-esc' },
    { title: 'Vuetify Avatar', path: '/v-avatar', icon: 'mdi-language-php' },
    { title: 'Car Summary', path: '/summary', icon: 'mdi-language-typescript' },
    {
      title: 'Car types',
      path: '/card-enums',
      icon: 'mdi-language-ruby-on-rails',
    },
    { title: 'Upload Avart', path: '/upload', icon: 'mdi-mouse' },
    { title: 'Badge', path: '/v-badge', icon: 'mdi-owl' },
    { title: 'Banner', path: '/v-banner', icon: 'mdi-pine-tree-box' },
    {
      title: 'Bottom Navigation',
      path: '/v-bottom-navigation',
      icon: 'mdi-qrcode',
    },
    { title: 'Dialog', path: '/v-dialog', icon: 'mdi-snake' },
    { title: 'Drawer', path: '/v-drawer', icon: 'mdi-bike' },
    { title: 'Jest', path: '/vue-jest', icon: 'mdi-blinds ' },
    { title: 'Extends', path: '/vue-extends', icon: 'mdi-bomb' },
    { title: 'Vue-jest', path: '/vue-jest', icon: 'mdi-book-settings' },
    { title: 'Text-slot', path: '/text-slot', icon: 'mdi-book-minus' },
    { title: 'lodash', path: '/lodash', icon: 'mdi-book-minus' },
  ]

  onClickMenu(item: SidebarMenu): void {
    this.$router.push(item.path)
  }
}
</script>
