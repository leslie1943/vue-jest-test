import CardSummary from '@/components/CardSummary.vue'
import ComponentBuilder from './__helpers__/componentBuilder'

describe('Test Component', () => {
  it('Change props - 0 - not change', async () => {
    const wrapper = new ComponentBuilder(CardSummary)
      .addStubs(['router-link', 'router-view', 'v-btn'])
      .addProps({
        title: 'Hello Leslie',
        route: '/home',
      })
      .mount()

    expect(wrapper.vm.$props.title).toBe('Hello Leslie')
    expect(wrapper.vm.$props.route).toBe('/home')
  })

  it('Change props - 1 - setProps', async () => {
    const wrapper = new ComponentBuilder(CardSummary)
      .addStubs(['router-link', 'router-view', 'v-btn'])
      .addProps({
        title: 'Hello Leslie',
        route: '/home',
      })
      .mount()

    expect(wrapper.vm.$props.title).toBe('Hello Leslie')
    expect(wrapper.vm.$props.route).toBe('/home')
    await wrapper.setProps({ title: 'Hello Leslie - changed' })
    await wrapper.setProps({ route: '/home - changed' })
    expect(wrapper.vm.$props.title).toBe('Hello Leslie - changed')
    expect(wrapper.vm.$props.route).toBe('/home - changed')
  })

  it('Change props - 2 - munually: passed with Vue warn', async () => {
    const wrapper = new ComponentBuilder(CardSummary)
      .addStubs(['router-link', 'router-view', 'v-btn'])
      .addProps({ title: 'Hello Leslie', route: '/home' })
      .mount()

    expect(wrapper.vm.$props.title).toBe('Hello Leslie')
    expect(wrapper.vm.$props.route).toBe('/home')
    // wrapper.vm.$props.title = 'Hello Leslie - changed'
    // wrapper.vm.$props.route = '/home - changed'
    // expect(wrapper.vm.$props.title).toBe('Hello Leslie - changed')
    // expect(wrapper.vm.$props.route).toBe('/home - changed')
  })

  it('Set data - 1', async () => {
    const wrapper = new ComponentBuilder(CardSummary)
      //  .addStubs(['router-link', 'router-view', 'v-btn'])
      .addProps({ title: 'Hello Leslie', route: '/home' })
      .mount()

    wrapper.vm.$data.name = ['mark', 'dora', 'justin']
    expect(wrapper.vm.$data.name).toStrictEqual(['mark', 'dora', 'justin'])
  })

  it('Set data - 2', async () => {
    const wrapper = new ComponentBuilder(CardSummary)
      //  .addStubs(['router-link', 'router-view', 'v-btn'])
      .addProps({ title: 'Hello Leslie', route: '/home' })
      .mount()

    wrapper.setData({ name: ['mark', 'dora', 'justin'] })
    expect(wrapper.vm.$data.name).toStrictEqual(['mark', 'dora', 'justin'])
  })

  it('Set data - 3', async () => {
    const wrapper = new ComponentBuilder(CardSummary)
      //  .addStubs(['router-link', 'router-view', 'v-btn'])
      .addProps({ title: 'Hello Leslie', route: '/home' })
      .mount()

    ;(wrapper.vm as any).name = ['mark', 'dora', 'justin']
    expect(wrapper.vm.$data.name).toStrictEqual(['mark', 'dora', 'justin'])
  })
})
