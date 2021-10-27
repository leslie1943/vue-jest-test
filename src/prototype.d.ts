import { RuntimeConfig } from './types/runtime-config.types'

declare module 'vue/types/vue' {
  interface Vue {
    $runtimeConfig: RuntimeConfig
  }

  interface VueConstructor {
    $runtimeConfig: RuntimeConfig
  }
}
