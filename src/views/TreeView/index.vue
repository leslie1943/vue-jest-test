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

@Component({ name: 'TreeViewHome' })
export default class TreeViewHome extends Vue {
  items = [
    {
      id: 1,
      name: 'Vuetify Human Resources',
      children: [
        {
          id: 2,
          name: 'Core team',
          children: [
            {
              id: 201,
              name: 'John',
            },
            {
              id: 202,
              name: 'Kael',
            },
            {
              id: 203,
              name: 'Nekosaur',
            },
            {
              id: 204,
              name: 'Jacek',
            },
            {
              id: 205,
              name: 'Andrew',
            },
          ],
        },
        {
          id: 3,
          name: 'Administrators',
          children: [
            {
              id: 301,
              name: 'Mike',
            },
            {
              id: 302,
              name: 'Hunt',
            },
          ],
        },
        {
          id: 4,
          name: 'Contributors',
          children: [
            {
              id: 401,
              name: 'Phlow',
            },
            {
              id: 402,
              name: 'Brandon',
            },
            {
              id: 403,
              name: 'Sean',
            },
          ],
        },
      ],
    },
  ]
  //   open = [1, 2]
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
