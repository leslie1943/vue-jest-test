<template>
  <div class="text-center">
    <v-menu offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> PICK MENU </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in items_1"
          :key="item.path"
          @click="clickMenu(item)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> PICK MENU </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in items_2"
          :key="item.path"
          @click="clickMenu(item)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
type ItemProp = {
  name: string
  path: string
}
@Component
export default class TopMenu extends Vue {
  items_1: Array<ItemProp> = [
    { name: 'Home', path: '/' },
    { name: 'Hello-World', path: '/hello-world' },
    { name: 'Message-List', path: '/message-list' },
    { name: 'User-Name', path: '/user-name' },
    { name: 'Quantity', path: '/quantity' },
    { name: 'Vuex-Class', path: '/vuex-class' },
    { name: 'Loading', path: '/loading' },
    { name: 'SetTimeout', path: '/set-time-out' },
    { name: 'Message', path: '/message' },
    { name: 'Depends', path: '/depends' },
    { name: 'About', path: '/about' },
    { name: 'StateChange', path: '/state-change' },
    { name: 'EmitOn', path: '/emit-on' },
    { name: 'RouterTest', path: '/router-test' },
    { name: 'Vuetify Menu', path: '/v-menu' },
  ]

  items_2: Array<ItemProp> = [
    { name: 'Vuetify Alert', path: '/v-alert' },
    { name: 'Vuetify Avatar', path: '/v-avatar' },
    { name: 'Car Summary', path: '/summary' },
    { name: 'Car types', path: '/card-enums' },
    { name: 'Upload Avart', path: '/upload' },
    { name: 'Badge', path: '/v-badge' },
    { name: 'Banner', path: '/v-banner' },
  ]
  clickMenu(item: ItemProp): void {
    this.$router.push(item.path)
  }
}
</script>