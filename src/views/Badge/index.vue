<template>
  <div style="margin: 20px">
    <NormalBadge />
    <NotificationBadge />
    <VisibilityBadge />
    <TabsBadge />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import NormalBadge from '@/components/Badge/Normal.vue'
import NotificationBadge from '@/components/Badge/Notification.vue'
import VisibilityBadge from '@/components/Badge/Visibility.vue'
import TabsBadge from '@/components/Badge/Tabs.vue'
import { getCats } from '@/api/cats'

type Person = {
  name: string
  age: number
}
@Component({
  components: { NormalBadge, NotificationBadge, VisibilityBadge, TabsBadge },
})
export default class BadgeIndex extends Vue {
  persons: Person[] = [
    { name: 'leslie', age: 12 },
    { name: 'mark', age: 12 },
  ]
  async mounted(): Promise<void> {
    // const data = await getCats()
    // console.info('data,data', data)
    this.persons.push({ name: 'dora', age: 12 })
  }

  @Watch('persons')
  watchPerson(vals: Person[]) {
    console.info('watching.')
    console.info('watching.vals', vals)
  }
}
</script>

<style>
</style>