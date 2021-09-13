<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <v-list class="content-wrapper">
        <v-list-item-group v-model="model">
          <v-list-item v-for="item in items" :key="item.id">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { simulateSettled } from '@/promise/allSettled'
const result = simulateSettled()
console.log('🚀 ~ file: index.vue ~ line 28 ~ result', result)
@Component({})
export default class ListItemIndex extends Vue {
  items = [
    {
      id: 1,
      icon: 'mdi-inbox',
      text: 'Inbox',
    },
    {
      id: 2,
      icon: 'mdi-star',
      text: 'Star',
    },
    {
      id: 3,
      icon: 'mdi-send',
      text: 'Send',
    },
    {
      id: 4,
      icon: 'mdi-email-open',
      text: 'Dora',
    },
    {
      id: 5,
      icon: 'mdi-email-open',
      text: 'Mark',
    },
    {
      id: 6,
      icon: 'mdi-email-open',
      text: 'Dong',
    },
    {
      id: 7,
      icon: 'mdi-email-open',
      text: 'Justin',
    },
    {
      id: 8,
      icon: 'mdi-email-open',
      text: 'Tong',
    },
    {
      id: 9,
      icon: 'mdi-email-open',
      text: 'Moon',
    },
    {
      id: 10,
      icon: 'mdi-email-open',
      text: 'Micheal',
    },
    {
      id: 11,
      icon: 'mdi-email-open',
      text: 'Helen',
    },
    {
      id: 12,
      icon: 'mdi-email-open',
      text: 'Vivian',
    },
    {
      id: 13,
      icon: 'mdi-email-open',
      text: 'AN',
    },
    {
      id: 14,
      icon: 'mdi-email-open',
      text: 'BF',
    },
    {
      id: 15,
      icon: 'mdi-email-open',
      text: 'AW',
    },
    {
      id: 16,
      icon: 'mdi-email-open',
      text: 'AB',
    },
    {
      id: 17,
      icon: 'mdi-email-open',
      text: 'AA',
    },
    {
      id: 18,
      icon: 'mdi-email-open',
      text: 'Ag',
    },
    {
      id: 19,
      icon: 'mdi-email-open',
      text: 'AF',
    },
    {
      id: 20,
      icon: 'mdi-email-open',
      text: 'AE',
    },
    {
      id: 21,
      icon: 'mdi-email-open',
      text: 'AD',
    },
    {
      id: 22,
      icon: 'mdi-email-open',
      text: 'AC',
    },
  ]
  model = 1
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  &::v-deep .v-list-item-group {
    max-height: 60vh;
    overflow-y: auto;
  }
  &::v-deep .v-item-group {
    max-height: 60vh;
    overflow-y: auto;
  }
}
</style>