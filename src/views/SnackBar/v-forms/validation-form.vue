<template>
  <div class="text-center">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { VueFormValidate } from '@/types/form-validate.type'
@Component({ name: 'ValidationForm' })
export default class ValidationForm extends Vue {
  valid = true
  name = ''
  nameRules = [
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    (v: any) => !!v || 'Name is required',
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    (v: any) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ]
  email = ''
  emailRules = [
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    (v: any) => !!v || 'E-mail is required',
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ]
  select = null
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  checkbox = false

  validate(): void {
    ;(this.$refs.form as VueFormValidate).validate()
  }
  reset(): void {
    ;(this.$refs.form as any).reset()
  }
  resetValidation(): void {
    ;(this.$refs.form as any).resetValidation()
  }
}
</script>

