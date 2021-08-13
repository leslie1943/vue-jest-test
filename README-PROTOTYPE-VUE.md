### extend vue in typescript
1. 解决类型错误问题: 在 `shims-vue.d.ts`里面添加代码: 以使得在组件中使用`this.$log`不出现类型错误, 这里仅仅是为了在组件中使用时不出现类型错误
```ts
declare module '*.vue' {
  import Vue from 'vue'
  // ------------ New codes start ------------
  import { LogFunction } from './types/Log.types'
  declare module 'vue/types/vue' {
    interface Vue {
      $log: LogFunction
    }
    interface VueConstructor {
      $log: LogFunction
    }
  }
  // ------------ New code end ------------
}
```
2. 实现需要的插件逻辑
```ts
// global/log.ts
const log = {
  install: (Vue: any) => {
    Vue.prototype.$log = console.log
    Vue.prototype.$info = console.info
  },
}
export default log
```
3. 在 `main.ts`中引入并注册`Vue.use`
```ts
// main.ts
import Log from './global/log'
Vue.use(Log)
```
4. 在组件中使用即可
```ts
created():void {
    this.$log('message from $log of prototype in vue')
}
```