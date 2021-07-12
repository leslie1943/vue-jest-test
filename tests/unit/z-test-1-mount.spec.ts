import { mount } from '@vue/test-utils'

const MessageComponent = {
  template: '<p>{{msg}}</p>',
  props: ['msg'],
}

test('display message', () => {
  const wrapper = mount(MessageComponent, {
    propsData: {
      msg: 'Hello leslie',
    },
  })

  expect(wrapper.text()).toContain('Hello leslie')
})
