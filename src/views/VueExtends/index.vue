<template>
  <div>
    <PositionHomeViewCard
      :middlePropName="middlePropName"
      :showAnalytics="true"
      :position="position"
      :selectedChapters="selectedChapters"
      :selectedTypeFromTribe="selectedTypeFromTribe"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PositionHomeViewCard from './components/PositionHomeViewCard.vue'
type PositionItem = { id: number; type: string; title: string; name: string; age: number; chapterArea: string }
type TitleAndColor = { title: string; color: string }

@Component({ components: { PositionHomeViewCard } })
export default class VueExtends extends Vue {
  position: PositionItem = {
    id: 1,
    type: 'test',
    title: '测试',
    name: 'leslie',
    age: 11,
    chapterArea: 'China',
  }
  selectedChapters: TitleAndColor[] = [
    { title: 'chapter', color: '#67C23A' },
    { title: 'team', color: '#F56C6C' },
    { title: 'domain', color: '#409EFF' },
  ]
  selectedTypeFromTribe = 'chapter'

  middlePropName = 'I am the middle prop name'
}
</script>
