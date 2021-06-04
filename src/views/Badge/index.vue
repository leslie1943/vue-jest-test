<template>
  <div style="margin: 20px">
    <NormalBadge />
    <NotificationBadge />
    <VisibilityBadge />
    <TabsBadge />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NormalBadge from '@/components/Badge/Normal.vue'
import NotificationBadge from '@/components/Badge/Notification.vue'
import VisibilityBadge from '@/components/Badge/Visibility.vue'
import TabsBadge from '@/components/Badge/Tabs.vue'
@Component({
  components: { NormalBadge, NotificationBadge, VisibilityBadge, TabsBadge },
})
export default class BadgeIndex extends Vue {}
</script>

<style>
</style>