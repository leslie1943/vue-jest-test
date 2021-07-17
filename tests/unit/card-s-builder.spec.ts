import CardSummary from '@/components/CardSummary.vue'
import ComponentBuilder from './__helpers__/componentBuilder'

describe('Test Component', () => {
  it('render heading', () => {
    const wrapper = new ComponentBuilder(CardSummary).addStubs(['router-link', 'router-view', 'v-btn']).addProps({
      title: 'Hello Leslie',
      route: '/home',
    })

    console.info(wrapper)

    expect(wrapper.props.title).toBe('Hello Leslie')
    expect(wrapper.props.route).toBe('/home')
  })
})
