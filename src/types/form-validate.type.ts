import { Vue } from 'vue-property-decorator'

// This bind vue and forms validate methos
export type VueFormValidate = Vue & {
  validate: () => boolean
}
