<template>
  <v-card class="mx-auto" max-width="500">
    {{ open }}
    <v-sheet class="pa-4 primary lighten-2">
      <v-text-field
        v-model="search"
        label="Search Company Directory"
        dark
        flat
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
      <v-checkbox
        v-model="caseSensitive"
        dark
        hide-details
        label="Case sensitive search"
      ></v-checkbox>
    </v-sheet>
    <v-card-text>
      <v-treeview :items="items" :search="search" :open.sync="open">
        <template v-slot:prepend="{ item }">
          <v-icon
            v-if="item.children"
            v-text="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`"
          ></v-icon>
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type Item = {
  id: number
  name: string
  children: Item[]
}

import data from './data'

@Component({ name: 'TreeViewHome' })
export default class TreeViewHome extends Vue {
  items = data
  search = ''
  caseSensitive = false
  temp: number[] = []

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  filter(item: any, search: string): any {
    const flag = item.name.toLowerCase().indexOf(search.toLowerCase()) > -1

    return flag
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  findMatch(item: Item) {
    if (item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) {
      this.temp.push(item?.id)
    }
    if (item.children) {
      item.children.forEach((child: Item) => {
        this.findMatch(child)
      })
    }
  }

  get open(): any[] {
    this.temp = []
    this.findMatch(this.items[0] as Item)
    return this.temp
  }
}
</script>
