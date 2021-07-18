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