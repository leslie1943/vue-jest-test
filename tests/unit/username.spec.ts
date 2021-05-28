import { shallowMount } from '@vue/test-utils'
import Username from '@/components/Username.vue'

describe('Username.vue', () => {
  it('renders a message and response correctly to user input', () => {
    const wrapper = shallowMount(Username, {
      data() {
        return {
          msg: 'Hello Jest',
          username: '',
        }
      },
    })

    // check message render
    expect(wrapper.find('.info').text()).toEqual('Hello Jest')
    // check error is rendered
    expect(wrapper.find('.error').exists()).toBeTruthy()
    // update the username and assert error is no longer rendered
    wrapper.setData({ username: 'LeslieSu' })
    expect(wrapper.find('error').exists()).toBeFalsy()
  })
})
