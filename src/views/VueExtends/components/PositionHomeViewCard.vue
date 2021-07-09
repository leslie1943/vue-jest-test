<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import BasePositionCard from './BasePostiionCard.vue'

@Component
export default class PositionHomeViewCard extends BasePositionCard {
  @Prop() readonly middlePropName!: string
}
</script>