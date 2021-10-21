export default {
  bind: function (el: any, binding: any, vNode: any) {
    el.__vueClickOutside__ = (event: any) => {
      if (!el.contains(event.target)) {
        // call method provided in v-click-outside value
        vNode.context[binding.expression](event)
        event.stopPropagation()
      }
    }
    document.body.addEventListener('click', el.__vueClickOutside__)
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unbind: function (el: any, _binding: any, _vNode: any) {
    // Remove Event Listeners
    document.body.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null
  },
}
