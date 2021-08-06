import { shallowMount } from '@vue/test-utils'
import JestMain from '@/views/Jest/index.vue'

describe('wrapper.findComponent', () => {
  const mocks = {
    $bus: {
      on: jest.fn(),
    },
  }
  it('Test Filter', () => {
    const wrapper = shallowMount(JestMain, {
      mocks: mocks,
      propsData: {
        person: {
          name: 'su',
          nage: 22,
        },
      },
    })
    expect((wrapper.vm.$options as any).filters.YN('Y')).toBe('Yes')
    expect((wrapper.vm.$options as any).filters.YN('N')).toBe('No')
    expect((wrapper.vm.$options as any).filters.YN('D')).toBeFalsy()
  })
})
