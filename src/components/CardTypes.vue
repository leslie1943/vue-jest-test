<template>
  <div>
    <v-card
      v-if="isInternal"
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="20" indeterminate>
        </v-progress-linear>
      </template>
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>{{ name }} Cafe Badilico</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="rate"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 subtitle-1">$ • Italian, Cafe</div>
        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>
          <v-chip>7:30PM</v-chip>
          <v-chip>8:00PM</v-chip>
          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TeamPersonType from '@/enums/teamPersonType.enum'
@Component({})
export default class CardTypes extends Vue {
  @Prop({ required: true }) readonly name!: TeamPersonType
  private loading = false
  private rate = 2
  private selection = 1

  mounted(): void {
    this.reserve()
  }

  reserve(): void {
    this.loading = true
    setTimeout(() => {
      this.selection = 3
      this.loading = false
    }, 2000)
  }

  get isInternal(): boolean {
    return TeamPersonType.isInternal(this.name)
  }
}
</script>