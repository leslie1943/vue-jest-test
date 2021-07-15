<template v-slot:append>
  <v-tooltip bottom v-if="hasBeenUsed !== null">
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" :color="iconColor"> {{ icon }}</v-icon>
    </template>
    {{ msg }}
  </v-tooltip>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({ name: 'IconSuffix', components: {} })
export default class IconSuffix extends Vue {
  @Prop() readonly hasBeenUsed: boolean | undefined
  @Prop() readonly label!: string

  get iconColor(): string {
    return this.hasBeenUsed ? '#FF3F2E' : '#568200'
  }

  get icon(): string {
    return this.hasBeenUsed === null ? '' : this.hasBeenUsed ? 'mdi-alert-circle' : 'mdi-check-circle'
  }

  get msg(): string {
    return `${this.label} ${this.hasBeenUsed ? 'has already been taken' : 'is available'}`
  }
}
</script>