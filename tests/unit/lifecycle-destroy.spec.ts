import BadgeIndex from '@/views/Badge/index.vue'
import { shallowMount } from '@vue/test-utils'
import * as apiCat from '@/api/cats'

describe('Test Destroy lifecycle', () => {
  it('Test destroy ', () => {
    const wrapper = shallowMount(BadgeIndex)
    const mockFn = jest.spyOn(apiCat, 'getCats')
    wrapper.destroy()
    expect(mockFn).toBeCalled()
    expect(wrapper.vm.$data.destroyData).toBe('Mounted')
  })
})
