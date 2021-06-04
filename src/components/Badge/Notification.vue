<template>
  <v-container>
    <v-row justify="space-around">
      <div>
        <v-btn class="mx-1" color="primary" @click="messages++">
          Send Message
        </v-btn>

        <v-btn class="mx-1" color="error" @click="messages = 100">
          Clear Notifications
        </v-btn>
      </div>

      <v-badge :content="messages" :value="messages" color="green" overlap>
        <v-icon large> mdi-vuetify </v-icon>
      </v-badge>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class NotificationBadge extends Vue {
  private messages = 100
}
</script>

<style>
</style>