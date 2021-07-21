import { shallowMount } from '@vue/test-utils'
import JestMain from '@/views/Jest/index.vue'
import JestEmit from '@/views/Jest/components/jest-emit.vue'
import JestInteraction from '@/views/Jest/components/jest-interaction.vue'
import HelloWorld from '@/views/HelloWorld/index.vue'

describe('wrapper.findComponent', () => {
  it('TeTest findComponent exist', () => {
    const wrapper = shallowMount(JestMain)
    const emit = wrapper.findComponent(JestEmit)
    expect(emit.exists()).toBe(true)

    const interaction = wrapper.findComponent(JestInteraction)
    expect(interaction.exists()).toBe(true)
  })

  it('Test findComponent not exist ', () => {
    const wrapper = shallowMount(JestMain)
    const hello = wrapper.findComponent(HelloWorld)
    expect(hello.exists()).toBe(false)
  })

  it('Test findComponents', () => {
    const wrapper = shallowMount(JestMain)
    const interaction = wrapper.findAllComponents(JestInteraction).at(0)
    expect(interaction.exists()).toBeTruthy()
  })

  it('Test findComponents', () => {
    const wrapper = shallowMount(JestMain)
    const interactions = wrapper.findAllComponents(JestInteraction)
    expect(interactions).toHaveLength(2)
  })
})
