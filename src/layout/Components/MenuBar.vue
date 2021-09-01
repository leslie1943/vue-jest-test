<template>
  <v-list dense>
    <v-list-item v-for="item in items" :key="item.title" link @click="onClickMenu(item)">
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
import appMenus from '@/utils/menu'
// 
@Component({})
export default class UserBar extends Vue {
  items: SidebarMenu[] = appMenus

  onClickMenu(item: SidebarMenu): void {
    this.$router.push(item.path)
  }
}
</script>
