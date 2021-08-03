import ValidationForm from '@/views/SnackBar/v-forms/validation-form.vue'
import { mount } from '@vue/test-utils'

describe('Test ', () => {
  const wrapper = mount(ValidationForm)
  it('1: Test s', async () => {
    ;(wrapper.vm.$refs.form as any).validate = jest.fn()
    await (wrapper.vm as any).validate()
    expect((wrapper.vm.$refs.form as any).validate).toBeCalled()
  })
})
