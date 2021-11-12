<template>
  <div>
    <v-row>
      <v-col cols="2"><v-btn>Origin Data</v-btn></v-col>
      <v-col cols="10">
        <v-chip v-for="item in originData" :key="item.id + '-' + item.pos">{{ item }}</v-chip>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"><v-btn @click="listToMap(originData, 'id')">List to Map</v-btn></v-col>
      <v-col cols="10">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mr-2" color="primary" dark v-bind="attrs" v-on="on"> Get Map </v-btn>
          </template>
          <span> new Map(list.map((item) => [item['id'], item]))</span>
        </v-tooltip>
        <v-chip color="cyan">{key:1001,value:{id:1001,name:'suzhen',pos:'POS1002'}}</v-chip>,
        <v-chip color="orange">{key:2001,value:{id:2001,name:'moon',pos:'POS2001'}}</v-chip>
        <v-alert style="width: 30%" class="mt-5" color="indigo"
          >Map 的 key 是唯一的,如果添加重复的 key,新的会覆盖旧的</v-alert
        >
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="2"
        ><v-btn @click="filterDuplicate(originData, 'id')">Map To Array </v-btn></v-col
      >
      <v-col cols="10">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mr-2" color="orange" dark v-bind="attrs" v-on="on">
              .values() and ...new Map()
            </v-btn>
          </template>
          <span> [...new Map(list.map((item: any) => [item[key], item])).values()]</span>
        </v-tooltip>

        <v-chip v-for="item in dataUnique" :key="item.id + '-' + item.pos">{{ item }}</v-chip>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
interface DataItem {
  id: number
  name: string
  pos: string
}

@Component
export default class ES6Map extends Vue {
  dataMap: any = null
  dataUnique: unknown[] = []

  originData: DataItem[] = [
    {
      id: 1001,
      name: 'suzhen',
      pos: 'POS1001',
    },
    {
      id: 1001,
      name: 'suzhen',
      pos: 'POS1002',
    },
    {
      id: 2001,
      name: 'moon',
      pos: 'POS2001',
    },
  ]

  listToMap(list: any[], key: any) {
    const data = new Map(list.map((item) => [item[key], item]))
    console.log('🚀 ~ file: map.vue ~ line 65 ~ ES6Map ~ listToMap ~ data', data)
    this.dataMap = data
  }

  filterDuplicate(list: any, key: any) {
    this.dataUnique = [...new Map(list.map((item: any) => [item[key], item])).values()]
  }
}
</script>