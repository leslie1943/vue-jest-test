<template>
  <div class="summary-card">
    <div class="summary-card-header-wrapper">
      <div class="summary-card-header-title">{{ title }}</div>
      <router-link :to="route">
        <v-btn outlined small color="indigo">Go to Page ></v-btn>
      </router-link>
    </div>
    <slot></slot>

    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <v-btn color="orange" text> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({})
export default class SummaryCardIndex extends Vue {
  @Prop({ required: true }) readonly title!: string
  @Prop({ required: true }) readonly route!: string

  name = ['su', 'zhen']
}
</script>

<style lang="scss" scoped>
.summary-card {
  background-color: white;
  height: auto;
  padding: 15px 50px;
}

.summary-card-header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-card-header-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Helvetica;
  font-size: 20px;
  color: #212121;
  letter-spacing: 0;
  text-align: right;
}

a {
  text-decoration: none;
}
</style>