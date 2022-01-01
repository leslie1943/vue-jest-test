<template>
  <div>
    <!-- <v-btn color="primary"
      >Create an assertion. Assertions are automatically retried until they pass or time out.
    </v-btn>
    <ul>
      <li>
        <a href="users/123/edit">Edit User</a>
      </li>
      <li>
        <a href="#/users/123/edit">Edit User</a>
      </li>
    </ul>
    <div>
      <v-text-field id="and-name" v-model="name">test</v-text-field>
    </div> -->
    <v-alert border="right" color="cyan" dark>
      {{ `餐费>>>>>> 共${food.total}, 付款人${food.host}, 人均${food.total/food.count}`, }}
    </v-alert>
    <div>
      <v-chip-group>
        <v-chip v-for="(item, index) in food.people" :key="index" :color="item.color">
          {{ item.name }}
        </v-chip>
      </v-chip-group>
    </div>

    <v-alert border="right" color="cyan" dark>
      {{ `咖啡 >>>>>> 共${coffee.total}, 付款人${coffee.host}, 人均${coffee.total/coffee.count}`, }}
    </v-alert>
    <div>
      <v-chip-group>
        <v-chip v-for="(item, index) in coffee.people" :key="index" :color="item.color">
          {{ item.name }}
        </v-chip>
      </v-chip-group>
    </div>

    <v-alert border="right" color="tomato" dark>
      {{ `麦当劳 >>>>>> 共${mcdonalds.total}, 付款人${mcdonalds.host}, 人均${mcdonalds.total/mcdonalds.count}`, }}
    </v-alert>
    <div>
      <v-chip-group>
        <v-chip v-for="(item, index) in mcdonalds.people" :key="index" :color="item.color">
          {{ item.name }}
        </v-chip>
      </v-chip-group>
    </div>

    <v-alert border="right" color="primary" dark>
      {{ `剧本 >>>>>> 共${drama.total}, 付款人${drama.host}, 人均${drama.total/drama.count}`, }}
    </v-alert>
    <div>
      <v-chip-group>
        <v-chip v-for="(item, index) in drama.people" :key="index" :color="item.color">
          {{ item.name }}
        </v-chip>
      </v-chip-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import cost from '@/api/drama/fees'
@Component
export default class CypressCommandAnd extends Vue {
  // name = 'leslie'
  // created() {
  //   setTimeout(() => {
  //     this.name = 'moon'
  //   }, 5000)
  // }
  food = cost.fees.food
  coffee = cost.fees.coffee
  mcdonalds = cost.fees.mcdonalds
  drama = cost.fees.drama
}
</script>