import TextSlot from '@/views/TextSlot/index.vue'
import { mount } from '@vue/test-utils'
import personAPI from '@/utils/person'
// import { timeout } from '../__utils__/timer.out'
import * as sinon from 'sinon'

import _ from 'lodash'
describe('Test debounce', () => {
  it('Test debounce function getPeopleData Without Debounce', async () => {
    const wrapper = mount(TextSlot)
    const vm = wrapper.vm
    const mockGet = jest.spyOn(personAPI, 'getPerson').mockResolvedValueOnce({ name: 'v', age: 1 })
    await (wrapper.vm as any).getPeopleDataWithoutDebounce()
    expect(mockGet).toBeCalled()
    expect(vm.$data.people).toEqual({ name: 'v', age: 1 })
  })

  it('Test debounce function getPeopleData with Debounce without nextTick', async () => {
    const wrapper = mount(TextSlot)

    const mockGet = jest
      .spyOn(personAPI, 'getPerson')
      .mockResolvedValue({ name: 'leslie1944', age: 1944 })

    jest.mock('lodash/debounce', () => jest.fn((fn) => fn))

    await (wrapper.vm as any).getPeopleDataWithDebounce()
    expect(mockGet).toBeCalled()
    // expect(wrapper.vm.$data.people).toEqual({ name: 'leslie1944', age: 1944 })
  })

  //   it('Test debounce function getPeopleData with Debounce with nextTick', async () => {
  //     const wrapper = mount(TextSlot)
  //     const vm = wrapper.vm
  //     const mockGet = jest
  //       .spyOn(personAPI, 'getPerson')
  //       .mockResolvedValueOnce({ name: 'leslie1943', age: 1943 })
  //     await (wrapper.vm as any).getPeopleDataWithDebounce()
  //     expect(mockGet).toBeCalled()
  //     await wrapper.vm.$nextTick()
  //     timeout(400, () => {
  //       expect(vm.$data.people).toEqual({ name: 'v2', age: 1 })
  //     })
  //   })
})
