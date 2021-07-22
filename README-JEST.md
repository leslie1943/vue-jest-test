# Natived vs Class
- start with `$` is the jest attributes

## 🌐 Natived setProps
```ts
const wrapper = shallowMount(CardSummary, {
    stubs: ['router-link', 'router-view', 'v-btn'],
    propsData: {
      title: 'Hello Leslie',
      route: '/home',
    },
})
expect(wrapper.props('title')).toBe('Hello Leslie') // 🆗
expect(wrapper.props('route')).toBe('/home') // 🆗
expect(wrapper.vm.$props.title).toBe('Hello Leslie') // 🆗
expect(wrapper.vm.$props.route).toBe('/home') // 🆗
```

## 🈴 class-builder setProps
```ts
const wrapper = new ComponentBuilder(CardSummary)
    .addStubs(['router-link', 'router-view', 'v-btn'])
    .addProps({
      title: 'Hello Leslie',
      route: '/home',
    }).mount()

expect(wrapper.vm.$props.title).toBe('Hello Leslie')
expect(wrapper.vm.$props.route).toBe('/home')
```


### jest.fn vs jest.spyOn vs jest.mock
- `jest.fn` 模拟函数时使用: this.$set, this.$bus, this.$emit 等
- `jest.mock` 模拟模块时使用: 
- `spyOn`: when you want to observe things about a real module or function



### z-test-99-route-in-component.spec
```ts
// it('should call beforeRouteUpdate from Position to Edit Position ', async () => {
//   const { beforeRouteUpdate } = wrapper.vm.$options
//   const to = { name: 'Edit Position', meta: { position: {} } }
//   const from = { name: 'Position' }
//   const next = jest.fn()
//   await beforeRouteUpdate[0].call(wrapper.vm, to, from, next)
//   expect(next).toBeCalled()
// })

// it('should call beforeRouteUpdate from Edit Position to Position', async () => {
//   const { beforeRouteUpdate } = wrapper.vm.$options
//   const from = { name: 'Edit Position', meta: {} }
//   const to = { name: 'Position' }
//   const next = jest.fn()
//   await beforeRouteUpdate[0].call(wrapper.vm, to, from, next)
//   expect(next).toBeCalled()
// })

// it('should call beforeRouteUpdate from Edit Position to Position with search condition', async () => {
//   const { beforeRouteUpdate } = wrapper.vm.$options
//   const from = { name: 'Edit Position', meta: { position: {} } }
//   const to = { name: 'Position' }
//   const next = jest.fn()
//   await beforeRouteUpdate[0].call(wrapper.vm, to, from, next)
//   expect(action.getPositionsList).toBeCalled()
//   expect(next).toBeCalled()
// })
```