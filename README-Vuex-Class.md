### vuex-class

### types for vuex
|module name|module type|comments|refer|need register in index?|
|--|--|--|--|--|
|student|@Module|modulesNamespaceMap 不会出现, 属于 global|参考 @/store/modules/student|Yes|
|person|@Module({ namespaced: true })|modulesNamespaceMap会出现,使用时加 namespaces |参考 @/store/modules/person|Yes|
|passenger|@Module({name: 'passenger',dynamic: true})|modulesNamespaceMap会出现,使用时加 namespaces 或者使用整个模块调用|参考 @/store/modules/passenger|No|

- `@Module({name: 'passenger',dynamic: true})` 这种形式如果想使用下面方式调用, 需要加上 `namespaced: true` 属性
```ts
  @Action("getUserCustomized", { namespace: "custom" }) getUserCustomizedRename!: () => Promise<void>;
```