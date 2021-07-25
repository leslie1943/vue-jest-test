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
- `jest.fn` 模拟函数时使用: 将一个想要测试的方法的方法名称作为属性,将`jest.fn()`作为值
```ts
  // 比如要测试组件内的一个方法为 getSupplier 的方法
  const mockGetSupplier = jest.fn()
  // 当在生命周期或其他函数时需要调用的时候,为了保证覆盖率, 我们就可以断言走到这一句的时候,使用
  mockGetSupplier.toBeCalled()
  // 来进行测试
```
- - `jest.fn` global 方法: this.$set, this.$bus, this.$emit, 
- - `jest.fn` 组件内方法: this.getName(), this,getAge() 
- - `jest.fn` store方法: store.actions, store.mutations, utils 等, 
- 就是一个简单的调用,判断函数是否执行是否已经执行,不关心函数的内部逻辑实现
- `jest.mock` 模拟模块时使用: 
- `spyOn`: when you want to observe things about a real module or function

### jest.spyOn
- jest.spyOn()方法同样创建一个mock函数, 但是该mock函数不仅能够捕获函数的调用情况, 还可以正常的执行被spy的函数.
- 实际上, jest.spyOn()是jest.fn()的语法糖, 它创建了一个和被spy的函数具有相同内部代码的mock函数.
- 改变函数的内部实现
```ts
  // 为什么说改变函数的内部实现?
  it('3: Test spyOn for mockReturnValue - 3', async () => {
    const wrapper = mount(JestInteraction)
    // 通过 spyOn mock => getCompanyName 方法 并确认返回值为 'LESLIE'
    jest.spyOn(wrapper.vm as any, 'getCompanyName').mockReturnValue('LESLIE')
    // 无论组件内部的返回值 返回的是什么都会被忽略, 因为上述方法已经确认 返回 LESLIE
    // 💛💛💛 改变函数的内部实现 💛💛💛
    const res = await (wrapper.vm as any).getCompanyName()
    expect(res).toBe('LESLIE')
  })
```

### jest.fn vs jest.spyOn vs jest.mock 使用场景
- `jest.fn()`: 常被用来进行某些有回调函数的测试
- `jest.mock()`: 可以mock整个模块中的方法, 当某个模块已经被单元测试100%覆盖时, 使用jest.mock()去mock该模块, 节约测试时间和测试的冗余度是十分必要
- `jest.spyOn()`: 需要测试某些必须被完整执行的方法时.
- - 二级调用时常用,组件中方法里调用方法, 见下面的 `3`
- - 也可以自己模拟自己, 见下面的 `4`
```ts
  // xxx.vue file
  doIncrement(): void {
    this.increment()
  }

   increment(): void {
    this.count++
  }
  // spec.ts file
  it('3: test for spyOn inner call', async () => {
    const wrapper = mount(JestInteraction)
    const mockFn = jest.spyOn(wrapper.vm as any, 'increment')
    await (wrapper.vm as any).doIncrement()
    expect(mockFn).toBeCalled()
  })

  it('4: Test spyOn for self', async () => {
    const wrapper = mount(JestInteraction)
    const mockFn = jest.spyOn(wrapper.vm as any, 'increment')
    await (wrapper.vm as any).increment()
    expect(mockFn).toBeCalled()
  })
```


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