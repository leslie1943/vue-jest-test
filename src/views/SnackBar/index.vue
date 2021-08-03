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

    <v-btn @click="handleValid">Validate for child component</v-btn>

    <v-divider></v-divider>
    <ValidationForm ref="validation"></ValidationForm>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import ValidationForm from './v-forms/validation-form.vue'
@Component({ name: 'SnackBar', components: { ValidationForm } })
export default class SnackBar extends Vue {
  @Ref('validation') readonly validationRef!: ValidationForm
  snackbar = false
  text = ['Gavin', 'Hazel', 'Vivian', 'Neo', 'Ryan', 'Peter', 'Lesie']

  vertical = true

  handleValid(): void {
    this.validationRef.validate()
  }
}
</script>

