<template>
  <div v-loading="loading">
    <div class="mt-10 mb-10">
      <v-card max-width="500">
        <v-list class="content-wrapper">
          <v-list-item-group v-model="model">
            <v-list-item v-for="item in items" :key="item.id">
              <v-list-item-icon>
                <v-icon v-text="item"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
    <v-divider></v-divider>
    <div><v-chip class="ma-2" color="primary"> Promise.allSettled </v-chip></div>
    <div class="mt-2 d-flex content-wrapper">
      <v-card
        class="ma-2"
        max-width="344"
        outlined
        v-for="(item, index) in promiseSettledItems"
        :key="index"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4" v-if="item.value">{{ item.value }}</div>
            <div class="text-overline mb-4" v-if="item.reason">{{ item.reason }}</div>
            <v-list-item-title class="text-h5 mb-1 capitalize">
              {{ item.status }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar tile size="80" color="grey">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </div>
    <v-divider></v-divider>
    <div><v-chip class="ma-2" color="primary"> Promise.all</v-chip></div>

    <div class="mt-2 d-flex content-wrapper">
      <v-card
        class="ma-2"
        max-width="344"
        outlined
        v-for="(item, index) in promiseAllItems"
        :key="index"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4" v-if="item.index">{{ item.index }}</div>
            <div class="text-overline mb-4" v-if="item.id">{{ item.id }}</div>
            <div class="text-overline mb-4" v-if="item.isGood">{{ item.isGood }}</div>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { simulateSettled, simulateAll } from '@/promise/allSettled'
import { ItemResult, SettledItem } from '@/promise/allSettled'

@Component({})
export default class ListItemIndex extends Vue {
  loading = false
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
  promiseSettledItems: SettledItem[] = []
  promiseAllItems: ItemResult[] = []
  model = 1
  async mounted() {
    this.loading = true
    this.promiseSettledItems = await simulateSettled()
    this.promiseAllItems = await simulateAll()
    this.loading = false
  }
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
  .capitalize {
    text-transform: capitalize;
  }
}
</style>