<template>
  <div class="siderbar">
    <v-navigation-drawer
      class="accent-4"
      permanent
      dark
      absolute
      left
      v-show="visible"
    >
      <template v-slot:prepend>
        <UserBar />
      </template>
      <v-divider></v-divider>
      <MenuBar />
      <template v-slot:append>
        <div class="pa-2">
          <v-btn color="#94b7bb" block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import UserBar from '../Components/UserBar.vue'
import MenuBar from '../Components/MenuBar.vue'
@Component({ components: { UserBar, MenuBar } })
export default class AppDrawer extends Vue {
  @Prop() visible!: boolean
}
</script>
<style lang="scss" scoped>
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