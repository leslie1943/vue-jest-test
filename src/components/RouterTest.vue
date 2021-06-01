<template>
  <div>
    <v-card class="mx-auto" max-width="1344">
      <v-card-text>
        <div>Vue-router demo</div>
        <p class="display-1 text--secondary">Small demo, Big Step</p>
        <div class="text--primary" v-if="show">
          <p class="hasId" v-if="$route.query && $route.query.id">get detail</p>
          <p class="noId" v-else>need pass id</p>
          <router-link to="/home">返回</router-link>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="onClick">Toggle</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({ name: 'RouterTest' })
export default class RouterTest extends Vue {
  show = true
  onClick(): void {
    this.show = !this.show
  }
  mounted(): void {
    if (!this.$route.query.id) {
      this.$router.replace('/home')
    }
  }
}
</script>