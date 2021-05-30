<template>
  <div>
    <v-card class="mx-auto" max-width="900">
      <v-list-item
        v-for="(item, index) in lessonList"
        :key="index"
        class="lesson-item"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getLessonList, Lesson } from '@/api/lesson'
@Component
export default class Depends extends Vue {
  lessonList: Array<Lesson> = []

  async getLessons(): Promise<void> {
    const { data } = await getLessonList()
    if (data.success) {
      this.lessonList = data.data
    }
  }

  mounted(): void {
    this.getLessons()
  }
}
</script>