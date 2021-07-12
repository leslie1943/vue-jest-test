import { mount } from '@vue/test-utils'
import JestTestInteraction from '@/views/Jest/components/jest-interaction.vue'

describe('increments count value on click', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(JestTestInteraction)
  })
  it('Test Text value', async () => {
    const text = wrapper.find('p')
    expect(text.text()).toContain('Total clicks:0')
  })

  it('HTMLEvent click', async () => {
    const button = wrapper.find('button')
    const text = wrapper.find('p')
    await button.trigger('click')
    expect(text.text()).toContain('Total clicks:1')
  })

  it('Change state by executing function add', async () => {
    await (wrapper.vm as any).add()
    const text = wrapper.find('p')
    expect(text.text()).toContain('Total clicks:1')
  })

  it('Change state by click HTML event', async () => {
    await (wrapper.vm as any).add()
    const button = wrapper.find('button')
    await button.trigger('click')
    const text = wrapper.find('p')
    expect(text.text()).toContain('Total clicks:2')
  })

  it('Test state after change twice.', async () => {
    await (wrapper.vm as any).add()
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.vm.$data.count).toBe(2)
  })
})
