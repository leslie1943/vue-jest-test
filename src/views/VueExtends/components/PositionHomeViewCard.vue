<script lang="ts">
/**
<template>
  <!-- 移除整个 template, index.vue 会渲染 BasePositionCard中的 template -->
  <!-- 否则会渲染当前组件的模板内容 -->
  <div>
    <h1>This is middle component</h1>
    <div>{{ position }}</div>
    <div>{{ selectedChapters }}</div>
    <div>{{ selectedTypeFromTribe }}</div>
    <div>{{ showAnalytics ? 'true' : 'false' }}</div>
  </div>
</template>
 */
import { Component, Prop } from 'vue-property-decorator'
import BasePositionCard from './BasePostiionCard.vue'

type TitleAndColor = { title: string; color: string }
type PositionItem = { id: number; type: string; title: string; name: string; age: number; chapterArea: string }

@Component
export default class PositionHomeViewCard extends BasePositionCard {
  @Prop() readonly middlePropName!: string
  @Prop() readonly position!: PositionItem
  @Prop() readonly selectedChapters!: Array<TitleAndColor>
  @Prop() readonly selectedTypeFromTribe!: string
  @Prop() readonly showAnalytics!: boolean
  isVisible = 'isVisible in PositionHomeViewCard.vue'

  get detail(): string {
    return this.position.chapterArea
  }

  getColor(): string {
    const chapter = this.selectedChapters.find((item) => item.title === this.selectedTypeFromTribe)
    return chapter ? chapter.color : ''
  }

  getOpacity(): number {
    return 0.6
  }
}
</script>