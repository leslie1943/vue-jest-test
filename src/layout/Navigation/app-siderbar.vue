<template>
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