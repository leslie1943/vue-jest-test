import { shallowMount } from '@vue/test-utils'
import MessageList from '@/components/MessageList.vue'

describe('MessageList.vue', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = shallowMount(MessageList, {
      propsData: {
        messages: ['Mark', 'Dora'],
      },
    })
  })
  it('equals messages to ["Dora"]', () => {
    expect((wrapper.vm as any).messages).toEqual(['Mark', 'Dora'])
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
