<template>
  <div class="main-layout-wrapper">
    <v-app class="app-wrapper">
      <AppSiderbar :visible="showSideBar" />
      <AppHeader
        :visible="showSideBar"
        :layoutStyle="layoutStyle"
        @toggle="handleToggle"
      />
      <AppMain :layoutStyle="layoutStyle" />
      <AppFooter :layoutStyle="layoutStyle" />
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import AppSiderbar from './Navigation/app-siderbar.vue'
import AppHeader from './Navigation/app-header.vue'
import AppMain from './Navigation/app-main.vue'
import AppFooter from './Navigation/app-footer.vue'
import { LayoutStyleType } from '@/types/layout.type'

@Component({
  components: { AppSiderbar, AppHeader, AppMain, AppFooter },
})
export default class Layout extends Vue {
  @Provide() headerMsg = ''
  @Provide() headerColor = 'purple'
  showSideBar = false

  handleToggle(): void {
    this.showSideBar = !this.showSideBar
  }

  get layoutStyle(): LayoutStyleType {
    return { marginLeft: this.showSideBar ? '256px' : '0px' }
  }
}
</script>

<style  lang="scss">
.main-layout-wrapper {
  .app-wrapper {
    min-height: 100vh;
  }
  .v-application--wrap {
    min-height: auto;
  }
  .v-toolbar__content {
    //   background-color: steelblue;
    // background-color: plum;
    // background-color: #363636;
    background-color: #363636;
  }
  .theme--light.v-navigation-drawer {
    background-color: #fff;
  }
  .v-toolbar {
    flex: 0 0 auto;
  }
  .v-footer {
    // background-color: #363636;
    background-color: #363636;
    // background-color: plum;
    height: 64px;
    margin: 0px;
  }

  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 0px;
  }
}
</style>
