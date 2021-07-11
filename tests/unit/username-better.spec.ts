import { shallowMount } from '@vue/test-utils'
import Username from '@/components/Username.vue'

/**
 * in `username.spec.ts`
 * a single test is making aseertions about different things
 * difficult to tell the different states the component can be in, and what should be rendered
 */

const maker = (values = {}) => {
  return shallowMount(Username, {
    data() {
      return {
        ...values,
      }
    },
  })
}

describe('Username.vue', () => {
  // assert 1
  it('renders a welcome message', () => {
    const wrapper = maker()
    expect(wrapper.find('.info').text()).toEqual('Hello Jest')
  })

  // assert 2
  it('render a error when username is less than 7 characters', () => {
    const wrapper = maker({ username: 'leslie' })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  // assert 3
  it('render a error when user name is whitespace', () => {
    const wrapper = maker({ username: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  // assert 4
  it('does not render an error when username is 7 characters or more', () => {
    const wrapper = maker({ username: 'leslie_su' })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })

  // Assert 5 find by Id
  it('check id in bottom', () => {
    const wrapper = maker({ username: 'leslie_su' })
    expect(wrapper.find('#fixed').exists()).toBeTruthy()
  })

  it('handleChange console.log', () => {
    const wrapper = maker({ username: 'leslie_su' })
    const spy = jest.spyOn(console, 'info')
    ;(wrapper.vm as any).handleChange()
    expect(spy).toHaveBeenCalled()
  })

  it('handleInput console.log', () => {
    const wrapper = maker({ username: 'leslie_su' })
    const spy = jest.spyOn(console, 'info')
    ;(wrapper.vm as any).handleInput()
    expect(spy).toHaveBeenCalled()
  })
})
