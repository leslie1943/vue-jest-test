<template>
  <div class="overflow-hidden">
    <div class="text-center mb-8">
      <v-btn color="deep-purple" outlined @click="active = !active">
        Toggle Navigation
      </v-btn>
    </div>

    <v-bottom-navigation v-model="value" :input-value="active" color="indigo">
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class BottomNavigation extends Vue {
  private active = true
  private value = 1
}
</script>