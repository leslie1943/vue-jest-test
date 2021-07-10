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

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import BasePositionCard from './BasePostiionCard.vue'

@Component
export default class PositionHomeViewCard extends BasePositionCard {
  @Prop() readonly middlePropName!: string
}
</script>