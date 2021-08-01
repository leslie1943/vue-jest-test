import { Vue } from 'vue-property-decorator'

export type VueFormValidate = Vue & {
  validate: () => boolean
}
