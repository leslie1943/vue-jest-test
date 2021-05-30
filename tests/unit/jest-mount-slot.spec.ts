import { shallowMount } from '@vue/test-utils'
import JestMountSlot from '@/components/JestMountSlot.vue'

/**
 * 挂载 slot 的 时候
 * { slots: {slotName: xxxx , slotName: yyyyy, slotName: zzzzz} }
 * 其中 slotName 要在相应的组件中存在
 */

describe('JestMountSlot.vue', () => {
  it('mount slot', () => {
    const headerSlot = {
      template: `<div>header slot</div>`,
    }

    const defaultSlot = {
      template: `<div>default slot</div>`,
    }

    const footerSlot = {
      template: `<div>footer slot</div>`,
    }

    const wrapper = shallowMount(JestMountSlot, {
      slots: {
        default: defaultSlot,
        header: headerSlot,
        footer: footerSlot,
      },
    })
    expect(wrapper.find('.header-slot').html()).toContain(headerSlot.template)
    expect(wrapper.find('.default-slot').html()).toContain(defaultSlot.template)
    expect(wrapper.find('.footer-slot').html()).toContain(footerSlot.template)
    expect(wrapper.find('.footer-slot').html()).toContain('footer')
    // expect(wrapper.find('.footer-slot').html()).toContain('heelo')
  })
})
