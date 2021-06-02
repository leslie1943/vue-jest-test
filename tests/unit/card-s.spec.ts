import { shallowMount } from '@vue/test-utils'
import CardSummary from '@/components/CardSummary.vue'

describe('Test Component', () => {
  it('render heading', () => {
    const wrapper = shallowMount(CardSummary, {
      stubs: ['router-link', 'router-view', 'v-btn'],
      propsData: {
        title: 'Hello Leslie',
        route: '/home',
      },
    })

    expect(wrapper.props('title')).toBe('Hello Leslie')
    expect(wrapper.props('route')).toBe('/home')
  })
})
