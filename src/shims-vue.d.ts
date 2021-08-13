declare module '*.vue' {
  import Vue from 'vue'
  declare module 'vue/types/vue' {
    interface Vue {
      $log: (val: string) => void
      $info: (val: string) => void
    }
    interface VueConstructor {
      $log: (val: string) => void
      $info: (val: string) => void
    }
  }

  export default Vue
}

declare module 'lodash'
