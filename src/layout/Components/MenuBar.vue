<template>
  <div class="siderbar">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SidebarMenu } from '@/types/menu.type'
@Component({})
export default class UserBar extends Vue {
  items: SidebarMenu[] = [
    { title: 'Home', path: '/', icon: 'mdi-home-city' },
    { title: 'Hello-World', path: '/hello-world', icon: 'mdi-home-city' },
    { title: 'Message-List', path: '/message-list', icon: 'mdi-home-city' },
    { title: 'User-Name', path: '/user-name', icon: 'mdi-home-city' },
    { title: 'Quantity', path: '/quantity', icon: 'mdi-home-city' },
    { title: 'Vuex-Class', path: '/vuex-class', icon: 'mdi-home-city' },
    { title: 'Loading', path: '/loading', icon: 'mdi-home-city' },
    { title: 'SetTimeout', path: '/set-time-out', icon: 'mdi-home-city' },
    { title: 'Message', path: '/message', icon: 'mdi-home-city' },
    { title: 'Depends', path: '/depends', icon: 'mdi-home-city' },
    { title: 'About', path: '/about', icon: 'mdi-home-city' },
    { title: 'StateChange', path: '/state-change', icon: 'mdi-home-city' },
    { title: 'EmitOn', path: '/emit-on', icon: 'mdi-home-city' },
    { title: 'RouterTest', path: '/router-test', icon: 'mdi-home-city' },
    { title: 'Vuetify Menu', path: '/v-menu', icon: 'mdi-home-city' },
    { title: 'StateChange', path: '/state-change', icon: 'mdi-home-city' },
    { title: 'EmitOn', path: '/emit-on', icon: 'mdi-home-city' },
    { title: 'RouterTest', path: '/router-test', icon: 'mdi-home-city' },
    { title: 'Vuetify Menu', path: '/v-menu', icon: 'mdi-home-city' },
    { title: 'StateChange', path: '/state-change', icon: 'mdi-home-city' },
    { title: 'EmitOn', path: '/emit-on', icon: 'mdi-home-city' },
    { title: 'RouterTest', path: '/router-test', icon: 'mdi-home-city' },
    { title: 'Vuetify Menu', path: '/v-menu', icon: 'mdi-home-city' },
  ]

  onClickMenu(item: SidebarMenu): void {
    this.$router.push(item.path)
  }
}
</script>

<style  lang="scss" scoped>
.siderbar {
  overflow-y: hidden;
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
}
</style>