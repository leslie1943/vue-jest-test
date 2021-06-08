<template>
  <div class="main-layout-wrapper">
    <v-app style="height: 100vh">
      <v-navigation-drawer absolute left v-show="showDrawer">
        <!-- <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Jane Smith</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template> -->

        <!-- <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
      </v-navigation-drawer>
      <v-app-bar :style="{ marginLeft: showDrawer ? '256px' : '0px' }">
        <template>
          <v-btn class="mx-2" fab depressed @click="toggleDrawer">
            <v-icon dark> mdi-format-list-bulleted-square </v-icon>
          </v-btn>
          Application</template
        >
      </v-app-bar>
      <v-main :style="{ marginLeft: showDrawer ? '256px' : '0px' }">
        <!-- 给应用提供合适的间距 -->
        <v-container fluid>
          <!-- 如果使用 vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-footer :style="ToggleStyle" app>sss </v-footer>
    </v-app>
  </div>
</template>

<script lang="ts">
type ToggleStyle = {
  marginLeft: string
}

import { Component, Vue, Provide } from 'vue-property-decorator'
@Component({ components: {} })
export default class Layout extends Vue {
  @Provide() headerMsg = ''
  @Provide() headerColor = 'purple'
  showDrawer = false
  items = [
    { title: 'Home', icon: 'mdi-home-city' },
    { title: 'My Account', icon: 'mdi-account' },
    { title: 'Users', icon: 'mdi-account-group-outline' },
  ]

  toggleDrawer(): void {
    this.showDrawer = !this.showDrawer
  }

  get toggleStyle(): ToggleStyle {
    return { marginLeft: this.showDrawer ? '256px' : '0px' }
  }
}
</script>

<style  lang="scss">
.main-layout-wrapper {
  .v-application--wrap {
    min-height: auto;
  }
  // .v-toolbar__content {
  //   background-color: steelblue;
  // }
  .theme--light.v-navigation-drawer {
    background-color: #fff;
  }
  .v-toolbar {
    flex: 0 0 auto;
  }
  .v-footer {
    background-color: plum;
    height: 64px;
    margin: 0px;
  }
}
</style>
