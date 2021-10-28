<template>
  <div style="margin: 20px">
    <div class="out-container" v-outside-event="onOutsideClick">click out of me</div>
    <NormalBadge />
    <NotificationBadge />
    <VisibilityBadge />
    <TabsBadge />
    <EventPointer />
    <div data-name="leslie su" data-age="22"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import NormalBadge from '@/components/Badge/Normal.vue'
import NotificationBadge from '@/components/Badge/Notification.vue'
import VisibilityBadge from '@/components/Badge/Visibility.vue'
import TabsBadge from '@/components/Badge/Tabs.vue'
import EventPointer from '@/components/Badge/Event-Pointer.vue'
import { getCats } from '@/api/cats'

import outsideEvent from '@/directives/outside-event.directive'

type Person = {
  name: string
  age: number
}
@Component({
  components: { NormalBadge, NotificationBadge, VisibilityBadge, TabsBadge, EventPointer },
  directives: { outsideEvent },
})
export default class BadgeIndex extends Vue {
  datasetName = ''
  created() {
    this.datasetName = document.getElementById('user')?.dataset?.name as string
  }

  persons: Person[] = [
    { name: 'leslie', age: 12 },
    { name: 'mark', age: 12 },
  ]
  destroyData = 'Nothing'
  async mounted(): Promise<void> {
    // const data = await getCats()
    // console.info('data,data', data)
    this.persons.push({ name: 'dora', age: 12 })
    this.destroyData = 'Mounted'
  }

  @Watch('persons')
  watchPerson(vals: Person[]) {
    console.info('watching.')
    console.info('watching.vals', vals)
  }

  async beforeDestroy(): Promise<void> {
    await getCats()
    // console.log('🚀 ~ file: index.vue ~ line 46 ~ BadgeIndex ~ beforeDestroy ~ data', data)
    this.destroyData = 'Destroying'
  }

  onOutsideClick(): void {
    console.info('click out')
  }
}
</script>

<style lang="scss" scoped>
.out-container {
  min-height: 300px;
  width: 50%;
  background: wheat;
}
</style>