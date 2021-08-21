<template>
  <v-text-field
    v-model="company"
    :counter="10"
    :rules="companyRules"
    label="Company"
    required
  ></v-text-field>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({ name: 'FormCompany' })
export default class FormCompany extends Vue {
  company = ''
  companyRules = [(v: any) => !!v || 'Company is required']
}
</script>

