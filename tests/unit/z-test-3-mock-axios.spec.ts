import { mount } from '@vue/test-utils'
import JestAxios from '@/views/Jest/components/jest-axios.vue'
import flushPromises from 'flush-promises'

import mockAxios from '@/axios/index'
const mockAxiosGet = jest.spyOn(mockAxios, 'get')

describe('Mock axios', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(JestAxios)
  })
  it('Fetches async when a button is clicked', async () => {
    wrapper.find('button').trigger('click')
    await flushPromises()
    expect(wrapper.text()).toBe('Return From Promise')
  })

  it('Fetches async when a button is clicked', async () => {
    wrapper.find('button').trigger('click')
    // await flushPromises()
    expect(mockAxiosGet).toBeCalled()
  })
})
