<template>
  <div>
    <div class="header-slot">
      <slot name="header"></slot>
    </div>

    <div class="default-slot">
      <slot />
    </div>

    <div class="footer-slot">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import TeamPersonType from '@/enums/teamPersonType.enum'
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class JestMountSlot extends Vue {
  @Prop({ required: true }) readonly name!: TeamPersonType

  allowPaths = ['/profile/view', '/profile/edit']

  get isProfilePage(): boolean {
    return this.allowPaths.includes(this.$route.path)
  }

  get isInternal(): boolean {
    return TeamPersonType.isInternal(this.name)
  }
}
</script>