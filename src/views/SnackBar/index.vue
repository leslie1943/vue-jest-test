<template>
  <div class="text-center">
    <v-btn dark color="indigo" @click="snackbar = true"> Open Snackbar </v-btn>

    <v-snackbar v-model="snackbar" :vertical="vertical" light right top>
      <ul v-for="item in text" :key="item">
        message:
        {{
          item
        }}
      </ul>

      <template v-slot:action="{ attrs }">
        <v-btn color="indigo" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({ name: 'SnackBar' })
export default class SnackBar extends Vue {
  snackbar = false
  text = ['Gavin', 'Hazel', 'Vivian', 'Neo', 'Ryan', 'Peter', 'Lesie']

  vertical = true
}
</script>

