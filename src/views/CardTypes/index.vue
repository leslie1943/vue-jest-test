<template>
  <div>
    <CardTypes :name="name" />
    <CardTypes :name="'FIL'" />
    <CardTypes :name="'Hello'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardTypes from '@/components/CardTypes.vue'
import TeamPersonType from '@/enums/teamPersonType.enum'

@Component({ components: { CardTypes } })
export default class CardTypesIndex extends Vue {
  private name = TeamPersonType.DORA
}
</script>